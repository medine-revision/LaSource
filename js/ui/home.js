/* Onglets, écran d'accueil (carte Salam, profil, réglages, choix de page avec bouton Valider) et onglet Historique.
   Fichier chargé dans l'ordre défini par index.html : voir CLAUDE.md. */
/* ---------- onglets ---------- */
let view='train';
function tab(v){view=v;window.scrollTo(0,0);['train','hist','cours'].forEach(x=>$('#tab-'+x).setAttribute('aria-selected',x===v));Q=[];render()}
function render(){view==='train'?homeView():view==='hist'?historyView():cours()}
$('#tab-train').onclick=()=>tab('train');$('#tab-hist').onclick=()=>tab('hist');$('#tab-cours').onclick=()=>tab('cours');

const inRange=it=>it.L>=S.from&&it.L<=S.to;
function pool(){const m=S.mode;return ITEMS.filter(it=>inRange(it)&&(m==='mix'||(m==='words'&&it.type==='w')||(m==='phrases'&&it.type==='p')||(m==='grammar'&&(it.type==='g'||it.type==='f'))))}
/* Choix de leçon : un bouton qui montre numéro + titre court, et une liste en fenêtre avec TOUS les titres visibles. */
const lessonBtn=(id,n)=>{const L=D.find(x=>x.n===n);return `<button type="button" class="lpick" id="${id}" aria-haspopup="dialog"><span class="num">${n}</span><span class="lt"><b>Leçon ${n}</b><small>${fmtPrompt(L.s)}</small></span><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button>`};
function pickLesson(which){
 const cur=which==='from'?S.from:S.to;
 const sh=document.createElement('div');sh.className='sheet';sh.setAttribute('role','dialog');sh.setAttribute('aria-modal','true');
 sh.innerHTML=`<div class="panel"><div class="ph"><div style="flex:1"><b>${which==='from'?'De la leçon':'Jusqu\'à la leçon'}</b><div class="muted">Touche une leçon pour la choisir</div></div><button class="iconbtn x" type="button" aria-label="Fermer">✕</button></div>
 <div class="pb"><div class="llist">${D.map(L=>`<button type="button" class="lrow${L.n===cur?' on':''}" data-pick="${L.n}"><span class="num">${L.n}</span><span class="lt"><b>${fmtPrompt(L.s)}</b><small>Pages ${L.p}–${pageEnd(L)}</small></span></button>`).join('')}</div></div></div>`;
 document.body.appendChild(sh);document.body.style.overflow='hidden';
 const close=()=>{sh.classList.add('out');document.body.style.overflow='';setTimeout(()=>sh.remove(),200);document.removeEventListener('keydown',k)};
 const k=e=>{if(e.key==='Escape')close()};document.addEventListener('keydown',k);
 sh.onclick=e=>{const b=e.target.closest('[data-pick]');
  if(b){const n=+b.dataset.pick;if(which==='from'){S.from=n;if(S.to<n)S.to=n}else{S.to=n;if(S.from>n)S.from=n}S.page=null;save();close();homeView();return}
  if(e.target===sh||e.target.closest('.x'))close()};
 const on=sh.querySelector('.lrow.on');if(on)on.scrollIntoView({block:'center'});
 sh.querySelector('.x').focus();
}
const seg=(key,opts,cls='')=>`<div class="seg ${cls}" data-key="${key}">${opts.map(([v,l])=>`<button type="button" data-v="${v}" aria-pressed="${String(S[key])===String(v)}">${l}</button>`).join('')}</div>`;
const DIFF={mix:'Mélangé',easy:'Facile',medium:'Moyen',hard:'Difficile'};
const MODE={mix:'Tout',words:'Mots',phrases:'Phrases',grammar:'Grammaire'};

