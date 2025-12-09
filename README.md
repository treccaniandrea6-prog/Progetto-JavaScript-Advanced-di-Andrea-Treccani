# Tongue – Hacker News Feed

Progetto JavaScript Advanced – sviluppato da **Andrea Treccani**.

Applicazione che mostra le ultime news pubblicate su [Hacker News](https://news.ycombinator.com/) usando le API pubbliche.  
Allo startup vengono caricate 10 news; tramite il pulsante **“Carica altre notizie”** l’utente può visualizzare i 10 articoli successivi.



## Funzionalità principali

- Recupero degli ID delle ultime news da  
  `https://hacker-news.firebaseio.com/v0/newstories.json`
- Per ogni ID viene richiesta la singola news tramite  
  `https://hacker-news.firebaseio.com/v0/item/{id}.json`
- Visualizzazione di:
  - titolo della news
  - link alla fonte originale (o alla pagina di Hacker News)
  - data di pubblicazione formattata in italiano
- Paginazione a blocchi di 10 news tramite il pulsante **“Carica altre notizie”**
- Messaggi di stato:
  - caricamento in corso
  - errori nelle chiamate
  - nessuna news rimanente

---

##Struttura del progetto

```text
progetto-hackernews/
│
├── index.html
│
├── css/
│   └── styles.css
│
└── js/
    ├── api.js     # chiamate alle API di Hacker News
    ├── ui.js      # funzioni di rendering e gestione stato
    └── main.js    # logica principale dell’app (startup + load more)
