/* Contenu des 23 leçons du Tome 1 de Médine. Format documenté dans docs/CONTENU.md.
   n = numéro, p = page (version arabe), t = titre, w = vocabulaire (« arabe|français/alt »), ph = phrases, f = formes (« singulier|forme|français|pl|du|fe »), g = règles [titre, html, [[arabe, français]]], q = QCM [question, bonne, faux1, faux2, faux3, explication]. */
const D=[
{n:1,p:6,t:"Ceci — هٰذا, ما, مَنْ, أَ",
w:`هٰذا|ceci/ce/celui-ci/c'est
ما|quoi/que/qu'est-ce que
مَنْ|qui
بَيْتٌ|maison
مَسْجِدٌ|mosquée
بابٌ|porte
كِتابٌ|livre
قَلَمٌ|stylo/crayon/plume
مِفْتاحٌ|clé/clef
مَكْتَبٌ|bureau
سَرِيرٌ|lit
كُرْسِيٌّ|chaise
نَعَمْ|oui
لا|non
قَمِيصٌ|chemise
نَجْمٌ|étoile
طَبِيبٌ|médecin/docteur
وَلَدٌ|garçon/enfant
طالِبٌ|étudiant/élève
رَجُلٌ|homme
تاجِرٌ|commerçant/marchand
كَلْبٌ|chien
قِطٌّ|chat
حِمارٌ|âne
حِصانٌ|cheval
جَمَلٌ|chameau
دِيكٌ|coq
مُدَرِّسٌ|enseignant/professeur
مِنْدِيلٌ|mouchoir
وَ|et`,
ph:`ما هٰذا؟ هٰذا كِتابٌ.|Qu'est-ce que c'est ? C'est un livre.
أَهٰذا بَيْتٌ؟ نَعَمْ، هٰذا بَيْتٌ.|Est-ce une maison ? Oui, c'est une maison.
أَهٰذا مِفْتاحٌ؟ لا، هٰذا قَلَمٌ.|Est-ce une clé ? Non, c'est un stylo.
مَنْ هٰذا؟ هٰذا طَبِيبٌ.|Qui est-ce ? C'est un médecin.
أَهٰذا وَلَدٌ؟ لا، هٰذا رَجُلٌ.|Est-ce un garçon ? Non, c'est un homme.
أَهٰذا كَلْبٌ؟ لا، هٰذا قِطٌّ.|Est-ce un chien ? Non, c'est un chat.
مَنْ هٰذا؟ هٰذا تاجِرٌ.|Qui est-ce ? C'est un commerçant.
هٰذا حِمارٌ وَهٰذا حِصانٌ.|Ceci est un âne et ceci est un cheval.
مَنْ هٰذا؟ هٰذا مُدَرِّسٌ.|Qui est-ce ? C'est un enseignant.
ما هٰذا؟ هٰذا مِنْدِيلٌ.|Qu'est-ce que c'est ? C'est un mouchoir.
أَهٰذا طالِبٌ؟ نَعَمْ.|Est-ce un étudiant ? Oui.`,
g:[["هٰذا = ceci / c'est","Démonstratif pour une chose ou une personne <b>masculine et proche</b>. Il n'y a pas de verbe « être » au présent.",[["هٰذا بَيْتٌ.","C'est une maison."]]],
["ما ؟ et مَنْ ؟","<b>ما</b> pour les choses et animaux, <b>مَنْ</b> pour les personnes.",[["ما هٰذا؟","Qu'est-ce que c'est ?"],["مَنْ هٰذا؟","Qui est-ce ?"]]],
["أَ = question oui / non","On place <b>أَ</b> devant la phrase. Réponse : <b>نَعَمْ</b> (oui) ou <b>لا</b> (non).",[["أَهٰذا مَسْجِدٌ؟","Est-ce une mosquée ?"]]],
["Le tanwīn (ـٌ « -un »)","La double voyelle finale marque l'<b>indéfini</b> : un livre.",[["كِتابٌ","un livre"]]]],
q:[["« Qui est-ce ? » (en montrant un homme)","مَنْ هٰذا؟","ما هٰذا؟","أَهٰذا؟","هٰذا مَنْ؟","مَنْ s'emploie pour les personnes."],
["« Est-ce une mosquée ? »","أَهٰذا مَسْجِدٌ؟","ما هٰذا مَسْجِدٌ؟","مَنْ هٰذا مَسْجِدٌ؟","هٰذا أَمَسْجِدٌ؟","أَ se place en tête de phrase."],
["Que marque le tanwīn dans كِتابٌ ?","L'indéfini : « un livre »","Le défini : « le livre »","Le pluriel : « des livres »","Le féminin","ـٌ = indéfini."],
["Réponse correcte à « أَهٰذا قَلَمٌ؟ » si c'est une clé","لا، هٰذا مِفْتاحٌ.","نَعَمْ، هٰذا مِفْتاحٌ.","لا، ما هٰذا مِفْتاحٌ.","لا، مَنْ هٰذا مِفْتاحٌ.","Ce n'est pas un stylo → لا, puis on corrige."],
["On emploie ما هٰذا ؟ pour…","un objet ou un animal","une personne","un lieu","une question oui / non","ما = quoi ; مَنْ = qui."]]},

{n:2,p:12,t:"Cela — ذٰلِكَ",
w:`ذٰلِكَ|cela/celui-là/ça
حَجَرٌ|pierre
سُكَّرٌ|sucre
لَبَنٌ|lait
إِمامٌ|imam`,
ph:`ما ذٰلِكَ؟ ذٰلِكَ نَجْمٌ.|Qu'est-ce que c'est, là-bas ? C'est une étoile.
هٰذا بَيْتٌ وَذٰلِكَ مَسْجِدٌ.|Ceci est une maison et cela est une mosquée.
هٰذا سُكَّرٌ وَذٰلِكَ لَبَنٌ.|Ceci est du sucre et cela est du lait.
مَنْ هٰذا وَمَنْ ذٰلِكَ؟|Qui est celui-ci et qui est celui-là ?
هٰذا مُدَرِّسٌ وَذٰلِكَ إِمامٌ.|Celui-ci est un enseignant et celui-là est un imam.
أَذٰلِكَ كَلْبٌ؟ لا، ذٰلِكَ قِطٌّ.|Est-ce un chien, là-bas ? Non, c'est un chat.
ما ذٰلِكَ؟ ذٰلِكَ حَجَرٌ.|Qu'est-ce que c'est, là-bas ? C'est une pierre.
هٰذا حِصانٌ وَذٰلِكَ حِمارٌ.|Ceci est un cheval et cela est un âne.
ذٰلِكَ سَرِيرٌ.|Cela est un lit.`,
g:[["ذٰلِكَ = cela / celui-là","Démonstratif <b>masculin éloigné</b>. هٰذا = proche, ذٰلِكَ = loin.",[["هٰذا سُكَّرٌ وَذٰلِكَ لَبَنٌ.","Ceci est du sucre et cela est du lait."]]]],
q:[["« Celui-là est un imam »","ذٰلِكَ إِمامٌ.","هٰذا إِمامٌ.","إِمامٌ ذٰلِكَ.","أَذٰلِكَ إِمامٌ؟","ذٰلِكَ pour ce qui est éloigné."],
["Différence entre هٰذا et ذٰلِكَ","هٰذا = proche, ذٰلِكَ = éloigné","هٰذا = masculin, ذٰلِكَ = féminin","هٰذا = singulier, ذٰلِكَ = pluriel","Aucune, ce sont des synonymes","Les deux sont masculins singuliers."],
["« Ceci est du sucre et cela est du lait »","هٰذا سُكَّرٌ وَذٰلِكَ لَبَنٌ.","ذٰلِكَ سُكَّرٌ وَهٰذا لَبَنٌ.","هٰذا لَبَنٌ وَذٰلِكَ سُكَّرٌ.","هٰذا سُكَّرٌ وَهٰذا لَبَنٌ.","Ceci = هٰذا (proche), cela = ذٰلِكَ."]]},

{n:3,p:14,t:"L'article ال et la phrase nominale",
w:`مَكْسُورٌ|cassé
مَفْتُوحٌ|ouvert
جالِسٌ|assis
واقِفٌ|debout
جَدِيدٌ|nouveau/neuf
قَدِيمٌ|ancien/vieux
ماءٌ|eau
بارِدٌ|froid
حارٌّ|chaud
كَبِيرٌ|grand/gros
صَغِيرٌ|petit
قَرِيبٌ|proche/près
بَعِيدٌ|loin/éloigné/lointain
نَظِيفٌ|propre
وَسِخٌ|sale
ثَقِيلٌ|lourd
خَفِيفٌ|léger
جَمِيلٌ|beau/joli
قَمَرٌ|lune
شَمْسٌ|soleil
وَرَقٌ|papier/feuilles
حُلْوٌ|sucré/doux
مَرِيضٌ|malade
طَوِيلٌ|long/grand (de taille)
قَصِيرٌ|court/petit (de taille)
غَنِيٌّ|riche
فَقِيرٌ|pauvre
لَذِيذٌ|délicieux/bon
دُكّانٌ|boutique/magasin
تُفّاحٌ|pommes/pomme`,
ph:`القَلَمُ مَكْسُورٌ.|Le stylo est cassé.
البابُ مَفْتُوحٌ.|La porte est ouverte.
الوَلَدُ جالِسٌ وَالمُدَرِّسُ واقِفٌ.|Le garçon est assis et l'enseignant est debout.
الكِتابُ جَدِيدٌ وَالقَلَمُ قَدِيمٌ.|Le livre est neuf et le stylo est vieux.
الماءُ بارِدٌ.|L'eau est froide.
اللَّبَنُ حارٌّ.|Le lait est chaud.
البَيْتُ قَرِيبٌ وَالمَسْجِدُ بَعِيدٌ.|La maison est proche et la mosquée est loin.
الحَجَرُ ثَقِيلٌ وَالوَرَقُ خَفِيفٌ.|La pierre est lourde et le papier est léger.
القَمَرُ جَمِيلٌ.|La lune est belle.
المِنْدِيلُ نَظِيفٌ.|Le mouchoir est propre.
القَمِيصُ وَسِخٌ.|La chemise est sale.
السُّكَّرُ حُلْوٌ.|Le sucre est sucré.
الطّالِبُ مَرِيضٌ.|L'étudiant est malade.
التّاجِرُ غَنِيٌّ وَالوَلَدُ فَقِيرٌ.|Le commerçant est riche et le garçon est pauvre.
التُّفّاحُ لَذِيذٌ.|Les pommes sont délicieuses.
الطَّبِيبُ طَوِيلٌ وَالمُدَرِّسُ قَصِيرٌ.|Le médecin est grand et l'enseignant est petit.
الدُّكّانُ صَغِيرٌ.|La boutique est petite.`,
g:[["L'article ال","ال rend le nom <b>défini</b> (le, la, les). Le tanwīn disparaît : ـٌ devient ـُ.",[["بَيْتٌ ← البَيْتُ","une maison → la maison"]]],
["La phrase nominale","Sujet <b>défini</b> (mubtada') + attribut <b>indéfini</b> (khabar) = « X est Y ». Pas de verbe « être ».",[["البابُ مَفْتُوحٌ.","La porte est ouverte."]]],
["Lettres solaires et lunaires","Lettres <b>lunaires</b> : le ل se prononce (al-qamar). Lettres <b>solaires</b> (ت ث د ذ ر ز س ش ص ض ط ظ ل ن) : le ل ne se prononce pas et la lettre suivante est doublée (ash-shams).",[["القَمَرُ","al-qamaru (lunaire)"],["الشَّمْسُ","ash-shamsu (solaire)"]]]],
q:[["« La porte est ouverte »","البابُ مَفْتُوحٌ.","بابٌ مَفْتُوحٌ.","البابٌ مَفْتُوحٌ.","البابُ مَفْتُوحُ.","Sujet défini (ال, ـُ) + attribut indéfini (ـٌ)."],
["كِتابٌ avec l'article devient…","الكِتابُ","الكِتابٌ","كِتابُ","الكِتابٌّ","Avec ال, jamais de tanwīn."],
["Dans quel mot le ل de ال ne se prononce PAS ?","السُّكَّرُ","القَمَرُ","البابُ","الوَلَدُ","س est une lettre solaire : as-sukkaru."],
["Dans quel mot le ل de ال se prononce ?","القَلَمُ","الطّالِبُ","الرَّجُلُ","النَّجْمُ","ق est une lettre lunaire : al-qalamu."],
["« Le garçon est assis »","الوَلَدُ جالِسٌ.","وَلَدٌ جالِسٌ.","الوَلَدُ جالِسُ.","جالِسٌ الوَلَدُ.","Le sujet vient en premier, défini."],
["Dans السُّكَّرُ حُلْوٌ, l'attribut (khabar) est…","حُلْوٌ","السُّكَّرُ","ال","il n'y en a pas","Le khabar est la partie indéfinie qui informe sur le sujet."]]},

{n:4,p:21,t:"Prépositions et génitif",
w:`في|dans/en/à
عَلىٰ|sur
أَيْنَ|où
غُرْفَةٌ|chambre/pièce
مَطْبَخٌ|cuisine
حَمّامٌ|salle de bain
ساعَةٌ|montre/heure/horloge
هُوَ|il/lui
هِيَ|elle
أَنا|je/moi
أَنْتَ|tu/toi
مِنْ|de/depuis (provenance)
إِلىٰ|vers/à/jusqu'à
مَدْرَسَةٌ|école
جامِعَةٌ|université
فَصْلٌ|classe/salle de classe
مِرْحاضٌ|toilettes
سُوقٌ|marché
مُدِيرٌ|directeur
السَّماءُ|ciel
خَرَجَ|il est sorti/il sortit
ذَهَبَ|il est allé/il alla/il partit
اليابانُ|Japon
الهِنْدُ|Inde
الصِّينُ|Chine
الفِلِبِّينُ|Philippines`,
ph:`أَيْنَ مُحَمَّدٌ؟ هُوَ في الغُرْفَةِ.|Où est Mohammed ? Il est dans la chambre.
أَيْنَ آمِنَةُ؟ هِيَ في المَطْبَخِ.|Où est Amina ? Elle est dans la cuisine.
أَيْنَ الكِتابُ؟ هُوَ عَلىٰ المَكْتَبِ.|Où est le livre ? Il est sur le bureau.
السّاعَةُ عَلىٰ السَّرِيرِ.|La montre est sur le lit.
مِنْ أَيْنَ أَنْتَ؟ أَنا مِنَ اليابانِ.|D'où es-tu ? Je suis du Japon.
خَرَجَ المُدَرِّسُ مِنَ الفَصْلِ.|L'enseignant est sorti de la classe.
ذَهَبَ مُحَمَّدٌ إِلىٰ المُدِيرِ.|Mohammed est allé chez le directeur.
ذَهَبَ الطّالِبُ مِنَ المَدْرَسَةِ إِلىٰ السُّوقِ.|L'étudiant est allé de l'école au marché.
أَيْنَ ذَهَبَ عَلِيٌّ؟ ذَهَبَ إِلىٰ المِرْحاضِ.|Où est allé Ali ? Il est allé aux toilettes.
الشَّمْسُ وَالقَمَرُ في السَّماءِ.|Le soleil et la lune sont dans le ciel.
التّاجِرُ في الدُّكّانِ.|Le commerçant est dans la boutique.
ذَهَبَ الطَّبِيبُ إِلىٰ الجامِعَةِ.|Le médecin est allé à l'université.
أَيْنَ أَنْتَ؟ أَنا في الحَمّامِ.|Où es-tu ? Je suis dans la salle de bain.`,
g:[["Prépositions + génitif","Après <b>في، عَلىٰ، مِنْ، إِلىٰ</b>, le nom est au génitif (majrūr) : il se termine par <b>i</b> (ـِ).",[["في البَيْتِ","dans la maison"],["عَلىٰ المَكْتَبِ","sur le bureau"]]],
["هُوَ / هِيَ","Les choses ont aussi un genre : الكِتابُ → هُوَ ; الغُرْفَةُ → هِيَ.",[["أَيْنَ السّاعَةُ؟ هِيَ عَلىٰ السَّرِيرِ.","Où est la montre ? Elle est sur le lit."]]],
["مِنْ + ال → مِنَ","Devant ال, مِنْ prend un a de liaison.",[["مِنَ المَسْجِدِ","de la mosquée"]]],
["Le verbe au passé","ذَهَبَ (il est allé), خَرَجَ (il est sorti). Le verbe vient souvent avant le sujet.",[["خَرَجَ المُدَرِّسُ.","L'enseignant est sorti."]]]],
q:[["« dans la maison »","في البَيْتِ","في البَيْتُ","في بَيْتُ","في البَيْتٌ","Après une préposition : génitif en ـِ."],
["Pourquoi المَكْتَبِ finit par i dans عَلىٰ المَكْتَبِ ?","Après une préposition, le nom est au génitif","Parce qu'il est féminin","Parce que c'est un pluriel","Parce qu'il est indéfini","عَلىٰ est une préposition (ḥarf jarr)."],
["« Il est allé à la mosquée »","ذَهَبَ إِلىٰ المَسْجِدِ.","خَرَجَ مِنَ المَسْجِدِ.","ذَهَبَ مِنَ المَسْجِدِ.","ذَهَبَ إِلىٰ المَسْجِدُ.","إِلىٰ = vers ; génitif ـِ."],
["« D'où es-tu ? »","مِنْ أَيْنَ أَنْتَ؟","أَيْنَ أَنْتَ؟","إِلىٰ أَيْنَ أَنْتَ؟","مَنْ أَيْنَ أَنْتَ؟","مِنْ (de) ≠ مَنْ (qui)."],
["مِنْ devant ال devient…","مِنَ","مِنِ","مِنُ","مِنْ (inchangé)","مِنَ المَسْجِدِ."],
["« Elle est dans la cuisine »","هِيَ في المَطْبَخِ.","هُوَ في المَطْبَخِ.","هِيَ في المَطْبَخُ.","هِيَ عَلىٰ المَطْبَخِ.","هِيَ = elle ; في = dans."]]},

{n:5,p:27,t:"L'annexion (iḍāfa)",
w:`دَفْتَرٌ|cahier
حَقِيبَةٌ|sac/cartable/valise
تَحْتَ|sous
هُناكَ|là-bas
سَيّارَةٌ|voiture
رَسُولٌ|messager/envoyé
الكَعْبَةُ|la Kaaba
اللهُ|Allah/Dieu
القُرْآنُ|le Coran
كَلِمَةٌ|mot/parole
اسْمٌ|nom
ابْنٌ|fils
عَمٌّ|oncle paternel/oncle
شارِعٌ|rue
مُغْلَقٌ|fermé
أُسْتاذٌ|professeur
يا|ô (pour interpeller)`,
ph:`هٰذا كِتابُ مُحَمَّدٍ.|Ceci est le livre de Mohammed.
أَيْنَ دَفْتَرُ عَمّارٍ؟ هُوَ عَلىٰ مَكْتَبِ المُدَرِّسِ.|Où est le cahier d'Ammar ? Il est sur le bureau de l'enseignant.
حَقِيبَةُ المُدَرِّسِ تَحْتَ المَكْتَبِ.|Le sac de l'enseignant est sous le bureau.
الكَعْبَةُ بَيْتُ اللهِ.|La Kaaba est la maison d'Allah.
مُحَمَّدٌ رَسُولُ اللهِ.|Mohammed est le Messager d'Allah.
القُرْآنُ كِتابُ اللهِ.|Le Coran est le livre d'Allah.
اسْمُ الوَلَدِ مُحَمَّدٌ.|Le nom du garçon est Mohammed.
بابُ المَسْجِدِ مُغْلَقٌ.|La porte de la mosquée est fermée.
سَيّارَةُ المُدِيرِ هُناكَ.|La voiture du directeur est là-bas.
خَرَجَ ابْنُ المُدِيرِ مِنَ الفَصْلِ.|Le fils du directeur est sorti de la classe.
يا أُسْتاذُ، أَيْنَ القَلَمُ؟|Professeur, où est le stylo ?
بَيْتُ العَمِّ في الشّارِعِ.|La maison de l'oncle est dans la rue.
مِفْتاحُ السَّيّارَةِ في الحَقِيبَةِ.|La clé de la voiture est dans le sac.`,
g:[["L'iḍāfa (annexion)","« Le X de Y » : le 1er nom (muḍāf) n'a <b>ni ال ni tanwīn</b> ; le 2e (muḍāf ilayhi) est au <b>génitif</b>. Le 1er devient défini grâce au 2e.",[["كِتابُ مُحَمَّدٍ","le livre de Mohammed"],["بابُ المَسْجِدِ","la porte de la mosquée"]]],
["Le vocatif يا","يا + nom. Un nom propre prend ـُ sans tanwīn.",[["يا مُحَمَّدُ!","Ô Mohammed !"]]],
["Hamzat al-waṣl","Le alif de اسْم et ابْن ne se prononce pas en liaison.",[["وَاسْمُ الوَلَدِ","wa-smu l-waladi"]]]],
q:[["« La maison de l'enseignant »","بَيْتُ المُدَرِّسِ","البَيْتُ المُدَرِّسِ","بَيْتٌ المُدَرِّسِ","بَيْتُ المُدَرِّسُ","Muḍāf sans ال ni tanwīn + génitif."],
["Dans l'iḍāfa, le premier nom (muḍāf)…","ne prend ni ال ni tanwīn","prend toujours ال","est toujours au génitif","prend toujours le tanwīn","C'est le 2e nom qui est au génitif."],
["« Le livre d'Allah »","كِتابُ اللهِ","الكِتابُ اللهِ","كِتابٌ اللهِ","كِتابُ اللهُ","اللهِ au génitif."],
["« Ô Yasser ! »","يا ياسِرُ","يا ياسِرٌ","يا الياسِرُ","يا ياسِرِ","Nom propre après يا : ـُ sans tanwīn."],
["« Le sac est sous le bureau »","الحَقِيبَةُ تَحْتَ المَكْتَبِ.","الحَقِيبَةُ تَحْتَ المَكْتَبُ.","حَقِيبَةُ تَحْتَ المَكْتَبِ.","الحَقِيبَةُ عَلىٰ المَكْتَبِ.","تَحْتَ = sous, suivi du génitif."],
["« La clé de la voiture »","مِفْتاحُ السَّيّارَةِ","المِفْتاحُ السَّيّارَةِ","مِفْتاحٌ السَّيّارَةُ","مِفْتاحُ سَيّارَةٌ","Iḍāfa : مِفْتاحُ + السَّيّارَةِ."]]},

{n:6,p:33,t:"Le féminin — هٰذِهِ",
w:`هٰذِهِ|celle-ci/ceci (féminin)
بِنْتٌ|fille
أُخْتٌ|sœur
أُمٌّ|mère
مُهَنْدِسٌ|ingénieur
دَرّاجَةٌ|vélo/bicyclette
مِلْعَقَةٌ|cuillère
قِدْرٌ|marmite
مِكْواةٌ|fer à repasser
بَقَرَةٌ|vache
فَلّاحٌ|paysan/agriculteur
عَيْنٌ|œil
أُذُنٌ|oreille
أَنْفٌ|nez
فَمٌ|bouche
يَدٌ|main
رِجْلٌ|pied/jambe
شايٌ|thé
قَهْوَةٌ|café
ثَلّاجَةٌ|réfrigérateur/frigo
نافِذَةٌ|fenêtre
لَحْمٌ|viande
سَرِيعٌ|rapide
جِدًّا|très`,
ph:`هٰذِهِ بِنْتُ حامِدٍ.|C'est la fille de Hamid.
أَهٰذِهِ أُخْتُ المُهَنْدِسِ؟|Est-ce la sœur de l'ingénieur ?
هٰذِهِ ساعَةُ عَلِيٍّ، هِيَ جَمِيلَةٌ جِدًّا.|C'est la montre d'Ali, elle est très belle.
هٰذِهِ مِلْعَقَةٌ وَهٰذِهِ قِدْرٌ.|Ceci est une cuillère et ceci est une marmite.
اللَّحْمُ في القِدْرِ.|La viande est dans la marmite.
هٰذِهِ بَقَرَةُ الفَلّاحِ.|C'est la vache du paysan.
هٰذا أَنْفٌ وَهٰذا فَمٌ.|Ceci est un nez et ceci est une bouche.
هٰذِهِ عَيْنٌ وَهٰذِهِ أُذُنٌ.|Ceci est un œil et ceci est une oreille.
هٰذِهِ يَدٌ وَهٰذِهِ رِجْلٌ.|Ceci est une main et ceci est un pied.
أَيْنَ القَهْوَةُ؟ هِيَ في الثَّلّاجَةِ.|Où est le café ? Il est dans le réfrigérateur.
هٰذِهِ سَيّارَةُ المُدِيرِ، هِيَ سَرِيعَةٌ جِدًّا.|C'est la voiture du directeur, elle est très rapide.
نافِذَةُ الغُرْفَةِ مَفْتُوحَةٌ.|La fenêtre de la chambre est ouverte.
الشّايُ حارٌّ وَالماءُ بارِدٌ.|Le thé est chaud et l'eau est froide.
هٰذِهِ أُمُّ ياسِرٍ.|C'est la mère de Yasser.
هٰذِهِ دَرّاجَةٌ جَدِيدَةٌ.|C'est un vélo neuf.`,
g:[["Le féminin en ة","La plupart des féminins se terminent par <b>ة</b> (tā' marbūṭa).",[["طالِبٌ ← طالِبَةٌ","étudiant → étudiante"]]],
["هٰذِهِ","Démonstratif <b>féminin proche</b>.",[["هٰذِهِ سَيّارَةٌ.","C'est une voiture."]]],
["Féminins sans ة","أُمٌّ، بِنْتٌ، أُخْتٌ, les parties du corps doubles (عَيْنٌ، أُذُنٌ، يَدٌ، رِجْلٌ) et شَمْسٌ.",[["هٰذِهِ عَيْنٌ.","Ceci est un œil."]]],
["Accord de l'attribut","L'attribut s'accorde avec le sujet. جِدًّا se place après l'adjectif.",[["السَّيّارَةُ سَرِيعَةٌ جِدًّا.","La voiture est très rapide."]]]],
q:[["« C'est une voiture »","هٰذِهِ سَيّارَةٌ.","هٰذا سَيّارَةٌ.","هٰذِهِ سَيّارَةُ.","هٰذا سَيّارَةُ.","سَيّارَةٌ est féminin → هٰذِهِ."],
["Lequel est féminin sans ة ?","عَيْنٌ","أَنْفٌ","فَمٌ","قَلَمٌ","Parties du corps doubles = féminin."],
["« La fenêtre est ouverte »","النّافِذَةُ مَفْتُوحَةٌ.","النّافِذَةُ مَفْتُوحٌ.","نافِذَةٌ مَفْتُوحَةٌ.","النّافِذَةُ مَفْتُوحَةُ.","Accord au féminin + attribut indéfini."],
["« très belle »","جَمِيلَةٌ جِدًّا","جِدًّا جَمِيلَةٌ","جَمِيلٌ جِدًّا","جِدًّا جَمِيلٌ","جِدًّا après l'adjectif, accord au féminin."],
["Le féminin de مُدَرِّسٌ (enseignant)","مُدَرِّسَةٌ","مَدْرَسَةٌ","مُدَرِّسٌةٌ","مُدَرَّسَةٌ","Attention : مَدْرَسَةٌ = école !"],
["Pronom pour النّافِذَةُ","هِيَ","هُوَ","هٰذا","ما","نافِذَةٌ est féminin."]]},

{n:7,p:39,t:"Cela (féminin) — تِلْكَ",
w:`تِلْكَ|celle-là/cela (féminin)
مُمَرِّضَةٌ|infirmière
طَبِيبَةٌ|médecin (femme)/doctoresse
دَجاجَةٌ|poule
بَطَّةٌ|canard/cane
بَيْضَةٌ|œuf
ناقَةٌ|chamelle
مُؤَذِّنٌ|muezzin
حَدِيقَةٌ|jardin`,
ph:`مَنْ تِلْكَ؟ تِلْكَ فاطِمَةُ.|Qui est celle-là ? C'est Fatima.
هٰذِهِ طَبِيبَةٌ وَتِلْكَ مُمَرِّضَةٌ.|Celle-ci est médecin et celle-là est infirmière.
أَتِلْكَ دَجاجَةٌ؟ لا، تِلْكَ بَطَّةٌ.|Est-ce une poule, là-bas ? Non, c'est un canard.
ما تِلْكَ؟ تِلْكَ بَيْضَةٌ.|Qu'est-ce que c'est, là-bas ? C'est un œuf.
هٰذِهِ سَيّارَةُ المُدَرِّسِ وَتِلْكَ سَيّارَةُ المُدِيرِ.|Ceci est la voiture de l'enseignant et cela est la voiture du directeur.
ذٰلِكَ دِيكٌ وَتِلْكَ دَجاجَةٌ.|Cela est un coq et cela est une poule.
هٰذا بَيْتُ المُؤَذِّنِ وَتِلْكَ حَدِيقَةُ التّاجِرِ.|Ceci est la maison du muezzin et cela est le jardin du commerçant.
هٰذا جَمَلٌ وَتِلْكَ ناقَةٌ.|Ceci est un chameau et cela est une chamelle.
هٰذِهِ مَدْرَسَةٌ وَتِلْكَ جامِعَةٌ.|Ceci est une école et cela est une université.`,
g:[["Les 4 démonstratifs singuliers","Proche : <b>هٰذا</b> (m) / <b>هٰذِهِ</b> (f). Éloigné : <b>ذٰلِكَ</b> (m) / <b>تِلْكَ</b> (f).",[["ذٰلِكَ دِيكٌ وَتِلْكَ دَجاجَةٌ.","Cela est un coq et cela est une poule."]]]],
q:[["« Celle-là est une infirmière »","تِلْكَ مُمَرِّضَةٌ.","ذٰلِكَ مُمَرِّضَةٌ.","هٰذِهِ مُمَرِّضَةٌ.","تِلْكَ مُمَرِّضٌ.","Féminin + éloigné = تِلْكَ."],
["« Cela est un œuf »","تِلْكَ بَيْضَةٌ.","ذٰلِكَ بَيْضَةٌ.","تِلْكَ بَيْضٌ.","هٰذِهِ بَيْضَةٌ.","بَيْضَةٌ est féminin."],
["Démonstratif pour un coq éloigné","ذٰلِكَ","تِلْكَ","هٰذِهِ","هٰذا","دِيكٌ est masculin."],
["« Est-ce une poule, là-bas ? »","أَتِلْكَ دَجاجَةٌ؟","أَذٰلِكَ دَجاجَةٌ؟","ما تِلْكَ دَجاجَةٌ؟","أَهٰذِهِ دَجاجَةٌ؟","أَ + تِلْكَ."]]},

{n:8,p:42,t:"هٰذا الـ…, لِـ, أَمامَ / خَلْفَ",
w:`لِمَنْ|à qui
لِـ|à/pour (appartenance)
أَمامَ|devant
خَلْفَ|derrière
مُسْتَشْفىٰ|hôpital
الآنَ|maintenant
سَبُّورَةٌ|tableau (noir)
المِحْرابُ|mihrab/niche de prière
جَلَسَ|il s'est assis/il s'assit
أَمْرِيكا|Amérique/États-Unis
إِنْجِلْتَرا|Angleterre
فَرَنْسا|France
أَلْمانِيا|Allemagne
سُوِيسْرا|Suisse
العِراقُ|Irak`,
ph:`هٰذا الرَّجُلُ تاجِرٌ وَذٰلِكَ الرَّجُلُ طَبِيبٌ.|Cet homme est commerçant et cet homme-là est médecin.
اسْمُ التّاجِرِ مَحْمُودٌ وَاسْمُ الطَّبِيبِ سَعِيدٌ.|Le nom du commerçant est Mahmoud et le nom du médecin est Saïd.
لِمَنْ هٰذِهِ السَّيّارَةُ؟ هٰذِهِ السَّيّارَةُ لِلطَّبِيبِ.|À qui est cette voiture ? Cette voiture est au médecin.
هٰذِهِ السَّيّارَةُ مِنَ اليابانِ وَتِلْكَ مِنْ أَمْرِيكا.|Cette voiture vient du Japon et celle-là d'Amérique.
بَيْتُ التّاجِرِ أَمامَ المَسْجِدِ.|La maison du commerçant est devant la mosquée.
بَيْتُ الطَّبِيبِ خَلْفَ المَدْرَسَةِ.|La maison du médecin est derrière l'école.
الطَّبِيبُ الآنَ في المُسْتَشْفىٰ.|Le médecin est maintenant à l'hôpital.
هٰذا الكِتابُ لِمُحَمَّدٍ.|Ce livre est à Mohammed.
جَلَسَ المُدَرِّسُ أَمامَ السَّبُّورَةِ.|L'enseignant s'est assis devant le tableau.
ذَهَبَ حامِدٌ إِلىٰ فَرَنْسا.|Hamid est allé en France.
الإِمامُ في المِحْرابِ.|L'imam est dans le mihrab.
هٰذِهِ الحَقِيبَةُ لِلْمُدَرِّسِ.|Ce sac est à l'enseignant.`,
g:[["هٰذا + nom défini = « ce / cet »","<b>هٰذا الرَّجُلُ</b> = cet homme ; <b>هٰذا رَجُلٌ</b> = ceci est un homme.",[["هٰذا الرَّجُلُ تاجِرٌ.","Cet homme est commerçant."]]],
["لِـ = à (appartenance)","Suivi du génitif. لِـ + ال → <b>لِلـ</b>.",[["هٰذِهِ السَّيّارَةُ لِلطَّبِيبِ.","Cette voiture est au médecin."]]],
["لِمَنْ ؟","« À qui ? »",[["لِمَنْ هٰذا الكِتابُ؟","À qui est ce livre ?"]]],
["أَمامَ / خَلْفَ","Devant / derrière, suivis du génitif.",[["خَلْفَ المَدْرَسَةِ","derrière l'école"]]]],
q:[["« Cet homme est médecin »","هٰذا الرَّجُلُ طَبِيبٌ.","هٰذا رَجُلٌ طَبِيبٌ.","هٰذا الرَّجُلُ الطَّبِيبُ.","هٰذِهِ الرَّجُلُ طَبِيبٌ.","هٰذا + nom défini, puis l'attribut indéfini."],
["« Ce livre est à l'enseignant »","هٰذا الكِتابُ لِلْمُدَرِّسِ.","هٰذا كِتابٌ لِلْمُدَرِّسِ.","هٰذا الكِتابُ لِالمُدَرِّسِ.","هٰذا الكِتابُ لِلْمُدَرِّسُ.","لِـ + ال = لِلـ, puis génitif."],
["Différence entre هٰذا كِتابٌ et هٰذا الكِتابُ","« Ceci est un livre » / « ce livre »","Aucune différence","Le 2e est un pluriel","Le 1er est féminin","Avec ال, هٰذا devient « ce »."],
["« La maison est derrière la mosquée »","البَيْتُ خَلْفَ المَسْجِدِ.","البَيْتُ أَمامَ المَسْجِدِ.","البَيْتُ خَلْفَ المَسْجِدُ.","بَيْتُ خَلْفَ المَسْجِدِ.","خَلْفَ = derrière + génitif."],
["« cette voiture » (sujet)","هٰذِهِ السَّيّارَةُ","هٰذِهِ سَيّارَةٌ","هٰذا السَّيّارَةُ","السَّيّارَةُ هٰذا","Féminin + défini."]]},

{n:9,p:47,t:"L'adjectif épithète",
w:`لُغَةٌ|langue
العَرَبِيَّةُ|l'arabe (langue)
الإِنْجِلِيزِيَّةُ|l'anglais (langue)
مُجْتَهِدٌ|studieux/travailleur/assidu
كَسْلانُ|paresseux
فاكِهَةٌ|fruit
عُصْفُورٌ|moineau/petit oiseau
طائِرٌ|oiseau
سَهْلٌ|facile
صَعْبٌ|difficile
شَهِيرٌ|célèbre
اليَوْمَ|aujourd'hui
مَدِينَةٌ|ville
جَوْعانُ|affamé/a faim
عَطْشانُ|assoiffé/a soif
غَضْبانُ|en colère/fâché
مَلْآنُ|plein/rempli
كُوبٌ|verre/gobelet
الَّذِي|qui/lequel (relatif masculin)
مَكْتَبَةٌ|bibliothèque/librairie
سِكِّينٌ|couteau
القاهِرَةُ|Le Caire`,
ph:`العَرَبِيَّةُ لُغَةٌ جَمِيلَةٌ.|L'arabe est une belle langue.
عَمّارٌ طالِبٌ مُجْتَهِدٌ.|Ammar est un étudiant studieux.
مَحْمُودٌ طالِبٌ كَسْلانُ.|Mahmoud est un étudiant paresseux.
التُّفّاحُ فاكِهَةٌ لَذِيذَةٌ.|La pomme est un fruit délicieux.
العُصْفُورُ طائِرٌ صَغِيرٌ.|Le moineau est un petit oiseau.
أَيْنَ المُدَرِّسُ الجَدِيدُ؟ هُوَ في الفَصْلِ.|Où est le nouvel enseignant ? Il est en classe.
مَنْ ذٰلِكَ الرَّجُلُ الطَّوِيلُ الَّذِي خَرَجَ الآنَ مِنَ الفَصْلِ؟|Qui est cet homme grand qui vient de sortir de la classe ?
هُوَ المُدِيرُ الجَدِيدُ.|C'est le nouveau directeur.
القاهِرَةُ مَدِينَةٌ كَبِيرَةٌ.|Le Caire est une grande ville.
أَنا جَوْعانُ وَعَطْشانُ.|J'ai faim et j'ai soif.
الكُوبُ مَلْآنُ.|Le verre est plein.
اللُّغَةُ العَرَبِيَّةُ سَهْلَةٌ.|La langue arabe est facile.
ذَهَبَ الطّالِبُ الجَدِيدُ إِلىٰ المَكْتَبَةِ.|Le nouvel étudiant est allé à la bibliothèque.
القَلَمُ المَكْسُورُ عَلىٰ المَكْتَبِ.|Le stylo cassé est sur le bureau.
خالِدٌ طَبِيبٌ شَهِيرٌ.|Khalid est un médecin célèbre.
الدَّرْسُ اليَوْمَ صَعْبٌ.|La leçon d'aujourd'hui est difficile.`,
g:[["L'adjectif épithète (na't)","Il se place <b>après</b> le nom et s'accorde en <b>définitude, genre et cas</b>.",[["طالِبٌ مُجْتَهِدٌ","un étudiant studieux"],["المَدِينَةُ الكَبِيرَةُ","la grande ville"]]],
["Épithète ≠ attribut","<b>الطّالِبُ الجَدِيدُ</b> = le nouvel étudiant ; <b>الطّالِبُ جَدِيدٌ</b> = l'étudiant est nouveau.",[["أَيْنَ المُدَرِّسُ الجَدِيدُ؟","Où est le nouvel enseignant ?"]]],
["Accord au génitif","Après une préposition, l'adjectif suit aussi le génitif.",[["في الغُرْفَةِ الكَبِيرَةِ","dans la grande chambre"]]],
["الَّذِي","Relatif masculin singulier (« qui ») après un nom défini.",[["الرَّجُلُ الَّذِي خَرَجَ","l'homme qui est sorti"]]],
["Adjectifs en ـانُ","كَسْلانُ، جَوْعانُ، عَطْشانُ ne prennent <b>pas de tanwīn</b>.",[["طالِبٌ كَسْلانُ","un étudiant paresseux"]]]],
q:[["« le nouvel étudiant »","الطّالِبُ الجَدِيدُ","الطّالِبُ جَدِيدٌ","طالِبٌ الجَدِيدُ","الجَدِيدُ الطّالِبُ","Épithète : même définitude que le nom."],
["« L'étudiant est nouveau »","الطّالِبُ جَدِيدٌ.","الطّالِبُ الجَدِيدُ.","طالِبٌ جَدِيدٌ.","جَدِيدٌ الطّالِبُ.","Attribut : indéfini."],
["« une belle langue »","لُغَةٌ جَمِيلَةٌ","لُغَةٌ جَمِيلٌ","اللُّغَةُ جَمِيلَةٌ","جَمِيلَةٌ لُغَةٌ","Accord au féminin, indéfini."],
["« dans la grande chambre »","في الغُرْفَةِ الكَبِيرَةِ","في الغُرْفَةِ الكَبِيرَةُ","في غُرْفَةِ الكَبِيرَةِ","في الغُرْفَةِ كَبِيرَةٍ","L'adjectif suit le génitif et la définitude."],
["« un étudiant paresseux »","طالِبٌ كَسْلانُ","طالِبٌ كَسْلانٌ","طالِبٌ الكَسْلانُ","كَسْلانُ طالِبٌ","كَسْلانُ n'a pas de tanwīn."],
["« l'homme qui est sorti » : quel relatif ?","الَّذِي","مَنْ","ما","هُوَ","الَّذِي après un nom masculin défini."]]},

{n:10,p:54,t:"Les pronoms suffixes",
w:`اسْمِي|mon nom
اسْمُكَ|ton nom
أَبٌ|père
أَخٌ|frère
أَنْتِ|tu/toi (féminin)
زَمِيلٌ|camarade/collègue
زَوْجٌ|mari/époux
واحِدٌ|un (seul)
واحِدَةٌ|une (seule)
طِفْلٌ|enfant/bébé
فَتىً|jeune homme
مَعَ|avec
عِنْدَ|chez/auprès de
عِنْدِي|j'ai
لِي|j'ai/à moi
هُنا|ici
الكُوَيْتُ|Koweït`,
ph:`ما اسْمُكَ؟ اسْمِي مُحَمَّدٌ.|Comment t'appelles-tu ? Je m'appelle Mohammed.
مِنْ أَيْنَ أَنْتَ؟ أَنا مِنَ الهِنْدِ.|D'où es-tu ? Je suis d'Inde.
أَيْنَ أَبُوكَ؟ أَبِي في الكُوَيْتِ.|Où est ton père ? Mon père est au Koweït.
أَبِي طَبِيبٌ شَهِيرٌ.|Mon père est un médecin célèbre.
مَنْ هٰذا الفَتىٰ الَّذِي مَعَكَ؟ هُوَ زَمِيلِي.|Qui est ce jeune homme qui est avec toi ? C'est mon camarade.
لِي أَخٌ واحِدٌ، اسْمُهُ أُسامَةُ.|J'ai un seul frère, il s'appelle Oussama.
لِي أُخْتٌ واحِدَةٌ، اسْمُها زَيْنَبُ.|J'ai une seule sœur, elle s'appelle Zaynab.
زَوْجُها مُهَنْدِسٌ.|Son mari est ingénieur.
أَعِنْدَكَ سَيّارَةٌ؟ لا، ما عِنْدِي سَيّارَةٌ.|As-tu une voiture ? Non, je n'ai pas de voiture.
عِنْدِي دَرّاجَةٌ.|J'ai un vélo.
أَخُوهُ طالِبٌ في الجامِعَةِ.|Son frère est étudiant à l'université.
ما لُغَتُكَ؟ لُغَتِي العَرَبِيَّةُ.|Quelle est ta langue ? Ma langue est l'arabe.
مَعِي طِفْلٌ صَغِيرٌ.|J'ai un petit enfant avec moi.
أَيْنَ أَنْتِ يا آمِنَةُ؟ أَنا هُنا.|Où es-tu, Amina ? Je suis ici.`,
g:[["Les pronoms suffixes","ـِي (mon), ـكَ (ton, m), ـكِ (ton, f), ـهُ (son, à lui), ـها (son, à elle). Un nom avec suffixe est défini : jamais de ال.",[["كِتابِي، كِتابُكَ، كِتابُكِ، كِتابُهُ، كِتابُها","mon / ton / ton / son / son livre"]]],
["أَبٌ et أَخٌ","Avec un suffixe (sauf ـِي) ils s'allongent : أَبُو، أَخُو.",[["أَبُوكَ، أَخُوهُ — مَعَ — أَبِي","ton père, son frère — mais : mon père"]]],
["Avoir : عِنْدِي / لِي","عِنْدَ + suffixe (chez) ; لِـ + suffixe (pour les liens familiaux). Négation : ما عِنْدِي.",[["عِنْدِي سَيّارَةٌ.","J'ai une voiture."],["لِي أَخٌ.","J'ai un frère."]]]],
q:[["« ton livre » (à un garçon)","كِتابُكَ","كِتابُكِ","الكِتابُكَ","كِتابٌكَ","ـكَ pour un homme, sans ال ni tanwīn."],
["« son père » (à lui)","أَبُوهُ","أَبُوها","أَبُهُ","أَبُوكَ","أَبٌ + ـهُ → أَبُوهُ."],
["« J'ai une voiture »","عِنْدِي سَيّارَةٌ.","عِنْدِي السَّيّارَةُ.","أَنا سَيّارَةٌ.","لِي السَّيّارَةُ.","عِنْدِي + nom indéfini."],
["« Elle s'appelle Zaynab » (son nom à elle)","اسْمُها زَيْنَبُ.","اسْمُهُ زَيْنَبُ.","اسْمِي زَيْنَبُ.","الاسْمُها زَيْنَبُ.","ـها = à elle."],
["« Je n'ai pas de stylo »","ما عِنْدِي قَلَمٌ.","لا عِنْدِي قَلَمٌ.","عِنْدِي ما قَلَمٌ.","عِنْدِي لا قَلَمٌ.","Négation : ما عِنْدِي."],
["« ton frère » (à une fille)","أَخُوكِ","أَخُوكَ","أَخِيكِ","أَخُكِ","ـكِ = toi (féminin)."]]},

{n:11,p:61,t:"Ma maison — فِيهِ / فِيها",
w:`بَيْتِي|ma maison
فِيهِ|il y a (dedans)/en lui
فِيها|il y a (dedans)/en elle
أُحِبُّ|j'aime`,
ph:`هٰذا بَيْتِي.|Ceci est ma maison.
بَيْتِي أَمامَ المَسْجِدِ.|Ma maison est devant la mosquée.
بَيْتِي جَمِيلٌ، فِيهِ حَدِيقَةٌ صَغِيرَةٌ.|Ma maison est belle, il y a un petit jardin.
هٰذِهِ غُرْفَتِي، فِيها نافِذَةٌ كَبِيرَةٌ.|Voici ma chambre, il y a une grande fenêtre.
هٰذا سَرِيرِي وَهٰذا كُرْسِيِّي.|Ceci est mon lit et ceci est ma chaise.
كِتابِي وَقَلَمِي عَلىٰ المَكْتَبِ.|Mon livre et mon stylo sont sur le bureau.
حَقِيبَتِي تَحْتَ المَكْتَبِ.|Mon sac est sous le bureau.
غُرْفَةُ أَخِي كَبِيرَةٌ وَغُرْفَةُ أُخْتِي صَغِيرَةٌ.|La chambre de mon frère est grande et la chambre de ma sœur est petite.
أَنا أُحِبُّ أَبِي وَأُمِّي.|J'aime mon père et ma mère.
أُحِبُّ اللُّغَةَ العَرَبِيَّةَ.|J'aime la langue arabe.
مَنْ في السَّيّارَةِ؟ فِيها أَبِي وَأَخِي.|Qui est dans la voiture ? Il y a mon père et mon frère.
ما في الحَقِيبَةِ؟ فِيها كِتابِي وَدَفْتَرِي.|Qu'y a-t-il dans le sac ? Il y a mon livre et mon cahier.`,
g:[["فِيهِ / فِيها = il y a dedans","في + pronom : <b>فِيهِ</b> pour un nom masculin, <b>فِيها</b> pour un nom féminin.",[["غُرْفَتِي فِيها نافِذَةٌ.","Dans ma chambre, il y a une fenêtre."]]],
["« Il y a… » avec في en tête","Quand le sujet est indéfini, on commence par في : <b>في + lieu + nom indéfini</b>.",[["في البَيْتِ حَدِيقَةٌ.","Il y a un jardin dans la maison."]]],
["أُحِبُّ + accusatif","Le complément d'objet direct prend <b>a</b> (ـَ).",[["أُحِبُّ اللُّغَةَ العَرَبِيَّةَ.","J'aime la langue arabe."]]]],
q:[["« Il y a un jardin dans la maison »","في البَيْتِ حَدِيقَةٌ.","في البَيْتُ حَدِيقَةٌ.","في البَيْتِ حَدِيقَةً.","البَيْتِ في حَدِيقَةٌ.","Sujet indéfini → في + lieu en premier."],
["« J'aime la langue arabe »","أُحِبُّ اللُّغَةَ العَرَبِيَّةَ.","أُحِبُّ اللُّغَةُ العَرَبِيَّةُ.","أُحِبُّ اللُّغَةِ العَرَبِيَّةِ.","أُحِبُّ لُغَةَ العَرَبِيَّةَ.","Complément d'objet à l'accusatif (ـَ)."],
["Dans le sac (حَقِيبَةٌ), « il y a mon livre »","فِيها كِتابِي.","فِيهِ كِتابِي.","عَلَيْها كِتابِي.","فِيها الكِتابِي.","حَقِيبَةٌ est féminin → فِيها."],
["« J'aime ma mère »","أُحِبُّ أُمِّي.","أُحِبُّ الأُمِّي.","أُحِبُّ أُمُّكَ.","أَنا أُمِّي أُحِبُّ.","أُمّ + ـِي = أُمِّي."]]},

{n:12,p:63,t:"Le verbe au féminin, الَّتِي, la famille",
w:`كَيْفَ|comment
كَيْفَ حالُكَ؟|comment vas-tu ?
بِخَيْرٍ|bien/en bonne santé
الحَمْدُ لِلّٰهِ|louange à Allah/Dieu merci
عَمَّةٌ|tante paternelle
خالٌ|oncle maternel
خالَةٌ|tante maternelle
سَيِّدِي|monsieur
مُسْتَشْفىٰ الوِلادَةِ|maternité
مُفَتِّشٌ|inspecteur
المَدْرَسَةُ الثّانَوِيَّةُ|lycée/école secondaire
المَدْرَسَةُ المُتَوَسِّطَةُ|collège
فَتاةٌ|jeune fille
الَّتِي|qui (relatif féminin)
أَيْضًا|aussi
بِنْتُ عَمِّي|ma cousine (fille de mon oncle paternel)`,
ph:`كَيْفَ حالُكِ يا بِنْتُ؟|Comment vas-tu, ma fille ?
أَنا بِخَيْرٍ وَالحَمْدُ لِلّٰهِ.|Je vais bien, louange à Allah.
أَبِي هُنا في المَدِينَةِ المُنَوَّرَةِ.|Mon père est ici, à Médine.
هُوَ مُفَتِّشٌ في المَدْرَسَةِ الثّانَوِيَّةِ.|Il est inspecteur au lycée.
أُمِّي طَبِيبَةٌ في مُسْتَشْفىٰ الوِلادَةِ.|Ma mère est médecin à la maternité.
مَنْ هٰذِهِ الفَتاةُ الَّتِي مَعَكِ؟ أَهِيَ أُخْتُكِ؟|Qui est cette jeune fille qui est avec toi ? Est-ce ta sœur ?
لا، هِيَ بِنْتُ عَمِّي.|Non, c'est ma cousine.
أَنا أَيْضًا طالِبَةٌ.|Moi aussi, je suis étudiante.
ذَهَبَتْ أُمِّي إِلىٰ المُسْتَشْفىٰ.|Ma mère est allée à l'hôpital.
جَلَسَتِ الطّالِبَةُ في الفَصْلِ.|L'étudiante s'est assise en classe.
خَرَجَتْ آمِنَةُ مِنَ البَيْتِ.|Amina est sortie de la maison.
السَّلامُ عَلَيْكَ يا سَيِّدِي.|Que la paix soit sur vous, monsieur.
خالَتِي مُدَرِّسَةٌ في المَدْرَسَةِ المُتَوَسِّطَةِ.|Ma tante maternelle est enseignante au collège.`,
g:[["Verbe au passé avec un sujet féminin","On ajoute <b>تْ</b>. Devant ال : <b>تِ</b>.",[["ذَهَبَتْ أُمِّي.","Ma mère est allée."],["جَلَسَتِ الطّالِبَةُ.","L'étudiante s'est assise."]]],
["Le sujet du verbe (fā'il)","Il est au nominatif (ـُ).",[["خَرَجَ المُدَرِّسُ.","L'enseignant est sorti."]]],
["الَّتِي","Relatif féminin singulier (« qui »).",[["الفَتاةُ الَّتِي مَعَكِ","la jeune fille qui est avec toi"]]],
["La famille","Côté père : <b>عَمٌّ / عَمَّةٌ</b>. Côté mère : <b>خالٌ / خالَةٌ</b>.",[["الخالُ أَخُو الأُمِّ.","Le khāl est le frère de la mère."]]]],
q:[["« Fatima est sortie »","خَرَجَتْ فاطِمَةُ.","خَرَجَ فاطِمَةُ.","خَرَجْتُ فاطِمَةُ.","خَرَجَتْ فاطِمَةَ.","Sujet féminin → تْ ; sujet au nominatif."],
["« L'étudiante s'est assise »","جَلَسَتِ الطّالِبَةُ.","جَلَسَتْ الطّالِبَةِ.","جَلَسَ الطّالِبَةُ.","جَلَسَتِ الطّالِبَةَ.","تْ devient تِ devant ال."],
["Le frère de ma mère est mon…","خالِي","عَمِّي","خالَتِي","عَمَّتِي","Côté mère = خال."],
["« la jeune fille qui est avec toi »","الفَتاةُ الَّتِي مَعَكِ","الفَتاةُ الَّذِي مَعَكِ","فَتاةٌ الَّتِي مَعَكِ","الفَتاةُ مَعَكِ الَّتِي","الَّتِي pour un féminin défini."],
["« Comment vas-tu ? » (à un homme)","كَيْفَ حالُكَ؟","كَيْفَ حالُكِ؟","أَيْنَ حالُكَ؟","ما حالُكَ كَيْفَ؟","ـكَ pour un homme."]]},

{n:13,p:68,t:"Le pluriel (personnes)",
w:`هُمْ|ils/eux
هُنَّ|elles
هٰؤُلاءِ|ceux-ci/celles-ci (pluriel)
أُولٰئِكَ|ceux-là/celles-là (pluriel)
صَدِيقٌ|ami
ضَيْفٌ|invité/hôte
النّاسُ|les gens
حَقْلٌ|champ
قَرْيَةٌ|village
مَطْعَمٌ|restaurant/cantine
شَيْخٌ|vieil homme/cheikh
المَدْرَسَةُ الابْتِدائِيَّةُ|école primaire
بَعْضُهُمْ|certains d'entre eux
حاجٌّ|pèlerin
مُسْلِمٌ|musulman
امْرَأَةٌ|femme
قَوِيٌّ|fort
ضَعِيفٌ|faible
عالِمٌ|savant
وَزِيرٌ|ministre`,
f:`طالِبٌ|طُلّابٌ|étudiant|pl
رَجُلٌ|رِجالٌ|homme|pl
صَدِيقٌ|أَصْدِقاءُ|ami|pl
زَمِيلٌ|زُمَلاءُ|camarade|pl
مُدَرِّسٌ|مُدَرِّسُونَ|enseignant|pl
مُسْلِمٌ|مُسْلِمُونَ|musulman|pl
مُهَنْدِسٌ|مُهَنْدِسُونَ|ingénieur|pl
فَلّاحٌ|فَلّاحُونَ|paysan|pl
مُجْتَهِدٌ|مُجْتَهِدُونَ|studieux|pl
تاجِرٌ|تُجّارٌ|commerçant|pl
طَبِيبٌ|أَطِبّاءُ|médecin|pl
غَنِيٌّ|أَغْنِياءُ|riche|pl
فَقِيرٌ|فُقَراءُ|pauvre|pl
ضَيْفٌ|ضُيُوفٌ|invité|pl
حاجٌّ|حُجّاجٌ|pèlerin|pl
وَلَدٌ|أَوْلادٌ|garçon|pl
ابْنٌ|أَبْناءٌ|fils|pl
أَخٌ|إِخْوَةٌ|frère|pl
شَيْخٌ|شُيُوخٌ|vieil homme|pl
كَبِيرٌ|كِبارٌ|grand|pl
صَغِيرٌ|صِغارٌ|petit|pl
طَوِيلٌ|طِوالٌ|grand (taille)|pl
قَصِيرٌ|قِصارٌ|petit (taille)|pl
جَدِيدٌ|جُدُدٌ|nouveau|pl
فَتىً|فِتْيانٌ|jeune homme|pl
بِنْتٌ|بَناتٌ|fille|pl
طالِبَةٌ|طالِباتٌ|étudiante|pl
مُدَرِّسَةٌ|مُدَرِّساتٌ|enseignante|pl
أُخْتٌ|أَخَواتٌ|sœur|pl
فَتاةٌ|فَتَياتٌ|jeune fille|pl
مُسْلِمَةٌ|مُسْلِماتٌ|musulmane|pl
حَقْلٌ|حُقُولٌ|champ|pl
امْرَأَةٌ|نِساءٌ|femme|pl
أُمٌّ|أُمَّهاتٌ|mère|pl
أَبٌ|آباءٌ|père|pl
زَوْجٌ|أَزْواجٌ|mari|pl
عَمٌّ|أَعْمامٌ|oncle paternel|pl
قَوِيٌّ|أَقْوِياءُ|fort|pl
ضَعِيفٌ|ضُعَفاءُ|faible|pl
عالِمٌ|عُلَماءُ|savant|pl
وَزِيرٌ|وُزَراءُ|ministre|pl`,
ph:`مَنْ هٰؤُلاءِ؟ هُمْ طُلّابٌ جُدُدٌ.|Qui sont-ils ? Ce sont de nouveaux étudiants.
مِنْ أَيْنَ هُمْ؟ هُمْ مِنْ أَمْرِيكا.|D'où sont-ils ? Ils sont d'Amérique.
أَهُمْ زُمَلاؤُكَ؟ نَعَمْ، هُمْ زُمَلائِي.|Sont-ils tes camarades ? Oui, ce sont mes camarades.
هٰؤُلاءِ طُلّابٌ مُجْتَهِدُونَ.|Ce sont des étudiants studieux.
بَعْضُهُمْ مِنَ الصِّينِ وَبَعْضُهُمْ مِنَ اليابانِ.|Certains viennent de Chine et d'autres du Japon.
أَيْنَ الطُّلّابُ؟ ذَهَبُوا إِلىٰ المَطْعَمِ.|Où sont les étudiants ? Ils sont allés au restaurant.
هٰؤُلاءِ الرِّجالُ ضُيُوفٌ.|Ces hommes sont des invités.
هٰؤُلاءِ الفَتَياتُ بَناتُ المُدِيرِ.|Ces jeunes filles sont les filles du directeur.
أَيْنَ البَناتُ؟ ذَهَبْنَ إِلىٰ المَدْرَسَةِ.|Où sont les filles ? Elles sont allées à l'école.
الفَلّاحُونَ في الحُقُولِ.|Les paysans sont dans les champs.
هُنَّ مُدَرِّساتٌ في المَدْرَسَةِ الابْتِدائِيَّةِ.|Elles sont enseignantes à l'école primaire.
هٰؤُلاءِ حُجّاجٌ مِنْ تُرْكِيا.|Ce sont des pèlerins de Turquie.
أُولٰئِكَ الرِّجالُ أَطِبّاءُ.|Ces hommes-là sont médecins.
أُولٰئِكَ النِّساءُ أُمَّهاتُ الطُّلّابِ.|Ces femmes-là sont les mères des étudiants.`,
g:[["Pluriel masculin régulier : ـُونَ","Pour beaucoup de noms de personnes (surtout en مُـ).",[["مُسْلِمٌ ← مُسْلِمُونَ","musulman → musulmans"]]],
["Pluriel féminin régulier : ـاتٌ","ة est remplacé par ـاتٌ.",[["طالِبَةٌ ← طالِباتٌ","étudiante → étudiantes"]]],
["Pluriel brisé","Le mot change de l'intérieur : il faut l'apprendre avec le singulier.",[["طالِبٌ ← طُلّابٌ","étudiant → étudiants"],["رَجُلٌ ← رِجالٌ","homme → hommes"]]],
["هٰؤُلاءِ / أُولٰئِكَ, هُمْ / هُنَّ","هٰؤُلاءِ (proche) et أُولٰئِكَ (éloigné) servent pour les personnes, au masculin et au féminin. هُمْ = ils, هُنَّ = elles.",[["هٰؤُلاءِ طالِباتٌ.","Ce sont des étudiantes."]]],
["Passé au pluriel","ذَهَبُوا (ils sont allés), ذَهَبْنَ (elles sont allées).",[["الطُّلّابُ ذَهَبُوا إِلىٰ المَطْعَمِ.","Les étudiants sont allés au restaurant."]]]],
q:[["« Ils sont allés »","ذَهَبُوا","ذَهَبْنَ","ذَهَبَتْ","ذَهَبُونَ","ـُوا = ils."],
["« Elles sont sorties »","خَرَجْنَ","خَرَجُوا","خَرَجَتْ","خَرَجُونَ","ـْنَ = elles."],
["« Ce sont des musulmans » (des hommes)","هٰؤُلاءِ مُسْلِمُونَ.","هٰذا مُسْلِمُونَ.","هٰؤُلاءِ مُسْلِمٌ.","هٰؤُلاءِ مُسْلِماتٌ.","مُسْلِماتٌ = musulmanes."],
["« les nouveaux étudiants »","الطُّلّابُ الجُدُدُ","الطُّلّابُ الجَدِيدُ","الطُّلّابُ جُدُدٌ","طُلّابٌ الجُدُدُ","L'adjectif d'un pluriel humain est aussi au pluriel."],
["« Ces hommes-là sont des ministres »","أُولٰئِكَ الرِّجالُ وُزَراءُ.","تِلْكَ الرِّجالُ وُزَراءُ.","ذٰلِكَ الرِّجالُ وُزَراءُ.","أُولٰئِكَ الرِّجالُ وَزِيرٌ.","Pluriel éloigné de personnes = أُولٰئِكَ."]]},

{n:14,p:82,t:"نَحْنُ / أَنْتُمْ et leurs suffixes",
w:`نَحْنُ|nous
أَنْتُمْ|vous (pluriel)
كُلِّيَّةٌ|faculté
الطِّبُّ|la médecine
الهَنْدَسَةُ|l'ingénierie
الشَّرِيعَةُ|la charia/le droit islamique
التِّجارَةُ|le commerce
المَطارُ|l'aéroport
زِيارَةٌ|visite
الدُّكْتُورُ|le docteur
أَهْلًا وَسَهْلًا|bienvenue
مَرْحَبًا|bonjour/bienvenue
الإِسْلامُ|l'islam
دِينٌ|religion
رَبٌّ|seigneur
نَصْرانِيٌّ|chrétien
أَحَدُهُمْ|l'un d'eux`,
f:`نَصْرانِيٌّ|نَصارىٰ|chrétien|pl
كُلِّيَّةٌ|كُلِّيّاتٌ|faculté|pl`,
ph:`السَّلامُ عَلَيْكُمْ.|Que la paix soit sur vous.
وَعَلَيْكُمُ السَّلامُ وَرَحْمَةُ اللهِ وَبَرَكاتُهُ.|Et sur vous la paix, la miséricorde d'Allah et Ses bénédictions.
كَيْفَ حالُكُمْ؟ نَحْنُ بِخَيْرٍ وَالحَمْدُ لِلّٰهِ.|Comment allez-vous ? Nous allons bien, louange à Allah.
مَنْ أَنْتُمْ؟ نَحْنُ أَبْناءُ الدُّكْتُورِ مُوسىٰ.|Qui êtes-vous ? Nous sommes les fils du docteur Moussa.
أَهْلًا وَسَهْلًا وَمَرْحَبًا.|Soyez les bienvenus.
أَيْنَ بَيْتُكُمْ؟ بَيْتُنا قَرِيبٌ مِنَ المَطارِ.|Où est votre maison ? Notre maison est près de l'aéroport.
نَحْنُ طُلّابٌ في كُلِّيَّةِ الطِّبِّ.|Nous sommes étudiants à la faculté de médecine.
أَخِي في كُلِّيَّةِ الهَنْدَسَةِ.|Mon frère est à la faculté d'ingénierie.
أَبُوهُمْ مُدَرِّسٌ وَأُمُّهُمْ طَبِيبَةٌ.|Leur père est enseignant et leur mère est médecin.
ذَهَبْنا إِلىٰ المُسْتَشْفىٰ لِزِيارَةِ عَمِّكُمْ.|Nous sommes allés à l'hôpital pour rendre visite à votre oncle.
أَأَنْتُمْ مُسْلِمُونَ؟ لا، نَحْنُ نَصارىٰ.|Êtes-vous musulmans ? Non, nous sommes chrétiens.
الإِسْلامُ دِينُنا وَاللهُ رَبُّنا.|L'islam est notre religion et Allah est notre Seigneur.
أَيْنَ ذَهَبْتُمْ؟ ذَهَبْنا إِلىٰ السُّوقِ.|Où êtes-vous allés ? Nous sommes allés au marché.
أَحَدُهُمْ مِنَ الهِنْدِ.|L'un d'eux vient d'Inde.`,
g:[["Pronoms pluriels","<b>نَحْنُ</b> nous — <b>أَنْتُمْ</b> vous — <b>هُمْ</b> ils.",[["نَحْنُ طُلّابٌ.","Nous sommes étudiants."]]],
["Suffixes pluriels","<b>ـنا</b> notre — <b>ـكُمْ</b> votre — <b>ـهُمْ</b> leur.",[["بَيْتُنا، بَيْتُكُمْ، بَيْتُهُمْ","notre / votre / leur maison"]]],
["Passé","ذَهَبْنا (nous), ذَهَبْتُمْ (vous), ذَهَبُوا (ils).",[["أَيْنَ ذَهَبْتُمْ؟","Où êtes-vous allés ?"]]]],
q:[["« notre maison »","بَيْتُنا","بَيْتُكُمْ","بَيْتُهُمْ","البَيْتُنا","ـنا = notre."],
["« Où êtes-vous allés ? »","أَيْنَ ذَهَبْتُمْ؟","أَيْنَ ذَهَبْنا؟","أَيْنَ ذَهَبُوا؟","أَيْنَ ذَهَبْتَ؟","ـتُمْ = vous."],
["« Leur père est médecin »","أَبُوهُمْ طَبِيبٌ.","أَبُوكُمْ طَبِيبٌ.","أَبُوهُ طَبِيبٌ.","أَبُهُمْ طَبِيبٌ.","أَبٌ + ـهُمْ → أَبُوهُمْ."],
["« Nous sommes musulmans » (des hommes)","نَحْنُ مُسْلِمُونَ.","نَحْنُ مُسْلِمٌ.","أَنْتُمْ مُسْلِمُونَ.","نَحْنُ مُسْلِماتٌ.","Pluriel masculin : مُسْلِمُونَ."],
["Réponse à « السَّلامُ عَلَيْكُمْ »","وَعَلَيْكُمُ السَّلامُ","وَعَلَيْكُمْ سَلامٌ","السَّلامُ عَلَيْنا","أَهْلًا وَعَلَيْكُمْ","On répond وَعَلَيْكُمُ السَّلامُ."]]},

{n:15,p:87,t:"Le féminin pluriel et le passé complet",
w:`أَنْتُنَّ|vous (féminin pluriel)
قَبْلَ|avant/il y a
بَعْدَ|après/dans
مَتىٰ|quand
شَهْرٌ|mois
أُسْبُوعٌ|semaine
دَرْسٌ|leçon/cours
الصَّلاةُ|la prière
الأَذانُ|l'appel à la prière
رَجَعَ|il est revenu/il est rentré
اخْتِبارٌ|examen
الرِّياضُ|Riyad`,
ph:`مَنْ أَنْتُنَّ؟ نَحْنُ بَناتُ الشَّيْخِ عَبّاسٍ.|Qui êtes-vous ? Nous sommes les filles du cheikh Abbas.
أَيْنَ أُمُّكُنَّ؟ هِيَ في البَيْتِ.|Où est votre mère ? Elle est à la maison.
أَأَنْتُنَّ طالِباتٌ؟ نَعَمْ، نَحْنُ طالِباتٌ.|Êtes-vous étudiantes ? Oui, nous sommes étudiantes.
مَتىٰ اخْتِبارُكُنَّ؟ اخْتِبارُنا بَعْدَ شَهْرٍ.|Quand est votre examen ? Notre examen est dans un mois.
أَذَهَبْتُنَّ إِلىٰ المَدْرَسَةِ اليَوْمَ؟|Êtes-vous allées à l'école aujourd'hui ?
ذَهَبْتُ إِلىٰ القاهِرَةِ قَبْلَ أُسْبُوعٍ.|Je suis allé au Caire il y a une semaine.
مَتىٰ رَجَعْتَ مِنَ الرِّياضِ؟|Quand es-tu revenu de Riyad ?
خَرَجْتُ مِنَ الفَصْلِ بَعْدَ الدَّرْسِ.|Je suis sorti de la classe après le cours.
ذَهَبْنا إِلىٰ المَسْجِدِ قَبْلَ الأَذانِ.|Nous sommes allés à la mosquée avant l'appel à la prière.
مَتىٰ رَجَعَ أَبُوكِ؟ رَجَعَ بَعْدَ الصَّلاةِ.|Quand ton père est-il revenu ? Il est revenu après la prière.
أَيْنَ ذَهَبْتِ يا زَيْنَبُ؟|Où es-tu allée, Zaynab ?
البَناتُ رَجَعْنَ مِنَ المَدْرَسَةِ.|Les filles sont revenues de l'école.`,
g:[["Pronoms féminins","<b>أَنْتِ</b> (tu, f), <b>أَنْتُنَّ</b> (vous, f), <b>هُنَّ</b> (elles). Suffixes : <b>ـكُنَّ</b> (votre), <b>ـهُنَّ</b> (leur).",[["أُمُّكُنَّ","votre mère (à des femmes)"]]],
["Conjugaison complète du passé","<table class=cj><tr><td>أَنا ذَهَبْتُ</td><td>نَحْنُ ذَهَبْنا</td></tr><tr><td>أَنْتَ ذَهَبْتَ</td><td>أَنْتُمْ ذَهَبْتُمْ</td></tr><tr><td>أَنْتِ ذَهَبْتِ</td><td>أَنْتُنَّ ذَهَبْتُنَّ</td></tr><tr><td>هُوَ ذَهَبَ</td><td>هُمْ ذَهَبُوا</td></tr><tr><td>هِيَ ذَهَبَتْ</td><td>هُنَّ ذَهَبْنَ</td></tr></table>",[["ذَهَبْتُ إِلىٰ المَسْجِدِ.","Je suis allé à la mosquée."]]],
["قَبْلَ / بَعْدَ + génitif","قَبْلَ أُسْبُوعٍ = il y a une semaine ; بَعْدَ شَهْرٍ = dans un mois.",[["بَعْدَ الصَّلاةِ","après la prière"]]]],
q:[["« Je suis allé »","ذَهَبْتُ","ذَهَبْتَ","ذَهَبَتْ","ذَهَبْتِ","ـتُ = je."],
["« Tu es allée » (à une femme)","ذَهَبْتِ","ذَهَبْتَ","ذَهَبَتْ","ذَهَبْتُ","ـتِ = tu (f)."],
["« Vous êtes sorties » (des femmes)","خَرَجْتُنَّ","خَرَجْتُمْ","خَرَجْنَ","خَرَجْنا","ـتُنَّ = vous (f pl)."],
["« Elle est revenue »","رَجَعَتْ","رَجَعْتُ","رَجَعْتِ","رَجَعْنَ","ـَتْ = elle."],
["« après la prière »","بَعْدَ الصَّلاةِ","بَعْدَ الصَّلاةُ","قَبْلَ الصَّلاةِ","بَعْدَ صَلاةٌ","بَعْدَ + génitif."],
["« il y a une semaine »","قَبْلَ أُسْبُوعٍ","بَعْدَ أُسْبُوعٍ","قَبْلَ الأُسْبُوعُ","في أُسْبُوعٍ","قَبْلَ = avant / il y a."],
["« votre mère » (à des femmes)","أُمُّكُنَّ","أُمُّكُمْ","أُمُّهُنَّ","أُمُّكِ","ـكُنَّ = votre (f pl)."]]},

{n:16,p:92,t:"Le pluriel des non-humains",
w:`جَبَلٌ|montagne
بَحْرٌ|mer
نَهْرٌ|fleuve/rivière
فُنْدُقٌ|hôtel
طائِرَةٌ|avion
كَثِيرٌ|nombreux/beaucoup`,
f:`كِتابٌ|كُتُبٌ|livre|pl
قَلَمٌ|أَقْلامٌ|stylo|pl
بَيْتٌ|بُيُوتٌ|maison|pl
بابٌ|أَبْوابٌ|porte|pl
دَرْسٌ|دُرُوسٌ|leçon|pl
نَجْمٌ|نُجُومٌ|étoile|pl
كَلْبٌ|كِلابٌ|chien|pl
جَبَلٌ|جِبالٌ|montagne|pl
بَحْرٌ|بِحارٌ|mer|pl
نَهْرٌ|أَنْهارٌ|fleuve|pl
سَيّارَةٌ|سَيّاراتٌ|voiture|pl
ساعَةٌ|ساعاتٌ|montre|pl
دَرّاجَةٌ|دَرّاجاتٌ|vélo|pl
طائِرَةٌ|طائِراتٌ|avion|pl
دَجاجَةٌ|دَجاجاتٌ|poule|pl
سَرِيرٌ|سُرُرٌ|lit|pl
مَسْجِدٌ|مَساجِدُ|mosquée|pl
مَكْتَبٌ|مَكاتِبُ|bureau|pl
فُنْدُقٌ|فَنادِقُ|hôtel|pl
مِفْتاحٌ|مَفاتِيحُ|clé|pl
حِمارٌ|حَمِيرٌ|âne|pl
مِنْدِيلٌ|مَنادِيلُ|mouchoir|pl`,
ph:`لِمَنْ هٰذِهِ الأَقْلامُ يا مُحَمَّدُ؟ هِيَ لِي.|À qui sont ces stylos, Mohammed ? Ils sont à moi.
هٰذِهِ كُتُبٌ جَدِيدَةٌ.|Ce sont des livres neufs.
أَيْنَ المَفاتِيحُ؟ هِيَ عَلىٰ المَكْتَبِ.|Où sont les clés ? Elles sont sur le bureau.
تِلْكَ بُيُوتٌ كَبِيرَةٌ.|Ce sont de grandes maisons, là-bas.
النُّجُومُ جَمِيلَةٌ.|Les étoiles sont belles.
الدُّرُوسُ سَهْلَةٌ.|Les leçons sont faciles.
في المَدِينَةِ مَساجِدُ كَثِيرَةٌ.|Il y a beaucoup de mosquées dans la ville.
أَيْنَ ذَهَبَتِ الكِلابُ؟|Où sont allés les chiens ?
هٰذِهِ الجِبالُ جَمِيلَةٌ.|Ces montagnes sont belles.
السَّيّاراتُ في الشّارِعِ.|Les voitures sont dans la rue.
هٰذِهِ الدَّرّاجاتُ لِلطُّلّابِ.|Ces vélos sont aux étudiants.`,
g:[["Pluriel non-humain = féminin singulier","Pour les choses et les animaux, le pluriel se traite comme un <b>féminin singulier</b> : هٰذِهِ، هِيَ، adjectif en ة, verbe en تْ.",[["هٰذِهِ كُتُبٌ.","Ce sont des livres."],["البُيُوتُ كَبِيرَةٌ.","Les maisons sont grandes."],["ذَهَبَتِ الكِلابُ.","Les chiens sont partis."]]],
["Comparer avec les personnes","Personnes : هٰؤُلاءِ / هُمْ. Choses : هٰذِهِ / هِيَ.",[["هٰؤُلاءِ طُلّابٌ — هٰذِهِ كُتُبٌ","Ce sont des étudiants — ce sont des livres"]]]],
q:[["« Ce sont des livres »","هٰذِهِ كُتُبٌ.","هٰؤُلاءِ كُتُبٌ.","هٰذا كُتُبٌ.","هٰذِهِ كِتابٌ.","Pluriel non-humain → هٰذِهِ."],
["« Les maisons sont grandes »","البُيُوتُ كَبِيرَةٌ.","البُيُوتُ كِبارٌ.","البُيُوتُ كَبِيرٌ.","بُيُوتٌ كَبِيرَةٌ.","Pluriel non-humain → adjectif féminin singulier."],
["Où sont les clés ? « Elles sont… » : quel pronom ?","هِيَ","هُمْ","هُنَّ","هُوَ","Pluriel non-humain → هِيَ."],
["« Ce sont des étudiants »","هٰؤُلاءِ طُلّابٌ.","هٰذِهِ طُلّابٌ.","تِلْكَ طُلّابٌ.","هٰذا طُلّابٌ.","Personnes → هٰؤُلاءِ."],
["« Les chiens sont sortis »","خَرَجَتِ الكِلابُ.","خَرَجُوا الكِلابُ.","خَرَجْنَ الكِلابُ.","خَرَجَتِ الكِلابَ.","Verbe au féminin singulier ; sujet au nominatif."]]},

{n:17,p:96,t:"Non-humains : adjectifs et démonstratifs",
w:`شَرِكَةٌ|société/entreprise
مُدِيرُ الشَّرِكَةِ|directeur de la société
رَخِيصٌ|bon marché/pas cher
يابانِيٌّ|japonais`,
f:`شَرِكَةٌ|شَرِكاتٌ|société|pl
دَفْتَرٌ|دَفاتِرُ|cahier|pl
قَمِيصٌ|قُمْصانٌ|chemise|pl
لُغَةٌ|لُغاتٌ|langue|pl`,
ph:`أَبْوابُ المَسْجِدِ مَفْتُوحَةٌ.|Les portes de la mosquée sont ouvertes.
لِمَنْ هٰذِهِ البُيُوتُ الجَدِيدَةُ؟ هِيَ لِمُدِيرِ الشَّرِكَةِ.|À qui sont ces maisons neuves ? Elles sont au directeur de la société.
في الهِنْدِ لُغاتٌ كَثِيرَةٌ.|En Inde, il y a beaucoup de langues.
أَيْنَ الكُتُبُ الجَدِيدَةُ؟ هِيَ في المَكْتَبَةِ.|Où sont les nouveaux livres ? Ils sont à la bibliothèque.
تِلْكَ السُّرُرُ مَكْسُورَةٌ.|Ces lits-là sont cassés.
السّاعَةُ اليابانِيَّةُ رَخِيصَةٌ.|La montre japonaise est bon marché.
هٰذِهِ القُمْصانُ رَخِيصَةٌ.|Ces chemises sont bon marché.
هٰذِهِ دَفاتِرُ الطُّلّابِ.|Ce sont les cahiers des étudiants.
في هٰذا الشّارِعِ فَنادِقُ كَبِيرَةٌ.|Dans cette rue, il y a de grands hôtels.
هٰذِهِ كُتُبِي وَتِلْكَ كُتُبُ أَخِي.|Ce sont mes livres et ceux-là sont les livres de mon frère.`,
g:[["Épithète d'un pluriel non-humain","Féminin singulier, avec la même définitude.",[["كُتُبٌ جَدِيدَةٌ","des livres neufs"],["البُيُوتُ الجَدِيدَةُ","les maisons neuves"]]],
["Démonstratifs au pluriel","Non-humains : <b>هٰذِهِ</b> (proche) / <b>تِلْكَ</b> (loin). Humains : <b>هٰؤُلاءِ</b> / <b>أُولٰئِكَ</b>.",[["تِلْكَ السُّرُرُ مَكْسُورَةٌ.","Ces lits-là sont cassés."]]],
["Pluriels sans tanwīn","Les pluriels du type مَساجِدُ، مَفاتِيحُ، فَنادِقُ، دَفاتِرُ ne prennent pas de tanwīn.",[["في الشّارِعِ فَنادِقُ.","Il y a des hôtels dans la rue."]]],
["La nisba ـِيٌّ","Adjectif d'origine : ـِيٌّ (m), ـِيَّةٌ (f).",[["السّاعَةُ اليابانِيَّةُ","la montre japonaise"]]]],
q:[["« des livres neufs »","كُتُبٌ جَدِيدَةٌ","كُتُبٌ جُدُدٌ","كُتُبٌ جَدِيدٌ","الكُتُبُ جَدِيدَةٌ","Non-humain → féminin singulier."],
["« Ces lits-là sont cassés »","تِلْكَ السُّرُرُ مَكْسُورَةٌ.","أُولٰئِكَ السُّرُرُ مَكْسُورَةٌ.","تِلْكَ السُّرُرُ مَكْسُورُونَ.","ذٰلِكَ السُّرُرُ مَكْسُورٌ.","Non-humain éloigné → تِلْكَ."],
["« Ces étudiants-là sont nouveaux »","أُولٰئِكَ الطُّلّابُ جُدُدٌ.","تِلْكَ الطُّلّابُ جَدِيدَةٌ.","أُولٰئِكَ الطُّلّابُ جَدِيدَةٌ.","ذٰلِكَ الطُّلّابُ جُدُدٌ.","Humains → أُولٰئِكَ + adjectif au pluriel."],
["Lequel ne prend PAS de tanwīn ?","مَساجِدُ","بُيُوتٌ","كُتُبٌ","أَقْلامٌ","Schème مَفاعِلُ."],
["« Il y a beaucoup d'hôtels dans la rue »","في الشّارِعِ فَنادِقُ كَثِيرَةٌ.","في الشّارِعِ فَنادِقٌ كَثِيرَةٌ.","في الشّارِعُ فَنادِقُ كَثِيرَةٌ.","في الشّارِعِ فَنادِقُ كَثِيرُونَ.","فَنادِقُ sans tanwīn, adjectif féminin singulier."]]},

{n:18,p:100,t:"Le duel et كَمْ",
w:`كَمْ|combien
عِيدٌ|fête
عِيدُ الفِطْرِ|Aïd al-Fitr (fête de la rupture du jeûne)
عِيدُ الأَضْحىٰ|Aïd al-Adha (fête du sacrifice)
سَنَةٌ|année/an
عَجَلَةٌ|roue
حَيٌّ|quartier
رِيالٌ|riyal
رَكْعَةٌ|rak'a (unité de prière)
مِسْطَرَةٌ|règle (pour tracer)
صَلاةُ الفَجْرِ|la prière de l'aube
هٰذانِ|ces deux-ci (masculin)
هاتانِ|ces deux-ci (féminin)
هُما|eux deux/elles deux`,
f:`عَجَلَةٌ|عَجَلاتٌ|roue|pl
حَيٌّ|أَحْياءٌ|quartier|pl
رِيالٌ|رِيالاتٌ|riyal|pl
رَكْعَةٌ|رَكَعاتٌ|rak'a|pl
مِسْطَرَةٌ|مَساطِرُ|règle|pl
عِيدٌ|أَعْيادٌ|fête|pl
كِتابٌ|كِتابانِ|livre|du
بِنْتٌ|بِنْتانِ|fille|du
أَخٌ|أَخَوانِ|frère|du
عِيدٌ|عِيدانِ|fête|du
سَيّارَةٌ|سَيّارَتانِ|voiture|du
مَسْجِدٌ|مَسْجِدانِ|mosquée|du
دَفْتَرٌ|دَفْتَرانِ|cahier|du
رَكْعَةٌ|رَكْعَتانِ|rak'a|du
نافِذَةٌ|نافِذَتانِ|fenêtre|du
مُدَرِّسَةٌ|مُدَرِّسَتانِ|enseignante|du
عَيْنٌ|عَيْنانِ|œil|du
يَدٌ|يَدانِ|main|du`,
ph:`كَمْ أَخًا لَكَ يا مُحَمَّدُ؟ لِي أَخٌ واحِدٌ.|Combien de frères as-tu, Mohammed ? J'ai un seul frère.
كَمْ أُخْتًا لَكَ؟ لِي أُخْتانِ.|Combien de sœurs as-tu ? J'ai deux sœurs.
كَمْ عَجَلَةً لِلدَّرّاجَةِ؟ لَها عَجَلَتانِ.|Combien de roues a le vélo ? Il a deux roues.
كَمْ عِيدًا في السَّنَةِ؟ في السَّنَةِ عِيدانِ.|Combien de fêtes y a-t-il dans l'année ? Il y a deux fêtes dans l'année.
هُما عِيدُ الفِطْرِ وَعِيدُ الأَضْحىٰ.|Ce sont l'Aïd al-Fitr et l'Aïd al-Adha.
عِنْدَهُ سَيّارَتانِ صَغِيرَتانِ.|Il a deux petites voitures.
كَمْ نافِذَةً في غُرْفَتِكَ؟ فِيها نافِذَتانِ.|Combien de fenêtres y a-t-il dans ta chambre ? Il y en a deux.
لِمَنْ هٰذانِ الدَّفْتَرانِ؟ هُما لِي.|À qui sont ces deux cahiers ? Ils sont à moi.
لِمَنْ هاتانِ المِسْطَرَتانِ؟|À qui sont ces deux règles ?
صَلاةُ الفَجْرِ رَكْعَتانِ.|La prière de l'aube fait deux rak'as.
في هٰذا الحَيِّ مَدْرَسَتانِ.|Dans ce quartier, il y a deux écoles.
لِي عَيْنانِ وَأُذُنانِ وَيَدانِ وَرِجْلانِ.|J'ai deux yeux, deux oreilles, deux mains et deux pieds.
هٰذانِ الطَّبِيبانِ مِنْ إِنْجِلْتَرا.|Ces deux médecins sont d'Angleterre.`,
g:[["Le duel (muthannā)","<b>ـانِ</b> au nominatif, <b>ـَيْنِ</b> à l'accusatif / génitif. ة devient ت.",[["كِتابٌ ← كِتابانِ","un livre → deux livres"],["سَيّارَةٌ ← سَيّارَتانِ","une voiture → deux voitures"]]],
["هٰذانِ / هاتانِ / هُما","Ces deux (m / f) ; eux deux.",[["هاتانِ المِسْطَرَتانِ","ces deux règles"]]],
["Accord au duel","L'adjectif se met aussi au duel.",[["سَيّارَتانِ صَغِيرَتانِ","deux petites voitures"]]],
["كَمْ + singulier à l'accusatif","Après كَمْ : nom <b>singulier, indéfini, en ـًا</b>.",[["كَمْ أَخًا لَكَ؟","Combien de frères as-tu ?"]]]],
q:[["« Combien de frères as-tu ? »","كَمْ أَخًا لَكَ؟","كَمْ أَخٌ لَكَ؟","كَمْ إِخْوَةً لَكَ؟","كَمْ الأَخُ لَكَ؟","كَمْ + singulier accusatif indéfini."],
["« deux voitures »","سَيّارَتانِ","سَيّارَةانِ","سَيّاراتانِ","سَيّارَتانُ","ة devient ت devant ـانِ."],
["« ces deux étudiantes »","هاتانِ الطّالِبَتانِ","هٰذانِ الطّالِبَتانِ","هٰذِهِ الطّالِبَتانِ","هاتانِ الطّالِبَةُ","Duel féminin → هاتانِ."],
["« Il a deux petites voitures »","عِنْدَهُ سَيّارَتانِ صَغِيرَتانِ.","عِنْدَهُ سَيّارَتانِ صَغِيرَةٌ.","عِنْدَهُ سَيّارَتانِ صَغِيرانِ.","عِنْدَهُ سَيّاراتٌ صَغِيرَتانِ.","Adjectif au duel féminin."],
["Après كَمْ, le nom est…","singulier, indéfini, à l'accusatif (ـًا)","pluriel au nominatif","au duel","singulier défini avec ال","كَمْ طالِبًا؟"],
["« Ces deux livres sont à moi »","هٰذانِ الكِتابانِ لِي.","هاتانِ الكِتابانِ لِي.","هٰذانِ الكِتابُ لِي.","هٰذانِ الكِتابَيْنِ لِي.","Sujet au nominatif → ـانِ."]]},

{n:19,p:105,t:"Les nombres 3 à 10 (nom masculin)",
w:`ثَلاثَةٌ|trois
أَرْبَعَةٌ|quatre
خَمْسَةٌ|cinq
سِتَّةٌ|six
سَبْعَةٌ|sept
ثَمانِيَةٌ|huit
تِسْعَةٌ|neuf
عَشَرَةٌ|dix
بَلَدٌ|pays
مُخْتَلِفٌ|différent/divers
شُكْرًا|merci
يَوْمٌ|jour
ثَمَنٌ|prix
نِصْفٌ|moitié/demi
قِرْشٌ|piastre
حافِلَةٌ|bus/autobus
راكِبٌ|passager
سُؤالٌ|question
جَيْبٌ|poche
أُورُوبّا|Europe
مالِيزِيا|Malaisie`,
f:`بَلَدٌ|بِلادٌ|pays|pl
يَوْمٌ|أَيّامٌ|jour|pl
قِرْشٌ|قُرُوشٌ|piastre|pl
حافِلَةٌ|حافِلاتٌ|bus|pl
راكِبٌ|رُكّابٌ|passager|pl
سُؤالٌ|أَسْئِلَةٌ|question|pl
جَيْبٌ|جُيُوبٌ|poche|pl
قَدِيمٌ|قُدامىٰ|ancien (personne)|pl`,
ph:`كَمْ طالِبًا جَدِيدًا في فَصْلِكَ يا شَيْخُ؟|Combien de nouveaux étudiants y a-t-il dans ta classe, cheikh ?
فِيهِ عَشَرَةُ طُلّابٍ جُدُدٍ.|Il y a dix nouveaux étudiants.
هُمْ مِنْ بِلادٍ مُخْتَلِفَةٍ.|Ils viennent de pays différents.
مِنْهُمْ ثَلاثَةُ طُلّابٍ مِنَ الهِنْدِ.|Parmi eux, trois étudiants viennent d'Inde.
عِنْدِي خَمْسَةُ كُتُبٍ وَثَلاثَةُ أَقْلامٍ.|J'ai cinq livres et trois stylos.
في الأُسْبُوعِ سَبْعَةُ أَيّامٍ.|Il y a sept jours dans la semaine.
كَمْ ثَمَنُ هٰذا الكِتابِ؟ ثَمَنُهُ سَبْعَةُ رِيالاتٍ وَنِصْفٌ.|Quel est le prix de ce livre ? Il coûte sept riyals et demi.
في هٰذِهِ الحافِلَةِ عَشَرَةُ رُكّابٍ.|Il y a dix passagers dans ce bus.
خالِدٌ لَهُ سِتَّةُ أَبْناءٍ.|Khalid a six fils.
في جَيْبِي ثَمانِيَةُ رِيالاتٍ.|J'ai huit riyals dans ma poche.
في هٰذا الدَّرْسِ تِسْعَةُ أَسْئِلَةٍ.|Il y a neuf questions dans cette leçon.
لِي أَرْبَعَةُ إِخْوَةٍ.|J'ai quatre frères.
شُكْرًا يا شَيْخُ.|Merci, cheikh.`,
g:[["3 à 10 + nom masculin : le nombre prend ة","C'est l'<b>inversion du genre</b> : avec un nom masculin, le nombre a la forme en ة.",[["ثَلاثَةُ طُلّابٍ","trois étudiants"],["عَشَرَةُ أَيّامٍ","dix jours"]]],
["Le nom compté","Il est au <b>pluriel</b> et au <b>génitif</b>.",[["خَمْسَةُ كُتُبٍ","cinq livres"]]],
["On regarde le singulier","رِيالٌ est masculin → سَبْعَةُ رِيالاتٍ, même si le pluriel est en ـات.",[["ثَمانِيَةُ رِيالاتٍ","huit riyals"]]],
["1 et 2","Ils suivent le nom et s'accordent comme un adjectif.",[["كِتابٌ واحِدٌ — كِتابانِ","un livre — deux livres"]]]],
q:[["« trois étudiants »","ثَلاثَةُ طُلّابٍ","ثَلاثُ طُلّابٍ","ثَلاثَةُ طالِبٍ","ثَلاثَةُ طُلّابٌ","Nom masc. → nombre en ة ; pluriel au génitif."],
["« sept jours »","سَبْعَةُ أَيّامٍ","سَبْعُ أَيّامٍ","سَبْعَةُ يَوْمٍ","سَبْعَةٌ أَيّامٌ","يَوْمٌ est masculin."],
["« huit riyals »","ثَمانِيَةُ رِيالاتٍ","ثَمانِي رِيالاتٍ","ثَمانِيَةُ رِيالٍ","ثَمانِيَةٌ رِيالاتٌ","رِيالٌ est masculin au singulier."],
["Pourquoi dit-on خَمْسَةُ كُتُبٍ avec ة ?","Le singulier كِتابٌ est masculin (inversion)","Parce que كُتُبٌ est féminin","5 prend toujours ة","Parce que le nom est au génitif","On regarde le genre du singulier, et on inverse."],
["« Combien d'étudiants ? »","كَمْ طالِبًا؟","كَمْ طُلّابًا؟","كَمْ طالِبٌ؟","كَمْ الطُّلّابُ؟","كَمْ + singulier accusatif."]]},

{n:20,p:109,t:"Les nombres 3 à 10 (nom féminin)",
w:`مَجَلَّةٌ|revue/magazine
حَرْفٌ|lettre (de l'alphabet)
إِنْدُونِيسِيا|Indonésie
ثَلاثٌ|trois (avec un nom féminin)
عَشْرٌ|dix (avec un nom féminin)`,
f:`مَجَلَّةٌ|مَجَلّاتٌ|revue|pl
حَرْفٌ|حُرُوفٌ|lettre|pl
كَلِمَةٌ|كَلِماتٌ|mot|pl`,
ph:`كَمْ طالِبَةً في فَصْلِكِ؟|Combien d'étudiantes y a-t-il dans ta classe ?
في فَصْلِنا خَمْسُ طالِباتٍ مِنَ الصِّينِ.|Dans notre classe, il y a cinq étudiantes de Chine.
وَأَرْبَعُ طالِباتٍ مِنَ اليابانِ.|Et quatre étudiantes du Japon.
لِي ثَلاثُ أَخَواتٍ.|J'ai trois sœurs.
لِي خَمْسَةُ إِخْوَةٍ وَأَرْبَعُ أَخَواتٍ.|J'ai cinq frères et quatre sœurs.
في هٰذِهِ الكَلِمَةِ ثَلاثَةُ حُرُوفٍ.|Il y a trois lettres dans ce mot.
عِنْدِي عَشْرُ مَجَلّاتٍ.|J'ai dix revues.
في المُسْتَشْفىٰ سَبْعُ طَبِيباتٍ وَتِسْعُ مُمَرِّضاتٍ.|À l'hôpital, il y a sept femmes médecins et neuf infirmières.
عِنْدَ عَبّاسٍ ثَمانِي دَجاجاتٍ.|Abbas a huit poules.
في هٰذِهِ الجامِعَةِ عَشْرُ كُلِّيّاتٍ.|Il y a dix facultés dans cette université.
عِنْدِي سِتُّ ساعاتٍ.|J'ai six montres.`,
g:[["3 à 10 + nom féminin : PAS de ة","Le nombre prend la forme sans ة.",[["ثَلاثُ طالِباتٍ","trois étudiantes"],["عَشْرُ سَيّاراتٍ","dix voitures"]]],
["Cas particuliers","8 au féminin : <b>ثَمانِي</b>. 10 : <b>عَشْرُ</b> (f) ≠ <b>عَشَرَةُ</b> (m).",[["ثَمانِي طالِباتٍ","huit étudiantes"]]],
["Masculin ou féminin ?","خَمْسَةُ إِخْوَةٍ (frères) / خَمْسُ أَخَواتٍ (sœurs).",[["لِي خَمْسَةُ إِخْوَةٍ وَأَرْبَعُ أَخَواتٍ.","J'ai cinq frères et quatre sœurs."]]]],
q:[["« trois sœurs »","ثَلاثُ أَخَواتٍ","ثَلاثَةُ أَخَواتٍ","ثَلاثُ أُخْتٍ","ثَلاثٌ أَخَواتٌ","Nom féminin → nombre sans ة."],
["« dix voitures »","عَشْرُ سَيّاراتٍ","عَشَرَةُ سَيّاراتٍ","عَشْرُ سَيّارَةٍ","عَشَرُ سَيّاراتٍ","سَيّارَةٌ féminin → عَشْرُ."],
["« huit étudiantes »","ثَمانِي طالِباتٍ","ثَمانِيَةُ طالِباتٍ","ثَمانُ طالِباتٍ","ثَمانِي طالِبَةٍ","8 au féminin = ثَمانِي."],
["« cinq frères et cinq sœurs »","خَمْسَةُ إِخْوَةٍ وَخَمْسُ أَخَواتٍ","خَمْسُ إِخْوَةٍ وَخَمْسَةُ أَخَواتٍ","خَمْسَةُ إِخْوَةٍ وَخَمْسَةُ أَخَواتٍ","خَمْسُ إِخْوَةٍ وَخَمْسُ أَخَواتٍ","Inversion du genre pour chacun."],
["« trois lettres » (حَرْفٌ, masculin)","ثَلاثَةُ حُرُوفٍ","ثَلاثُ حُرُوفٍ","ثَلاثَةُ حَرْفٍ","ثَلاثُ حَرْفٍ","حَرْفٌ est masculin → ثَلاثَةُ."]]},

{n:21,p:114,t:"Lecture : mon école — لٰكِنَّ",
w:`لٰكِنَّ|mais
واسِعٌ|vaste/spacieux
لَوْنٌ|couleur
قِبْلَةٌ|qibla (direction de la prière)
نَبِيٌّ|prophète
ذاكَ|cela (= ذٰلِكَ)`,
f:`لَوْنٌ|أَلْوانٌ|couleur|pl
كُرْسِيٌّ|كَراسِيُّ|chaise|pl
فَصْلٌ|فُصُولٌ|classe|pl`,
ph:`مَدْرَسَتِي قَرِيبَةٌ مِنَ المَسْجِدِ.|Mon école est proche de la mosquée.
هِيَ مَدْرَسَةٌ كَبِيرَةٌ، لَها ثَلاثَةُ أَبْوابٍ.|C'est une grande école, elle a trois portes.
في المَدْرَسَةِ فُصُولٌ كَثِيرَةٌ.|Il y a beaucoup de classes dans l'école.
هٰذا فَصْلُنا، وَهُوَ فَصْلٌ واسِعٌ وَجَمِيلٌ.|Voici notre classe, c'est une classe spacieuse et belle.
فِيهِ نافِذَتانِ كَبِيرَتانِ.|Il y a deux grandes fenêtres.
في فَصْلِنا عَشَرَةُ طُلّابٍ مِنْ بِلادٍ مُخْتَلِفَةٍ.|Dans notre classe, il y a dix étudiants de pays différents.
لُغاتُهُمْ مُخْتَلِفَةٌ وَأَلْوانُهُمْ مُخْتَلِفَةٌ.|Leurs langues sont différentes et leurs couleurs sont différentes.
وَلٰكِنَّ دِينَهُمْ واحِدٌ.|Mais leur religion est une.
رَبُّهُمْ واحِدٌ وَنَبِيُّهُمْ واحِدٌ وَقِبْلَتُهُمْ واحِدَةٌ.|Leur Seigneur est un, leur prophète est un et leur qibla est une.
هُمْ مُسْلِمُونَ، وَالمُسْلِمُونَ إِخْوَةٌ.|Ils sont musulmans, et les musulmans sont frères.
ذاكَ مَكْتَبُ المُدَرِّسِ.|Ça, c'est le bureau de l'enseignant.`,
g:[["لٰكِنَّ + accusatif","Le nom qui suit لٰكِنَّ prend <b>a</b> (ـَ) ; l'attribut reste au nominatif.",[["وَلٰكِنَّ دِينَهُمْ واحِدٌ.","Mais leur religion est une."]]],
["ذاكَ","Autre forme de ذٰلِكَ.",[["ذاكَ مَكْتَبُ المُدَرِّسِ.","Ça, c'est le bureau de l'enseignant."]]],
["لَهُ / لَها","Il a / elle a (pour une chose aussi).",[["لِلْمَدْرَسَةِ ثَلاثَةُ أَبْوابٍ.","L'école a trois portes."]]]],
q:[["« Mais leur religion est une »","وَلٰكِنَّ دِينَهُمْ واحِدٌ.","وَلٰكِنَّ دِينُهُمْ واحِدٌ.","وَلٰكِنَّ دِينَهُمْ واحِدًا.","وَلٰكِنَّ دِينِهِمْ واحِدٌ.","Nom après لٰكِنَّ à l'accusatif, attribut au nominatif."],
["« L'école a trois portes »","لِلْمَدْرَسَةِ ثَلاثَةُ أَبْوابٍ.","لِلْمَدْرَسَةِ ثَلاثُ أَبْوابٍ.","لِلْمَدْرَسَةِ ثَلاثَةُ بابٍ.","لِلْمَدْرَسَةُ ثَلاثَةُ أَبْوابٍ.","بابٌ masculin → ثَلاثَةُ ; pluriel au génitif."],
["« Leurs langues sont différentes »","لُغاتُهُمْ مُخْتَلِفَةٌ.","لُغاتُهُمْ مُخْتَلِفُونَ.","لُغاتُهُمْ مُخْتَلِفٌ.","لُغاتِهِمْ مُخْتَلِفَةٌ.","Pluriel non-humain → féminin singulier."],
["ذاكَ est équivalent à…","ذٰلِكَ","هٰذا","تِلْكَ","هٰذِهِ","ذاكَ = ذٰلِكَ."]]},

{n:22,p:117,t:"Les couleurs et les diptotes",
w:`أَحْمَرُ|rouge
أَخْضَرُ|vert
أَصْفَرُ|jaune
أَزْرَقُ|bleu
أَبْيَضُ|blanc
أَسْوَدُ|noir
قالَ|il a dit
قَلِيلٌ|peu/peu nombreux
فِنْجانٌ|tasse
دَقِيقَةٌ|minute`,
f:`أَحْمَرُ|حَمْراءُ|rouge|fe
أَخْضَرُ|خَضْراءُ|vert|fe
أَصْفَرُ|صَفْراءُ|jaune|fe
أَزْرَقُ|زَرْقاءُ|bleu|fe
أَبْيَضُ|بَيْضاءُ|blanc|fe
أَسْوَدُ|سَوْداءُ|noir|fe
فِنْجانٌ|فَناجِينُ|tasse|pl
دَقِيقَةٌ|دَقائِقُ|minute|pl
مَدْرَسَةٌ|مَدارِسُ|école|pl`,
ph:`عِنْدِي قَلَمٌ أَحْمَرُ.|J'ai un stylo rouge.
هٰذا القَلَمُ أَخْضَرُ وَذاكَ أَزْرَقُ.|Ce stylo est vert et celui-là est bleu.
سَيّارَتِي بَيْضاءُ.|Ma voiture est blanche.
هٰذِهِ الحَقِيبَةُ سَوْداءُ.|Ce sac est noir.
عِنْدِي مَنادِيلُ كَثِيرَةٌ.|J'ai beaucoup de mouchoirs.
في بَلَدِنا مَساجِدُ كَثِيرَةٌ وَمَدارِسُ قَلِيلَةٌ.|Dans notre pays, il y a beaucoup de mosquées et peu d'écoles.
قالَ يُوسُفُ: عِنْدِي خَمْسَةُ أَقْلامٍ.|Youssef a dit : j'ai cinq stylos.
قالَتْ زَيْنَبُ: عِنْدِي مَنادِيلُ كَثِيرَةٌ.|Zaynab a dit : j'ai beaucoup de mouchoirs.
هٰذا مِنْدِيلٌ أَبْيَضُ وَهٰذا مِنْدِيلٌ أَصْفَرُ.|Ceci est un mouchoir blanc et ceci est un mouchoir jaune.
البَقَرَةُ الصَّفْراءُ في الحَقْلِ.|La vache jaune est dans le champ.
هٰؤُلاءِ أَطِبّاءُ وَهُمْ عُلَماءُ كِبارٌ.|Ce sont des médecins et ce sont de grands savants.`,
g:[["Les couleurs","Masculin <b>أَفْعَلُ</b>, féminin <b>فَعْلاءُ</b>.",[["قَلَمٌ أَحْمَرُ","un stylo rouge"],["سَيّارَةٌ حَمْراءُ","une voiture rouge"]]],
["Les diptotes (al-mamnū' min aṣ-ṣarf)","Ils ne prennent <b>jamais de tanwīn</b>. Principales catégories : noms propres féminins (زَيْنَبُ، مَكَّةُ) et masculins en ة (حَمْزَةُ، أُسامَةُ) ; en ـانُ (عُثْمانُ، كَسْلانُ) ; sur أَفْعَلُ (أَحْمَدُ، أَحْمَرُ) ; noms étrangers (إِبْراهِيمُ، لَنْدَنُ) ; pluriels en ـاءُ (أَصْدِقاءُ، فُقَراءُ) ; pluriels مَفاعِلُ / مَفاعِيلُ (مَساجِدُ، مَفاتِيحُ) ; فَعْلاءُ (حَمْراءُ).",[["فاطِمَةُ طالِبَةٌ.","Fatima est étudiante."]]],
["قالَ / قالَتْ","Il a dit / elle a dit.",[["قالَتْ زَيْنَبُ","Zaynab a dit"]]]],
q:[["« une voiture rouge »","سَيّارَةٌ حَمْراءُ","سَيّارَةٌ أَحْمَرُ","سَيّارَةٌ حَمْراءٌ","سَيّارَةٌ أَحْمَرَةٌ","Féminin de أَحْمَرُ = حَمْراءُ (sans tanwīn)."],
["« un stylo noir »","قَلَمٌ أَسْوَدُ","قَلَمٌ أَسْوَدٌ","قَلَمٌ سَوْداءُ","قَلَمٌ السَّوْداءُ","أَسْوَدُ est diptote : pas de tanwīn."],
["Le féminin de أَزْرَقُ","زَرْقاءُ","أَزْرَقَةٌ","زَرْقاءٌ","زُرْقٌ","Schème فَعْلاءُ."],
["Lequel est diptote (pas de tanwīn) ?","فاطِمَةُ","مُحَمَّدٌ","عَلِيٌّ","خالِدٌ","Nom propre féminin."],
["Lequel n'est PAS diptote ?","بُيُوتٌ","مَساجِدُ","أَصْدِقاءُ","مَفاتِيحُ","بُيُوتٌ prend le tanwīn."],
["« J'ai beaucoup de mouchoirs »","عِنْدِي مَنادِيلُ كَثِيرَةٌ.","عِنْدِي مَنادِيلٌ كَثِيرَةٌ.","عِنْدِي مَنادِيلُ كَثِيرُونَ.","عِنْدِي مِنْدِيلٌ كَثِيرَةٌ.","مَنادِيلُ sans tanwīn + adjectif féminin singulier."]]},

{n:23,p:120,t:"Les diptotes au génitif",
w:`هاتِ|donne(-moi)
مَكَّةُ|La Mecque
جُدَّةُ|Djeddah
بَغْدادُ|Bagdad
لَنْدَنُ|Londres
باكِسْتانُ|Pakistan
الطّائِفُ|Taïf
إِسْطَنْبُولُ|Istanbul`,
ph:`مَنْ أَنْتَ يا أَخِي؟ أَنا طالِبٌ جَدِيدٌ.|Qui es-tu, mon frère ? Je suis un nouvel étudiant.
ما اسْمُكَ؟ اسْمِي أَحْمَدُ.|Comment t'appelles-tu ? Je m'appelle Ahmad.
مِنْ أَيْنَ أَنْتَ؟ أَنا مِنْ باكِسْتانَ.|D'où es-tu ? Je suis du Pakistan.
هاتِ دَفْتَرَكَ يا عَبّاسُ.|Donne ton cahier, Abbas.
أَيْنَ عَلِيٌّ؟ ذَهَبَ إِلىٰ الرِّياضِ.|Où est Ali ? Il est allé à Riyad.
وَأَيْنَ يَعْقُوبُ؟ ذَهَبَ إِلىٰ مَكَّةَ.|Et où est Yaqoub ? Il est allé à La Mecque.
مَتىٰ خَرَجَ؟ خَرَجَ قَبْلَ خَمْسِ دَقائِقَ.|Quand est-il sorti ? Il est sorti il y a cinq minutes.
هٰذا الكِتابُ لِأَحْمَدَ.|Ce livre est à Ahmad.
ذَهَبَ خالِدٌ إِلىٰ جُدَّةَ.|Khalid est allé à Djeddah.
أَبِي في لَنْدَنَ.|Mon père est à Londres.
هٰذا بَيْتُ إِبْراهِيمَ.|C'est la maison d'Ibrahim.
ذَهَبْتُ إِلىٰ مَساجِدَ كَثِيرَةٍ.|Je suis allé dans beaucoup de mosquées.`,
g:[["Diptote au génitif : ـَ au lieu de ـِ","Après une préposition ou en iḍāfa, le diptote prend un <b>fatha</b>.",[["مِنْ مَكَّةَ","de La Mecque"],["بَيْتُ فاطِمَةَ","la maison de Fatima"]]],
["Avec ال ou en iḍāfa, retour au kasra","Si le diptote a ال ou est lui-même muḍāf, il reprend ـِ.",[["في المَساجِدِ","dans les mosquées"],["في مَساجِدِ المَدِينَةِ","dans les mosquées de la ville"]]]],
q:[["« Il est allé à La Mecque »","ذَهَبَ إِلىٰ مَكَّةَ.","ذَهَبَ إِلىٰ مَكَّةِ.","ذَهَبَ إِلىٰ مَكَّةٍ.","ذَهَبَ إِلىٰ مَكَّةُ.","Diptote au génitif → ـَ."],
["« la maison de Fatima »","بَيْتُ فاطِمَةَ","بَيْتُ فاطِمَةِ","بَيْتُ فاطِمَةٍ","البَيْتُ فاطِمَةَ","Diptote en muḍāf ilayhi → ـَ."],
["« dans les mosquées »","في المَساجِدِ","في المَساجِدَ","في المَساجِدُ","في مَساجِدٍ","Avec ال, retour au kasra."],
["« Je suis du Pakistan »","أَنا مِنْ باكِسْتانَ.","أَنا مِنْ باكِسْتانِ.","أَنا مِنْ باكِسْتانٍ.","أَنا مِنْ باكِسْتانُ.","Nom étranger en ـانُ → diptote."],
["« pour Ahmad »","لِأَحْمَدَ","لِأَحْمَدِ","لِأَحْمَدٍ","لِلْأَحْمَدِ","أَحْمَدُ (schème أَفْعَلُ) est diptote."]]}
];
