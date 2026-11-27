/* Générateur automatique de questions de grammaire (GENS) à partir du vocabulaire : démonstratifs, attribut, épithète, prépositions, iḍāfa, suffixes, conjugaison, duel, كم, nombres, pluriels, couleurs. Catégories de noms (CAT/ADJOK) pour éviter les phrases absurdes.
   Fichier chargé dans l'ordre défini par index.html : voir CLAUDE.md. */
/* ---------- générateur de questions de grammaire ---------- */
const TAN=/[ًٌٍ]/g,SUN='تثدذرزسشصضطظلن';
const stem=s=>s.replace(TAN,'').replace(/[َُِ]$/,'');
const tStem=s=>stem(s).replace(/ة$/,'ت');
const nom=s=>stem(s)+'ُ',gen=s=>stem(s)+'ِ',genI=s=>stem(s)+'ٍ';
const accI=s=>{const st=stem(s);return st.endsWith('ة')?st+'ً':st+'ًا'};
const def=s=>{const st=stem(s);const c=st[0];return SUN.includes(c)?'ال'+c+'ّ'+st.slice(1):'ال'+st};
const defN=s=>def(s)+'ُ',defG=s=>def(s)+'ِ';
const FEM=new Set(['أُمٌّ','بِنْتٌ','أُخْتٌ','عَيْنٌ','أُذُنٌ','يَدٌ','رِجْلٌ','شَمْسٌ']);
const ADJ=[['كَبِيرٌ','كَبِيرَةٌ','grand',3],['صَغِيرٌ','صَغِيرَةٌ','petit',3],['جَدِيدٌ','جَدِيدَةٌ','nouveau',3],['قَدِيمٌ','قَدِيمَةٌ','ancien',3],['جَمِيلٌ','جَمِيلَةٌ','beau',3],['نَظِيفٌ','نَظِيفَةٌ','propre',3],['وَسِخٌ','وَسِخَةٌ','sale',3],['بَعِيدٌ','بَعِيدَةٌ','loin',3],['قَرِيبٌ','قَرِيبَةٌ','proche',3],['مَكْسُورٌ','مَكْسُورَةٌ','cassé',3],['مَفْتُوحٌ','مَفْتُوحَةٌ','ouvert',3],['ثَقِيلٌ','ثَقِيلَةٌ','lourd',3],['خَفِيفٌ','خَفِيفَةٌ','léger',3],['طَوِيلٌ','طَوِيلَةٌ','long',3],['قَصِيرٌ','قَصِيرَةٌ','court',3],['مُغْلَقٌ','مُغْلَقَةٌ','fermé',5],['سَرِيعٌ','سَرِيعَةٌ','rapide',6],['سَهْلٌ','سَهْلَةٌ','facile',9],['صَعْبٌ','صَعْبَةٌ','difficile',9],['رَخِيصٌ','رَخِيصَةٌ','bon marché',17],['واسِعٌ','واسِعَةٌ','spacieux',21]];
const COL=[['أَحْمَرُ','حَمْراءُ','rouge'],['أَخْضَرُ','خَضْراءُ','vert'],['أَصْفَرُ','صَفْراءُ','jaune'],['أَزْرَقُ','زَرْقاءُ','bleu'],['أَبْيَضُ','بَيْضاءُ','blanc'],['أَسْوَدُ','سَوْداءُ','noir']];
const NOTN=new Set(['امْرَأَةٌ','واحِدٌ','واحِدَةٌ','ثَلاثَةٌ','أَرْبَعَةٌ','خَمْسَةٌ','سِتَّةٌ','سَبْعَةٌ','ثَمانِيَةٌ','تِسْعَةٌ','عَشَرَةٌ','ثَلاثٌ','عَشْرٌ','مُخْتَلِفٌ','حارٌّ','بارِدٌ','جالِسٌ','واقِفٌ','حُلْوٌ','مَرِيضٌ','غَنِيٌّ','فَقِيرٌ','لَذِيذٌ','مُجْتَهِدٌ','شَهِيرٌ','قَوِيٌّ','ضَعِيفٌ','كَثِيرٌ','قَلِيلٌ','يابانِيٌّ','مُسْلِمٌ','نَصْرانِيٌّ','أَبٌ','أَخٌ','لَبَنٌ','ماءٌ','سُكَّرٌ','شايٌ','لَحْمٌ','وَرَقٌ','تُفّاحٌ',...ADJ.map(a=>a[0])]);
const OWN=new Set(['مُدَرِّسٌ','طالِبٌ','طَبِيبٌ','تاجِرٌ','رَجُلٌ','وَلَدٌ','مُدِيرٌ','إِمامٌ','مُهَنْدِسٌ','فَلّاحٌ','بِنْتٌ','أُخْتٌ','أُمٌّ','مَسْجِدٌ','بَيْتٌ','مَدْرَسَةٌ','جامِعَةٌ','فَصْلٌ','غُرْفَةٌ','سَيّارَةٌ','مُؤَذِّنٌ','طَبِيبَةٌ','مُمَرِّضَةٌ','صَدِيقٌ','زَمِيلٌ','شَيْخٌ','عَمٌّ','خالٌ','أُسْتاذٌ','مَدِينَةٌ','قَرْيَةٌ','شَرِكَةٌ','مُفَتِّشٌ']);
const CAT={hum:'مُدَرِّسٌ طالِبٌ طَبِيبٌ تاجِرٌ رَجُلٌ وَلَدٌ مُدِيرٌ إِمامٌ مُهَنْدِسٌ فَلّاحٌ بِنْتٌ أُخْتٌ أُمٌّ مُؤَذِّنٌ طَبِيبَةٌ مُمَرِّضَةٌ صَدِيقٌ زَمِيلٌ شَيْخٌ عَمٌّ خالٌ أُسْتاذٌ مُفَتِّشٌ عَمَّةٌ خالَةٌ فَتاةٌ طِفْلٌ ابْنٌ زَوْجٌ ضَيْفٌ حاجٌّ راكِبٌ عالِمٌ وَزِيرٌ',
 place:'بَلَدٌ بَيْتٌ مَسْجِدٌ مَدْرَسَةٌ جامِعَةٌ فَصْلٌ غُرْفَةٌ مَطْبَخٌ حَمّامٌ سُوقٌ دُكّانٌ مَدِينَةٌ قَرْيَةٌ شارِعٌ حَدِيقَةٌ مَكْتَبَةٌ مَطْعَمٌ حَقْلٌ فُنْدُقٌ حَيٌّ شَرِكَةٌ كُلِّيَّةٌ مِرْحاضٌ',
 veh:'سَيّارَةٌ دَرّاجَةٌ طائِرَةٌ حافِلَةٌ',
 ani:'كَلْبٌ قِطٌّ حِمارٌ حِصانٌ جَمَلٌ دِيكٌ بَقَرَةٌ دَجاجَةٌ بَطَّةٌ ناقَةٌ عُصْفُورٌ طائِرٌ',
 body:'عَيْنٌ أُذُنٌ أَنْفٌ فَمٌ يَدٌ رِجْلٌ',
 abs:'دَرْسٌ كَلِمَةٌ لُغَةٌ اخْتِبارٌ سُؤالٌ',
 nature:'جَبَلٌ بَحْرٌ نَهْرٌ حَقْلٌ',
 cont:'حَقِيبَةٌ ثَلّاجَةٌ قِدْرٌ كُوبٌ جَيْبٌ فِنْجانٌ دُرْجٌ',
 surf:'مَكْتَبٌ سَرِيرٌ كُرْسِيٌّ سَبُّورَةٌ',
 open:'بابٌ نافِذَةٌ حَقِيبَةٌ دُكّانٌ مَسْجِدٌ مَكْتَبَةٌ ثَلّاجَةٌ مَطْعَمٌ',
 skip:'دَقِيقَةٌ قَهْوَةٌ فاكِهَةٌ بَيْضَةٌ رِيالٌ قِرْشٌ اسْمٌ عِيدٌ سَنَةٌ شَهْرٌ أُسْبُوعٌ يَوْمٌ ثَمَنٌ نِصْفٌ زِيارَةٌ دِينٌ رَبٌّ رَسُولٌ نَبِيٌّ حالٌ لَوْنٌ قِبْلَةٌ رَكْعَةٌ حَرْفٌ نَجْمٌ قَمَرٌ شَمْسٌ حَجَرٌ إِمامٌ'};
