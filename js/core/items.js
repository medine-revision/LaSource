/* Transforme les données des leçons (D, dans js/data/lessons.js) en une liste plate ITEMS : mots (w), phrases (p), formes pluriel/duel/féminin (f), questions de grammaire écrites à la main (g).
   Fichier chargé dans l'ordre défini par index.html : voir CLAUDE.md. */
/* ---------- données ---------- */
const ITEMS=[];
D.forEach(L=>{
 (L.w||'').trim().split('\n').forEach((l,i)=>{const[ar,fr]=l.split('|');ITEMS.push({id:`w${L.n}-${i}`,type:'w',L:L.n,ar,fr})});
 (L.ph||'').trim().split('\n').forEach((l,i)=>{const[ar,fr]=l.split('|');ITEMS.push({id:`p${L.n}-${i}`,type:'p',L:L.n,ar,fr})});
 (L.f||'').trim().split('\n').filter(Boolean).forEach((l,i)=>{const[base,form,fr,kind]=l.split('|');ITEMS.push({id:`f${L.n}-${i}`,type:'f',L:L.n,base,form,fr,kind})});
 (L.q||[]).forEach((q,i)=>ITEMS.push({id:`g${L.n}-${i}`,type:'g',L:L.n,q:q[0],ok:q[1],bad:[q[2],q[3],q[4]],ex:q[5]}));
});
const KIND={pl:'Pluriel',du:'Duel',fe:'Féminin'};
