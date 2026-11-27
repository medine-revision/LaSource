/* Mode jour/nuit et lecture audio (synthèse vocale arabe ; boutons « Écouter » masqués si aucune voix arabe).
   Fichier chargé dans l'ordre défini par index.html : voir CLAUDE.md. */
/* ---------- thème, voix ---------- */
let theme=LS.get('m1theme',null);
function applyTheme(){const r=document.documentElement;if(theme)r.dataset.theme=theme;else delete r.dataset.theme;const dark=theme?theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
 $('#theme').innerHTML=dark?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>';
 $('#theme').setAttribute('aria-label',dark?'Mode jour':'Mode nuit')}
$('#theme').onclick=()=>{const dark=theme?theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches;theme=dark?'light':'dark';LS.set('m1theme',theme);applyTheme()};
applyTheme();
const showAr=s=>S.har?s:stripH(s);
const SPK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>';
let arVoice=null;
function loadVoices(){try{const v=speechSynthesis.getVoices();arVoice=v.find(x=>/^ar/i.test(x.lang))||null}catch(e){arVoice=null}document.body.classList.toggle('noar',!arVoice)}
document.body.classList.add('noar');try{loadVoices();speechSynthesis.onvoiceschanged=loadVoices}catch(e){}
function speak(t){if(!arVoice)return;try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang='ar-SA';if(arVoice)u.voice=arVoice;u.rate=.8;speechSynthesis.speak(u)}catch(e){}}
const sayBtn=t=>`<button class="say" type="button" data-say="${esc(t)}">${SPK}<span>Écouter</span></button>`;
document.addEventListener('click',e=>{const b=e.target.closest('[data-say]');if(b)speak(b.dataset.say)});
