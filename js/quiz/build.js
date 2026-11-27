/* Construit une question affichable à partir d'un item (choix multiple à 6, glisser-déposer, lettres, écriture) selon la difficulté ; pièges (distract, mutations, fillOpts) ; vérification des réponses écrites (check).
   Fichier chargé dans l'ordre défini par index.html : voir CLAUDE.md. */
/* ---------- construction des questions ---------- */
function weight(it){const s=STATS()[it.id];if(!s)return 1.6;return Math.max(.4,1+(s.w*2-s.r*.5))}
function sample(P,n){
 const byT={};P.forEach(i=>(byT[i.type]=byT[i.type]||[]).push(i));
 const out=[];const used=new Set();n=Math.min(n,P.length);
 const types=Object.keys(byT);const tw={w:3,p:3,g:3.5,f:1.5};
 while(out.length<n){
  const avail=types.filter(t=>byT[t].some(i=>!used.has(i.id)));if(!avail.length)break;
  let tot=avail.reduce((a,t)=>a+tw[t],0),r=Math.random()*tot,t=avail[0];
  for(const x of avail){r-=tw[x];if(r<=0){t=x;break}}
  const cand=byT[t].filter(i=>!used.has(i.id));let sw=cand.reduce((a,i)=>a+weight(i),0),q=Math.random()*sw,ch=cand[0];
  for(const i of cand){q-=weight(i);if(q<=0){ch=i;break}}
  used.add(ch.id);out.push(ch);
 }
 return out;
}
const dirPick=()=>S.dir==='both'?(Math.random()<.5?'ar-fr':'fr-ar'):S.dir;
const frSet=x=>new Set(x.split('/').map(nFr).filter(Boolean));
function distract(it,field,n=5){
 const mf=frSet(it.fr),ma=nAr(it.ar);
 const same=ITEMS.filter(o=>o.type===it.type&&o.id!==it.id&&inRange(o)&&nAr(o.ar)!==ma&&![...frSet(o.fr)].some(x=>mf.has(x)));
 const key=field==='ar'?nAr:nFr;const mine=key(it[field]);const seen=new Set([mine]);
 const scored=same.map(o=>{let s=sim(key(o[field]),mine)+(Math.abs(o.L-it.L)<=2?.25:0)+Math.random()*.25;
  if(it.type==='p'){const a=new Set(nAr(o.ar).split(' ')),b=nAr(it.ar).split(' ');s+=b.filter(x=>a.has(x)).length/b.length}
  return[s,o]}).sort((a,b)=>b[0]-a[0]);
 const res=[];for(const[,o] of shuf(scored.slice(0,9)).concat(scored.slice(9))){const k=key(o[field]);if(seen.has(k))continue;seen.add(k);res.push(o[field]);if(res.length===n)break}
 return res;
}
function fakeForms(it){
 const b=it.base.replace(TAN,'');
 const f=[b.replace(/ة$/,'ت')+'اتٌ',b+'ونَ',b.replace(/ة$/,'ت')+'انِ',b+'انِ',b.replace(/ة$/,'ت')+'َيْنِ'];
 const other=ITEMS.filter(o=>o.type==='f'&&o.id!==it.id&&o.kind===it.kind&&inRange(o)).map(o=>o.form);
 const seen=new Set([nAr(it.form),nAr(it.base)]);const out=[];
 for(const x of shuf(f).concat(shuf(other))){const k=nAr(x);if(seen.has(k))continue;seen.add(k);out.push(x);if(out.length===5)break}
 return out;
}
const AL='ابتثجحخدذرزسشصضطظعغفقكلمنهوي';
function letterToks(ans){
 const letters=[...nAr(ans).replace(/ه$/,stripH(ans).trim().slice(-1)==='ة'?'ة':'ه')].map(c=>c===' '?'␣':c);
 const plain=[...stripH(ans).replace(/[؟?،.!]/g,'').trim()].map(c=>c===' '?'␣':c);
 const base=plain.length?plain:letters;const extra=shuf([...AL].filter(c=>!base.includes(c))).slice(0,Math.min(4,2+(base.length>5)));
 return shuf(base.concat(extra).map((t,i)=>({t,i})));
}
const SWAP={'ُ':['ِ','َ','ٌ'],'ِ':['ُ','َ','ٍ'],'َ':['ُ','ِ'],'ٌ':['ُ','ٍ','ً'],'ٍ':['ِ','ٌ'],'ً':['ٌ','َ']};
const PART=new Set(['في','علي','من','الي','لا','ما','يا','هذا','هذه','ذلك','تلك','هو','هي','انا','انت','نحن','هم','كم','عند','ل','و','ان','لكن','قبل','بعد','امام','خلف','تحت','مع','اين','كيف','متي','هؤلاء','اولئك','هذان','هاتان','عندي','لي']);
function mutations(ok){
 const out=[];const w=ok.split(' ');
 w.forEach((x,i)=>{const bare=nAr(x);if(PART.has(bare)||bare.length<3||/(ك|كم|كن|ه|ها|هم|هن|ي|نا)$/.test(bare)&&!/[ً-ٍ]/.test(x))return;
  const m=x.match(/([ً-ِ])([.؟!،]?)$/);
  if(m&&SWAP[m[1]])SWAP[m[1]].forEach(r=>{const c=w.slice();c[i]=x.slice(0,m.index)+r+m[2];out.push(c.join(' '))});
  const c=w.slice();
  if(/^ال/.test(x)&&!/^ال[؀-ۿ]ّ/.test(x)){c[i]=x.slice(2);out.push(c.join(' '))}
  else if(/^ال/.test(x)){c[i]=x.slice(2).replace(/^([؀-ۿ])ّ/,'$1');out.push(c.join(' '))}
  else if(/[ً-ٍ]/.test(x)){const st=x.replace(/[ً-ٍ]/g,s=>({'ٌ':'ُ','ٍ':'ِ','ً':'َ'})[s]).replace(/ا([.؟!،]?)$/,'$1');const f=st[0];c[i]=SUN.includes(f)?'ال'+f+'ّ'+st.slice(1):'ال'+st;out.push(c.join(' '))}});
 return shuf(out);
}
function fillOpts(ok,bad,n,pool){
 const seen=new Set([ok]);const res=[];const add=x=>{if(x&&!seen.has(x)&&res.length<n){seen.add(x);res.push(x)}};
 bad.forEach(add);
 if(/[؀-ۿ]/.test(ok)&&!/[a-zé]/i.test(ok))mutations(ok).forEach(add);
 shuf(pool||[]).forEach(add);
 return res;
}
function levelFor(){if(S.diff!=='mix')return S.diff;const r=Math.random();return r<.3?'easy':r<.65?'medium':'hard'}
function build(it){
 if(it.type==='g'){const oAr=/[؀-ۿ]/.test(it.ok)&&!/[a-zé]/i.test(it.ok);
  const near=ITEMS.filter(o=>o.type==='g'&&!o.gen&&o.id!==it.id&&o.L<=Math.max(S.to,it.L)).sort((a,b)=>Math.abs(a.L-it.L)-Math.abs(b.L-it.L));
  const isA=x=>/[\u0600-\u06FF]/.test(x)&&!/[a-zé]/i.test(x);
  const pool=near.flatMap(o=>[o.ok,...o.bad]).filter(x=>oAr?isA(x)&&x.split(' ').length===it.ok.split(' ').length:!isA(x)).slice(0,30);
  const opts=shuf([it.ok,...fillOpts(it.ok,it.bad,5,pool)]);
  return{it,kind:'qcm',ask:it.gen?'Grammaire (générée)':'Grammaire',prompt:it.q,pAr:false,ans:it.ok,opts,six:opts.every(o=>o.length<26),oAr,keepHar:true,ex:it.ex}}
 const lv=levelFor();
 if(it.type==='f'){
  const fmt=lv==='easy'?'qcm':lv==='medium'?'letters':'write';
  const q={it,kind:fmt,ask:`${KIND[it.kind]} de ce mot (${it.fr}) ?`,prompt:it.base,pAr:true,ans:it.form,target:'ar',oAr:true,lv:{easy:'Facile · 6 choix',medium:'Moyen',hard:'Difficile'}[lv]};
  if(fmt==='qcm'){q.opts=shuf([it.form,...fillOpts(it.form,fakeForms(it),5,[])]);q.six=true;q.keepHar=true}if(fmt==='letters')q.toks=letterToks(it.form);return q;
 }
 const d=dirPick();const src=d==='ar-fr'?'ar':'fr',tgt=d==='ar-fr'?'fr':'ar';
 let fmt=lv==='easy'?'qcm':lv==='hard'?'write':(it.type==='p'?'build':tgt==='ar'?'letters':'qcm6');
 const ask=(it.type==='w'?'Traduis ce mot':'Traduis cette phrase')+(tgt==='ar'?' en arabe':' en français');
 const q={it,kind:fmt,ask,prompt:it[src],pAr:src==='ar',ans:it[tgt],target:tgt,oAr:tgt==='ar',lv:{easy:'Facile · 6 choix',medium:'Moyen',hard:'Difficile'}[lv]};
 if(fmt==='qcm'){q.opts=shuf([it[tgt],...distract(it,tgt,5)]);q.six=q.opts.every(o=>o.length<26)}
 if(fmt==='qcm6'){q.kind='qcm';q.opts=shuf([it[tgt],...distract(it,tgt,5)]);q.six=q.opts.every(o=>o.length<26)}
 if(fmt==='letters')q.toks=letterToks(it[tgt]);
 if(fmt==='build'){
  const toks=it[tgt].split(/\s+/);const extra=[];const own=new Set(toks.map(t=>tgt==='ar'?nAr(t):nFr(t)));
  for(const o of shuf(ITEMS.filter(o=>o.type==='p'&&o.id!==it.id&&inRange(o)))){for(const t of o[tgt].split(/\s+/)){const k=tgt==='ar'?nAr(t):nFr(t);if(k&&!own.has(k)){own.add(k);extra.push(t);break}}if(extra.length>=Math.min(3,1+toks.length/4|0))break}
  q.toks=shuf(toks.concat(extra).map((t,i)=>({t,i})));
 }
 return q;
}

/* ---------- vérification ---------- */
function check(q,user){
 if(q.target==='fr'){
  const u=nFr(user);if(!u)return 0;const alts=q.ans.split('/').map(nFr).filter(Boolean);
  if(q.it.type==='p'){const s=sim(u,nFr(q.ans));return s>=.86?1:s>=.7?.5:0}
  const homo=S.har?[]:ITEMS.filter(o=>o.type==='w'&&nAr(o.ar)===nAr(q.it.ar)).flatMap(o=>o.fr.split('/').map(nFr));
  if(alts.includes(u)||homo.includes(u))return 1;return alts.some(a=>a.length>4&&sim(a,u)>=.85)?.5:0;
 }
 const u=nAr(user);if(!u)return 0;const a=nAr(q.ans);
 const strip=x=>x.split(' ').map(w=>w.replace(/^(و?)ال/,'$1')).join(' ');
 if(u===a||strip(u)===strip(a))return 1;
 if(q.it.type==='p'){const s=sim(u,a);return s>=.92?1:s>=.75?.5:0}
 return sim(strip(u),strip(a))>=.8&&a.length>3?.5:0;
}
