// Vérifie la cohérence du contenu (js/data/*.js).
// Usage : node tools/check_data.mjs   → affiche les problèmes, code de sortie 1 s'il y en a.
import fs from 'node:fs';
import vm from 'node:vm';
const ctx = {};
vm.createContext(ctx);
for (const f of ['js/data/lessons.js', 'js/data/summaries.js'])
  vm.runInContext(fs.readFileSync(new URL('../' + f, import.meta.url), 'utf8') + ';this.D=typeof D!=="undefined"?D:this.D;this.SUM=typeof SUM!=="undefined"?SUM:this.SUM;', ctx);
const { D, SUM } = ctx;
const HAR = /[ؐ-ًؚ-ٰٟۖ-ۭ]/g;
const nAr = s => s.replace(HAR, '').replace(/[أإآٱ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي').replace(/[؟?،,.!:؛;«»"()\-]/g, ' ').replace(/\s+/g, ' ').trim();
const issues = [], seen = {};
let counts = { w: 0, p: 0, f: 0, q: 0 };
const lines = s => (s || '').trim().split('\n').filter(Boolean);
D.forEach((L, idx) => {
  if (L.n !== idx + 1) issues.push(`Leçon à l'index ${idx} a n=${L.n} (attendu ${idx + 1})`);
  if (idx && L.p < D[idx - 1].p) issues.push(`Leçon ${L.n} : page ${L.p} avant la page de la leçon précédente`);
  if (!SUM[L.n]) issues.push(`Leçon ${L.n} : pas de résumé dans summaries.js`);
  if (!L.g || !L.g.length) issues.push(`Leçon ${L.n} : aucune règle de grammaire (g)`);
  lines(L.w).forEach(l => { counts.w++; const a = l.split('|'); if (a.length !== 2 || !a[0] || !a[1]) issues.push(`Leçon ${L.n} mot mal formé : ${l}`); else { if (/[a-z]/i.test(a[0])) issues.push(`Leçon ${L.n} lettres latines côté arabe : ${l}`); (seen[nAr(a[0])] ||= []).push(`L${L.n} ${a[1]}`); } });
  lines(L.ph).forEach(l => { counts.p++; const a = l.split('|'); if (a.length !== 2) issues.push(`Leçon ${L.n} phrase mal formée : ${l}`); });
  lines(L.f).forEach(l => { counts.f++; const a = l.split('|'); if (a.length !== 4 || !['pl', 'du', 'fe'].includes(a[3])) issues.push(`Leçon ${L.n} forme mal formée : ${l}`); else if (nAr(a[0]) === nAr(a[1])) issues.push(`Leçon ${L.n} forme identique au singulier : ${l}`); });
  (L.q || []).forEach(q => { counts.q++; if (q.length !== 6) issues.push(`Leçon ${L.n} QCM sans 6 champs : ${q[0]}`); else if (new Set(q.slice(1, 5)).size !== 4) issues.push(`Leçon ${L.n} QCM avec options en double : ${q[0]}`); });
});
const homographs = Object.entries(seen).filter(([, v]) => v.length > 1);
console.log(`Leçons : ${D.length} · mots : ${counts.w} · phrases : ${counts.p} · formes : ${counts.f} · QCM : ${counts.q}`);
if (homographs.length) console.log(`Info — mots identiques sans voyelles (acceptés tous les deux) :\n  ` + homographs.map(([k, v]) => `${k} → ${v.join(' | ')}`).join('\n  '));
if (issues.length) { console.log(`\n${issues.length} problème(s) :\n- ` + issues.join('\n- ')); process.exit(1); }
console.log('\nAucun problème détecté ✔');
