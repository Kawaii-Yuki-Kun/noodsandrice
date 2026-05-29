/* =========================================================
   Noods N' Rice — interactive layer
   ========================================================= */

(() => {
  const $  = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => Array.from(ctx.querySelectorAll(s));
  const fmtPrice = n => `$${n.toFixed(2)}`;
  const escape = s => String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  // ---------- tab switching ----------
  const tabs   = $$('.nav-tab, [data-tab]');
  const panels = $$('.panel');
  const navEl  = $('.nav');

  const switchPanel = (key) => {
    panels.forEach(p => p.classList.toggle('is-active', p.dataset.panel === key));
    $$('.nav-tab').forEach(t => t.classList.toggle('is-active', t.dataset.tab === key));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navEl.classList.remove('is-open');
    $('.nav-toggle')?.setAttribute('aria-expanded', 'false');
  };

  tabs.forEach(t => {
    t.addEventListener('click', (e) => {
      const key = t.dataset.tab;
      if (!key) return;
      e.preventDefault();
      switchPanel(key);
    });
  });

  $('.nav-toggle')?.addEventListener('click', () => {
    const open = navEl.classList.toggle('is-open');
    $('.nav-toggle').setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // sticky shadow on topbar
  const topbar  = $('.topbar');
  const subnav  = $('#menu-subnav');
  window.addEventListener('scroll', () => {
    topbar.classList.toggle('is-scrolled', window.scrollY > 8);
    if (subnav) {
      const rect = subnav.getBoundingClientRect();
      const topbarH = topbar.offsetHeight;
      subnav.classList.toggle('is-stuck', rect.top <= topbarH + 1);
    }
  }, { passive: true });

  // ---------- category icons ----------
  const CAT_ICONS = {
    soup:      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11h18a8 8 0 01-8 8h-2a8 8 0 01-8-8z"/><path d="M7 7c0-1 .5-1.5 1.5-2S10 4 10 3M12 7c0-1 .5-1.5 1.5-2S15 4 15 3M17 7c0-1 .5-1.5 1.5-2S20 4 20 3"/></svg>',
    appetizer: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></svg>',
    salad:     '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11a9 9 0 0118 0"/><path d="M2 11h20l-2 8H4z"/></svg>',
    bibimbap:  '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M5 9c2-2 5-2 7 0s5 2 7 0"/></svg>',
    rice:      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14h16l-2 6H6z"/><circle cx="9" cy="6" r="1.5"/><circle cx="13" cy="4" r="1.5"/><circle cx="15" cy="9" r="1.5"/><circle cx="11" cy="10" r="1.5"/></svg>',
    noodles:   '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8c3 0 3 4 6 4s3-4 6-4 3 4 6 4M3 14c3 0 3 4 6 4s3-4 6-4 3 4 6 4"/></svg>',
    sushi:     '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="9" ry="6"/><circle cx="12" cy="12" r="3"/></svg>',
    extras:    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>',
    sides:     '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 10h18"/></svg>',
    dips:      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 7h14l-1 13H6z"/><path d="M9 7V4h6v3"/></svg>',
    drinks:    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l-1 5a6 6 0 01-10 0z"/><path d="M12 13v8M8 21h8"/></svg>',
    sake:      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h10v4l-2 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V9L7 7z"/></svg>',
    beer:      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="6" width="11" height="15" rx="1"/><path d="M16 9h2a2 2 0 010 4h-2"/></svg>',
    wine:      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3h8l-1 7a3 3 0 01-6 0z"/><path d="M12 13v8M9 21h6"/></svg>',
    soju:      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v3l1 1v13a2 2 0 01-2 2h-4a2 2 0 01-2-2V7l1-1z"/></svg>',
    spirits:   '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2h6v6l-1 1v11a2 2 0 01-2 2h0a2 2 0 01-2-2V9l-1-1z"/><path d="M9 13h6"/></svg>',
    dessert:   '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 11h14l-2 9H7z"/><path d="M12 11V7a2 2 0 014 0"/><path d="M12 11V7a2 2 0 00-4 0"/></svg>'
  };

  // ---------- cuisine icons ----------
  const CUISINE_ICONS = { japanese: '🇯🇵', korean: '🇰🇷', chinese: '🇨🇳', thai: '🇹🇭', indian: '🇮🇳' };
  const CUISINE_LABELS = { japanese: 'Japanese', korean: 'Korean', chinese: 'Chinese', thai: 'Thai', indian: 'Indian' };

  // ---------- category placeholder emojis ----------
  const CAT_PLACEHOLDER = {
    soup: '🍜', appetizer: '🥟', salad: '🥗', bibimbap: '🍚',
    rice: '🍛', noodles: '🍜', sushi: '🍣',
    extras: '➕', sides: '🍚', dips: '🫙',
    drinks: '🥤', sake: '🍶', beer: '🍺', wine: '🍷',
    soju: '🥃', spirits: '🥃', dessert: '🍰'
  };

  const PLACEHOLDER_ICON = (catKey) => {
    const cat = MENU_DATA[catKey];
    const emoji = (cat && CAT_PLACEHOLDER[cat.icon]) || '🍽️';
    return `<span style="display:grid;place-items:center;width:100%;height:100%;font-size:32px;background:linear-gradient(135deg,rgba(177,111,17,0.18),rgba(42,85,99,0.08));border-radius:10px;">${emoji}</span>`;
  };

  // ---------- badges ----------
  const itemBadges = (item, compact = false) => {
    const out = [];
    if (item.popular) out.push(`<span class="badge popular">★${compact?'':' Popular'}</span>`);
    if (item.spicy)   out.push(`<span class="badge spicy">🌶${compact?'':' Spicy'}</span>`);
    if (item.veg && !item.vegan) out.push(`<span class="badge veg">🌿${compact?'':' Veg'}</span>`);
    if (item.vegan)   out.push(`<span class="badge vegan">🌱${compact?'':' Vegan'}</span>`);
    if (item.gf)      out.push(`<span class="badge gf">🌾${compact?'':' GF'}</span>`);
    if (item.nuts)    out.push(`<span class="badge nuts">🥜${compact?'':' Nuts'}</span>`);
    return out.join('');
  };
  const cardTags = (item) => {
    const out = [];
    if (item.popular) out.push('<span class="tag popular">★ Popular</span>');
    if (item.spicy)   out.push('<span class="tag spicy">🌶 Spicy</span>');
    if (item.vegan)   out.push('<span class="tag vegan">🌱 Vegan</span>');
    else if (item.veg) out.push('<span class="tag veg">🌿 Veg</span>');
    if (item.gf)      out.push('<span class="tag gf">🌾 GF</span>');
    if (item.nuts)    out.push('<span class="tag nuts">🥜 Nuts</span>');
    return out.join('');
  };

  // ---------- menu rendering ----------
  const catsEl    = $('#menu-cats');
  const contentEl = $('#menu-content');
  const emptyEl   = $('#menu-empty');
  const searchEl  = $('#menu-search');
  const allCategoryKeys = Object.keys(MENU_DATA);

  // category pill buttons (now anchors that scroll-to-section)
  catsEl.innerHTML = allCategoryKeys.map(k => `
    <button class="cat-btn" data-cat="${k}" data-target="cat-${k}">
      ${CAT_ICONS[MENU_DATA[k].icon] || ''}
      <span>${escape(MENU_DATA[k].title)}</span>
      <span class="ko">${escape(MENU_DATA[k].titleKo)}</span>
    </button>
  `).join('');

  const renderItem = (item, catKey) => {
    const imgHtml = item.img
      ? `<img src="${escape(item.img)}" alt="${escape(item.name)}" loading="lazy" />`
      : PLACEHOLDER_ICON(catKey);
    const cuisineTag = item.cuisine
      ? `<span class="badge cuisine" data-cuisine="${item.cuisine}">${CUISINE_ICONS[item.cuisine] || ''}</span>`
      : '';
    return `
      <div class="menu-item" data-name="${escape(item.name.toLowerCase())}" data-desc="${escape((item.desc || '').toLowerCase())}" data-cat="${catKey}" data-idx="${escape(item.name)}" data-cuisine="${item.cuisine || ''}">
        <div class="menu-item-img ${item.img ? '' : 'placeholder'}">${imgHtml}</div>
        <div class="menu-item-body">
          <div class="menu-item-row">
            <div class="menu-item-name">
              <span>${escape(item.name)}</span>
              ${cuisineTag}
              ${itemBadges(item, true)}
            </div>
            <div class="menu-item-price">${fmtPrice(item.price)}</div>
          </div>
          <p class="menu-item-desc">${escape(item.desc || '')}</p>
        </div>
      </div>
    `;
  };

  const renderMenu = (search = '') => {
    const q = search.trim().toLowerCase();
    let total = 0;

    contentEl.innerHTML = allCategoryKeys.map(k => {
      const cat = MENU_DATA[k];
      const items = cat.items.filter(it => {
        // search filter
        if (q && !it.name.toLowerCase().includes(q) && !(it.desc && it.desc.toLowerCase().includes(q))) return false;
        // cuisine filter
        if (currentCuisine !== 'all') {
          const itemCuisine = it.cuisine || cat.cuisine || '';
          if (itemCuisine !== currentCuisine) return false;
        }
        return true;
      });
      if (!items.length) return '';
      total += items.length;
      const catCuisine = cat.cuisine || items.find(i => i.cuisine)?.cuisine;
      return `
        <section class="menu-section" id="cat-${k}" data-cat="${k}">
          <div class="menu-section-head">
            <h3 class="menu-section-title">
              <span class="ko">${escape(cat.titleKo)}</span>
              ${catCuisine && CUISINE_ICONS[catCuisine] ? `<span class="cuisine-tag">${CUISINE_ICONS[catCuisine]} ${CUISINE_LABELS[catCuisine]}</span>` : ''}
              ${escape(cat.title)}
            </h3>
            <span class="menu-section-count">${items.length} item${items.length === 1 ? '' : 's'}</span>
          </div>
          ${cat.note ? `<div class="menu-section-note">💡 ${escape(cat.note)}</div>` : ''}
          <div class="menu-grid">
            ${items.map(it => renderItem(it, k)).join('')}
          </div>
        </section>
      `;
    }).join('');

    emptyEl.style.display = total === 0 ? 'block' : 'none';

    // click → modal
    $$('.menu-item', contentEl).forEach(card => {
      card.addEventListener('click', () => {
        const item = MENU_DATA[card.dataset.cat]?.items.find(i => i.name === card.dataset.idx);
        if (item) openModal(item);
      });
    });

    // re-arm scroll-spy on newly rendered sections
    setupScrollSpy();
  };

  // category clicks scroll to section (no longer filter)
  catsEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.cat-btn');
    if (!btn) return;
    const target = document.getElementById(btn.dataset.target);
    if (!target) return;
    const topOffset = topbar.offsetHeight + subnav.offsetHeight + 8;
    const y = target.getBoundingClientRect().top + window.scrollY - topOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });

    // also scroll this pill into view inside the subnav strip
    const inner = $('.menu-subnav-inner');
    const btnRect = btn.getBoundingClientRect();
    const innerRect = inner.getBoundingClientRect();
    if (btnRect.left < innerRect.left + 16 || btnRect.right > innerRect.right - 16) {
      inner.scrollTo({ left: btn.offsetLeft - 24, behavior: 'smooth' });
    }
  });

  // ---------- cuisine filter ----------
  let currentCuisine = 'all';
  const cuisineRow = $('#menu-cuisine-row');

  if (cuisineRow) {
    cuisineRow.addEventListener('click', (e) => {
      const btn = e.target.closest('.cuisine-btn');
      if (!btn) return;
      currentCuisine = btn.dataset.cuisine;
      $$('.cuisine-btn', cuisineRow).forEach(b => b.classList.toggle('is-active', b.dataset.cuisine === currentCuisine));
      renderMenu(searchEl.value);
    });
  }

  // search (debounced) — collapses sections that have no matches
  let searchTimer;
  searchEl.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => renderMenu(searchEl.value), 150);
  });

  // ---------- scroll-spy (sets active pill on scroll) ----------
  let spyObserver;
  function setupScrollSpy() {
    if (spyObserver) spyObserver.disconnect();
    if (!('IntersectionObserver' in window)) return;

    const topbarH = topbar.offsetHeight + (subnav?.offsetHeight || 0);
    spyObserver = new IntersectionObserver((entries) => {
      // pick the entry closest to the top among intersecting ones
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (!visible.length) return;
      const id = visible[0].target.id;
      $$('.cat-btn', catsEl).forEach(b => b.classList.toggle('is-active', b.dataset.target === id));
      // keep active pill in view
      const activeBtn = $(`.cat-btn[data-target="${id}"]`, catsEl);
      if (activeBtn) {
        const inner = $('.menu-subnav-inner');
        const ib = activeBtn.getBoundingClientRect();
        const wb = inner.getBoundingClientRect();
        if (ib.left < wb.left || ib.right > wb.right) {
          inner.scrollTo({ left: activeBtn.offsetLeft - 24, behavior: 'smooth' });
        }
      }
    }, {
      rootMargin: `-${topbarH + 16}px 0px -55% 0px`,
      threshold: 0
    });

    $$('.menu-section', contentEl).forEach(sec => spyObserver.observe(sec));
  }

  // ---------- initialize data (Firestore first, local fallback) ----------
  (async function initData() {
    let fromFirestore = false;
    try {
      const snap = await db.collection('menu').orderBy('sort', 'asc').get();
      const firestoreItems = {};
      snap.forEach(doc => {
        const d = doc.data();
        const cat = d.category || 'other';
        if (!firestoreItems[cat]) firestoreItems[cat] = [];
        firestoreItems[cat].push({ ...d, id: doc.id });
      });

      // Rebuild MENU_DATA items from Firestore
      Object.keys(MENU_DATA).forEach(k => {
        if (firestoreItems[k] && firestoreItems[k].length) {
          MENU_DATA[k].items = firestoreItems[k];
        }
      });
      fromFirestore = true;
    } catch (_) {
      // Firestore not available — data.js MENU_DATA used as-is
    }

    // Render menu with whatever data we have
    renderMenu();

    // ---------- featured (homepage) ----------
    const featuredItems = [];
    Object.keys(MENU_DATA).forEach(k => {
      MENU_DATA[k].items.forEach(it => {
        if (it.popular) featuredItems.push({ ...it, _cat: k });
      });
    });
    const picks = featuredItems.slice(0, 6);

    $('#featured-grid').innerHTML = picks.map(it => `
      <div class="dish-card" data-cat="${it._cat}" data-idx="${escape(it.name)}">
        <div class="dish-img">
          <div class="dish-tags">${it.cuisine ? `<span class="tag" style="background:rgba(42,85,99,0.92);color:var(--cream);">${CUISINE_ICONS[it.cuisine] || ''} ${CUISINE_LABELS[it.cuisine] || ''}</span>` : ''}${cardTags(it)}</div>
          ${it.img ? `<img src="${escape(it.img)}" alt="${escape(it.name)}" loading="lazy" />` : ''}
        </div>
        <div class="dish-body">
          <div class="dish-name">
            <span>${escape(it.name)}</span>
            <span class="dish-price">${fmtPrice(it.price)}</span>
          </div>
          <p class="dish-desc">${escape(it.desc || '')}</p>
        </div>
      </div>
    `).join('');

    $$('#featured-grid .dish-card').forEach(card => {
      card.addEventListener('click', () => {
        const item = MENU_DATA[card.dataset.cat]?.items.find(i => i.name === card.dataset.idx);
        if (item) openModal(item);
      });
    });

    // Load phone number from Firestore settings
    if (fromFirestore) {
      try {
        const settingsDoc = await db.collection('settings').doc('general').get();
        if (settingsDoc.exists && settingsDoc.data().phone) {
          const phone = settingsDoc.data().phone;
          document.querySelectorAll('[data-phone]').forEach(el => {
            el.textContent = phone;
          });
          document.querySelectorAll('a[href*="tel:"]').forEach(a => {
            a.href = `tel:${phone.replace(/\s/g, '')}`;
          });
        }
      } catch (_) {}
    }
  })();

  // ---------- modal ----------
  const modal = $('#dish-modal');
  const openModal = (item) => {
    $('#modal-name').textContent  = item.name;
    $('#modal-price').textContent = fmtPrice(item.price);
    $('#modal-desc').textContent  = item.desc || '';
    // figure out which category key this item belongs to
    const catKey = Object.keys(MENU_DATA).find(k => MENU_DATA[k].items.some(i => i.name === item.name));
    $('#modal-img').innerHTML = item.img
      ? `<img src="${escape(item.img)}" alt="${escape(item.name)}" />`
      : `<div style="color:var(--gold-warm);background: linear-gradient(135deg, rgba(177,111,17,0.18), rgba(42,85,99,0.08)); width:100%; height:100%; display:grid; place-items:center; font-size:48px;">${CAT_PLACEHOLDER[MENU_DATA[catKey]?.icon] || '🍽️'}</div>`;
    $('#modal-tags').innerHTML = itemBadges(item, false);
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  };
  $('.modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal(); });

  // ---------- feedback form ----------
  const form    = $('#feedback-form');
  const formMsg = $('#form-msg');
  const rating  = $('#rating');
  let ratingVal = 0;

  rating.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-val]');
    if (!btn) return;
    ratingVal = +btn.dataset.val;
    $$('button', rating).forEach(b => b.classList.toggle('is-active', +b.dataset.val <= ratingVal));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name    = $('#fb-name').value.trim();
    const message = $('#fb-message').value.trim();
    if (!name || !message) {
      formMsg.style.background = 'rgba(232,80,32,0.12)';
      formMsg.style.color = '#B8421A';
      formMsg.textContent = 'Please share your name and a message before sending.';
      formMsg.classList.add('is-show');
      return;
    }
    formMsg.style.background = 'rgba(72,118,52,0.12)';
    formMsg.style.color = '#3F6D2C';
    formMsg.textContent = `🙏 Thank you, ${name}! We've received your feedback${ratingVal ? ` (${'★'.repeat(ratingVal)})` : ''}. Expect a reply within 24 hours.`;
    formMsg.classList.add('is-show');
    form.reset();
    ratingVal = 0;
    $$('button', rating).forEach(b => b.classList.remove('is-active'));
  });

  // ---------- footer year ----------
  $('#year').textContent = new Date().getFullYear();

  // ---------- subtle parallax on hero ----------
  const heroVisual = $('.hero-visual');
  if (heroVisual && window.matchMedia('(min-width: 880px)').matches) {
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      heroVisual.style.transform = `translate(${x}px, ${y}px)`;
    });
  }
})();
