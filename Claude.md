# CLAUDE.md — Progetto Sito Web GIO.I.A

## Panoramica del Progetto

Stai costruendo il sito web ufficiale di **GIO.I.A** (nome completo da confermare), un'**APS (Associazione di Promozione Sociale)** che opera in due ambiti principali:
- **Inclusione lavorativa** per adulti con disabilità intellettiva lieve
- **Attività socio-ricreative** per promuovere integrazione e benessere

Il sito deve essere accessibile, caldo, inclusivo nel linguaggio e nello stile visivo.

---

## Stack Tecnologico Consigliato

- **Framework:** [Astro](https://astro.build/) oppure **Next.js** (se vuoi blog dinamico)
- **Styling:** Tailwind CSS
- **Blog/CMS:** File Markdown locali (aggiornabili nel tempo senza CMS esterno) oppure [Decap CMS](https://decapcms.org/) per interfaccia grafica
- **Deploy:** [Netlify](https://netlify.com) o [Vercel](https://vercel.com) (entrambi gratuiti per siti statici)
- **Mappa:** Google Maps Embed oppure OpenStreetMap (Leaflet.js)
- **Form contatti/donazioni:** Formspree (gratuito) per il form; link a PayPal.me o GoFundMe per donazioni

---

## Struttura del Sito

```
/
├── index.html (o page Home)
├── /chi-siamo          → Descrizione APS, mission, storia
├── /attivita           → Tipi di attività offerte
├── /blog               → Articoli e notizie aggiornabili nel tempo
├── /contatti           → Form contatti + mappa posizione
└── /donazioni          → Come sostenere GIO.I.A
```

---

## Sezioni Richieste e Contenuti

### 1. 🏠 Home
- Hero con nome **GIO.I.A** e slogan (es. "Insieme, con gioia")
- Breve presentazione dell'associazione
- Call to action: "Scopri le attività" e "Sostienici"
- Link ai social

### 2. 👥 Chi Siamo
- Descrizione dell'APS: mission, valori, storia
- A chi si rivolge (adulti con disabilità intellettiva lieve)
- Eventuale team/volontari (con foto se disponibili)
- Tono: caldo, inclusivo, positivo

### 3. 🎨 Attività
Mostrare le tipologie di attività in card o griglia:
- Attività per l'**inclusione lavorativa** (tirocini, laboratori, orientamento)
- Attività **socio-ricreative** (uscite, laboratori creativi, eventi, sport)
- Ogni card: titolo, icona/foto, breve descrizione

### 4. 📰 Blog / Notizie
- Lista articoli ordinati per data (più recente prima)
- Ogni articolo: titolo, data, immagine copertina, testo
- **Aggiornabile nel tempo** aggiungendo file `.md` nella cartella `/blog`
- Categorie opzionali: Notizie, Eventi, Storie

### 5. 📍 Contatti e Posizione
- Indirizzo fisico dell'associazione
- Numero di telefono
- Email
- **Mappa interattiva** con la posizione (Google Maps embed)
- Form di contatto (nome, email, messaggio)

### 6. 💛 Donazioni
- Spiegazione dell'importanza del sostegno
- Metodi di donazione (PayPal, bonifico bancario, 5x1000)
- Codice fiscale per il 5x1000
- Eventuale link a campagna raccolta fondi

### 7. 🔗 Social & Footer
- Link a: Facebook, Instagram, (eventuale YouTube/LinkedIn)
- Footer con: logo, nome APS, P.IVA o C.F., link privacy policy
- Copyright © GIO.I.A

---

## Identità Visiva

- **Colori principali:** Colori caldi e positivi — giallo/arancione (gioia, energia), verde (crescita, inclusione), bianco per sfondo pulito
- **Font:** Sans-serif leggibile e accessibile (es. Inter, Nunito, o Poppins)
- **Tono comunicativo:** Empatico, positivo, inclusivo — evita linguaggio tecnico o freddo
- **Immagini:** Preferire foto reali dell'associazione; in mancanza usare illustrazioni inclusive (es. Undraw.co)
- **Accessibilità:** Rispettare contrasto WCAG AA, testi alt sulle immagini, navigazione da tastiera

---

## Dati da Compilare (Placeholder)

Sostituisci questi placeholder con i dati reali prima del deploy:

```
NOME_COMPLETO_APS = "GIO.I.A - [nome esteso se esiste]"
INDIRIZZO = "[Via, Numero, CAP, Città]"
TELEFONO = "[+39 ...]"
EMAIL = "[info@gioia...]"
CODICE_FISCALE = "[CF per 5x1000]"
FACEBOOK_URL = "[link pagina Facebook]"
INSTAGRAM_URL = "[link profilo Instagram]"
PAYPAL_LINK = "[link PayPal donazioni]"
COORDINATE_MAPPA = "[lat, lng]"
```

---

## Struttura File Blog

Ogni articolo del blog va salvato come file Markdown in `/src/content/blog/`:

```markdown
---
title: "Titolo dell'articolo"
date: 2024-03-10
author: "Nome Autore"
category: "Notizie"  # Notizie | Eventi | Storie
coverImage: "/images/blog/nome-immagine.jpg"
excerpt: "Breve descrizione che appare nell'anteprima..."
---

Testo completo dell'articolo qui...
```

Per pubblicare un nuovo articolo: crea un nuovo file `.md` con questa struttura, aggiungi l'immagine in `/public/images/blog/`, poi fai deploy.

---

## Comandi Utili

```bash
# Installare dipendenze
npm install

# Avviare in locale (sviluppo)
npm run dev

# Build per produzione
npm run build

# Deploy su Netlify (dopo configurazione)
netlify deploy --prod
```

---

## Note per Claude Code

- Costruisci prima la struttura base con tutte le pagine statiche
- Implementa il blog con Markdown prima di aggiungere funzionalità avanzate
- Usa componenti riutilizzabili per header, footer, card attività
- Testa la responsività su mobile (molti utenti accederanno da smartphone)
- Dopo ogni sezione completata, chiedi conferma prima di procedere
- Se mancano dati reali (indirizzo, telefono ecc.), usa placeholder chiari come `[DA COMPILARE]`
