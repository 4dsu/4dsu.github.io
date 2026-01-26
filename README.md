# 4dsu.me

Lloc web personal allotjat a [www.4dsu.me](https://www.4dsu.me) mitjançant GitHub Pages.

## Estructura de fitxers

```
4dsu.me/
├── index.html          # Pàgina principal
├── styles.css          # Estils CSS
├── app.js              # JavaScript (email reveal, scroll suau, nav actiu)
├── 404.html            # Pàgina d'error 404
├── CNAME               # Domini personalitzat per GitHub Pages
├── robots.txt          # Instruccions per a crawlers
├── sitemap.xml         # Mapa del lloc per SEO
├── assets/
│   └── favicon.svg     # Favicon vectorial
└── README.md           # Aquest fitxer
```

## Com editar el contingut

1. Edita els fitxers `index.html`, `styles.css` o `app.js` segons calgui.
2. Fes commit dels canvis:
   ```bash
   git add .
   git commit -m "Descripció dels canvis"
   ```
3. Puja els canvis a GitHub:
   ```bash
   git push origin main
   ```

GitHub Pages actualitzarà automàticament el lloc en uns minuts.

## Com provar localment

### Opció 1: Obrir directament

Obre `index.html` al navegador (doble clic o arrossega al navegador).

### Opció 2: Servidor local (recomanat)

Utilitza Python per iniciar un servidor local:

```bash
cd 4dsu.me
python3 -m http.server 8000
```

Obre [http://localhost:8000](http://localhost:8000) al navegador.

## Configuració de GitHub Pages

1. Ves a **Settings → Pages** al repositori de GitHub.
2. A "Source", selecciona la branca `main` i la carpeta arrel (`/`).
3. Afegeix el domini personalitzat: `www.4dsu.me`.
4. Marca **Enforce HTTPS** per habilitar connexió segura.

El fitxer `CNAME` s'ha de mantenir a l'arrel del repositori per conservar el domini personalitzat.

## Llicència

All rights reserved © 2026 4dsu.me