const CATS={};for(const[k,v] of Object.entries(CAT))v.split(' ').forEach(w=>{(CATS[w]=CATS[w]||new Set()).add(k)});
const catOf=a=>{const c=CATS[a];if(!c)return 'obj';for(const k of ['hum','nature','place','veh','ani','body','abs','skip'])if(c.has(k))return k;return 'obj'};
const isOpen=a=>!!(CATS[a]&&CATS[a].has('open'));
const hasTag=(a,t)=>!!(CATS[a]&&CATS[a].has(t));
/* Prépositions : on n'associe que des noms qui ont du sens (« dans la chambre », pas « vers le sac »). */
const PREPS=[['في','dans',n=>['place','veh'].includes(catOf(n.ar))||hasTag(n.ar,'cont')],
 ['عَلىٰ','sur',n=>hasTag(n.ar,'surf')],
 ['مِنْ','de (provenance)',n=>catOf(n.ar)==='place'],
 ['إِلىٰ','vers',n=>['place','hum'].includes(catOf(n.ar))]];
/* Iḍāfa : « la porte de la mosquée », « la voiture du médecin » — pas « la maison de l'école ». */
const BLD='بَيْتٌ مَسْجِدٌ مَدْرَسَةٌ جامِعَةٌ فُنْدُقٌ مَطْعَمٌ مَكْتَبَةٌ دُكّانٌ شَرِكَةٌ كُلِّيَّةٌ';
const PARTS={'بابٌ':BLD+' سَيّارَةٌ غُرْفَةٌ فَصْلٌ','نافِذَةٌ':BLD+' سَيّارَةٌ غُرْفَةٌ فَصْلٌ','مِفْتاحٌ':BLD+' سَيّارَةٌ غُرْفَةٌ','غُرْفَةٌ':'بَيْتٌ فُنْدُقٌ','مَطْبَخٌ':'بَيْتٌ مَطْعَمٌ فُنْدُقٌ','حَمّامٌ':'بَيْتٌ مَدْرَسَةٌ فُنْدُقٌ','حَدِيقَةٌ':'بَيْتٌ مَدْرَسَةٌ مَسْجِدٌ جامِعَةٌ','مُدِيرٌ':'مَدْرَسَةٌ جامِعَةٌ شَرِكَةٌ كُلِّيَّةٌ فُنْدُقٌ مَطْعَمٌ','سَبُّورَةٌ':'فَصْلٌ مَدْرَسَةٌ','عَجَلَةٌ':'سَيّارَةٌ دَرّاجَةٌ حافِلَةٌ','إِمامٌ':'مَسْجِدٌ','مُؤَذِّنٌ':'مَسْجِدٌ'};
const POSS=new Set('بَيْتٌ غُرْفَةٌ حَدِيقَةٌ دُكّانٌ مَكْتَبٌ'.split(' '));
/* « la porte de la mosquée », « le livre de l'enseignant » — jamais « la montagne du vieil homme ». */
const idafaOk=(A,B)=>PARTS[A.ar]?PARTS[A.ar].split(' ').includes(B.ar):catOf(B.ar)==='hum'&&A.ar!==B.ar&&(['obj','veh','ani'].includes(catOf(A.ar))||POSS.has(A.ar));
/* Noms « comptables / possédables » (pas soleil, lune, nom de fête…) */
const FAMILY=new Set('أُمٌّ عَمٌّ خالٌ عَمَّةٌ خالَةٌ زَوْجٌ'.split(' '));
const plain=N=>N.filter(x=>catOf(x.ar)!=='skip'&&!FAMILY.has(x.ar));
const ADJOK={'grand':'hum place veh ani body obj nature','petit':'hum place veh ani body obj nature','nouveau':'hum place veh obj','ancien':'place veh obj','beau':'hum place veh ani body obj nature','propre':'place veh obj body','sale':'place veh obj body','loin':'place nature','proche':'place nature','cassé':'veh obj','lourd':'obj','léger':'obj','long':'hum obj','court':'hum obj','rapide':'veh ani','facile':'abs','difficile':'abs','bon marché':'veh obj','spacieux':'place'};
const adjFits=(a,n)=>{if(a[2]==='ouvert'||a[2]==='fermé')return isOpen(n.ar);const c=catOf(n.ar);return c!=='skip'&&(ADJOK[a[2]]||'').split(' ').includes(c)};
function pairNA(N){const As=ADJ.filter(x=>x[3]<=S.to);for(let t=0;t<40;t++){const n=pick(N),a=pick(As);if(adjFits(a,n))return[n,a]}return[null,null]}
const ADJBASE=new Set(ADJ.map(a=>a[0]).concat(['غَنِيٌّ','فَقِيرٌ','مُجْتَهِدٌ','قَوِيٌّ','ضَعِيفٌ','قَدِيمٌ']));
const NUM_M=['ثَلاثَةُ','أَرْبَعَةُ','خَمْسَةُ','سِتَّةُ','سَبْعَةُ','ثَمانِيَةُ','تِسْعَةُ','عَشَرَةُ'],NUM_F=['ثَلاثُ','أَرْبَعُ','خَمْسُ','سِتُّ','سَبْعُ','ثَمانِي','تِسْعُ','عَشْرُ'];
const PRON=[['أَنا','je',15,'ْتُ'],['أَنْتَ','tu (homme)',15,'ْتَ'],['أَنْتِ','tu (femme)',15,'ْتِ'],['هُوَ','il',4,'َ'],['هِيَ','elle',12,'َتْ'],['نَحْنُ','nous',14,'ْنا'],['أَنْتُمْ','vous (hommes)',14,'ْتُمْ'],['أَنْتُنَّ','vous (femmes)',15,'ْتُنَّ'],['هُمْ','ils',13,'ُوا'],['هُنَّ','elles',13,'ْنَ']];
const VERB=[['ذَهَ','ب','aller',4],['خَرَ','ج','sortir',4],['جَلَ','س','s\'asseoir',8],['رَجَ','ع','revenir',15]];
const SUF=[['ي','mon / ma',10],['كَ','ton / ta (à un homme)',10],['كِ','ton / ta (à une femme)',10],['هُ','son / sa (à lui)',10],['ها','son / sa (à elle)',10],['نا','notre',14],['كُمْ','votre (hommes)',14],['هُمْ','leur (à eux)',14],['كُنَّ','votre (femmes)',15],['هُنَّ','leur (à elles)',15]];
const withSuf=(s,suf)=>suf==='ي'?tStem(s)+'ِي':tStem(s)+'ُ'+suf;
const COLF={rouge:'rouge',vert:'vert(e)',jaune:'jaune',bleu:'bleu(e)',blanc:'blanc(he)',noir:'noir(e)'};
const adjFr=(a,n)=>catOf(n.ar)==='hum'&&a[2]==='long'?'grand':catOf(n.ar)==='hum'&&a[2]==='court'?'petit':a[2];
const fe=w=>/\s/.test(w)||/e$/.test(w)||w==='loin'?w:w+'(e)';
function nouns(){
 return ITEMS.filter(i=>i.type==='w'&&i.L<=S.to&&!/\s/.test(i.ar)&&/ٌ/.test(i.ar)&&!i.ar.startsWith('ال')&&!NOTN.has(i.ar))
  .map(i=>({ar:i.ar,fr:i.fr.split('/')[0].replace(/\s*\(.*\)/,''),f:FEM.has(i.ar)||stem(i.ar).endsWith('ة'),L:i.L}))
  .filter(n=>S.to>=6||!n.f);
}
const agree=(a,f)=>f?a[1]:a[0];
function mk(q,ok,bad,ex,L,g){const seen=new Set([ok]);const b=[];for(const x of bad){if(x&&!seen.has(x)){seen.add(x);b.push(x)}}if(b.length<3)return null;return{id:'G'+g,type:'g',gen:true,L,q,ok,bad:b.slice(0,5),ex}}
const GENS=[
 {min:1,f(N){const n=pick(N);const far=S.to>=2&&Math.random()<.4&&(!n.f||S.to>=7);const D4=[['هٰذا',1,0,0],['هٰذِهِ',6,1,0],['ذٰلِكَ',2,0,1],['تِلْكَ',7,1,1]].filter(d=>d[1]<=S.to);
  const ok=D4.find(d=>d[2]===(n.f?1:0)&&d[3]===(far?1:0))[0]+' '+n.ar;
  const bad=D4.map(d=>d[0]+' '+n.ar).concat([S.to>=8?(far?'ذٰلِكَ':'هٰذا')+' '+defN(n.ar):n.ar+' هٰذا',(n.f?'هٰذا':'هٰذِهِ')+' '+nom(n.ar),'هٰذا '+nom(n.ar)]);
  return mk(`« ${far?'Cela (loin)':'Ceci'} est … » avec ${n.ar} (${n.fr})`,ok,shuf(bad),`${n.ar} est ${n.f?'féminin':'masculin'} et ${far?'éloigné':'proche'}.`,n.L,'dem')}},
 {min:3,f(N){const[n,a]=pairNA(N);if(!n)return null;const ok=defN(n.ar)+' '+agree(a,n.f);
  return mk(`« Le/la ${n.fr} est ${fe(adjFr(a,n))} » — ${n.ar} + ${a[0]}`,ok,shuf([defN(n.ar)+' '+def(agree(a,n.f))+'ُ',n.ar+' '+agree(a,n.f),S.to>=6?defN(n.ar)+' '+agree(a,!n.f):defN(n.ar)+' '+nom(agree(a,n.f)),defN(n.ar)+' '+nom(agree(a,n.f))]),'Phrase nominale : sujet défini + attribut indéfini (tanwīn), accordé en genre.',n.L,'attr')}},
 {min:9,f(N){const[n,a]=pairNA(N);if(!n)return null;const A=agree(a,n.f),W=agree(a,!n.f);const d=Math.random()<.5;
  const ok=d?defN(n.ar)+' '+def(A)+'ُ':n.ar+' '+A;
  const bad=d?[defN(n.ar)+' '+A,nom(n.ar)+' '+def(A)+'ُ',defN(n.ar)+' '+def(W)+'ُ']:[n.ar+' '+def(A)+'ُ',n.ar+' '+W,defN(n.ar)+' '+A];
  return mk(`« ${d?'le/la':'un(e)'} ${n.fr} ${fe(adjFr(a,n))} » (adjectif épithète)`,ok,shuf(bad),"L'épithète suit le nom : même définitude, même genre, même cas.",n.L,'epi')}},
 {min:4,f(N){const P=pick(PREPS);const C=N.filter(P[2]);if(!C.length)return null;const n=pick(C);const p=P[0]==='مِنْ'?'مِنَ':P[0];
  return mk(`« ${P[1]} + le/la ${n.fr} » (${n.ar})`,p+' '+defG(n.ar),shuf([p+' '+defN(n.ar),p+' '+def(n.ar)+'َ',p+' '+gen(n.ar),P[0]==='مِنْ'?'مِنْ '+defN(n.ar):p+' '+genI(n.ar)]),'Après une préposition : nom au génitif (ـِ).'+(P[0]==='مِنْ'?' مِنْ + ال → مِنَ.':''),n.L,'jar')}},
 {min:5,f(N){let A,B;for(let t=0;t<40&&!B;t++){A=pick(N);const NB=N.filter(x=>x.ar!==A.ar&&idafaOk(A,x));if(NB.length)B=pick(NB)}if(!B)return null;
  return mk(`« ${A.fr} de ${B.fr} » (le/la… de…) — ${A.ar} + ${B.ar}`,nom(A.ar)+' '+defG(B.ar),shuf([defN(A.ar)+' '+defG(B.ar),A.ar+' '+defG(B.ar),nom(A.ar)+' '+defN(B.ar)]),'Iḍāfa : 1er nom sans ال ni tanwīn, 2e nom au génitif.',Math.max(A.L,B.L),'idafa')}},
 {min:10,f(N){const n=pick(N.filter(x=>!/[يى]ّ?$/.test(stem(x.ar))&&(catOf(x.ar)!=='skip'||x.ar==='اسْمٌ')));if(!n)return null;const av=SUF.filter(s=>s[2]<=S.to);const s=pick(av);const ok=withSuf(n.ar,s[0]);
  return mk(`« ${s[1]} ${n.fr} » (${n.ar})`,ok,shuf(shuf(av.filter(x=>x!==s)).slice(0,2).map(x=>withSuf(n.ar,x[0])).concat(['ال'+ok,tStem(n.ar)+'ٌ'+s[0]])),`Suffixe ـ${s[0]} ; pas de ال${stem(n.ar).endsWith('ة')?', et ة devient ت':''}.`,n.L,'suf')}},
 {min:13,f(){const v=pick(VERB.filter(x=>x[3]<=S.to));const av=PRON.filter(p=>p[2]<=S.to);const p=pick(av);const F=x=>v[0]+v[1]+x[3];
  return mk(`Passé de ${v[0]+v[1]+'َ'} (${v[2]}) avec ${p[0]} (${p[1]})`,F(p),shuf(shuf(av.filter(x=>x!==p)).map(F)),`${p[0]} → terminaison ـ${p[3]}`,Math.max(p[2],v[3]),'conj')}},
 {min:18,f(N){const n=pick(plain(N));if(!n)return null;const t=tStem(n.ar);const pl=ITEMS.find(i=>i.type==='f'&&i.kind==='pl'&&i.base===n.ar);
  return mk(`« deux ${n.fr} » (sujet de la phrase) — ${n.ar}`,t+'انِ',shuf([t+'َيْنِ',stem(n.ar)+(stem(n.ar).endsWith('ة')?'انِ':'ونَ'),pl?pl.form:t+'اتٌ',t+'انُ']),'Duel sujet : ـانِ (ة devient ت). ـَيْنِ seulement après préposition ou en complément.',Math.max(18,n.L),'du')}},
 {min:18,f(N){const n=pick(plain(N));if(!n)return null;const pl=ITEMS.find(i=>i.type==='f'&&i.kind==='pl'&&i.base===n.ar);
  return mk(`« Combien de ${n.fr} ? » — ${n.ar}`,'كَمْ '+accI(n.ar)+'؟',shuf(['كَمْ '+n.ar+'؟','كَمْ '+defN(n.ar)+'؟',pl?'كَمْ '+pl.form+'؟':'كَمْ '+genI(n.ar)+'؟','كَمْ '+genI(n.ar)+'؟']),'كَمْ + nom singulier, indéfini, à l\'accusatif (ـًا).',Math.max(18,n.L),'kam')}},
 {min:19,f(){const P=ITEMS.filter(i=>i.type==='f'&&i.kind==='pl'&&i.L<=S.to&&/[ٌُ]$/.test(i.form)).filter(i=>!ADJBASE.has(i.base)).map(i=>({...i,f:FEM.has(i.base)||stem(i.base).endsWith('ة')})).filter(i=>S.to>=20||!i.f);if(!P.length)return null;
  const p=pick(P);const k=Math.random()*8|0;const pg=p.form.endsWith('ٌ')?p.form.replace(/ٌ$/,'ٍ'):p.form.replace(/ُ$/,'َ');const R=p.f?NUM_F:NUM_M,W=p.f?NUM_M:NUM_F;
  return mk(`« ${k+3} × ${p.fr} » — ${p.base} (pluriel : ${p.form})`,R[k]+' '+pg,shuf([W[k]+' '+pg,R[k]+' '+genI(p.base),W[k]+' '+p.form,R[k]+' '+p.form]),`${p.base} est ${p.f?'féminin → nombre sans ة':'masculin → nombre avec ة'} ; nom au pluriel et au génitif.`,Math.max(19,p.L),'num')}},
 {min:16,f(){const P=ITEMS.filter(i=>i.type==='f'&&i.kind==='pl'&&i.L<=S.to&&!/ىٰ$/.test(i.form)&&!ADJBASE.has(i.base));if(!P.length)return null;const p=pick(P);
  const hum=(p.L===13&&p.base!=='حَقْلٌ')||p.base==='راكِبٌ';const ok=(hum?'هٰؤُلاءِ ':'هٰذِهِ ')+p.form;
  return mk(`« Ce sont des … » (proche) avec ${p.form}, pluriel de ${p.base} (${p.fr})`,ok,shuf([(hum?'هٰذِهِ ':'هٰؤُلاءِ ')+p.form,'هٰذا '+p.form,(hum?'هٰؤُلاءِ ':'هٰذِهِ ')+p.base]),hum?'Personnes → هٰؤُلاءِ.':'Choses / animaux au pluriel → féminin singulier : هٰذِهِ.',Math.max(16,p.L),'hum')}},
 {min:17,f(){const P=ITEMS.filter(i=>i.type==='f'&&i.kind==='pl'&&i.L>=16&&i.L<=S.to&&i.base!=='راكِبٌ'&&!/ىٰ$/.test(i.form));if(!P.length)return null;let p,a;for(let t=0;t<40;t++){p=pick(P);a=pick(ADJ.filter(x=>x[3]<=S.to));if(adjFits(a,{ar:p.base}))break;a=null}if(!a)return null;
  return mk(`« Les … sont ${fe(a[2])}s » avec ${p.form} (pluriel de ${p.fr}) + ${a[0]}`,defN(p.form)+' '+a[1],shuf([defN(p.form)+' '+a[0],defN(p.form)+' '+def(a[1])+'ُ',p.form+' '+a[1]]),'Pluriel non-humain → adjectif au féminin singulier.',Math.max(17,p.L),'plnh')}},
 {min:22,f(N){const n=pick(N.filter(x=>['obj','veh'].includes(catOf(x.ar))));if(!n)return null;const c=pick(COL);const ok=n.ar+' '+(n.f?c[1]:c[0]);
  return mk(`« un(e) ${n.fr} ${COLF[c[2]]||c[2]} » — ${n.ar}`,ok,shuf([n.ar+' '+(n.f?c[0]:c[1]),n.ar+' '+stem(n.f?c[1]:c[0])+'ٌ',n.ar+' '+(n.f?stem(c[0])+'َةٌ':stem(c[1])+'ٌ')]),'Couleurs : أَفْعَلُ (masc.) / فَعْلاءُ (fém.), jamais de tanwīn.',22,'col')}}
];
function genQ(n){
 const N=nouns();const G=GENS.filter(g=>g.min<=S.to);if(!G.length||N.length<2)return[];
 const out=[];let tries=0;while(out.length<n&&tries<n*6){tries++;const q=pick(G).f(N);if(q&&q.L>=S.from)out.push(q)}
 return out.map((q,i)=>({...q,id:q.id+'-'+i}));
}