/* Prénom FACULTATIF et discret : utile seulement si plusieurs personnes partagent l'appareil. */
function profileCard(){
 if(ME)return `<p class="pfline">Profil : <b>${esc(ME.name)}</b> · <button type="button" class="linkbtn" id="out">changer</button></p>`;
 return `<details class="pf"><summary>Plusieurs personnes sur cet appareil ? Ajouter mon prénom</summary>
 <form class="login" id="lf"><input type="text" id="nm" placeholder="Ton prénom" maxlength="40" autocomplete="nickname"><button class="btn">OK</button></form>
 ${KNOWN.length?`<div class="chips">${KNOWN.map(n=>`<button class="chip" type="button" data-n="${esc(n)}">${esc(n)}</button>`).join('')}</div>`:''}
 <p class="note">Facultatif : chacun garde ses propres résultats sur cet appareil.</p></details>`;
}
function wireProfile(){
 const lf=$('#lf');if(lf){lf.onsubmit=e=>{e.preventDefault();login($('#nm').value)};app.querySelectorAll('.chip').forEach(b=>b.onclick=()=>login(b.dataset.n))}
 const o=$('#out');if(o)o.onclick=logout;
}
function heroCard(){
 const hr=new Date().getHours();const hi=hr<18?'Salam':'Bonsoir';
 return `<section class="hero"><p class="hi">${hi}${ME?' '+esc(ME.name):''}</p><h2>Leçon ${S.from===S.to?S.to:S.from+' à '+S.to}</h2><p class="sub2">${fmtPrompt(D.find(L=>L.n===S.to).s)}</p>
 <div class="dots" role="group" aria-label="Choisir la dernière leçon étudiée">${D.map(L=>`<button type="button" data-d="${L.n}" class="${L.n>=S.from&&L.n<=S.to?'in':L.n<S.from?'past':''}" aria-label="Jusqu'à la leçon ${L.n}" title="Leçon ${L.n}"></button>`).join('')}</div>
 <div class="dots-l"><span>Leçon 1</span><span>Touche un point pour choisir</span><span>23</span></div></section>`;
}
function homeView(){
 const P=pool();const c={w:0,p:0,g:0,f:0};P.forEach(i=>c[i.type]++);
 const genN=(S.mode==='mix'||S.mode==='grammar')?Math.max(20,c.g*2):0;
 const last=D.find(L=>L.n===S.to);
 app.innerHTML=heroCard()+`<section class="card">
 <h2>Jusqu'où as-tu étudié ?</h2>
 ${seg('pick',[['lesson','Par leçon'],['page','Page précise']])}
 ${S.pick==='page'?`<div class="lbl">Jusqu'à la page du livre (version arabe)</div>
 <div class="stepper"><button type="button" id="pm" aria-label="Page précédente">−</button><input type="number" id="page" inputmode="numeric" min="6" max="124" step="1" placeholder="ex. 45" value="${S.page||''}" aria-label="Page du livre"><button type="button" id="pp" aria-label="Page suivante">+</button><button type="button" id="pok" class="btn" disabled>Valider</button></div>
 <p class="note" style="margin:6px 0 0">Version française du livre ? Choisis plutôt la leçon.</p>
 <p class="hint" id="pgprev" style="margin-top:6px">${S.page?`Page ${S.page} → jusqu'à la leçon ${S.to}`:'Choisis une page puis appuie sur Valider.'}</p>`
 :`<div class="row"><div><div class="lbl">De la leçon</div>${lessonBtn('from',S.from)}</div>
 <div><div class="lbl">Jusqu'à la leçon</div>${lessonBtn('to',S.to)}</div></div>`}
 <p class="hint">Rien après la leçon ${S.to} n'apparaîtra dans les questions.</p>
 <div class="lbl">Difficulté</div>${seg('diff',[['mix','Mélangé<small>un peu de tout</small>'],['easy','Facile<small>6 choix</small>'],['medium','Moyen<small>glisser-déposer</small>'],['hard','Difficile<small>tu écris toi-même</small>']],'diff')}
 <div class="lbl">Que réviser ?</div>${seg('mode',[['mix','Tout mélangé'],['words','Mots'],['phrases','Phrases'],['grammar','Grammaire']])}
 <div class="lbl">Sens de traduction</div>${seg('dir',[['both','Les deux'],['ar-fr','Arabe → Français'],['fr-ar','Français → Arabe']])}
 <div class="lbl">Nombre de questions</div>${seg('count',[[10,'10'],[20,'20'],[40,'40'],[80,'80'],[999,'Tout']])}
 <label class="sw"><input type="checkbox" id="har" ${S.har?'checked':''}> Afficher les voyelles (harakāt) — décoche pour plus de difficulté</label>
 <div class="counts"><span class="pill">${c.w} mots</span><span class="pill">${c.p} phrases</span><span class="pill">${c.g+genN} questions de grammaire${genN?' (dont '+genN+' générées à chaque série)':''}</span>${c.f?`<span class="pill">${c.f} pluriels / formes</span>`:''}</div>
 <button class="go" id="go" ${P.length?'':'disabled'}>Commencer</button>
 </section>`+profileCard();
 wireProfile();
 app.querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>{S.to=+b.dataset.d;S.page=null;if(S.from>S.to)S.from=S.to;save();homeView()});
 if(S.pick!=='page'){
 $('#from').onclick=()=>pickLesson('from');
 $('#to').onclick=()=>pickLesson('to');
 }else{
 const lesOf=p=>{let n=1;D.forEach(L=>{if(L.p<=p)n=L.n});return n};
 const pg=$('#page'),ok=$('#pok'),prev=$('#pgprev');
 const preview=()=>{const v=+pg.value;const valid=v>=6&&v<=124;ok.disabled=!valid||v===S.page;
  prev.textContent=valid?(v===S.page?`Page ${v} → jusqu'à la leçon ${S.to}`:`Page ${v} → leçon ${lesOf(v)} · appuie sur Valider`):(pg.value?'Page entre 6 et 124':'Choisis une page puis appuie sur Valider.')};
 const bump=d=>{const base=+pg.value||S.page||D.find(L=>L.n===S.to).p;pg.value=Math.max(6,Math.min(124,base+d));preview()};
 const apply=()=>{const v=+pg.value;if(!(v>=6&&v<=124))return;S.page=v;S.to=lesOf(v);S.from=1;save();homeView()};
 pg.addEventListener('input',preview);
 pg.addEventListener('keydown',e=>{if(e.key==='ArrowUp'||e.key==='ArrowDown'){e.preventDefault();bump(e.key==='ArrowUp'?1:-1)}else if(e.key==='Enter'){e.preventDefault();apply()}});
 $('#pm').onclick=()=>bump(-1);$('#pp').onclick=()=>bump(1);ok.onclick=apply;
 }
 app.querySelectorAll('.seg').forEach(g=>g.onclick=e=>{const b=e.target.closest('button');if(!b)return;const k=g.dataset.key;S[k]=k==='count'?+b.dataset.v:b.dataset.v;save();homeView()});
 $('#har').onchange=e=>{S.har=e.target.checked;save()};
 $('#go').onclick=()=>start(P);
}
function historyView(){
 const P=CUR();const H=P.hist.slice().reverse();const st=P.stats;let r=0,w=0;Object.values(st).forEach(s=>{r+=s.r;w+=s.w});
 const avg=H.length?Math.round(H.slice(0,10).reduce((a,h)=>a+h.s/Math.max(1,h.n),0)/Math.min(10,H.length)*100):0;
 const hard=Object.entries(st).filter(([k,s])=>s.w>s.r).map(([k])=>ITEMS.find(i=>i.id===k)).filter(Boolean).slice(0,30);
 const fmt=t=>new Date(t).toLocaleDateString('fr-BE',{day:'2-digit',month:'2-digit'})+' '+new Date(t).toLocaleTimeString('fr-BE',{hour:'2-digit',minute:'2-digit'});
 app.innerHTML=`<section class="card"><h2>${ME?'Résultats de '+esc(ME.name):'Tes résultats'}</h2>
 <div class="big"><div><b>${H.length}</b><span>séries</span></div><div><b>${avg}%</b><span>moyenne des 10 dernières</span></div><div><b>${r}</b><span>bonnes réponses</span></div><div><b>${w}</b><span>erreurs</span></div></div>
 ${H.length?`<div class="hist">${H.slice(0,40).map(h=>{const p=Math.round(h.s/Math.max(1,h.n)*100);return `<div class="hr"><span class="d">${fmt(h.t)}</span><span class="b"><i style="width:${p}%"></i></span><span class="p">${p}%</span><span class="m">${h.s}/${h.n} · leçons ${h.f}–${h.to} · ${MODE[h.m]||''} · ${DIFF[h.d]||''}</span></div>`}).join('')}</div>`:'<p class="muted">Aucune série terminée pour l\'instant.</p>'}
 </section>
 ${hard.length?`<section class="card"><h2>À retravailler</h2><p class="muted" style="margin-top:0">Ces éléments reviennent plus souvent dans tes séries.</p>${hard.map(i=>i.type==='g'?`<div class="err"><span class="muted">${fmtPrompt(i.q)}</span><span class="${/[a-zé]/i.test(i.ok)?'':'ar'}">${esc(showAr(i.ok))}</span></div>`:`<div class="err"><span class="ar">${esc(showAr(i.type==='f'?i.base+' ← '+i.form:i.ar))}</span><span class="muted">${esc(i.fr)}</span></div>`).join('')}<div class="actions"><button class="btn" id="drill">Réviser ces éléments</button></div></section>`:''}
 <section class="card"><button class="btn ghost" id="wipe">Effacer mon historique</button></section>`+profileCard();
 wireProfile();
 const dr=$('#drill');if(dr)dr.onclick=()=>{view='train';['train','hist','cours'].forEach(x=>$('#tab-'+x).setAttribute('aria-selected',x==='train'));start(null,shuf(hard).slice(0,S.count))};
 const wp=$('#wipe');wp.onclick=()=>{if(wp.dataset.c){P.stats={};P.hist=[];persist();historyView()}else{wp.dataset.c=1;wp.textContent='Confirmer : tout effacer'}};
}
