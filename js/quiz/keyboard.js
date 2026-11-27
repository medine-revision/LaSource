/* Clavier arabe à l'écran (téléphone) et conversion du clavier physique du PC en disposition arabe standard (CODE/SCODE).
   Fichier chargé dans l'ordre défini par index.html : voir CLAUDE.md. */
/* ---------- clavier arabe ---------- */
const KB_ROWS=[['ذ','1','2','3','4','5','6','7','8','9','0'],['ض','ص','ث','ق','ف','غ','ع','ه','خ','ح','ج','د'],['ش','س','ي','ب','ل','ا','ت','ن','م','ك','ط'],['ئ','ء','ؤ','ر','لا','ى','ة','و','ز','ظ']];
const KB_EXTRA=['أ','إ','آ','؟','،'];
const HARK=['َ','ُ','ِ','ْ','ّ','ً','ٌ','ٍ'];
const CODE={Backquote:'ذ',KeyQ:'ض',KeyW:'ص',KeyE:'ث',KeyR:'ق',KeyT:'ف',KeyY:'غ',KeyU:'ع',KeyI:'ه',KeyO:'خ',KeyP:'ح',BracketLeft:'ج',BracketRight:'د',KeyA:'ش',KeyS:'س',KeyD:'ي',KeyF:'ب',KeyG:'ل',KeyH:'ا',KeyJ:'ت',KeyK:'ن',KeyL:'م',Semicolon:'ك',Quote:'ط',KeyZ:'ئ',KeyX:'ء',KeyC:'ؤ',KeyV:'ر',KeyB:'لا',KeyN:'ى',KeyM:'ة',Comma:'و',Period:'ز',Slash:'ظ',Space:' '};
const SCODE={KeyH:'أ',KeyY:'إ',KeyN:'آ',KeyB:'لآ',KeyG:'لأ',KeyT:'لإ',KeyQ:'َ',KeyW:'ً',KeyE:'ُ',KeyR:'ٌ',KeyA:'ِ',KeyS:'ٍ',KeyX:'ْ',Backquote:'ّ',Slash:'؟',KeyK:'،'};
const isTouch=matchMedia('(pointer: coarse)').matches;
function insert(inp,txt){const s=inp.selectionStart??inp.value.length,e=inp.selectionEnd??inp.value.length;inp.value=inp.value.slice(0,s)+txt+inp.value.slice(e);const p=s+txt.length;try{inp.setSelectionRange(p,p)}catch(_){}}
function backspace(inp){const s=inp.selectionStart??inp.value.length,e=inp.selectionEnd??inp.value.length;if(s!==e){inp.value=inp.value.slice(0,s)+inp.value.slice(e);try{inp.setSelectionRange(s,s)}catch(_){}return}if(!s)return;inp.value=inp.value.slice(0,s-1)+inp.value.slice(s);try{inp.setSelectionRange(s-1,s-1)}catch(_){}}
function kbHTML(){
 return `<div class="kb" id="kb">${KB_ROWS.slice(1).map(r=>`<div class="r" style="grid-template-columns:repeat(${r.length},minmax(0,1fr))">${r.map(c=>`<button type="button" data-k="${c}">${c}</button>`).join('')}</div>`).join('')}
 <div class="r" style="grid-template-columns:repeat(6,minmax(0,1fr)) minmax(0,2.2fr)"><button type="button" data-k="ذ">ذ</button>${KB_EXTRA.map(c=>`<button type="button" data-k="${c}">${c}</button>`).join('')}<button type="button" class="fn" data-k="BS">⌫ effacer</button></div>
 <div class="r" style="grid-template-columns:minmax(0,1.4fr) minmax(0,4fr) minmax(0,1.4fr)"><button type="button" class="fn" data-k="HK">harakāt</button><button type="button" class="fn" data-k=" ">espace</button><button type="button" class="fn" data-k="OK">valider</button></div>
 <div class="r" id="hk" style="display:none;grid-template-columns:repeat(8,minmax(0,1fr))">${HARK.map(c=>`<button type="button" class="hk" data-k="${c}">ـ${c}</button>`).join('')}</div></div>`;
}
function wireKb(inp,submit){
 const kb=$('#kb');if(!kb)return;
 kb.addEventListener('pointerdown',e=>{if(e.target.closest('button'))e.preventDefault()});
 kb.onclick=e=>{const b=e.target.closest('button');if(!b||answered)return;const k=b.dataset.k;
  if(k==='BS')backspace(inp);else if(k==='HK'){const h=$('#hk');h.style.display=h.style.display==='none'?'grid':'none';return}else if(k==='OK'){submit();return}else insert(inp,k)};
 kb.style.display=S.kb?'grid':'none';
}
