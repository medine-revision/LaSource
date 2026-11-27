/* Glisser-déposer des tuiles (mots ou lettres) au doigt ou à la souris, avec repli au simple toucher.
   Fichier chargé dans l'ordre défini par index.html : voir CLAUDE.md. */
/* ---------- glisser-déposer ---------- */
function dnd(q,onChange){
 const dst=$('#dst'),src=$('#src');let chosen=[];const cls=q.oAr?'ar':'';const lab=t=>q.oAr?(t.t==='␣'?'␣':showAr(t.t)):t.t;
 const draw=()=>{src.innerHTML=q.toks.filter(t=>!chosen.includes(t)).map(t=>`<button type="button" class="t ${cls}" data-i="${t.i}">${esc(lab(t))}</button>`).join('');
  dst.innerHTML=chosen.map(t=>`<button type="button" class="t ${cls}" data-i="${t.i}">${esc(lab(t))}</button>`).join('')||`<span class="muted">Glisse ou touche les ${q.kind==='letters'?'lettres':'mots'} dans l'ordre</span>`;onChange&&onChange(chosen)};
 draw();
 const byI=i=>q.toks.find(t=>t.i==i);
 let drag=null;
 const onDown=e=>{const b=e.target.closest('.t');if(!b||answered)return;e.preventDefault();drag={b,tok:byI(b.dataset.i),from:b.parentElement.id,x:e.clientX,y:e.clientY,moved:false,el:null};b.setPointerCapture&&b.setPointerCapture(e.pointerId)};
 const onMove=e=>{if(!drag)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;
  if(!drag.moved&&Math.hypot(dx,dy)>6){drag.moved=true;drag.el=drag.b.cloneNode(true);drag.el.classList.add('drag');document.body.appendChild(drag.el);drag.b.classList.add('ghost')}
  if(drag.moved){drag.el.style.left=e.clientX+'px';drag.el.style.top=e.clientY+'px';const over=document.elementFromPoint(e.clientX,e.clientY);dst.classList.toggle('over',!!(over&&over.closest('#dst')))}};
 const onUp=e=>{if(!drag)return;const d=drag;drag=null;dst.classList.remove('over');
  if(!d.moved){if(d.from==='src')chosen.push(d.tok);else chosen=chosen.filter(t=>t!==d.tok);draw();return}
  d.el.remove();const over=document.elementFromPoint(e.clientX,e.clientY);
  if(over&&over.closest('#dst')){chosen=chosen.filter(t=>t!==d.tok);const kids=[...dst.querySelectorAll('.t')].filter(k=>byI(k.dataset.i)!==d.tok);
   const rtl=q.oAr;let idx=kids.length;
   for(let k=0;k<kids.length;k++){const r=kids[k].getBoundingClientRect();if(e.clientY<r.top-4)continue;if(e.clientY>r.bottom+4)continue;const mid=r.left+r.width/2;if(rtl?e.clientX>mid:e.clientX<mid){idx=k;break}}
   for(let k=0;k<kids.length&&idx===kids.length;k++){const r=kids[k].getBoundingClientRect();if(e.clientY<r.top-4){idx=k;break}}
   const order=kids.map(k=>byI(k.dataset.i));order.splice(idx,0,d.tok);chosen=order}
  else if(over&&over.closest('#src')){chosen=chosen.filter(t=>t!==d.tok)}
  draw()};
 [dst,src].forEach(z=>{z.addEventListener('pointerdown',onDown);z.addEventListener('pointermove',onMove);z.addEventListener('pointerup',onUp);z.addEventListener('pointercancel',()=>{if(drag){drag.el&&drag.el.remove();drag.b.classList.remove('ghost');drag=null}})});
 return{get:()=>chosen,clear:()=>{chosen=[];draw()}};
}
