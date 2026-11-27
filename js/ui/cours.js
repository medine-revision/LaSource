/* Onglet Cours (les 23 leçons : résumé, grammaire, vocabulaire, phrases), fenêtre « Revoir la leçon », et explications « Pourquoi ? » après une erreur (mot à mot, règles).
   Fichier chargé dans l'ordre défini par index.html : voir CLAUDE.md. */
/* ---------- cours ---------- */
const CH='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 9l6 6 6-6"/></svg>';
function lessonBody(L,openGram){
 const W=ITEMS.filter(i=>i.L===L.n);const words=W.filter(i=>i.type==='w'),ph=W.filter(i=>i.type==='p'),fo=W.filter(i=>i.type==='f');
 const [intro,...pts]=(SUM[L.n]||'').split('|');
 return `<div class="res"><h3>Résumé</h3><p>${esc(intro)}</p>${pts.length?`<ul>${pts.map(p=>`<li>${fmtPrompt(p)}</li>`).join('')}</ul>`:''}</div>
  <details class="sec" ${openGram?'open':''}><summary>1. Grammaire <small>${L.g.length} règle${L.g.length>1?'s':''}</small><span class="c">${CH}</span></summary><div class="in">
  ${L.g.map(([t,d,ex])=>`<div class="rule"><h3>${fmtPrompt(t)}</h3><p>${d}</p>${ex.map(([a,f])=>`<div class="exl"><span class="ar" data-say="${esc(stripH(a))}">${esc((a))}</span><span>${esc(f)}</span></div>`).join('')}</div>`).join('')}</div></details>
  <details class="sec"><summary>2. Vocabulaire <small>${words.length} mots${fo.length?' · '+fo.length+' formes':''}</small><span class="c">${CH}</span></summary><div class="in">
  ${words.length?`<table class="v">${words.map(w=>`<tr><td>${esc(w.fr.split('/').join(', '))}</td><td class="ar" data-say="${esc(stripH(w.ar))}">${esc((w.ar))}</td></tr>`).join('')}</table>`:''}
  ${fo.length?`<div class="sub">Pluriels, duels et féminins</div><table class="v">${fo.map(w=>`<tr><td>${esc(w.fr)} <span class="muted">(${KIND[w.kind].toLowerCase()})</span></td><td class="ar" data-say="${esc(stripH(w.form))}">${esc((w.base))} ← ${esc((w.form))}</td></tr>`).join('')}</table>`:''}</div></details>
  ${ph.length?`<details class="sec"><summary>3. Phrases d'exemple <small>${ph.length} phrases</small><span class="c">${CH}</span></summary><div class="in"><table class="v">${ph.map(w=>`<tr><td>${esc(w.fr)}</td><td class="ar" data-say="${esc(stripH(w.ar))}">${esc((w.ar))}</td></tr>`).join('')}</table></div></details>`:''}`;
}
function cours(){
 app.innerHTML=`<p class="muted" style="margin-top:0">Les 23 leçons du Tome 1 (pages de la version arabe). Ouvre une leçon pour voir son résumé, sa grammaire et son vocabulaire.<span class="sayhint"> Touche un mot arabe pour l'entendre.</span></p>`+D.map(L=>{
  const nw=ITEMS.filter(i=>i.L===L.n&&i.type==='w').length;const mine=L.n>=S.from&&L.n<=S.to;
  return `<details class="les${mine?' mine':''}" id="les-${L.n}"><summary><span class="num">${L.n}</span><span><b>${fmtPrompt(L.t)}</b><br><span class="muted">Page ${L.p} · ${nw} mots · ${L.g.length} règle${L.g.length>1?'s':''}</span></span><span class="c">${CH}</span></summary><div class="body">
  ${lessonBody(L,false)}
  <button class="btn lesgo" type="button" data-les="${L.n}">S'entraîner sur cette leçon</button>
  </div></details>`}).join('');
 app.querySelectorAll('[data-les]').forEach(b=>b.onclick=()=>{const n=+b.dataset.les;S.from=n;S.to=n;S.page=null;save();tab('train')});
}
function openSheet(n){
 const L=D.find(x=>x.n===n);if(!L)return;
 const sh=document.createElement('div');sh.className='sheet';sh.setAttribute('role','dialog');sh.setAttribute('aria-modal','true');
 sh.innerHTML=`<div class="panel"><div class="ph"><span class="num">${L.n}</span><div style="flex:1"><b>${fmtPrompt(L.t)}</b><div class="muted">Leçon ${L.n} · page ${L.p}</div></div><button class="iconbtn x" type="button" aria-label="Fermer">✕</button></div><div class="pb">${lessonBody(L,true)}</div></div>`;
 document.body.appendChild(sh);document.body.style.overflow='hidden';
 const close=()=>{sh.classList.add('out');document.body.style.overflow='';setTimeout(()=>sh.remove(),200);document.removeEventListener('keydown',k)};
 const k=e=>{if(e.key==='Escape')close()};document.addEventListener('keydown',k);
 sh.onclick=e=>{if(e.target===sh||e.target.closest('.x'))close()};
 sh.querySelector('.x').focus();
}

