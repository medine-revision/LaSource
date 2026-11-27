"""Met à jour le numéro de version partout (cache des navigateurs + bas de page).

Usage : python3 tools/bump_version.py   → version = date/heure actuelle (AAAA-MM-JJ-HHMM)
À lancer avant chaque push : sans ça, les téléphones peuvent garder l'ancienne version en cache.
"""
import re, datetime, pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent
v = datetime.datetime.now().strftime('%Y-%m-%d-%H%M')
idx = ROOT / 'index.html'
s = re.sub(r'\?v=[\w-]+', '?v=' + v, idx.read_text(encoding='utf-8'))
idx.write_text(s, encoding='utf-8')
m = ROOT / 'js' / 'main.js'
t = re.sub(r"const APP_VERSION='[^']*'", f"const APP_VERSION='{v}'", m.read_text(encoding='utf-8'))
m.write_text(t, encoding='utf-8')
print('Version :', v)
