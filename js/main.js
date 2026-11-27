/* Démarrage : affiche l'accueil, tente de se connecter à la base claude.ai, recharge le profil mémorisé.
   Fichier chargé dans l'ordre défini par index.html : voir CLAUDE.md. */
/* Version affichée en bas de page. Mise à jour automatiquement par tools/bump_version.py (avec les ?v= de index.html). */
const APP_VERSION='2026-11-27-1555';
{const v=document.getElementById('ver');if(v)v.textContent='Version '+APP_VERSION;}
/* ---------- démarrage ---------- */
homeView();
const remembered=LS.get('m1me',null);
(async()=>{
 try{if(window.claude&&claude.use){DB=await claude.use('db')}}catch(e){DB=null}
 dbState=DB?'ok':'none';
 if(remembered)await login(remembered);else if(view==='train'&&!Q.length)homeView();
 loadNames();
})();
