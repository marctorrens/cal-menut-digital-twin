# Cal Menut Digital Twin

Repositori en català per tenir una visió general de la reforma, les infraestructures, els documents i el manteniment de Cal Menut.

El projecte està estructurat com una web documental amb [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) i es desplega automàticament a GitHub Pages.

## Estructura

```text
docs/
├── index.md                 # Portada i mapa ràpid
├── projecte/                # Reforma, cronologia, decisions i plànols
├── infraestructures/        # Electricitat, aigua, xarxa, jardí, seguretat...
├── gestio/                  # Inventari, documents i manteniment
├── masia/                   # Visió general de la finca
├── legal/                   # Tràmits i documentació oficial
└── pendents/                # Tasques i decisions obertes
```

## Desenvolupament local

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

La web local queda disponible a `http://127.0.0.1:8000/`.

## Validació

```bash
mkdocs build --strict
```

## Publicació

Qualsevol canvi enviat a la branca `main` activa el workflow `.github/workflows/deploy.yml`, construeix la documentació i la publica a GitHub Pages.
