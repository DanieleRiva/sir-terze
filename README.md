# Automi a Stati Finiti

Raccolta di spiegazioni sugli automi a stati finiti e sul loro uso con JFLAP, per le classi terze di Sistemi e Reti (prof. Daniele Riva). Sito statico costruito con [Astro Starlight](https://starlight.astro.build).

## Contenuti

- `src/content/docs/lezioni/`: teoria (basi, DFA, NFA, minimizzazione, Mealy e Moore, espressioni regolari, applicazioni)
- `src/content/docs/jflap/`: guida pratica a JFLAP 7.1
- `src/content/docs/esercizi/`, `progetti/`, `riferimenti/`: esercizi con soluzioni, schede di laboratorio, progetti, scheda riassuntiva, glossario, guida per il docente
- `public/jflap/`: file `.jff` di esempio da aprire in JFLAP (anche in `esempi-jflap.zip`)
- `_archivio-vecchi-appunti/`: i vecchi appunti (elettricità, Arduino, programmazione), esclusi dal sito

## Componenti per i diagrammi

- `Automa.astro`: disegna un automa (stati, transizioni, iniziale/finali, uscite di Moore, etichette `input/uscita` di Mealy) e, con `simula`, aggiunge il simulatore passo passo
- `Nastro.astro`: nastro di input con la testina
- `JflapFinestra.astro`, `JflapMenuPrincipale.astro`, `JflapSimulazione.astro`, `JflapMultipleRun.astro`: riproduzioni schematiche delle finestre di JFLAP
- `SchemaSequenziale.astro`: schema a blocchi di una macchina di Moore o di Mealy

Esempio:

```mdx
import Automa from '~/components/Automa.astro';

<Automa
	states={[
		{ id: 'q0', x: 80, y: 90, initial: true },
		{ id: 'q1', x: 260, y: 90, final: true },
	]}
	transitions={[
		{ from: 'q0', to: 'q1', label: 'a' },
		{ from: 'q0', to: 'q0', label: 'b' },
		{ from: 'q1', to: 'q1', label: 'a, b' },
	]}
	simula="bab"
/>
```

## Comandi

```bash
pnpm install
pnpm dev      # anteprima su http://localhost:4321/appunti-sir-terza
pnpm build    # sito statico in dist/
```
