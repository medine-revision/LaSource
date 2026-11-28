/* Réglages (S, sauvés dans localStorage 'm1set'), profil invité (GP, par défaut) et profils par prénom FACULTATIFS (ME), statistiques et historique, synchronisation optionnelle via la base 'db' de claude.ai (DB = null sur GitHub Pages).
   Fichier chargé dans l'ordre défini par index.html : voir CLAUDE.md. */
/* ---------- état, profils ---------- */
const S=Object.assign({pick:'lesson',from:1,to:3,mode:'mix',dir:'both',diff:'mix',count:20,har:true,kb:true,pckb:true},LS.get('m1set',{}));
if(S.fmt)delete S.fmt;
const save=()=>LS.set('m1set',S);
let DB=null,dbState='wait';
let ME=null; // {name,key,stats,hist}
const keyOf=n=>(n.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,60))||'p'+[...n].reduce((a,c)=>a*31+c.charCodeAt(0)>>>0,7);
/* Profil « invité » : utilisé tant qu'aucun prénom n'est choisi (cas normal : un élève = un téléphone). */
const GP=LS.get('m1p:guest',null)||{name:'',key:'guest',stats:LS.get('m1stats',{}),hist:[]};
const CUR=()=>ME||GP;
const STATS=()=>CUR().stats;
let saving=false,pend=false;
async function persist(){
 if(!ME){LS.set('m1p:guest',GP);return}
 LS.set('m1p:'+ME.key,ME);
 if(!DB)return;if(saving){pend=true;return}saving=true;
 try{await DB.doc('profiles/'+ME.key).set({name:ME.name,stats:ME.stats,hist:ME.hist.slice(-150),updated:Date.now()})}catch(e){if(e&&e.code==='unavailable'){try{await new Promise(r=>setTimeout(r,800+Math.random()*700));await DB.doc('profiles/'+ME.key).set({name:ME.name,stats:ME.stats,hist:ME.hist.slice(-150),updated:Date.now()})}catch(_){}}}
 saving=false;if(pend){pend=false;persist()}
}
async function login(name){
 name=name.trim().slice(0,40);if(!name)return;const key=keyOf(name);
 let p=LS.get('m1p:'+key,null);
 if(DB){try{const s=await Promise.race([DB.doc('profiles/'+key).get(),new Promise((_,r)=>setTimeout(()=>r('t'),10000))]);if(s.exists){const d=s.data();p={name:String(d.name||name),key,stats:JSON.parse(JSON.stringify(d.stats||{})),hist:Array.isArray(d.hist)?d.hist.slice():[]}}}catch(e){}}
 const fresh=!p;
 if(!p)p={name,key,stats:{},hist:[]};
 ME=p;LS.set('m1me',name);
 if(fresh&&Object.keys(GP.stats).length){ME.stats=Object.assign({},GP.stats);ME.hist=GP.hist.slice()}
 if(fresh)persist();
 render();
}
function logout(){ME=null;LS.set('m1me',null);render()}
let KNOWN=[];
async function loadNames(){
 const loc=[];try{for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.startsWith('m1p:')&&k!=='m1p:guest'){const p=LS.get(k,null);if(p&&p.name)loc.push(p.name)}}}catch(e){}
 let rem=[];if(DB){try{const s=await Promise.race([DB.collection('profiles').limit(200).get(),new Promise((_,r)=>setTimeout(()=>r('t'),10000))]);rem=s.docs.map(d=>String((d.data()||{}).name||'')).filter(Boolean)}catch(e){}}
 const seen=new Set();KNOWN=rem.concat(loc).filter(n=>{const k=keyOf(n);if(seen.has(k))return false;seen.add(k);return true}).sort((a,b)=>a.localeCompare(b,'fr'));
 if(view==='train'&&!Q.length)homeView();
}
