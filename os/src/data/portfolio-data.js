/**
 * 4dsu OS — dades del portfolio.
 *
 * GENERAT per scripts/os-dades.mjs a partir de src/content. No l'editis a mà:
 * canvia el contingut de src/content i executa `npm run os`.
 */

export const PORTFOLIO_DATA = {
  "system": {
    "name": "4dsu OS",
    "version": "v1.1",
    "osName": "4dsu OS",
    "osVersion": "v1.1",
    "architecture": "4DSU-WORKSTATION-X90 // CASA DE L’ILLA",
    "memory": "64 MB RAM // 98% AVAILABLE",
    "display": "CRT 800x600 @ 60Hz",
    "storage": "POSIX VFS // 1.2 GB MOUNTED",
    "buildDate": "2026-09",
    "lastUpdated": "2026-09",
    "statusWatermark": "4DSU WORKSTATION // READY",
    "statusText": "SISTEMA OPERATIU // MEMÒRIA DISPONIBLE // TOT EN ORDRE",
    "tagline": "L'ordinador vell de l'illa de 4dsu",
    "specs": {
      "processor": "RISC 32-bit @ 133 MHz",
      "video": "CRT 800x600 @ 60Hz",
      "audio": "Altaveu piezoelèctric intern (apagat)",
      "network": "TCP/IP // Loopback directe",
      "storage": "1.2 GB VFS (només lectura)"
    }
  },
  "profile": {
    "handle": "4dsu",
    "realName": "4dsu",
    "title": "Estudiant d'Enginyeria de Telecomunicacions",
    "location": "Catalunya",
    "status": "Disponible per a consultes i projectes tècnics",
    "summary": "Sóc estudiant d'enginyeria de telecomunicacions. M'apassiona entendre com funcionen les coses a fons: des del maquinari i les xarxes fins al programari eficient i les eines personals.",
    "bio": [
      "Sóc estudiant d'enginyeria de telecomunicacions. M'apassiona entendre com funcionen les coses a fons: des del maquinari i les xarxes fins al programari eficient i les eines personals.",
      "M'interessa especialment la programació de sistemes, el codi predictible i la creació d'eines que resolguin problemes concrets sense complicacions innecessàries."
    ],
    "pillars": [
      {
        "id": "telecomunicacions",
        "title": "Telecomunicacions",
        "icon": "system",
        "summary": "Xarxes de dades, arquitectures de transmissió, senyals i fonaments de sistemes distribuïts.",
        "description": "Xarxes de dades, arquitectures de transmissió, senyals i fonaments de sistemes distribuïts.",
        "tags": [
          "TCP/IP",
          "Senyals",
          "Transmissió",
          "Xarxes"
        ]
      },
      {
        "id": "programació_en_c_i_sistemes",
        "title": "Programació en C i sistemes",
        "icon": "code",
        "summary": "Codi eficient, gestió explícita de memòria i programació propera a la màquina.",
        "description": "Codi eficient, gestió explícita de memòria i programació propera a la màquina.",
        "tags": [
          "C",
          "Linux",
          "POSIX",
          "Memòria"
        ]
      },
      {
        "id": "eines_i_productivitat",
        "title": "Eines i productivitat",
        "icon": "folder",
        "summary": "Disseny de fluxos de treball, automatització d'enginyeria i interfícies funcionals.",
        "description": "Disseny de fluxos de treball, automatització d'enginyeria i interfícies funcionals.",
        "tags": [
          "Tooling",
          "Automatització",
          "CLI",
          "Interfícies"
        ]
      }
    ],
    "principles": [
      {
        "title": "Joc a la superfície, clar i llegible a l'interior.",
        "description": "Joc a la superfície, clar i llegible a l'interior."
      },
      {
        "title": "Explicar el problema i les decisions abans que la llista de tecnologies.",
        "description": "Explicar el problema i les decisions abans que la llista de tecnologies."
      },
      {
        "title": "Accessibilitat i rendiment com a requisits bàsics, no com a afegits.",
        "description": "Accessibilitat i rendiment com a requisits bàsics, no com a afegits."
      }
    ]
  },
  "welcome": {
    "id": "welcome",
    "fileName": "README.TXT",
    "windowTitle": "BENVINGUDA.EXE",
    "badge": "README.TXT",
    "pitchHeading": "Hola, sóc 4dsu.",
    "pitchSummary": "Aquest és l'ordinador vell de l'illa. Abans que hi hagués l'illa, el portfolio era aquest escriptori: encara funciona i té el mateix contingut.",
    "explanation": "Obre les aplicacions de l'escriptori o canvia a la vista lineal quan vulguis. Si has entrat des de l'illa, Esc et torna a fora.",
    "helpText": "Selecciona una aplicació i prem Enter per obrir-la.",
    "primaryAction": {
      "id": "projects",
      "label": "OBRIR PROJECTES",
      "icon": "folder",
      "appId": "projects"
    },
    "secondaryActions": [
      {
        "id": "about",
        "label": "ABOUT.EXE",
        "icon": "about",
        "appId": "about"
      },
      {
        "id": "cv",
        "label": "CV.PDF",
        "icon": "cv",
        "appId": "cv"
      },
      {
        "id": "notes",
        "label": "NOTES.TXT",
        "icon": "notes",
        "appId": "notes"
      },
      {
        "id": "contact",
        "label": "CONTACT.EXE",
        "icon": "contact",
        "appId": "contact"
      },
      {
        "id": "emkenia",
        "label": "EMKENIA.EXE",
        "icon": "company",
        "appId": "emkenia"
      },
      {
        "id": "mail",
        "label": "MAIL.EXE",
        "icon": "mail",
        "appId": "mail"
      },
      {
        "id": "browser",
        "label": "BROWSER.EXE",
        "icon": "browser",
        "appId": "browser"
      },
      {
        "id": "search",
        "label": "SEARCH.EXE",
        "icon": "search",
        "appId": "search"
      },
      {
        "id": "sysprops",
        "label": "SYSTEM PROPERTIES",
        "icon": "system",
        "appId": "sysprops"
      },
      {
        "id": "photos",
        "label": "PHOTOS/",
        "icon": "camera",
        "appId": "photos"
      },
      {
        "id": "lab",
        "label": "LAB/",
        "icon": "lab",
        "appId": "lab"
      }
    ]
  },
  "about": {
    "id": "about",
    "fileName": "ABOUT.EXE",
    "windowTitle": "ABOUT.EXE — Sobre 4dsu",
    "badge": "PERFIL DEL SISTEMA",
    "name": "4dsu",
    "role": "Estudiant d'Enginyeria de Telecomunicacions",
    "bio": [
      "Sóc estudiant d'enginyeria de telecomunicacions. M'apassiona entendre com funcionen les coses a fons: des del maquinari i les xarxes fins al programari eficient i les eines personals.",
      "M'interessa especialment la programació de sistemes, el codi predictible i la creació d'eines que resolguin problemes concrets sense complicacions innecessàries."
    ],
    "pillars": [
      {
        "title": "Telecomunicacions",
        "description": "Xarxes de dades, arquitectures de transmissió, senyals i fonaments de sistemes distribuïts."
      },
      {
        "title": "Programació en C i sistemes",
        "description": "Codi eficient, gestió explícita de memòria i programació propera a la màquina."
      },
      {
        "title": "Eines i productivitat",
        "description": "Disseny de fluxos de treball, automatització d'enginyeria i interfícies funcionals."
      }
    ],
    "principles": [
      "Joc a la superfície, clar i llegible a l'interior.",
      "Explicar el problema i les decisions abans que la llista de tecnologies.",
      "Accessibilitat i rendiment com a requisits bàsics, no com a afegits."
    ]
  },
  "education": {
    "degrees": [
      {
        "degree": "Grau en Enginyeria de Tecnologies i Serveis de Telecomunicació",
        "institution": null,
        "period": "En curs",
        "description": "Telemàtica, processament de senyals, sistemes de transmissió, xarxes IP i arquitectura de computadors.",
        "paragraphs": []
      }
    ]
  },
  "experience": {
    "id": "emkenia",
    "fileName": "EMKENIA.EXE",
    "windowTitle": "EMKENIA.EXE — Feina",
    "badge": "FEINA",
    "published": false,
    "companyName": "Emkenia",
    "intro": "Aquesta part encara s'està preparant. No hi posaré res inventat: quan hi hagi contingut real, apareixerà aquí.",
    "roleLabel": "El meu paper",
    "role": null,
    "paragraphs": [],
    "website": null
  },
  "projects": {
    "id": "projects",
    "fileName": "PROJECTS/",
    "windowTitle": "PROJECTS/ — Projectes",
    "badge": "CARPETA DE PROJECTES",
    "intro": "Projectes de 4dsu: el problema, què vaig fer i com va acabar.",
    "emptyState": {
      "title": "Carpeta en obres",
      "message": "Aquesta part encara s'està preparant. No hi posaré res inventat: quan hi hagi contingut real, apareixerà aquí.",
      "statusText": "0 FITXERS // EN OBRES"
    },
    "items": []
  },
  "lab": {
    "id": "lab",
    "fileName": "LAB/",
    "windowTitle": "LAB/ — Experiments",
    "badge": "BANQUETA DE PROVES",
    "intro": "Experiments i prototips.",
    "emptyState": {
      "title": "Laboratori buit",
      "message": "Aquesta part encara s'està preparant. No hi posaré res inventat: quan hi hagi contingut real, apareixerà aquí.",
      "statusText": "LAB // 0 EXPERIMENTS PÚBLICS"
    },
    "items": []
  },
  "cv": {
    "id": "cv",
    "fileName": "CV.PDF",
    "windowTitle": "CV.PDF — Currículum",
    "badge": "PERFIL CURRICULAR",
    "name": "4dsu",
    "title": "Estudiant d'Enginyeria de Telecomunicacions",
    "summary": "Sóc estudiant d'enginyeria de telecomunicacions. M'apassiona entendre com funcionen les coses a fons: des del maquinari i les xarxes fins al programari eficient i les eines personals.",
    "education": [
      {
        "degree": "Grau en Enginyeria de Tecnologies i Serveis de Telecomunicació",
        "institution": null,
        "period": "En curs",
        "description": "Telemàtica, processament de senyals, sistemes de transmissió, xarxes IP i arquitectura de computadors.",
        "paragraphs": []
      }
    ],
    "skills": [
      {
        "category": "Telecomunicacions",
        "items": [
          "TCP/IP",
          "Senyals",
          "Transmissió",
          "Xarxes"
        ]
      },
      {
        "category": "Programació en C i sistemes",
        "items": [
          "C",
          "Linux",
          "POSIX",
          "Memòria"
        ]
      },
      {
        "category": "Eines i productivitat",
        "items": [
          "Tooling",
          "Automatització",
          "CLI",
          "Interfícies"
        ]
      }
    ],
    "sections": [
      {
        "title": "Formació",
        "entries": [
          {
            "heading": "Grau en Enginyeria de Tecnologies i Serveis de Telecomunicació",
            "subheading": "",
            "period": "En curs",
            "details": "Telemàtica, processament de senyals, sistemes de transmissió, xarxes IP i arquitectura de computadors."
          }
        ]
      },
      {
        "title": "En què em centro",
        "entries": [
          {
            "heading": "Telecomunicacions",
            "details": "TCP/IP, Senyals, Transmissió, Xarxes"
          },
          {
            "heading": "Programació en C i sistemes",
            "details": "C, Linux, POSIX, Memòria"
          },
          {
            "heading": "Eines i productivitat",
            "details": "Tooling, Automatització, CLI, Interfícies"
          }
        ]
      }
    ],
    "downloadNote": "Resum en pantalla, fet amb el mateix contingut que la web 4dsu.me. No hi ha cap versió per descarregar."
  },
  "notes": {
    "id": "notes",
    "fileName": "NOTES.TXT",
    "windowTitle": "NOTES.TXT — Notes",
    "badge": "BLOC DE TEXT",
    "intro": "Notes breus sobre enginyeria, programació i eines.",
    "entries": [
      {
        "id": "interficie-retro",
        "date": "2026-09-01",
        "title": "Per què una interfície de sistema retro?",
        "category": "Disseny de sistemes",
        "excerpt": "Un portfolio ha de presentar el contingut de manera clara, però també pot oferir una petita sensació de descobriment.",
        "content": "Un portfolio ha de presentar el contingut de manera clara, però també pot oferir una petita sensació de descobriment. La metàfora del microordinador domèstic permet organitzar la informació en fitxers i aplicacions sense amagar res important.",
        "paragraphs": [
          "Un portfolio ha de presentar el contingut de manera clara, però també pot oferir una petita sensació de descobriment. La metàfora del microordinador domèstic permet organitzar la informació en fitxers i aplicacions sense amagar res important."
        ]
      },
      {
        "id": "aprenentatge-proper-maquinari",
        "date": "2026-08-01",
        "title": "L'aprenentatge proper al maquinari",
        "category": "Enginyeria i C",
        "excerpt": "Treballar amb llenguatges com C i gestionar la memòria a mà fa comprendre millor els costos reals de les abstraccions.",
        "content": "Treballar amb llenguatges com C i gestionar la memòria a mà fa comprendre millor els costos reals de les abstraccions que utilitzem cada dia en capes superiors.",
        "paragraphs": [
          "Treballar amb llenguatges com C i gestionar la memòria a mà fa comprendre millor els costos reals de les abstraccions que utilitzem cada dia en capes superiors."
        ]
      }
    ],
    "items": [
      {
        "id": "interficie-retro",
        "date": "2026-09-01",
        "title": "Per què una interfície de sistema retro?",
        "category": "Disseny de sistemes",
        "excerpt": "Un portfolio ha de presentar el contingut de manera clara, però també pot oferir una petita sensació de descobriment.",
        "content": "Un portfolio ha de presentar el contingut de manera clara, però també pot oferir una petita sensació de descobriment. La metàfora del microordinador domèstic permet organitzar la informació en fitxers i aplicacions sense amagar res important.",
        "paragraphs": [
          "Un portfolio ha de presentar el contingut de manera clara, però també pot oferir una petita sensació de descobriment. La metàfora del microordinador domèstic permet organitzar la informació en fitxers i aplicacions sense amagar res important."
        ]
      },
      {
        "id": "aprenentatge-proper-maquinari",
        "date": "2026-08-01",
        "title": "L'aprenentatge proper al maquinari",
        "category": "Enginyeria i C",
        "excerpt": "Treballar amb llenguatges com C i gestionar la memòria a mà fa comprendre millor els costos reals de les abstraccions.",
        "content": "Treballar amb llenguatges com C i gestionar la memòria a mà fa comprendre millor els costos reals de les abstraccions que utilitzem cada dia en capes superiors.",
        "paragraphs": [
          "Treballar amb llenguatges com C i gestionar la memòria a mà fa comprendre millor els costos reals de les abstraccions que utilitzem cada dia en capes superiors."
        ]
      }
    ]
  },
  "photos": {
    "id": "photos",
    "fileName": "PHOTO_PORTFOLIO/",
    "windowTitle": "PHOTO_PORTFOLIO/ — Fotografia",
    "badge": "PORTFOLIO FOTOGRÀFIC",
    "path": "assets/photos/",
    "intro": "47 fotografies en 9 sèries, amb la càmera, l'objectiu i la data de cada presa.",
    "emptyTitle": "Fotografia",
    "emptyMessage": "47 fotografies.",
    "structure": [
      "SELECTED/",
      "SERIES/"
    ],
    "series": [
      {
        "id": "venecia",
        "title": "Venècia (Març 2025)",
        "count": 4,
        "description": "Un dia de març a Venècia, entre arcs, finestres, góndoles i una volta daurada."
      },
      {
        "id": "cerdanya",
        "title": "Pirineus i Cerdanya (Agost 2025)",
        "count": 10,
        "description": "Boira, pedra, estanys i prats d'alta muntanya en dos dies d'agost."
      },
      {
        "id": "alt-pirineu",
        "title": "Alt Pirineu (Juliol 2026)",
        "count": 5,
        "description": "Crestes, un estany i valls en una sortida de juliol pel Pallars Sobirà."
      },
      {
        "id": "montseny",
        "title": "Corriols d'Osona (Agost 2022)",
        "count": 3,
        "description": "Una passejada de tarda d'agost per corriols d'Osona, prop del Montseny."
      },
      {
        "id": "fujifilm",
        "title": "Fujifilm X-T30 (2020–2023)",
        "count": 11,
        "description": "Fotos fetes amb la Fujifilm X-T30 entre el 2020 i el 2023, de la roca i la natura de prop fins als cels i la ciutat."
      },
      {
        "id": "llocs",
        "title": "Llocs (2020–2024)",
        "count": 6,
        "description": "Racons de Reus, Barcelona, Premià de Mar, el delta de l'Ebre i La Gomera."
      },
      {
        "id": "agost-2026",
        "title": "Agost 2026 (Agost 2026)",
        "count": 4,
        "description": "Muntanya, tempesta i mar de núvols, el 8 i el 9 d'agost del 2026."
      },
      {
        "id": "desembre-2023",
        "title": "Desembre 2023 (Desembre 2023)",
        "count": 3,
        "description": "Un cotxe antic, un crucifix daurat i una làmpada de vidre, el 6 i el 7 de desembre del 2023."
      },
      {
        "id": "agost-2024",
        "title": "Agost 2024 (Agost 2024)",
        "count": 1,
        "description": "Un telecadira al capvespre, el 24 d'agost del 2024."
      }
    ],
    "items": [
      {
        "id": "venecia-arcs",
        "slug": "venecia-arcs",
        "filename": "venecia-arcs.webp",
        "path": "assets/photos/selected/venecia-arcs.webp",
        "thumbPath": "assets/photos/thumbs/venecia-arcs.webp",
        "alt": "Vista a través d'uns arcs foscos cap a un pati de Venècia, amb una façana blanca i ornamentada, cúpules al fons i gent passejant.",
        "title": "A través dels arcs",
        "seriesId": "venecia",
        "seriesTitle": "Venècia (Març 2025)",
        "camera": "iPhone 15 Pro Max (ProRAW)",
        "lens": "24 mm · f/1.78",
        "year": 2025,
        "date": "2025-03-03",
        "location": "Venècia, Itàlia",
        "dimensions": "1080x1440",
        "width": 1080,
        "height": 1440
      },
      {
        "id": "venecia-finestra",
        "slug": "venecia-finestra",
        "filename": "venecia-finestra.webp",
        "path": "assets/photos/selected/venecia-finestra.webp",
        "thumbPath": "assets/photos/thumbs/venecia-finestra.webp",
        "alt": "Finestra de vidres rodons emplomats amb una fulla oberta, per on es veuen l'aigua de la llacuna, barques amarrades i el cel blau.",
        "title": "Finestra a la llacuna",
        "seriesId": "venecia",
        "seriesTitle": "Venècia (Març 2025)",
        "camera": "iPhone 15 Pro Max (ProRAW)",
        "lens": "13 mm · f/2.2",
        "year": 2025,
        "date": "2025-03-03",
        "location": "Venècia, Itàlia",
        "dimensions": "1080x1440",
        "width": 1080,
        "height": 1440
      },
      {
        "id": "venecia-gondoles",
        "slug": "venecia-gondoles",
        "filename": "venecia-gondoles.webp",
        "path": "assets/photos/selected/venecia-gondoles.webp",
        "thumbPath": "assets/photos/thumbs/venecia-gondoles.webp",
        "alt": "Góndoles amarrades en un canal amb gondolers dempeus, entre façanes taronja i groga amb persianes vermelles, sota un cel blau fosc.",
        "title": "Góndoles al canal",
        "seriesId": "venecia",
        "seriesTitle": "Venècia (Març 2025)",
        "camera": "iPhone 15 Pro Max",
        "lens": "—",
        "year": 2025,
        "date": "2025-03-03",
        "location": "Venècia, Itàlia",
        "dimensions": "1080x1440",
        "width": 1080,
        "height": 1440
      },
      {
        "id": "venecia-volta",
        "slug": "venecia-volta",
        "filename": "venecia-volta.webp",
        "path": "assets/photos/selected/venecia-volta.webp",
        "thumbPath": "assets/photos/thumbs/venecia-volta.webp",
        "alt": "Un passadís amb volta d’estuc blanc i daurat, amb relleus de figures i pintures emmarcades, que acaba en un arc obert a una balustrada.",
        "title": "Volta daurada",
        "seriesId": "venecia",
        "seriesTitle": "Venècia (Març 2025)",
        "camera": "iPhone 15 Pro Max",
        "lens": "—",
        "year": 2025,
        "date": "2025-03-03",
        "location": "Venècia, Itàlia",
        "dimensions": "1080x1440",
        "width": 1080,
        "height": 1440
      },
      {
        "id": "cerdanya-tartera",
        "slug": "cerdanya-tartera",
        "filename": "cerdanya-tartera.webp",
        "path": "assets/photos/selected/cerdanya-tartera.webp",
        "thumbPath": "assets/photos/thumbs/cerdanya-tartera.webp",
        "alt": "Fotografia en blanc i negre d'una tartera de pedres planes que s'endinsa en la boira, amb dues persones petites caminant i núvols dramàtics sobre les muntanyes.",
        "title": "Tartera entre la boira",
        "seriesId": "cerdanya",
        "seriesTitle": "Pirineus i Cerdanya (Agost 2025)",
        "camera": "iPhone 15 Pro Max",
        "lens": "24 mm · f/1.78",
        "year": 2025,
        "date": "2025-08-22",
        "location": "Pirineus, Cerdanya",
        "dimensions": "1080x1440",
        "width": 1080,
        "height": 1440
      },
      {
        "id": "cerdanya-estany",
        "slug": "cerdanya-estany",
        "filename": "cerdanya-estany.webp",
        "path": "assets/photos/selected/cerdanya-estany.webp",
        "thumbPath": "assets/photos/thumbs/cerdanya-estany.webp",
        "alt": "Paisatge d'alta muntanya amb un petit estany blau en primer terme, prats verds i un banc de núvols que cobreix les carenes.",
        "title": "Estany sota els núvols",
        "seriesId": "cerdanya",
        "seriesTitle": "Pirineus i Cerdanya (Agost 2025)",
        "camera": "iPhone 15 Pro Max",
        "lens": "24 mm · f/1.78",
        "year": 2025,
        "date": "2025-08-22",
        "location": "Pirineus, Cerdanya",
        "dimensions": "1440x1080",
        "width": 1440,
        "height": 1080
      },
      {
        "id": "cerdanya-cim",
        "slug": "cerdanya-cim",
        "filename": "cerdanya-cim.webp",
        "path": "assets/photos/selected/cerdanya-cim.webp",
        "thumbPath": "assets/photos/thumbs/cerdanya-cim.webp",
        "alt": "Un excursionista amb motxilla assenyala una muntanya fosca amb el cim tapat pels núvols, des d’un prat amb pedres i un corriol.",
        "title": "Cap al cim ennuvolat",
        "seriesId": "cerdanya",
        "seriesTitle": "Pirineus i Cerdanya (Agost 2025)",
        "camera": "iPhone 15 Pro Max",
        "lens": "—",
        "year": 2025,
        "date": "2025-08-22",
        "location": "Pirineus, Cerdanya",
        "dimensions": "1440x1080",
        "width": 1440,
        "height": 1080
      },
      {
        "id": "cerdanya-estanyol",
        "slug": "cerdanya-estanyol",
        "filename": "cerdanya-estanyol.webp",
        "path": "assets/photos/selected/cerdanya-estanyol.webp",
        "thumbPath": "assets/photos/thumbs/cerdanya-estanyol.webp",
        "alt": "Des d’una tartera fosca en ombra, un estanyol blau enmig de prats il·luminats pel sol, amb boira que entra per la dreta.",
        "title": "Estanyol i boira",
        "seriesId": "cerdanya",
        "seriesTitle": "Pirineus i Cerdanya (Agost 2025)",
        "camera": "iPhone 15 Pro Max",
        "lens": "—",
        "year": 2025,
        "date": "2025-08-22",
        "location": "Pirineus, Cerdanya",
        "dimensions": "1440x1080",
        "width": 1440,
        "height": 1080
      },
      {
        "id": "cerdanya-roca",
        "slug": "cerdanya-roca",
        "filename": "cerdanya-roca.webp",
        "path": "assets/photos/selected/cerdanya-roca.webp",
        "thumbPath": "assets/photos/thumbs/cerdanya-roca.webp",
        "alt": "Vista des de sota una roca que fa de sostre: un corriol baixa entre falgueres i flors cap a una vall amb muntanyes blavoses al fons.",
        "title": "Des de sota la roca",
        "seriesId": "cerdanya",
        "seriesTitle": "Pirineus i Cerdanya (Agost 2025)",
        "camera": "iPhone 15 Pro Max",
        "lens": "—",
        "year": 2025,
        "date": "2025-08-22",
        "location": "Pirineus, Cerdanya",
        "dimensions": "1080x1440",
        "width": 1080,
        "height": 1440
      },
      {
        "id": "cerdanya-vall",
        "slug": "cerdanya-vall",
        "filename": "cerdanya-vall.webp",
        "path": "assets/photos/selected/cerdanya-vall.webp",
        "thumbPath": "assets/photos/thumbs/cerdanya-vall.webp",
        "alt": "Una vall d’alta muntanya il·luminada a clapes, amb un llac allargat a l’esquerra i bassals blaus, vista des d’una tartera sota un cel gris.",
        "title": "Llum a la vall",
        "seriesId": "cerdanya",
        "seriesTitle": "Pirineus i Cerdanya (Agost 2025)",
        "camera": "iPhone 15 Pro Max",
        "lens": "—",
        "year": 2025,
        "date": "2025-08-22",
        "location": "Pirineus, Cerdanya",
        "dimensions": "1080x1440",
        "width": 1080,
        "height": 1440
      },
      {
        "id": "cerdanya-vall-2",
        "slug": "cerdanya-vall-2",
        "filename": "cerdanya-vall-2.webp",
        "path": "assets/photos/selected/cerdanya-vall-2.webp",
        "thumbPath": "assets/photos/thumbs/cerdanya-vall-2.webp",
        "alt": "Enquadrament vertical de la mateixa vall: prats il·luminats, bassals blaus i un llac a l’esquerra, sota un cel gris que ocupa mitja foto.",
        "title": "Llum a la vall, 2",
        "seriesId": "cerdanya",
        "seriesTitle": "Pirineus i Cerdanya (Agost 2025)",
        "camera": "iPhone 15 Pro Max",
        "lens": "—",
        "year": 2025,
        "date": "2025-08-22",
        "location": "Pirineus, Cerdanya",
        "dimensions": "810x1440",
        "width": 810,
        "height": 1440
      },
      {
        "id": "cerdanya-vall-3",
        "slug": "cerdanya-vall-3",
        "filename": "cerdanya-vall-3.webp",
        "path": "assets/photos/selected/cerdanya-vall-3.webp",
        "thumbPath": "assets/photos/thumbs/cerdanya-vall-3.webp",
        "alt": "Una altra versió vertical de la vall, gairebé igual: tartera fosca a baix, prats i bassals al sol, i núvols baixos a les carenes.",
        "title": "Llum a la vall, 3",
        "seriesId": "cerdanya",
        "seriesTitle": "Pirineus i Cerdanya (Agost 2025)",
        "camera": "iPhone 15 Pro Max",
        "lens": "—",
        "year": 2025,
        "date": "2025-08-22",
        "location": "Pirineus, Cerdanya",
        "dimensions": "810x1440",
        "width": 810,
        "height": 1440
      },
      {
        "id": "cerdanya-abelles",
        "slug": "cerdanya-abelles",
        "filename": "cerdanya-abelles.webp",
        "path": "assets/photos/selected/cerdanya-abelles.webp",
        "thumbPath": "assets/photos/thumbs/cerdanya-abelles.webp",
        "alt": "Un cartell groc escrit a mà en francès, «Abeilles attention», clavat en un prat pedregós; darrere, caixes blanques en filera, arbres i una muntanya a contrallum.",
        "title": "Atenció, abelles",
        "seriesId": "cerdanya",
        "seriesTitle": "Pirineus i Cerdanya (Agost 2025)",
        "camera": "iPhone 15 Pro Max",
        "lens": "—",
        "year": 2025,
        "date": "2025-08-23",
        "location": "Pirineus, Cerdanya",
        "dimensions": "1080x1440",
        "width": 1080,
        "height": 1440
      },
      {
        "id": "cerdanya-cabana",
        "slug": "cerdanya-cabana",
        "filename": "cerdanya-cabana.webp",
        "path": "assets/photos/selected/cerdanya-cabana.webp",
        "thumbPath": "assets/photos/thumbs/cerdanya-cabana.webp",
        "alt": "Una cabana baixa de fusta amb teulada metàl·lica en un prat verd amb roques, vora un estany petit, entre muntanyes i núvols blancs.",
        "title": "Cabana al prat",
        "seriesId": "cerdanya",
        "seriesTitle": "Pirineus i Cerdanya (Agost 2025)",
        "camera": "iPhone 15 Pro Max",
        "lens": "—",
        "year": 2025,
        "date": "2025-08-23",
        "location": "Pirineus, Cerdanya",
        "dimensions": "1080x1440",
        "width": 1080,
        "height": 1440
      },
      {
        "id": "alt-pirineu-cim",
        "slug": "alt-pirineu-cim",
        "filename": "alt-pirineu-cim.webp",
        "path": "assets/photos/selected/alt-pirineu-cim.webp",
        "thumbPath": "assets/photos/thumbs/alt-pirineu-cim.webp",
        "alt": "Un cim rocós de forma piramidal sota un cel blau amb núvols prims, vist des d'una cresta amb roques cobertes de líquens.",
        "title": "Cim de pedra",
        "seriesId": "alt-pirineu",
        "seriesTitle": "Alt Pirineu (Juliol 2026)",
        "camera": "iPhone 15 Pro Max",
        "lens": "24 mm · f/1.78",
        "year": 2026,
        "date": "2026-07-22",
        "location": "Alt Pirineu, Pallars Sobirà",
        "dimensions": "1080x1440",
        "width": 1080,
        "height": 1440
      },
      {
        "id": "alt-pirineu-matinada",
        "slug": "alt-pirineu-matinada",
        "filename": "alt-pirineu-matinada.webp",
        "path": "assets/photos/selected/alt-pirineu-matinada.webp",
        "thumbPath": "assets/photos/thumbs/alt-pirineu-matinada.webp",
        "alt": "Una persona amb motxilla dreta sobre un promontori rocós mira una serralada il·luminada per la primera llum del matí, entre pins i sota un cel blau net.",
        "title": "Primera llum",
        "seriesId": "alt-pirineu",
        "seriesTitle": "Alt Pirineu (Juliol 2026)",
        "camera": "iPhone 15 Pro Max",
        "lens": "24 mm · f/1.78",
        "year": 2026,
        "date": "2026-07-22",
        "location": "Alt Pirineu, Pallars Sobirà",
        "dimensions": "1440x1080",
        "width": 1440,
        "height": 1080
      },
      {
        "id": "alt-pirineu-estany",
        "slug": "alt-pirineu-estany",
        "filename": "alt-pirineu-estany.webp",
        "path": "assets/photos/selected/alt-pirineu-estany.webp",
        "thumbPath": "assets/photos/thumbs/alt-pirineu-estany.webp",
        "alt": "Dues persones amb motxilla baixen per un corriol cap a un estany que reflecteix les muntanyes, amb clapes de neu als cims del fons.",
        "title": "Estany de muntanya",
        "seriesId": "alt-pirineu",
        "seriesTitle": "Alt Pirineu (Juliol 2026)",
        "camera": "iPhone 15 Pro Max",
        "lens": "—",
        "year": 2026,
        "date": "2026-07-22",
        "location": "",
        "dimensions": "1080x1440",
        "width": 1080,
        "height": 1440
      },
      {
        "id": "alt-pirineu-vall",
        "slug": "alt-pirineu-vall",
        "filename": "alt-pirineu-vall.webp",
        "path": "assets/photos/selected/alt-pirineu-vall.webp",
        "thumbPath": "assets/photos/thumbs/alt-pirineu-vall.webp",
        "alt": "Una vall ampla de prats verds, rierols i roques entre vessants de muntanya, amb cims al fons; a la dreta, un excursionista petit.",
        "title": "Vall ampla",
        "seriesId": "alt-pirineu",
        "seriesTitle": "Alt Pirineu (Juliol 2026)",
        "camera": "iPhone 15 Pro Max",
        "lens": "—",
        "year": 2026,
        "date": "2026-07-22",
        "location": "Alt Pirineu, Pallars Sobirà",
        "dimensions": "1440x1080",
        "width": 1440,
        "height": 1080
      },
      {
        "id": "alt-pirineu-vall-2",
        "slug": "alt-pirineu-vall-2",
        "filename": "alt-pirineu-vall-2.webp",
        "path": "assets/photos/selected/alt-pirineu-vall-2.webp",
        "thumbPath": "assets/photos/thumbs/alt-pirineu-vall-2.webp",
        "alt": "La mateixa vall en vertical: prats amb rierols i roques, vessants amb pins i cims grisos al fons, sota un cel blau net.",
        "title": "Vall ampla, 2",
        "seriesId": "alt-pirineu",
        "seriesTitle": "Alt Pirineu (Juliol 2026)",
        "camera": "iPhone 15 Pro Max",
        "lens": "—",
        "year": 2026,
        "date": "2026-07-22",
        "location": "Alt Pirineu, Pallars Sobirà",
        "dimensions": "1080x1440",
        "width": 1080,
        "height": 1440
      },
      {
        "id": "osona-corriol",
        "slug": "osona-corriol",
        "filename": "osona-corriol.webp",
        "path": "assets/photos/selected/osona-corriol.webp",
        "thumbPath": "assets/photos/thumbs/osona-corriol.webp",
        "alt": "Un gos blanc lligat amb corretja puja per un corriol entre matolls i arbres, amb llum càlida de tarda i un cel amb núvols.",
        "title": "Corriol amunt",
        "seriesId": "montseny",
        "seriesTitle": "Corriols d'Osona (Agost 2022)",
        "camera": "iPhone 11",
        "lens": "—",
        "year": 2022,
        "date": "2022-08-24",
        "location": "Osona, prop del Montseny",
        "dimensions": "1080x1440",
        "width": 1080,
        "height": 1440
      },
      {
        "id": "osona-corriol-2",
        "slug": "osona-corriol-2",
        "filename": "osona-corriol-2.webp",
        "path": "assets/photos/selected/osona-corriol-2.webp",
        "thumbPath": "assets/photos/thumbs/osona-corriol-2.webp",
        "alt": "El mateix gos blanc, d'esquena, avança per un corriol estret entre vegetació verda i seca, sota un cel blau.",
        "title": "Entre matolls",
        "seriesId": "montseny",
        "seriesTitle": "Corriols d'Osona (Agost 2022)",
        "camera": "iPhone 11",
        "lens": "—",
        "year": 2022,
        "date": "2022-08-24",
        "location": "Osona, prop del Montseny",
        "dimensions": "1080x1440",
        "width": 1080,
        "height": 1440
      },
      {
        "id": "osona-gos",
        "slug": "osona-gos",
        "filename": "osona-gos.webp",
        "path": "assets/photos/selected/osona-gos.webp",
        "thumbPath": "assets/photos/thumbs/osona-gos.webp",
        "alt": "Un gos de color crema amb la cua enrotllada i la llengua fora, lligat amb corretja, mira la càmera en un corriol de fulles seques dins d’un bosc.",
        "title": "Gos al corriol",
        "seriesId": "montseny",
        "seriesTitle": "Corriols d'Osona (Agost 2022)",
        "camera": "iPhone 11",
        "lens": "—",
        "year": 2022,
        "date": "2022-08-24",
        "location": "Osona, prop del Montseny",
        "dimensions": "1440x1080",
        "width": 1440,
        "height": 1080
      },
      {
        "id": "xt30-retrat",
        "slug": "xt30-retrat",
        "filename": "xt30-retrat.webp",
        "path": "assets/photos/selected/xt30-retrat.webp",
        "thumbPath": "assets/photos/thumbs/xt30-retrat.webp",
        "alt": "Retrat de perfil d'un gos blanc amb la boca oberta i la llengua fora, sobre un fons de vegetació desenfocat.",
        "title": "Retrat",
        "seriesId": "fujifilm",
        "seriesTitle": "Fujifilm X-T30 (2020–2023)",
        "camera": "Fujifilm X-T30",
        "lens": "XF 18–55 mm · f/2.8–4",
        "year": 2020,
        "date": "2020-07-25",
        "location": "",
        "dimensions": "959x1440",
        "width": 959,
        "height": 1440
      },
      {
        "id": "xt30-barraca",
        "slug": "xt30-barraca",
        "filename": "xt30-barraca.webp",
        "path": "assets/photos/selected/xt30-barraca.webp",
        "thumbPath": "assets/photos/thumbs/xt30-barraca.webp",
        "alt": "Una barraca blanca amb teulada de canyís enmig de canyes i herbes altes amb plomalls daurats, sota un cel blau amb núvols prims.",
        "title": "Barraca entre canyes",
        "seriesId": "fujifilm",
        "seriesTitle": "Fujifilm X-T30 (2020–2023)",
        "camera": "Fujifilm X-T30",
        "lens": "XF 18–55 mm · f/2.8–4",
        "year": 2021,
        "date": "2021-01-02",
        "location": "",
        "dimensions": "1440x960",
        "width": 1440,
        "height": 960
      },
      {
        "id": "xt30-llavors",
        "slug": "xt30-llavors",
        "filename": "xt30-llavors.webp",
        "path": "assets/photos/selected/xt30-llavors.webp",
        "thumbPath": "assets/photos/thumbs/xt30-llavors.webp",
        "alt": "Primer pla d'una inflorescència seca en forma de paraigua, plena de llavors marrons, sobre un fons verd desenfocat.",
        "title": "Umbel·la seca",
        "seriesId": "fujifilm",
        "seriesTitle": "Fujifilm X-T30 (2020–2023)",
        "camera": "Fujifilm X-T30",
        "lens": "—",
        "year": 2020,
        "date": "2020-08-02",
        "location": "",
        "dimensions": "1440x960",
        "width": 1440,
        "height": 960
      },
      {
        "id": "xt30-teranyina",
        "slug": "xt30-teranyina",
        "filename": "xt30-teranyina.webp",
        "path": "assets/photos/selected/xt30-teranyina.webp",
        "thumbPath": "assets/photos/thumbs/xt30-teranyina.webp",
        "alt": "Una teranyina circular coberta de gotes que brillen de blanc, blau i daurat sobre un fons fosc, amb llums vermelles desenfocades a dalt.",
        "title": "Teranyina",
        "seriesId": "fujifilm",
        "seriesTitle": "Fujifilm X-T30 (2020–2023)",
        "camera": "Fujifilm X-T30",
        "lens": "—",
        "year": 2020,
        "date": "2020-08-06",
        "location": "",
        "dimensions": "960x1440",
        "width": 960,
        "height": 1440
      },
      {
        "id": "xt30-cingles",
        "slug": "xt30-cingles",
        "filename": "xt30-cingles.webp",
        "path": "assets/photos/selected/xt30-cingles.webp",
        "thumbPath": "assets/photos/thumbs/xt30-cingles.webp",
        "alt": "Una cinglera de roca calcària amb agulles i esperons, il·luminada per un sol baix, sobre un bosc fosc en ombra i sota un cel blau pàl·lid.",
        "title": "Cingles de pedra",
        "seriesId": "fujifilm",
        "seriesTitle": "Fujifilm X-T30 (2020–2023)",
        "camera": "Fujifilm X-T30",
        "lens": "—",
        "year": 2020,
        "date": "2020-08-29",
        "location": "",
        "dimensions": "1440x982",
        "width": 1440,
        "height": 982
      },
      {
        "id": "xt30-parets",
        "slug": "xt30-parets",
        "filename": "xt30-parets.webp",
        "path": "assets/photos/selected/xt30-parets.webp",
        "thumbPath": "assets/photos/thumbs/xt30-parets.webp",
        "alt": "Grans parets de roca calcària grisa sota un cel blau intens, amb vegetació verda i arbres en primer terme.",
        "title": "Parets de roca",
        "seriesId": "fujifilm",
        "seriesTitle": "Fujifilm X-T30 (2020–2023)",
        "camera": "Fujifilm X-T30",
        "lens": "—",
        "year": 2020,
        "date": "2020-08-29",
        "location": "",
        "dimensions": "960x1440",
        "width": 960,
        "height": 1440
      },
      {
        "id": "xt30-carrer",
        "slug": "xt30-carrer",
        "filename": "xt30-carrer.webp",
        "path": "assets/photos/selected/xt30-carrer.webp",
        "thumbPath": "assets/photos/thumbs/xt30-carrer.webp",
        "alt": "Un carrer estret entre edificis alts i foscos amb balcons, sota una franja de cel rosa i lila; al fons, gent caminant i rètols il·luminats.",
        "title": "Carrer estret al capvespre",
        "seriesId": "fujifilm",
        "seriesTitle": "Fujifilm X-T30 (2020–2023)",
        "camera": "Fujifilm X-T30",
        "lens": "—",
        "year": 2020,
        "date": "2020-10-11",
        "location": "",
        "dimensions": "960x1440",
        "width": 960,
        "height": 1440
      },
      {
        "id": "xt30-cabra",
        "slug": "xt30-cabra",
        "filename": "xt30-cabra.webp",
        "path": "assets/photos/selected/xt30-cabra.webp",
        "thumbPath": "assets/photos/thumbs/xt30-cabra.webp",
        "alt": "Perfil del cap i el coll d’una cabra salvatge amb banyes curtes i corbades, davant de roques calcàries i herba.",
        "title": "Cabra salvatge",
        "seriesId": "fujifilm",
        "seriesTitle": "Fujifilm X-T30 (2020–2023)",
        "camera": "Fujifilm X-T30",
        "lens": "—",
        "year": 2021,
        "date": "2021-08-14",
        "location": "",
        "dimensions": "1440x1080",
        "width": 1440,
        "height": 1080
      },
      {
        "id": "xt30-antena",
        "slug": "xt30-antena",
        "filename": "xt30-antena.webp",
        "path": "assets/photos/selected/xt30-antena.webp",
        "thumbPath": "assets/photos/thumbs/xt30-antena.webp",
        "alt": "Cel rosa i lila amb núvols estirats sobre la silueta d’un turó boscós amb una antena de telecomunicacions al cim.",
        "title": "Antena al turó",
        "seriesId": "fujifilm",
        "seriesTitle": "Fujifilm X-T30 (2020–2023)",
        "camera": "Fujifilm X-T30",
        "lens": "—",
        "year": 2021,
        "date": "2021-12-29",
        "location": "",
        "dimensions": "1440x960",
        "width": 1440,
        "height": 960
      },
      {
        "id": "xt30-nuvols",
        "slug": "xt30-nuvols",
        "filename": "xt30-nuvols.webp",
        "path": "assets/photos/selected/xt30-nuvols.webp",
        "thumbPath": "assets/photos/thumbs/xt30-nuvols.webp",
        "alt": "Franges horitzontals de núvols foscos, grisos i vermell intens sobre la silueta fosca d’una serra.",
        "title": "Núvols vermells",
        "seriesId": "fujifilm",
        "seriesTitle": "Fujifilm X-T30 (2020–2023)",
        "camera": "—",
        "lens": "—",
        "year": 2021,
        "date": "2021-12-29",
        "location": "",
        "dimensions": "1151x1440",
        "width": 1151,
        "height": 1440
      },
      {
        "id": "xt30-estacio",
        "slug": "xt30-estacio",
        "filename": "xt30-estacio.webp",
        "path": "assets/photos/selected/xt30-estacio.webp",
        "thumbPath": "assets/photos/thumbs/xt30-estacio.webp",
        "alt": "Un tren de rodalies blanc i taronja aturat a l’andana, sota una gran coberta en arc de ferro i vidre.",
        "title": "Estació amb coberta de ferro",
        "seriesId": "fujifilm",
        "seriesTitle": "Fujifilm X-T30 (2020–2023)",
        "camera": "Fujifilm X-T30",
        "lens": "—",
        "year": 2023,
        "date": "2023-01-01",
        "location": "",
        "dimensions": "960x1440",
        "width": 960,
        "height": 1440
      },
      {
        "id": "reus-claraboia",
        "slug": "reus-claraboia",
        "filename": "reus-claraboia.webp",
        "path": "assets/photos/selected/reus-claraboia.webp",
        "thumbPath": "assets/photos/thumbs/reus-claraboia.webp",
        "alt": "Interior modernista amb una claraboia de vitrall decorada amb motius florals i arcs de pedra esculpida al voltant d'una finestra.",
        "title": "Claraboia modernista",
        "seriesId": "llocs",
        "seriesTitle": "Llocs (2020–2024)",
        "camera": "iPhone 11",
        "lens": "—",
        "year": 2022,
        "date": "2022-05-29",
        "location": "Reus",
        "dimensions": "1152x1440",
        "width": 1152,
        "height": 1440
      },
      {
        "id": "gomera-roca",
        "slug": "gomera-roca",
        "filename": "gomera-roca.webp",
        "path": "assets/photos/selected/gomera-roca.webp",
        "thumbPath": "assets/photos/thumbs/gomera-roca.webp",
        "alt": "Un gran monòlit de roca volcànica s'alça sobre turons verds coberts de pins, sota un cel blau amb núvols prims.",
        "title": "Roca volcànica",
        "seriesId": "llocs",
        "seriesTitle": "Llocs (2020–2024)",
        "camera": "iPhone 8 Plus",
        "lens": "—",
        "year": 2023,
        "date": "2023-08-22",
        "location": "La Gomera, Illes Canàries",
        "dimensions": "1440x1080",
        "width": 1440,
        "height": 1080
      },
      {
        "id": "barcelona-facana",
        "slug": "barcelona-facana",
        "filename": "barcelona-facana.webp",
        "path": "assets/photos/selected/barcelona-facana.webp",
        "thumbPath": "assets/photos/thumbs/barcelona-facana.webp",
        "alt": "Contrapicat de la façana fosca d’un edifici, amb plaques i finestres, i una volada corba que retalla un cel gris.",
        "title": "Façana corba",
        "seriesId": "llocs",
        "seriesTitle": "Llocs (2020–2024)",
        "camera": "iPhone 11",
        "lens": "—",
        "year": 2020,
        "date": "2020-02-29",
        "location": "Barcelona",
        "dimensions": "1054x1440",
        "width": 1054,
        "height": 1440
      },
      {
        "id": "reus-escala",
        "slug": "reus-escala",
        "filename": "reus-escala.webp",
        "path": "assets/photos/selected/reus-escala.webp",
        "thumbPath": "assets/photos/thumbs/reus-escala.webp",
        "alt": "Una escala modernista amb graons de rajola decorada i un passamà de fusta corbat, parets amb relleus florals, un gran mosaic de paisatge i un finestral de vitrall.",
        "title": "Escala modernista",
        "seriesId": "llocs",
        "seriesTitle": "Llocs (2020–2024)",
        "camera": "iPhone 11",
        "lens": "—",
        "year": 2022,
        "date": "2022-05-29",
        "location": "Reus",
        "dimensions": "1080x1440",
        "width": 1080,
        "height": 1440
      },
      {
        "id": "premia-platja",
        "slug": "premia-platja",
        "filename": "premia-platja.webp",
        "path": "assets/photos/selected/premia-platja.webp",
        "thumbPath": "assets/photos/thumbs/premia-platja.webp",
        "alt": "Al capvespre, un tractor amb els llums encesos arrossega una màquina que garbella la sorra de la platja i aixeca pols; al fons, un fanal alt.",
        "title": "Neteja de la platja",
        "seriesId": "llocs",
        "seriesTitle": "Llocs (2020–2024)",
        "camera": "iPhone 15 Pro Max",
        "lens": "—",
        "year": 2024,
        "date": "2024-07-14",
        "location": "Premià de Mar, Maresme",
        "dimensions": "1080x1440",
        "width": 1080,
        "height": 1440
      },
      {
        "id": "delta-estrelles",
        "slug": "delta-estrelles",
        "filename": "delta-estrelles.webp",
        "path": "assets/photos/selected/delta-estrelles.webp",
        "thumbPath": "assets/photos/thumbs/delta-estrelles.webp",
        "alt": "Un cel de nit gairebé negre, amb estrelles petites escampades.",
        "title": "Cel estrellat",
        "seriesId": "llocs",
        "seriesTitle": "Llocs (2020–2024)",
        "camera": "iPhone 15 Pro Max",
        "lens": "—",
        "year": 2024,
        "date": "2024-07-22",
        "location": "Delta de l'Ebre",
        "dimensions": "1080x1440",
        "width": 1080,
        "height": 1440
      },
      {
        "id": "agost-2026-antenes",
        "slug": "agost-2026-antenes",
        "filename": "agost-2026-antenes.webp",
        "path": "assets/photos/selected/agost-2026-antenes.webp",
        "thumbPath": "assets/photos/thumbs/agost-2026-antenes.webp",
        "alt": "Una carena rocosa amb matolls que puja fins a un cim amb antenes, sota un cel de tempesta; a l’esquerra, un mar de núvols i una franja taronja a l’horitzó.",
        "title": "Carena amb antenes",
        "seriesId": "agost-2026",
        "seriesTitle": "Agost 2026 (Agost 2026)",
        "camera": "iPhone 15 Pro Max",
        "lens": "—",
        "year": 2026,
        "date": "2026-08-08",
        "location": "",
        "dimensions": "1080x1440",
        "width": 1080,
        "height": 1440
      },
      {
        "id": "agost-2026-mar-de-nuvols",
        "slug": "agost-2026-mar-de-nuvols",
        "filename": "agost-2026-mar-de-nuvols.webp",
        "path": "assets/photos/selected/agost-2026-mar-de-nuvols.webp",
        "thumbPath": "assets/photos/thumbs/agost-2026-mar-de-nuvols.webp",
        "alt": "Un mar de núvols sota un cel gris de tempesta, amb una franja taronja a l’horitzó i la silueta d’una serra a la dreta.",
        "title": "Mar de núvols",
        "seriesId": "agost-2026",
        "seriesTitle": "Agost 2026 (Agost 2026)",
        "camera": "iPhone 15 Pro Max",
        "lens": "—",
        "year": 2026,
        "date": "2026-08-08",
        "location": "",
        "dimensions": "1440x1080",
        "width": 1440,
        "height": 1080
      },
      {
        "id": "agost-2026-sol",
        "slug": "agost-2026-sol",
        "filename": "agost-2026-sol.webp",
        "path": "assets/photos/selected/agost-2026-sol.webp",
        "thumbPath": "assets/photos/thumbs/agost-2026-sol.webp",
        "alt": "El sol, mig amagat a l’horitzó, tenyeix el cel de taronja i rosa sobre serres blavoses i bancs de núvols.",
        "title": "Sol a l’horitzó",
        "seriesId": "agost-2026",
        "seriesTitle": "Agost 2026 (Agost 2026)",
        "camera": "iPhone 15 Pro Max",
        "lens": "—",
        "year": 2026,
        "date": "2026-08-09",
        "location": "",
        "dimensions": "1440x1080",
        "width": 1440,
        "height": 1080
      },
      {
        "id": "agost-2026-sol-2",
        "slug": "agost-2026-sol-2",
        "filename": "agost-2026-sol-2.webp",
        "path": "assets/photos/selected/agost-2026-sol-2.webp",
        "thumbPath": "assets/photos/thumbs/agost-2026-sol-2.webp",
        "alt": "El sol brilla just damunt d’un mar de núvols tenyits de rosa, amb la silueta d’uns pins en primer terme.",
        "title": "Sol sobre els núvols",
        "seriesId": "agost-2026",
        "seriesTitle": "Agost 2026 (Agost 2026)",
        "camera": "iPhone 15 Pro Max",
        "lens": "—",
        "year": 2026,
        "date": "2026-08-09",
        "location": "",
        "dimensions": "1440x1080",
        "width": 1440,
        "height": 1080
      },
      {
        "id": "desembre-2023-cotxe",
        "slug": "desembre-2023-cotxe",
        "filename": "desembre-2023-cotxe.webp",
        "path": "assets/photos/selected/desembre-2023-cotxe.webp",
        "thumbPath": "assets/photos/thumbs/desembre-2023-cotxe.webp",
        "alt": "La part del darrere d’un cotxe antic de color verd, amb el para-xocs cromat, aparcat en un pati empedrat davant d’una porta fosca i canyes de bambú.",
        "title": "Cotxe verd",
        "seriesId": "desembre-2023",
        "seriesTitle": "Desembre 2023 (Desembre 2023)",
        "camera": "iPhone 15 Pro Max",
        "lens": "—",
        "year": 2023,
        "date": "2023-12-06",
        "location": "",
        "dimensions": "1080x1440",
        "width": 1080,
        "height": 1440
      },
      {
        "id": "desembre-2023-crucifix",
        "slug": "desembre-2023-crucifix",
        "filename": "desembre-2023-crucifix.webp",
        "path": "assets/photos/selected/desembre-2023-crucifix.webp",
        "thumbPath": "assets/photos/thumbs/desembre-2023-crucifix.webp",
        "alt": "Un gran crucifix daurat i decorat, penjat amb cables sota un arc, amb una bastida a l’esquerra i tubs d’orgue al fons.",
        "title": "Crucifix penjat",
        "seriesId": "desembre-2023",
        "seriesTitle": "Desembre 2023 (Desembre 2023)",
        "camera": "iPhone 15 Pro Max",
        "lens": "—",
        "year": 2023,
        "date": "2023-12-06",
        "location": "",
        "dimensions": "1080x1440",
        "width": 1080,
        "height": 1440
      },
      {
        "id": "desembre-2023-llum",
        "slug": "desembre-2023-llum",
        "filename": "desembre-2023-llum.webp",
        "path": "assets/photos/selected/desembre-2023-llum.webp",
        "thumbPath": "assets/photos/thumbs/desembre-2023-llum.webp",
        "alt": "Una gran làmpada de penjolls de vidre vista des de sota, amb llum blava i violeta i punts de llum reflectits al voltant.",
        "title": "Làmpada de vidres",
        "seriesId": "desembre-2023",
        "seriesTitle": "Desembre 2023 (Desembre 2023)",
        "camera": "iPhone 15 Pro Max",
        "lens": "—",
        "year": 2023,
        "date": "2023-12-07",
        "location": "",
        "dimensions": "1440x1080",
        "width": 1440,
        "height": 1080
      },
      {
        "id": "agost-2024-telecadira",
        "slug": "agost-2024-telecadira",
        "filename": "agost-2024-telecadira.webp",
        "path": "assets/photos/selected/agost-2024-telecadira.webp",
        "thumbPath": "assets/photos/thumbs/agost-2024-telecadira.webp",
        "alt": "Les cadires buides d’un telecadira penjades dels cables sobre un prat pedregós, al capvespre, entre vessants boscosos i un cel que es torna taronja a l’horitzó.",
        "title": "Telecadira al capvespre",
        "seriesId": "agost-2024",
        "seriesTitle": "Agost 2024 (Agost 2024)",
        "camera": "iPhone 15 Pro Max",
        "lens": "—",
        "year": 2024,
        "date": "2024-08-24",
        "location": "",
        "dimensions": "1080x1440",
        "width": 1080,
        "height": 1440
      }
    ]
  },
  "contact": {
    "id": "contact",
    "fileName": "CONTACT.EXE",
    "windowTitle": "CONTACT.EXE — Contacte",
    "badge": "CANALS DE CONTACTE",
    "headline": "Canals de contacte",
    "intro": "De moment, l'únic canal públic és GitHub (github.com/janadsuar). Encara no hi ha cap adreça de correu pública.",
    "statusNote": null,
    "links": [
      {
        "type": "github",
        "label": "GitHub",
        "value": "github.com/janadsuar",
        "href": "https://github.com/janadsuar",
        "confirmed": true,
        "note": ""
      }
    ],
    "channels": [
      {
        "type": "github",
        "label": "GitHub",
        "value": "github.com/janadsuar",
        "href": "https://github.com/janadsuar",
        "confirmed": true,
        "note": ""
      }
    ],
    "directEmail": {
      "address": "",
      "confirmed": false
    }
  },
  "social": {
    "links": [
      {
        "platform": "GitHub",
        "handle": "janadsuar",
        "url": "https://github.com/janadsuar",
        "confirmed": true
      }
    ]
  },
  "mail": {
    "id": "mail",
    "fileName": "MAIL.EXE",
    "windowTitle": "MAIL.EXE — Escriure un missatge",
    "badge": "CANAL DE CONTACTE",
    "recipient": "",
    "defaultSubject": "Contacte des de 4dsu.me",
    "subjectPrefix": "Contacte des de 4dsu.me",
    "disclaimer": "No s'envia res des del navegador: s'obre el teu client de correu.",
    "intro": "Escriu el missatge i s'obrirà el teu client de correu amb el text preparat.",
    "setupMessage": "Encara no hi ha cap adreça de correu pública, així que d'aquí no surt cap correu. De moment, l'únic canal públic és GitHub (github.com/janadsuar). Encara no hi ha cap adreça de correu pública.",
    "modes": {
      "mailto": false,
      "serverlessReady": false
    },
    "fields": {
      "nameLabel": "Nom",
      "emailLabel": "El teu correu",
      "subjectLabel": "Assumpte",
      "messageLabel": "Missatge"
    }
  },
  "browser": {
    "id": "browser",
    "fileName": "BROWSER.EXE",
    "windowTitle": "BROWSER.EXE — Navegador",
    "badge": "NAVEGACIÓ WEB",
    "homeUrl": "https://www.4dsu.me/",
    "intro": "Un navegador petit per obrir webs sense perdre el fil.",
    "quickLinks": [
      {
        "label": "4dsu.me",
        "href": "https://www.4dsu.me/",
        "description": "L'illa i la vista clàssica"
      },
      {
        "label": "GitHub",
        "href": "https://github.com/janadsuar",
        "description": "github.com/janadsuar"
      }
    ],
    "bookmarks": [
      {
        "title": "4dsu.me",
        "url": "https://www.4dsu.me/",
        "description": "L'illa i la vista clàssica",
        "internal": true
      },
      {
        "title": "GitHub",
        "url": "https://github.com/janadsuar",
        "description": "github.com/janadsuar",
        "internal": false
      }
    ]
  },
  "files": {
    "id": "files",
    "fileName": "FILES.EXE",
    "windowTitle": "FILES.EXE — Fitxers",
    "badge": "SISTEMA DE FITXERS",
    "rootPath": "/home/4dsu",
    "intro": "Les carpetes públiques del portfolio.",
    "directories": {
      "root": {
        "path": "/home/4dsu",
        "entries": [
          {
            "name": "PROJECTS/",
            "kind": "folder",
            "description": "Projectes",
            "appId": "projects"
          },
          {
            "name": "LAB/",
            "kind": "folder",
            "description": "Experiments",
            "appId": "lab"
          },
          {
            "name": "EMKENIA/",
            "kind": "folder",
            "description": "Feina",
            "appId": "emkenia"
          },
          {
            "name": "PHOTO_PORTFOLIO/",
            "kind": "folder",
            "description": "Fotografia",
            "appId": "photos",
            "directoryId": "photos"
          },
          {
            "name": "DOCUMENTS/",
            "kind": "folder",
            "description": "CV i notes",
            "directoryId": "documents"
          },
          {
            "name": "ABOUT.EXE",
            "kind": "application",
            "description": "Sobre mi",
            "appId": "about"
          },
          {
            "name": "MAIL.EXE",
            "kind": "application",
            "description": "Escriure un missatge",
            "appId": "mail"
          },
          {
            "name": "SEARCH.EXE",
            "kind": "application",
            "description": "Cerca",
            "appId": "search"
          }
        ]
      },
      "photos": {
        "path": "/home/4dsu/PHOTO_PORTFOLIO",
        "entries": [
          {
            "name": "SELECTED/",
            "kind": "folder",
            "description": "Selecció (47 fotos)",
            "empty": false,
            "appId": "photos"
          },
          {
            "name": "SERIES/",
            "kind": "folder",
            "description": "9 sèries",
            "empty": false,
            "appId": "photos"
          }
        ]
      },
      "documents": {
        "path": "/home/4dsu/DOCUMENTS",
        "entries": [
          {
            "name": "CV.PDF",
            "kind": "document",
            "description": "Currículum",
            "appId": "cv"
          },
          {
            "name": "NOTES.TXT",
            "kind": "document",
            "description": "Notes",
            "appId": "notes"
          }
        ]
      }
    }
  },
  "search": {
    "id": "search",
    "fileName": "SEARCH.EXE",
    "windowTitle": "SEARCH.EXE — Cerca",
    "badge": "ÍNDEX DEL SISTEMA",
    "placeholder": "Escriu per cercar aplicacions, projectes o notes…",
    "categories": [
      "Apps",
      "Documents",
      "Notes",
      "Competències",
      "Fotografia"
    ],
    "indexCategories": [
      "apps",
      "docs",
      "notes",
      "skills",
      "photos"
    ],
    "items": [
      {
        "id": "skill-telecomunicacions",
        "title": "Competència: Telecomunicacions",
        "cat": "skills",
        "catLabel": "Competència",
        "desc": "Xarxes de dades, arquitectures de transmissió, senyals i fonaments de sistemes distribuïts.",
        "icon": "system",
        "appId": "about"
      },
      {
        "id": "skill-programació_en_c_i_sistemes",
        "title": "Competència: Programació en C i sistemes",
        "cat": "skills",
        "catLabel": "Competència",
        "desc": "Codi eficient, gestió explícita de memòria i programació propera a la màquina.",
        "icon": "code",
        "appId": "about"
      },
      {
        "id": "skill-eines_i_productivitat",
        "title": "Competència: Eines i productivitat",
        "cat": "skills",
        "catLabel": "Competència",
        "desc": "Disseny de fluxos de treball, automatització d'enginyeria i interfícies funcionals.",
        "icon": "folder",
        "appId": "about"
      },
      {
        "id": "note-interficie-retro",
        "title": "Nota: Per què una interfície de sistema retro?",
        "cat": "notes",
        "catLabel": "Notes",
        "desc": "Un portfolio ha de presentar el contingut de manera clara, però també pot oferir una petita sensació de descobriment.",
        "icon": "notes",
        "appId": "notes"
      },
      {
        "id": "note-aprenentatge-proper-maquinari",
        "title": "Nota: L'aprenentatge proper al maquinari",
        "cat": "notes",
        "catLabel": "Notes",
        "desc": "Treballar amb llenguatges com C i gestionar la memòria a mà fa comprendre millor els costos reals de les abstraccions.",
        "icon": "notes",
        "appId": "notes"
      },
      {
        "id": "serie-venecia",
        "title": "Sèrie: Venècia",
        "cat": "photos",
        "catLabel": "Fotografia",
        "desc": "Un dia de març a Venècia, entre arcs, finestres, góndoles i una volta daurada.",
        "icon": "camera",
        "appId": "photos"
      },
      {
        "id": "serie-cerdanya",
        "title": "Sèrie: Pirineus i Cerdanya",
        "cat": "photos",
        "catLabel": "Fotografia",
        "desc": "Boira, pedra, estanys i prats d'alta muntanya en dos dies d'agost.",
        "icon": "camera",
        "appId": "photos"
      },
      {
        "id": "serie-alt-pirineu",
        "title": "Sèrie: Alt Pirineu",
        "cat": "photos",
        "catLabel": "Fotografia",
        "desc": "Crestes, un estany i valls en una sortida de juliol pel Pallars Sobirà.",
        "icon": "camera",
        "appId": "photos"
      },
      {
        "id": "serie-montseny",
        "title": "Sèrie: Corriols d'Osona",
        "cat": "photos",
        "catLabel": "Fotografia",
        "desc": "Una passejada de tarda d'agost per corriols d'Osona, prop del Montseny.",
        "icon": "camera",
        "appId": "photos"
      },
      {
        "id": "serie-fujifilm",
        "title": "Sèrie: Fujifilm X-T30",
        "cat": "photos",
        "catLabel": "Fotografia",
        "desc": "Fotos fetes amb la Fujifilm X-T30 entre el 2020 i el 2023, de la roca i la natura de prop fins als cels i la ciutat.",
        "icon": "camera",
        "appId": "photos"
      },
      {
        "id": "serie-llocs",
        "title": "Sèrie: Llocs",
        "cat": "photos",
        "catLabel": "Fotografia",
        "desc": "Racons de Reus, Barcelona, Premià de Mar, el delta de l'Ebre i La Gomera.",
        "icon": "camera",
        "appId": "photos"
      },
      {
        "id": "serie-agost-2026",
        "title": "Sèrie: Agost 2026",
        "cat": "photos",
        "catLabel": "Fotografia",
        "desc": "Muntanya, tempesta i mar de núvols, el 8 i el 9 d'agost del 2026.",
        "icon": "camera",
        "appId": "photos"
      },
      {
        "id": "serie-desembre-2023",
        "title": "Sèrie: Desembre 2023",
        "cat": "photos",
        "catLabel": "Fotografia",
        "desc": "Un cotxe antic, un crucifix daurat i una làmpada de vidre, el 6 i el 7 de desembre del 2023.",
        "icon": "camera",
        "appId": "photos"
      },
      {
        "id": "serie-agost-2024",
        "title": "Sèrie: Agost 2024",
        "cat": "photos",
        "catLabel": "Fotografia",
        "desc": "Un telecadira al capvespre, el 24 d'agost del 2024.",
        "icon": "camera",
        "appId": "photos"
      }
    ]
  },
  "systemProps": {
    "id": "sysprops",
    "fileName": "SYSTEM PROPERTIES",
    "windowTitle": "SYSTEM PROPERTIES — Especificacions",
    "badge": "ESTAT DE LA MÀQUINA",
    "host": "4dsu-workstation",
    "kernel": "4dsu-kernel v1.1.0 #1 SMP",
    "display": "CRT 800x600 @ 60Hz",
    "memoryTotal": "64.0 MB",
    "memoryFree": "62.8 MB",
    "filesystem": "PORTFOLIO_FS (POSIX VFS, només lectura)",
    "status": "NORMAL // SENSE ALERTES",
    "specs": [
      {
        "category": "Processador",
        "value": "RISC 32-bit @ 133 MHz"
      },
      {
        "category": "Memòria RAM",
        "value": "64 MB EDO RAM (98% lliure)"
      },
      {
        "category": "Pantalla",
        "value": "Monitor CRT (800x600 @ 60Hz)"
      },
      {
        "category": "Sistema de fitxers",
        "value": "POSIX VFS 1.2 GB, només lectura"
      },
      {
        "category": "Xarxa",
        "value": "Pila TCP/IP // Loopback directe"
      },
      {
        "category": "Àudio",
        "value": "Altaveu piezoelèctric intern (apagat)"
      }
    ]
  },
  "systemError": {
    "id": "system_error",
    "fileName": "SYSTEM_ERROR.EXE",
    "windowTitle": "SYSTEM_ERROR.EXE — Ruta no trobada",
    "badge": "ERR_404_ROUTE",
    "headline": "ALERTA DE SISTEMA: RUTA NO TROBADA",
    "message": "L'aplicació o l'adreça que busques no existeix a 4dsu OS.",
    "code": "SYS_STATUS: ERR_ROUTE_NOT_FOUND (404)",
    "defaultMessage": "L'adreça no correspon a cap recurs de 4dsu OS.",
    "statusLeft": "ERROR: RUTA INVÀLIDA",
    "statusRight": "4dsu OS // RECUPERACIÓ",
    "recoveryActions": [
      {
        "id": "welcome",
        "label": "OBRIR BENVINGUDA",
        "appId": "welcome"
      },
      {
        "id": "projects",
        "label": "OBRIR PROJECTES",
        "appId": "projects"
      },
      {
        "id": "linear",
        "label": "VISTA ACCESSIBLE",
        "hash": "#view=linear"
      }
    ]
  },
  "mascotDialogue": {
    "topics": {
      "profile": "Segons ABOUT.EXE: «Sóc estudiant d'enginyeria de telecomunicacions. M'apassiona entendre com funcionen les coses a fons: des del maquinari i les xarxes fins al programari eficient i les eines personals.» Els pilars són Telecomunicacions, Programació en C i sistemes i Eines i productivitat.",
      "projects": "La carpeta PROJECTS/ encara és buida: no hi ha cap projecte publicat, i no n’hi posaré cap d’inventat.",
      "education": "Formació: Grau en Enginyeria de Tecnologies i Serveis de Telecomunicació (en curs). Enfocament: Telemàtica, processament de senyals, sistemes de transmissió, xarxes IP i arquitectura de computadors.",
      "skills": "Els temes que surten a ABOUT.EXE i CV.PDF: TCP/IP, Senyals, Transmissió, Xarxes, C, Linux, POSIX, Memòria, Tooling, Automatització, CLI i Interfícies.",
      "contact": "De moment, l'únic canal públic és GitHub (github.com/janadsuar). Encara no hi ha cap adreça de correu pública.",
      "notes": "A NOTES.TXT hi ha 2 notes: «Per què una interfície de sistema retro?» i «L'aprenentatge proper al maquinari».",
      "system": "4dsu OS és l'ordinador vell de l'illa: la primera versió del portfolio, un escriptori retro fet amb JavaScript sense dependències."
    }
  }
};
