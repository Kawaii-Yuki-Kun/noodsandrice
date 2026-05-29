/* =========================================================
   Noods N' Rice — Admin Panel logic
   ========================================================= */
(function() {

  const $  = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => Array.from(ctx.querySelectorAll(s));
  const fmtPrice = n => `$${Number(n).toFixed(2)}`;

  // ---------- category metadata (mirrors data.js order) ----------
  const CAT_ORDER = [
    'soups','appetizers','salads','bibimbap','rice','noodles',
    'sashimi','maki','uramaki','crispimaki','gurmemaki','sushiborito','sushiSets','sushiExtras',
    'sides','dips','beverages','sake','beer','wine','soju','spirits','desserts'
  ];
  const CAT_LABELS = {
    soups:'Soups', appetizers:'Appetizers', salads:'Salads',
    bibimbap:'Korean Bibimbap Bowl', rice:'Speciality Rice Mains', noodles:'Speciality Noodles',
    sashimi:'Sashimi', maki:'Hosomaki', uramaki:'Uramaki', crispimaki:'Crispimaki',
    gurmemaki:'Gurmemaki', sushiborito:'Sushi Burritos', sushiSets:'Sushi Sets', sushiExtras:'Sushi Add-ons',
    sides:'Sides', dips:'Dips & Sauces', beverages:'Soft Bar & Drinks',
    sake:'Sake', beer:'Beer', wine:'Wine & Prosecco', soju:'Soju',
    spirits:'Whisky & Gin', desserts:'Desserts'
  };
  const CUISINE_LABELS = { japanese:'🇯🇵Japanese', korean:'🇰🇷Korean', chinese:'🇨🇳Chinese', thai:'🇹🇭Thai', indian:'🇮🇳Indian' };
  const CAT_ICON = {
    soup:'🍜', appetizer:'🥟', salad:'🥗', bibimbap:'🍚',
    rice:'🍛', noodles:'🍜', sushi:'🍣', extras:'➕',
    sides:'🍚', dips:'🫙', drinks:'🥤', sake:'🍶',
    beer:'🍺', wine:'🍷', soju:'🥃', spirits:'🥃', dessert:'🍰'
  };
  const CAT_ICON_KEY = {
    soups:'soup', appetizers:'appetizer', salads:'salad', bibimbap:'bibimbap',
    rice:'rice', noodles:'noodles', sashimi:'sushi', maki:'sushi',
    uramaki:'sushi', crispimaki:'sushi', gurmemaki:'sushi', sushiborito:'sushi',
    sushiSets:'sushi', sushiExtras:'extras', sides:'sides', dips:'dips',
    beverages:'drinks', sake:'sake', beer:'beer', wine:'wine',
    soju:'soju', spirits:'spirits', desserts:'dessert'
  };

  // ---------- DOM refs ----------
  const loginScreen  = $('#login-screen');
  const loginForm    = $('#login-form');
  const loginEmail   = $('#login-email');
  const loginPass    = $('#login-pass');
  const loginError   = $('#login-error');
  const loginBtn     = $('#login-btn');
  const dashboard    = $('#dashboard');
  const adminEmail   = $('#admin-email');
  const logoutBtn    = $('#logout-btn');
  const adminLoading = $('#admin-loading');
  const adminError   = $('#admin-error');
  const adminEmpty   = $('#admin-empty');
  const adminItems   = $('#admin-items');
  const catFilter    = $('#admin-cat-filter');
  const addBtn       = $('#add-dish-btn');
  const settingsPhone= $('#admin-phone');
  const settingsInsta= $('#admin-instagram');
  const searchInput  = $('#admin-search');
  const paginationEl = $('#admin-pagination');
  const saveSettingsBtn = $('#save-settings-btn');
  const settingsMsg  = $('#settings-msg');
  const modal        = $('#dish-modal');
  const modalTitle   = $('#modal-title');
  const dishForm     = $('#dish-form');
  const dfId         = $('#df-id');
  const dfName       = $('#df-name');
  const dfPrice      = $('#df-price');
  const dfDesc       = $('#df-desc');
  const dfCategory   = $('#df-category');
  const dfCuisine    = $('#df-cuisine');
  const dfPopular    = $('#df-popular');
  const dfSpicy      = $('#df-spicy');
  const dfVeg        = $('#df-veg');
  const dfVegan      = $('#df-vegan');
  const dfGf         = $('#df-gf');
  const dfNuts       = $('#df-nuts');
  const dfImage      = $('#df-image');
  const dfImgPreview = $('#df-img-preview');
  const dfImgName    = $('#df-img-name');
  const formMsg      = $('#form-msg');
  const modalSaveBtn = $('#modal-save-btn');
  const modalCancel  = $('#modal-cancel-btn');
  const modalClose   = $('#modal-close-btn');
  const deleteModal  = $('#delete-modal');
  const deleteName   = $('#delete-name');
  const deleteCancel = $('#delete-cancel-btn');
  const deleteConfirm= $('#delete-confirm-btn');

  let currentUser    = null;
  let allItems       = [];
  let editingId      = null;
  let currentImageFile = null;
  let currentImageUrl  = null;
  let currentImageDataUrl = null;
  let currentFilter  = 'all';
  let searchQuery   = '';
  let currentPage   = 1;
  const PER_PAGE    = 30;
  let deleteTargetId = null;

  // ---------- auth ----------
  auth.onAuthStateChanged(user => {
    currentUser = user;
    if (user) {
      showDashboard(user);
      loadItems();
      loadSettings();
    } else {
      showLogin();
    }
  });

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    loginError.classList.remove('is-show');
    loginBtn.disabled = true;
    loginBtn.textContent = 'Signing in…';
    try {
      await auth.signInWithEmailAndPassword(loginEmail.value.trim(), loginPass.value);
    } catch (err) {
      const msg = err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password'
        ? 'Invalid email or password.'
        : err.code === 'auth/invalid-email'
        ? 'Please enter a valid email address.'
        : err.code === 'auth/too-many-requests'
        ? 'Too many attempts. Please try again later.'
        : err.message;
      loginError.textContent = msg;
      loginError.classList.add('is-show');
      loginBtn.disabled = false;
      loginBtn.innerHTML = 'Sign in <span class="arrow">→</span>';
    }
  });

  logoutBtn.addEventListener('click', () => auth.signOut());

  // ---------- UI toggle ----------
  function showLogin() {
    loginScreen.style.display = 'flex';
    dashboard.style.display = 'none';
    loginBtn.disabled = false;
    loginBtn.innerHTML = 'Sign in <span class="arrow">→</span>';
    loginError.classList.remove('is-show');
  }

  function showDashboard(user) {
    loginScreen.style.display = 'none';
    dashboard.style.display = 'block';
    adminEmail.textContent = user.email;
  }

  // ---------- load items from Firestore ----------
  async function loadItems() {
    adminLoading.style.display = 'block';
    adminError.classList.remove('is-show');
    adminEmpty.style.display = 'none';
    adminItems.innerHTML = '';

    try {
      const snap = await db.collection('menu').orderBy('sort', 'asc').get();
      allItems = [];
      snap.forEach(doc => {
        allItems.push({ id: doc.id, ...doc.data() });
      });
      adminLoading.style.display = 'none';

      if (allItems.length === 0) {
        adminEmpty.style.display = 'block';
        return;
      }
      renderItems();
    } catch (err) {
      adminLoading.style.display = 'none';
      let msg = '';
      if (err.code === 'permission-denied') {
        msg = '⚠️ Firestore is not set up yet. Please go to the '
          + '<a href="https://console.firebase.google.com/project/noodsnrice-fb710/firestore" target="_blank" rel="noopener" style="color:var(--teal);text-decoration:underline;">Firebase Console → Firestore</a> '
          + 'and create a database (choose "Start in production mode", then deploy your rules).';
      } else if (err.code === 'not-found' || err.message?.includes('The Cloud Firestore API is not available')) {
        msg = '⚠️ Firestore API is not enabled. Open the '
          + '<a href="https://console.firebase.google.com/project/noodsnrice-fb710/firestore" target="_blank" rel="noopener" style="color:var(--teal);text-decoration:underline;">Firebase Console → Firestore</a> '
          + 'and click "Create database".';
      } else {
        msg = `Error: ${err.message}`;
      }
      adminError.innerHTML = msg;
      adminError.classList.add('is-show');
    }
  }

  // ---------- render items grouped by category ----------
  function renderItems() {
    const filtered = allItems.filter(i => {
      if (currentFilter !== 'all' && i.category !== currentFilter) return false;
      if (searchQuery && !i.name.toLowerCase().includes(searchQuery)
        && !(i.desc && i.desc.toLowerCase().includes(searchQuery))) return false;
      return true;
    });

    const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
    if (currentPage > totalPages) currentPage = totalPages;
    const start = (currentPage - 1) * PER_PAGE;
    const pageItems = filtered.slice(start, start + PER_PAGE);

    // Flat list with category badge on each row
    let html = pageItems.map(item => renderItemRow(item, true)).join('');

    adminItems.innerHTML = html || '<div class="admin-empty"><p style="color:var(--muted);margin:40px 0;">No items match.</p></div>';

    adminItems.querySelectorAll('.admin-btn-icon[data-action="edit"]').forEach(b => {
      b.addEventListener('click', () => openEditModal(b.dataset.id));
    });
    adminItems.querySelectorAll('.admin-btn-icon[data-action="delete"]').forEach(b => {
      b.addEventListener('click', () => openDeleteConfirm(b.dataset.id, b.dataset.name));
    });
    adminItems.querySelectorAll('.admin-add-mini').forEach(b => {
      b.addEventListener('click', () => openAddModal(b.dataset.cat));
    });

    // Pagination
    if (totalPages <= 1) { paginationEl.innerHTML = ''; return; }
    let phtml = '';
    phtml += `<button class="page-btn" data-page="prev" ${currentPage <= 1 ? 'disabled' : ''}>‹ Prev</button>`;
    for (let p = 1; p <= totalPages; p++) {
      if (p === currentPage || p === 1 || p === totalPages || Math.abs(p - currentPage) <= 2) {
        phtml += `<button class="page-btn ${p === currentPage ? 'is-active' : ''}" data-page="${p}">${p}</button>`;
      } else if (p === currentPage - 3 || p === currentPage + 3) {
        phtml += `<span style="color:var(--muted);padding:0 4px;">…</span>`;
      }
    }
    phtml += `<button class="page-btn" data-page="next" ${currentPage >= totalPages ? 'disabled' : ''}>Next ›</button>`;
    paginationEl.innerHTML = phtml;

    paginationEl.querySelectorAll('.page-btn').forEach(b => {
      b.addEventListener('click', () => {
        if (b.dataset.page === 'prev') { if (currentPage > 1) { currentPage--; renderItems(); } }
        else if (b.dataset.page === 'next') { if (currentPage < totalPages) { currentPage++; renderItems(); } }
        else { currentPage = parseInt(b.dataset.page); renderItems(); }
        adminItems.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function renderItemRow(item, showCategory) {
    const cuisine = item.cuisine ? (CUISINE_LABELS[item.cuisine] || '') : '';
    const badges = [];
    if (item.popular) badges.push('⭐');
    if (item.spicy)   badges.push('🌶');
    if (item.veg && !item.vegan) badges.push('🌿');
    if (item.vegan)   badges.push('🌱');
    if (item.gf)      badges.push('🌾');
    if (item.nuts)    badges.push('🥜');
    const badgeStr = badges.join(' ');
    const catBadge = showCategory ? `<span style="display:inline-flex;align-items:center;gap:3px;padding:2px 8px;border-radius:4px;font-size:10px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;background:rgba(42,85,99,0.12);color:var(--teal-deep);margin-right:6px;">${CAT_ICON[CAT_ICON_KEY[item.category]] || ''} ${CAT_LABELS[item.category] || item.category}</span>` : '';

    const fallbackIcon = CAT_ICON[CAT_ICON_KEY[item.category]] || '🍽️';
    // Skip relative paths (assets/...) that don't exist on server
    const imgSrc = item.img || '';
    const showImg = imgSrc && !imgSrc.startsWith('assets/') && !imgSrc.startsWith('./assets/');
    return `
      <div class="admin-item">
        <div class="admin-item-thumb">
          ${showImg
            ? `<img src="${escape(imgSrc)}" alt="" onerror="this.onerror=null;var p=this.parentNode;p.innerHTML='${fallbackIcon}';p.style.fontSize='22px'" />`
            : fallbackIcon}
        </div>
        <div class="admin-item-info">
          <div class="admin-item-name">
            ${catBadge}
            <span>${escape(item.name)}</span>
            ${cuisine ? `<span style="font-size:12px;">${cuisine}</span>` : ''}
            ${badgeStr ? `<span style="font-size:12px;">${badgeStr}</span>` : ''}
          </div>
          ${item.desc ? `<div class="admin-item-desc">${escape(item.desc)}</div>` : ''}
        </div>
        <div class="admin-item-price">${fmtPrice(item.price)}</div>
        <div class="admin-item-actions">
          <button class="admin-btn-icon" data-action="edit" data-id="${item.id}" title="Edit">✎</button>
          <button class="admin-btn-icon danger" data-action="delete" data-id="${item.id}" data-name="${escape(item.name)}" title="Delete">✕</button>
        </div>
      </div>
    `;
  }

  function escape(s) {
    return String(s || '').replace(/[&<>"']/g, c => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[c]));
  }

  // ---------- search ----------
  let searchTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      searchQuery = searchInput.value.trim().toLowerCase();
      currentPage = 1;
      renderItems();
    }, 200);
  });

  // ---------- category filter ----------
  catFilter.addEventListener('click', (e) => {
    const btn = e.target.closest('.cat-btn');
    if (!btn) return;
    currentFilter = btn.dataset.cat;
    currentPage = 1;
    $$('.cat-btn', catFilter).forEach(b => b.classList.toggle('is-active', b.dataset.cat === currentFilter));
    renderItems();
  });

  // Build filter pills
  catFilter.innerHTML = '<button class="cat-btn is-active" data-cat="all">All</button>'
    + CAT_ORDER.map(k => `<button class="cat-btn" data-cat="${k}">${CAT_LABELS[k]}</button>`).join('');

  // ---------- add dish ----------
  addBtn.addEventListener('click', () => openAddModal());

  function openAddModal(prefillCat) {
    editingId = null;
    currentImageFile = null;
    currentImageUrl = null;
    currentImageDataUrl = null;
    modalTitle.textContent = 'Add Dish';
    modalSaveBtn.innerHTML = 'Save Dish <span class="arrow">→</span>';
    dishForm.reset();
    dfId.value = '';
    dfImgPreview.innerHTML = '<span style="color:var(--muted);font-size:13px;">No image selected</span>';
    dfImgPreview.classList.remove('has-image');
    dfImgName.textContent = '';
    formMsg.classList.remove('is-show');
    if (prefillCat) dfCategory.value = prefillCat;
    modal.classList.add('is-open');
  }

  // ---------- edit dish ----------
  function openEditModal(id) {
    const item = allItems.find(i => i.id === id);
    if (!item) return;
    editingId = id;
    currentImageFile = null;
    currentImageUrl = item.img || null;
    currentImageDataUrl = null;
    modalTitle.textContent = 'Edit Dish';
    modalSaveBtn.innerHTML = 'Save Changes <span class="arrow">→</span>';

    dfId.value = id;
    dfName.value = item.name || '';
    dfPrice.value = item.price || '';
    dfDesc.value = item.desc || '';
    dfCategory.value = item.category || '';
    dfCuisine.value = item.cuisine || '';
    dfPopular.checked = !!item.popular;
    dfSpicy.checked = !!item.spicy;
    dfVeg.checked = !!item.veg;
    dfVegan.checked = !!item.vegan;
    dfGf.checked = !!item.gf;
    dfNuts.checked = !!item.nuts;

    if (item.img) {
      dfImgPreview.innerHTML = `<img src="${escape(item.img)}" alt="" />`;
      dfImgPreview.classList.add('has-image');
      dfImgName.textContent = 'Current image saved';
    } else {
      dfImgPreview.innerHTML = '<span style="color:var(--muted);font-size:13px;">No image</span>';
      dfImgPreview.classList.remove('has-image');
      dfImgName.textContent = '';
    }
    formMsg.classList.remove('is-show');
    modal.classList.add('is-open');
  }

  // ---------- close modal ----------
  function closeModal() { modal.classList.remove('is-open'); }
  modalClose.addEventListener('click', closeModal);
  modalCancel.addEventListener('click', closeModal);
  $('#dish-modal .admin-modal-backdrop').addEventListener('click', closeModal);

  // ---------- image file change ----------
  dfImage.addEventListener('change', () => {
    const file = dfImage.files[0];
    if (!file) {
      currentImageFile = null;
      if (!currentImageUrl) {
        dfImgPreview.innerHTML = '<span style="color:var(--muted);font-size:13px;">No image selected</span>';
        dfImgPreview.classList.remove('has-image');
      }
      dfImgName.textContent = '';
      return;
    }
    if (!file.type.startsWith('image/')) {
      dfImgName.textContent = '⚠️ Please select an image file.';
      dfImage.value = '';
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      dfImgName.textContent = '⚠️ Image too large. Max 5MB.';
      dfImage.value = '';
      return;
    }
    currentImageFile = file;
    currentImageUrl = null;

    // Compress image to fit Firestore's 1MB doc limit
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        // Resize to max 800px on longest side
        let w = img.width, h = img.height;
        const maxDim = 800;
        if (w > maxDim || h > maxDim) {
          if (w > h) { h = h * maxDim / w; w = maxDim; }
          else { w = w * maxDim / h; h = maxDim; }
        }
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        // Compress as JPEG at 80% quality
        currentImageDataUrl = canvas.toDataURL('image/jpeg', 0.8);
        dfImgPreview.innerHTML = `<img src="${currentImageDataUrl}" alt="" />`;
        dfImgPreview.classList.add('has-image');
        const sizeKB = Math.round(currentImageDataUrl.length * 0.75 / 1024);
        dfImgName.textContent = `📷 ${file.name} → ${w}×${h} (${sizeKB} KB)`;
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });

  // ---------- save dish ----------
  dishForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    formMsg.classList.remove('is-show');
    modalSaveBtn.disabled = true;
    modalSaveBtn.textContent = 'Saving…';

    try {
      const data = {
        name: dfName.value.trim(),
        price: parseFloat(dfPrice.value),
        desc: dfDesc.value.trim(),
        category: dfCategory.value,
        cuisine: dfCuisine.value || '',
        popular: dfPopular.checked,
        spicy: dfSpicy.checked,
        veg: dfVeg.checked,
        vegan: dfVegan.checked,
        gf: dfGf.checked,
        nuts: dfNuts.checked,
        sort: Date.now()
      };

      if (!data.name) throw new Error('Name is required.');
      if (isNaN(data.price) || data.price < 0) throw new Error('Price is required and must be ≥ 0.');

      // Store image as base64 in Firestore (no Storage needed)
      if (currentImageDataUrl) {
        data.img = currentImageDataUrl;
      } else if (editingId) {
        // Keep existing image
        const existing = allItems.find(i => i.id === editingId);
        if (existing?.img) data.img = existing.img;
      }

      if (editingId) {
        await db.collection('menu').doc(editingId).update(data);
      } else {
        await db.collection('menu').add(data);
      }

      formMsg.textContent = '✅ Dish saved successfully!';
      formMsg.className = 'admin-msg admin-msg-success is-show';
      closeModal();
      await loadItems();
    } catch (err) {
      formMsg.textContent = `❌ ${err.message}`;
      formMsg.className = 'admin-msg admin-msg-error is-show';
    }
    modalSaveBtn.disabled = false;
    modalSaveBtn.innerHTML = editingId ? 'Save Changes <span class="arrow">→</span>' : 'Save Dish <span class="arrow">→</span>';
  });

  // ---------- delete dish ----------
  function openDeleteConfirm(id, name) {
    deleteTargetId = id;
    deleteName.textContent = `"${name}" will be permanently removed.`;
    deleteModal.classList.add('is-open');
  }
  function closeDeleteModal() {
    deleteModal.classList.remove('is-open');
    deleteTargetId = null;
  }
  deleteCancel.addEventListener('click', closeDeleteModal);
  $('#delete-modal .admin-modal-backdrop').addEventListener('click', closeDeleteModal);

  deleteConfirm.addEventListener('click', async () => {
    if (!deleteTargetId) return;
    deleteConfirm.disabled = true;
    deleteConfirm.textContent = 'Deleting…';
    try {
      await db.collection('menu').doc(deleteTargetId).delete();
      closeDeleteModal();
      await loadItems();
    } catch (err) {
      alert('Failed to delete: ' + err.message);
    }
    deleteConfirm.disabled = false;
    deleteConfirm.textContent = 'Delete';
  });

  // ---------- settings ----------
  // ---------- feedback ----------
  function loadFeedback() {
    const fbList = $('#fb-list');
    const fbLoading = $('#fb-loading');
    const fbEmpty = $('#fb-empty');
    if (!fbList) return;
    fbLoading.style.display = 'block';
    fbEmpty.style.display = 'none';
    fbList.innerHTML = '';

    db.collection('feedback').orderBy('createdAt', 'desc').limit(100).get()
      .then(snap => {
        fbLoading.style.display = 'none';
        if (snap.empty) { fbEmpty.style.display = 'block'; return; }
        let html = '';
        snap.forEach(doc => {
          const d = doc.data();
          const date = d.createdAt?.toDate().toLocaleDateString() || '—';
          const stars = d.rating ? '★'.repeat(d.rating) + '☆'.repeat(5 - d.rating) : '';
          html += `
            <div class="fb-item">
              <div class="fb-head">
                <strong>${escape(d.name)}</strong>
                <span class="fb-date">${date}</span>
              </div>
              ${d.email ? `<div class="fb-email">${escape(d.email)}</div>` : ''}
              ${stars ? `<div class="fb-stars" style="color:var(--gold);">${stars}</div>` : ''}
              ${d.topic ? `<span class="badge" style="background:rgba(42,85,99,0.1);color:var(--teal-deep);padding:2px 8px;border-radius:999px;font-size:11px;">${escape(d.topic)}</span>` : ''}
              <p class="fb-msg">${escape(d.message)}</p>
            </div>
          `;
        });
        fbList.innerHTML = html;
      })
      .catch(() => {
        fbLoading.innerHTML = '<p style="color:var(--muted);">Could not load feedback.</p>';
      });
  }

  // ---------- settings ----------
  async function loadSettings() {
    try {
      const doc = await db.collection('settings').doc('general').get();
      if (doc.exists) {
        const data = doc.data();
        if (data.phone) settingsPhone.value = data.phone;
        if (data.instagram) settingsInsta.value = data.instagram;
      }
    } catch (_) {}
  }

  saveSettingsBtn.addEventListener('click', async () => {
    settingsMsg.classList.remove('is-show');
    saveSettingsBtn.disabled = true;
    saveSettingsBtn.textContent = 'Saving…';
    try {
      await db.collection('settings').doc('general').set({
        phone: settingsPhone.value.trim(),
        instagram: settingsInsta.value.trim()
      }, { merge: true });
      settingsMsg.textContent = '✅ Settings saved!';
      settingsMsg.className = 'admin-msg admin-msg-success is-show';
    } catch (err) {
      settingsMsg.textContent = `❌ ${err.message}`;
      settingsMsg.className = 'admin-msg admin-msg-error is-show';
    }
    saveSettingsBtn.disabled = false;
    saveSettingsBtn.innerHTML = 'Save Settings <span class="arrow">→</span>';
  });

  // ---------- sidebar navigation ----------
  const sidebarBtns = $$('.sidebar-btn');
  const adminPages  = $$('.admin-page');
  const sidebarEl   = $('#admin-sidebar');
  const sidebarToggle = $('#sidebar-toggle');

  function switchPage(page) {
    adminPages.forEach(p => p.classList.toggle('is-active', p.dataset.page === page));
    sidebarBtns.forEach(b => b.classList.toggle('is-active', b.dataset.page === page));
    if (window.innerWidth <= 880) sidebarEl.classList.remove('is-open');
    if (!currentUser) return;
    if (page === 'dishes') loadItems();
    if (page === 'feedback') loadFeedback();
    if (page === 'settings') loadSettings();
  }

  sidebarBtns.forEach(btn => {
    btn.addEventListener('click', () => switchPage(btn.dataset.page));
  });

  sidebarToggle.addEventListener('click', () => {
    sidebarEl.classList.toggle('is-open');
  });

  // Override showDashboard to load dishes by default
  const _origShowDashboard = showDashboard;
  showDashboard = function(user) {
    _origShowDashboard(user);
    setTimeout(() => loadItems(), 300);
  };

  // Close sidebar when clicking outside on mobile
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 880 && sidebarEl.classList.contains('is-open')) {
      if (!e.target.closest('.admin-sidebar') && !e.target.closest('.admin-toggle')) {
        sidebarEl.classList.remove('is-open');
      }
    }
  });

  // ---------- global image error fallback ----------
  document.addEventListener('error', (e) => {
    const img = e.target;
    if (img.tagName !== 'IMG') return;
    const thumb = img.closest('.admin-item-thumb');
    const preview = img.closest('.admin-img-preview');
    if (thumb) { thumb.innerHTML = '🍽️'; img.style.display = 'none'; }
    if (preview) img.style.display = 'none';
  }, true);

  // ---------- keyboard shortcut ----------
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeDeleteModal();
    }
  });

})();
