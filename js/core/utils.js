/* Outils génériques : sélection DOM ($), stockage local (LS), normalisation arabe/français pour comparer les réponses, hasard (rnd, shuf, pick), distance de Levenshtein (sim).
   Fichier chargé dans l'ordre défini par index.html : voir CLAUDE.md. */
const $=s=>document.querySelector(s);
const app=$('#app');
const LS={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const HAR=/[ؐ-ًؚ-ٰٟۖ-ۭ]/g;
const stripH=s=>s.replace(HAR,'');
const nAr=s=>stripH(s).replace(/ـ/g,'').replace(/[أإآٱ]/g,'ا').replace(/ة/g,'ه').replace(/ى/g,'ي').replace(/[؟?،,.!:؛;«»"()\-]/g,' ').replace(/\s+/g,' ').trim();
const ART=new Set(['le','la','les','un','une','des','du','de','au','aux','a']);
const nFr=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/œ/g,'oe').replace(/[’`]/g,"'").replace(/\(.*?\)/g,' ').replace(/\b[ldj]'/g,' ').replace(/[^a-z0-9 ]/g,' ').split(/\s+/).filter(w=>w&&!ART.has(w)).join(' ');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const rnd=n=>{try{const b=new Uint32Array(1);crypto.getRandomValues(b);return b[0]%n}catch(e){return Math.random()*n|0}};
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=rnd(i+1);[a[i],a[j]]=[a[j],a[i]]}return a};
const pick=a=>a[rnd(a.length)];
function lev(a,b){if(a===b)return 0;const m=a.length,n=b.length;if(!m)return n;if(!n)return m;let p=Array.from({length:n+1},(_,i)=>i);for(let i=1;i<=m;i++){let c=[i];for(let j=1;j<=n;j++)c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a[i-1]===b[j-1]?0:1));p=c}return p[n]}
const sim=(a,b)=>1-lev(a,b)/Math.max(a.length,b.length,1);