/* ---------- explications ---------- */
let GLOSS=null;
function gloss(){
 if(GLOSS)return GLOSS;GLOSS=new Map();
 const put=(k,v)=>{k=nAr(k).replace(/^ال/,'');if(k&&!GLOSS.has(k))GLOSS.set(k,v)};
 GLOSS.set('السلام','la paix');GLOSS.set('سلام','la paix');GLOSS.set('عليكم','sur vous');GLOSS.set('عليك','sur toi');
 'مُحَمَّد حامِد عَلِيّ ياسِر عَمّار آمِنَة فاطِمَة زَيْنَب خالِد سَعِيد مَحْمُود أُسامَة عَبّاس يُوسُف أَحْمَد يَعْقُوب إِبْراهِيم مُوسىٰ أَنَس مَرْيَم حَمْزَة عُثْمان'.split(' ').forEach(n=>put(n,'prénom'));
 ITEMS.forEach(i=>{if(i.type==='w')put(i.ar,i.fr.split('/')[0]);if(i.type==='f')put(i.form,i.fr+(i.kind==='pl'?' (pluriel)':i.kind==='du'?' (deux)':''))});
 return GLOSS;
}
const SUFX=[['ها','à elle'],['هم','leur'],['كم','votre'],['نا','notre / nous'],['هن','leur (f)'],['كن','votre (f)'],['ه','à lui'],['ك','ton / ta'],['ي','mon / ma']];
function glossWord(w){
 const G=gloss();let k=nAr(w);if(!k)return null;
 const tries=[[k,'']];
 if(/^و./.test(k))tries.push([k.slice(1),'et + ']);
 const more=[];
 for(const[x,pre] of tries){more.push([x,pre]);if(x.startsWith('ال'))more.push([x.slice(2),pre]);if(/^(ب|ل|لل)/.test(x))more.push([x.replace(/^(لل|ب|ل)/,''),pre+'à / pour + '])}
 for(const[x,pre] of more){const y=x.replace(/^ال/,'');if(G.has(y))return pre+G.get(y);
  for(const[sf,fr] of SUFX){if(y.length>sf.length+1&&y.endsWith(sf)){let b=y.slice(0,-sf.length);const cand=[b,b.replace(/ت$/,'ه'),b.replace(/و$/,'')];for(const c of cand)if(G.has(c))return pre+G.get(c)+' + '+fr}}}
 return null;
}
function whyHTML(q){
 const it=q.it,L=D.find(x=>x.n===it.L);let body='';
 if(it.type==='g')body=it.ex?`<p>${fmtPrompt(it.ex)}</p>`:'';
 else if(it.type==='w')body=`<p><span class="ar">${esc(showAr(it.ar))}</span> = ${esc(it.fr.split('/').join(', '))}. Mot vu dans la leçon ${it.L} (page ${L.p}).</p>`;
 else if(it.type==='f'){const reg=/(ونَ|اتٌ)$/.test(it.form);body=`<p><span class="ar">${esc(showAr(it.base))}</span> → <span class="ar">${esc(showAr(it.form))}</span>. `+(it.kind==='du'?'Duel : on ajoute ـانِ (et ة devient ت).':it.kind==='fe'?'Couleurs : أَفْعَلُ au masculin, فَعْلاءُ au féminin.':reg?'Pluriel régulier : ـُونَ pour les hommes, ـاتٌ quand le singulier finit par ة.':'Pluriel brisé : la forme change à l\'intérieur du mot, il faut l\'apprendre avec le singulier.')+'</p>'}
 else{const toks=it.ar.split(/\s+/).filter(Boolean);
  body=`<p class="muted" style="margin:0 0 6px">Mot à mot :</p><div class="mam">${toks.map(t=>{const g=glossWord(t);return `<span class="mw"><span class="ar">${esc(showAr(t.replace(/[.،؟!]/g,'')))}</span><small>${esc(g||'—')}</small></span>`}).join('')}</div>`}
 const [,...pts]=(SUM[it.L]||'').split('|');
 return `<div class="why"><b>Pourquoi ?</b>${body}${pts.length&&it.type!=='w'?`<p class="muted" style="margin:8px 0 4px">À retenir de la leçon ${it.L} :</p><ul>${pts.map(p=>`<li>${fmtPrompt(p)}</li>`).join('')}</ul>`:''}<button class="btn ghost sm" type="button" data-sheet="${it.L}">Revoir la leçon ${it.L} dans le cours</button></div>`;
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-sheet]');if(b)openSheet(+b.dataset.sheet)});
