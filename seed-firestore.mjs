// Seed Firestore from data.js
import fs from 'fs';
import { readFileSync } from 'fs';

const src = readFileSync('./data.js', 'utf-8');
const dataMatch = src.match(/const MENU_DATA = ({[\s\S]*?});\s*\n\s*const RESTAURANT/);
if (!dataMatch) { console.error('❌ Could not parse data.js'); process.exit(1); }
const MENU_DATA = eval('(' + dataMatch[1] + ')');

const FIRESTORE_URL = 'https://firestore.googleapis.com/v1/projects/noodsnrice-fb710/databases/(default)/documents';
const token = readFileSync('/tmp/firebase_id_token.txt', 'utf-8').trim();

async function api(method, path, body = null) {
  const opts = {
    method,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(`${FIRESTORE_URL}/${path}`, opts);
  const data = await res.json();
  if (!res.ok) throw new Error(`${res.status}: ${data.error?.message || JSON.stringify(data)}`);
  return data;
}

function makeFields(item, category) {
  const f = i => ({ stringValue: String(i ?? '') });
  return {
    fields: {
      name: f(item.name),
      price: { doubleValue: item.price },
      desc: f(item.desc ?? ''),
      category: f(category),
      cuisine: f(item.cuisine ?? ''),
      popular: { booleanValue: !!item.popular },
      spicy: { booleanValue: !!item.spicy },
      veg: { booleanValue: !!item.veg },
      vegan: { booleanValue: !!item.vegan },
      gf: { booleanValue: !!item.gf },
      nuts: { booleanValue: !!item.nuts },
      img: f(item.img ?? ''),
      sort: { integerValue: String(Date.now()) }
    }
  };
}

async function seed() {
  console.log('🌱 Seeding Firestore...\n');
  let total = 0, errors = 0;

  for (const [catKey, cat] of Object.entries(MENU_DATA)) {
    if (!cat.items?.length) continue;
    console.log(`📁 ${cat.title} (${cat.items.length})`);

    for (const item of cat.items) {
      try {
        await api('POST', 'menu', makeFields(item, catKey));
        total++;
        process.stdout.write('✓');
      } catch (err) {
        errors++;
        process.stdout.write('✗');
      }
    }
    console.log();
  }

  // Seed settings
  try {
    const settingsId = 'general';
    await api('POST', `settings?documentId=${settingsId}`, {
      fields: { phone: { stringValue: '81 126 472' } }
    });
  } catch (_) { /* may exist */ }

  console.log(`\n📊 ${total} created · ${errors} errors`);
  if (errors) console.log('⚠️  Some items failed — check above');
  else console.log('✅ All done!');
}

seed().catch(console.error);
