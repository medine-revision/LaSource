/* Déroulement d'une série : tirage 100 % aléatoire sans question semblable aux 40 dernières (draw/markSeen), affichage (show), correction (done), résultat (finish), ajustement de la taille du texte (fitOpts).
   Fichier chargé dans l'ordre défini par index.html : voir CLAUDE.md. */
/* ---------- session ---------- */
let Q=[],qi=0,score=0,errs=[],answered=false,nAns=0,streak=0;
/* tirage 100 % aléatoire + pas de question semblable aux 40 dernières */
const RECENT_N=40;
const recKey=()=>'m1recent:'+(ME?ME.key:'guest');
const simKey=it=>it.type==='g'?(it.gen?'G:'+nAr(it.ok):'g:'+it.id):it.type==='f'?'w:'+nAr(it.base).replace(/^ال/,''):it.type==='w'?'w:'+nAr(it.ar).replace(/^ال/,''):'p:'+nAr(it.ar);
function draw(pool,n){
 const recent=LS.get(recKey(),[]);const rset=new Set(recent);
 const out=[],keys=new Set();
 const fresh=shuf(pool).filter(it=>!rset.has(simKey(it)));
 for(const it of fresh){const k=simKey(it);if(keys.has(k))continue;keys.add(k);out.push(it);if(out.length>=n)break}
 if(out.length<n){const age=k=>{const i=recent.indexOf(k);return i<0?-1:i};
  const rest=shuf(pool).filter(it=>!keys.has(simKey(it))).sort((a,b)=>age(simKey(a))-age(simKey(b)));
  for(const it of rest){const k=simKey(it);if(keys.has(k))continue;keys.add(k);out.push(it);if(out.length>=n)break}}
 return out;
}
function markSeen(it){const k=simKey(it);let r=LS.get(recKey(),[]).filter(x=>x!==k);r.push(k);if(r.length>RECENT_N)r=r.slice(-RECENT_N);LS.set(recKey(),r)}
function start(P,list){
 let items=list;
 if(!items){let pp=P;if(S.mode==='mix'||S.mode==='grammar'){const sg=P.filter(i=>i.type==='g').length;pp=P.concat(genQ(Math.max(20,sg*2)))}items=draw(pp,S.count)}
 Q=items.map(build);qi=0;score=0;errs=[];nAns=0;streak=0;show();
}
function rec(it,ok){if(it.gen)return;const st=STATS();const s=st[it.id]||{r:0,w:0};ok?s.r++:s.w++;st[it.id]=s}
function fitOpts(){
 app.querySelectorAll('.opt .ot').forEach(el=>{el.style.fontSize='';el.style.whiteSpace='nowrap';
  let fs=parseFloat(getComputedStyle(el).fontSize);const min=el.closest('.opt').classList.contains('ar')?23:14;
  while(el.scrollWidth>el.clientWidth+1&&fs>min){fs-=1;el.style.fontSize=fs+'px'}
  if(el.scrollWidth>el.clientWidth+1)el.style.whiteSpace='normal'});
}
let fitT;window.addEventListener('resize',()=>{clearTimeout(fitT);fitT=setTimeout(fitOpts,120)});
document.fonts&&document.fonts.ready.then(()=>fitOpts());
function show(){
 answered=false;window.scrollTo(0,0);markSeen(Q[qi].it);const q=Q[qi];const pct=qi/Q.length*100;
 const long=q.pAr&&q.prompt.length>24;
 let body='';
 if(q.kind==='qcm')body=`<div class="opts ${q.six?'six':''}">${q.opts.map((o,i)=>`<button class="opt ${q.oAr?'ar':''}" data-i="${i}"><span class="k">${'ABCDEF'[i]}</span><span class="ot">${esc(q.oAr?(q.keepHar?o:showAr(o)):o.split('/').join(' / '))}</span></button>`).join('')}</div>`;
 else if(q.kind==='write')body=`<form class="ans" id="f"><input type="text" id="inp" class="${q.oAr?'ar':''}" dir="${q.oAr?'rtl':'ltr'}" lang="${q.oAr?'ar':'fr'}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" ${q.oAr&&S.kb&&isTouch?'inputmode="none"':''} placeholder="${q.oAr?'اُكْتُبْ هُنا':'Ta réponse…'}"><button class="btn">OK</button></form>
  ${q.oAr?`<div class="kbbar"><label><input type="checkbox" id="kbon" ${S.kb?'checked':''}> Clavier arabe à l'écran</label>${isTouch?'':`<label><input type="checkbox" id="pckb" ${S.pckb?'checked':''}> Clavier du PC → arabe</label>`}</div>${kbHTML()}`:''}`;
 else body=`<div class="tiles ${q.oAr?'rtl':''}" id="dst"></div><div class="tiles pool ${q.oAr?'rtl':''}" id="src"></div><div class="actions"><button class="btn ghost" id="clr" type="button">Effacer</button><button class="btn" id="val" type="button">Valider</button></div>`;
 const tagName={w:'Mot',p:'Phrase',g:'Grammaire',f:'Forme'}[q.it.type];const lvl={qcm:'Facile · 6 choix',build:'Moyen',letters:'Moyen',write:'Difficile'}[q.kind];
 app.innerHTML=`<div class="bar"><i style="width:${pct}%"></i></div>
 <div class="qhead"><span>Question ${qi+1} / ${Q.length} · Leçon ${q.it.L}${streak>=2?` · <span class="streak"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c1 4 5 6 5 11a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-3-1-6 1-9.5z"/></svg>${streak}</span>`:''}</span><span class="tag">${tagName}${q.it.type==='g'?'':' · '+(q.lv||lvl)}</span></div>
 <section class="qcard"><div class="ask">${esc(q.ask)}</div>
 <div class="prompt ${q.pAr?'ar':''} ${long?'long':''}">${q.pAr?esc(showAr(q.prompt)):fmtPrompt(q.prompt)}</div>
 ${q.pAr?sayBtn(stripH(q.prompt)):''}
 ${body}<div id="out"></div></section>
 <div class="actions"><button class="btn ghost" id="quit">Arrêter</button></div>`;
 $('#quit').onclick=finish;
 requestAnimationFrame(fitOpts);
 if(q.kind==='qcm')app.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{if(answered)return;const o=q.opts[+b.dataset.i];const ok=o===q.ans;app.querySelectorAll('.opt').forEach(x=>{if(q.opts[+x.dataset.i]===q.ans)x.classList.add('ok')});if(!ok)b.classList.add('bad');done(q,ok?1:0,o)});
 if(q.kind==='write'){const inp=$('#inp');
  const submit=()=>{if(answered){next();return}if(!inp.value.trim())return;done(q,check(q,inp.value),inp.value)};
  $('#f').onsubmit=e=>{e.preventDefault();submit()};
  if(q.oAr){wireKb(inp,submit);
   $('#kbon').onchange=e=>{S.kb=e.target.checked;save();$('#kb').style.display=S.kb?'grid':'none';if(isTouch){if(S.kb)inp.setAttribute('inputmode','none');else inp.removeAttribute('inputmode');inp.blur();setTimeout(()=>inp.focus(),30)}};
   const pk=$('#pckb');if(pk)pk.onchange=e=>{S.pckb=e.target.checked;save();inp.focus()};
   inp.addEventListener('keydown',e=>{if(!S.pckb||isTouch||e.ctrlKey||e.metaKey||e.altKey)return;const m=e.shiftKey?SCODE[e.code]:CODE[e.code];if(m!==undefined){e.preventDefault();insert(inp,m)}});
  }
  setTimeout(()=>inp.focus({preventScroll:true}),60);
 }
 if(q.kind==='build'||q.kind==='letters'){
  const D_=dnd(q);$('#clr').onclick=()=>{if(!answered)D_.clear()};
  $('#val').onclick=()=>{if(answered){next();return}const ch=D_.get();if(!ch.length)return;
   const u=q.kind==='letters'?ch.map(t=>t.t==='␣'?' ':t.t).join(''):ch.map(t=>t.t).join(' ');const k=q.oAr?nAr:nFr;done(q,k(u)===k(q.ans)?1:0,u)};
 }
}
function fmtPrompt(p){return esc(p).replace(/([؀-ۿ][؀-ۿً-ْٰ\s،؟]*[؀-ۿً-ْٰ؟])/g,m=>`<span class="ar">${m}</span>`)}
function done(q,res,user){
 answered=true;nAns++;const ok=res===1;streak=ok?streak+1:0;
 const qc=app.querySelector('.qcard');if(qc){qc.classList.remove('win','shake');void qc.offsetWidth;qc.classList.add(ok?'win':'shake');
  if(ok&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const b=document.createElement('div');b.className='burst';const C=['#4fa6ee','#f3d98b','#ffffff','#1b5296'];
   b.innerHTML=Array.from({length:16},(_,i)=>{const a=i/16*Math.PI*2,r=70+Math.random()*60;return `<i style="background:${C[i%4]};--x:${Math.cos(a)*r|0}px;--y:${Math.sin(a)*r|0}px;--r:${Math.random()*360|0}deg"></i>`}).join('');qc.appendChild(b);setTimeout(()=>b.remove(),1000)}}
 const sol=q.oAr?`<div class="sol ar">${esc(q.keepHar?q.ans:showAr(q.ans))}</div>`:`<div class="sol">${esc(q.ans.split('/').join(' / '))}</div>`;
 const msg=ok?pick(['Correct !','Bravo !','Parfait !','Excellent !','Bien joué !']):res===.5?'Presque… vérifie l\'orthographe':'Pas tout à fait';
 const showSol=!ok||q.kind!=='qcm'||q.it.type==='p';
 $('#out').innerHTML=`<div class="fb ${ok?'ok':'bad'}"><b>${msg}</b>${showSol?`<span class="muted">Réponse attendue :</span>${sol}`:''}${q.oAr?sayBtn(stripH(q.ans)):''}${ok&&q.ex?`<div class="ex">${fmtPrompt(q.ex)}</div>`:''}</div>${ok?'':whyHTML(q)}
 <div class="actions">${!ok&&q.kind==='write'?'<button class="btn ghost" id="ovr">J\'avais juste</button>':''}<button class="btn" id="nx">${qi+1<Q.length?'Suivant':'Voir le résultat'}</button></div>`;
 if(ok)score++;else errs.push({q,user});
 rec(q.it,ok);
 $('#nx').onclick=next;
 const ov=$('#ovr');if(ov)ov.onclick=()=>{score++;errs.pop();const s=STATS()[q.it.id];if(s){s.w--;s.r++}next()};
 const kb=$('#kb');if(kb)kb.style.display='none';
 $('#out').scrollIntoView({block:'nearest',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
}
function next(){qi++;qi<Q.length?show():finish()}
function finish(){window.scrollTo(0,0);
 const n=Math.max(1,nAns);const pct=Math.round(score/n*100);
 if(nAns){if(ME){ME.hist.push({t:Date.now(),s:score,n:nAns,f:S.from,to:S.to,m:S.mode,d:S.diff});if(ME.hist.length>150)ME.hist=ME.hist.slice(-150)}persist()}
 const items=errs.map(e=>e.q.it);
 Q=[];
 const head=pct>=90?'Excellent, ma shā\' Allāh !':pct>=70?'Très bien !':pct>=50?'Pas mal, continue !':'Courage, ça va venir !';
 app.innerHTML=`<section class="card rescard"><svg class="ring" viewBox="0 0 120 120"><circle class="tr" cx="60" cy="60" r="52"/><circle class="pr" cx="60" cy="60" r="52" stroke-dasharray="326.7" stroke-dashoffset="326.7"/><text x="60" y="70" text-anchor="middle" id="pc">0%</text></svg><h2>${head}</h2><p>${score} bonne${score>1?'s':''} réponse${score>1?'s':''} sur ${nAns}.${ME?` Enregistré dans l'historique de ${esc(ME.name)}.`:' Entre ton prénom sur l\'accueil pour garder un historique.'}</p>
 <div class="actions"><button class="btn" id="again">Nouvelle série</button>${errs.length?'<button class="btn ghost" id="redo">Refaire mes erreurs</button>':''}</div></section>
 ${errs.length?`<section class="card"><h2>À revoir</h2>${errs.map(({q,user})=>`<div class="err"><span class="muted">${q.it.type==='g'?fmtPrompt(q.prompt):esc(q.ask)}</span>${q.it.type!=='g'?`<span class="${q.pAr?'ar':''}">${esc(q.pAr?showAr(q.prompt):q.prompt)}</span>`:''}<span class="${q.oAr?'ar':''}" style="color:var(--ok)">${esc(q.oAr?showAr(q.ans):q.ans)}</span>${user?`<span class="muted">Ta réponse : ${esc(user)}</span>`:''}</div>`).join('')}</section>`:''}`;
 $('#again').onclick=()=>{window.scrollTo(0,0);homeView()};
 requestAnimationFrame(()=>requestAnimationFrame(()=>{const pr=app.querySelector('.ring .pr');if(pr)pr.style.strokeDashoffset=326.7*(1-pct/100)}));
 {const el=$('#pc'),t0=performance.now();const red=matchMedia('(prefers-reduced-motion: reduce)').matches;const f=t=>{const k=red?1:Math.min(1,(t-t0)/1100);el.textContent=Math.round(pct*(1-Math.pow(1-k,3)))+'%';if(k<1)requestAnimationFrame(f)};requestAnimationFrame(f)}
 const r=$('#redo');if(r)r.onclick=()=>start(null,shuf(items));
}
