import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';

export default defineConfig({
	site: 'https://danieleriva.github.io',
	base: '/appunti-sir-terza',

	integrations: [
		starlight({
			title: 'Automi a Stati Finiti',
			logo: {
				src: './public/favicon.png',
			},
			favicon: '/favicon.png',
			customCss: [
				'./src/custom.css',
			],
			defaultLocale: 'root',
			locales: {
				root: { label: 'Italiano', lang: 'it' },
			},
			description: 'Automi a stati finiti e JFLAP: teoria, esempi, laboratorio ed esercizi per le classi terze',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/DanieleRiva' }
			],

			plugins: [
				starlightThemeNova(),
			],

			head: [
				{
					tag: 'script',
					content: `
                        function initProgressBar() {
                            let bar = document.getElementById('scroll-progress');
                            if (!bar) {
                                bar = document.createElement('div');
                                bar.id = 'scroll-progress';
                                bar.style.position = 'fixed';
                                bar.style.top = '0';
                                bar.style.left = '0';
                                bar.style.height = '4px';
                                bar.style.backgroundColor = 'var(--sl-color-accent)'; 
                                bar.style.zIndex = '9999';
                                bar.style.width = '0%';
                                bar.style.transition = 'width 0.1s ease-out';
                                document.body.appendChild(bar);
                            }
                            
                            window.addEventListener('scroll', () => {
                                const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
                                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                                if (height > 0) {
                                    const scrolled = (winScroll / height) * 100;
                                    bar.style.width = scrolled + '%';
                                } else {
                                    bar.style.width = '0%';
                                }
                            });
                        }
                        
                        document.addEventListener('DOMContentLoaded', initProgressBar);
                    `
				}
			],

			sidebar: [
				{
					label: '🧭 Inizia qui',
					items: [
						{ label: 'Come usare questa raccolta', link: '/lezioni/' },
					],
				},
				{
					label: '📘 Teoria degli automi',
					items: [
						{ label: '1 · Le basi', autogenerate: { directory: 'lezioni/01-basi' }, collapsed: true },
						{ label: '2 · Automi deterministici (DFA)', autogenerate: { directory: 'lezioni/02-dfa' }, collapsed: true },
						{ label: '3 · Non determinismo (NFA)', autogenerate: { directory: 'lezioni/03-nfa' }, collapsed: true },
						{ label: '4 · Minimizzazione', autogenerate: { directory: 'lezioni/04-minimizzazione' }, collapsed: true },
						{ label: '5 · Automi con uscita', autogenerate: { directory: 'lezioni/05-mealy-moore' }, collapsed: true },
						{ label: '6 · Espressioni regolari', autogenerate: { directory: 'lezioni/06-espressioni-regolari' }, collapsed: true },
						{ label: "7 · Dall'automa al codice", autogenerate: { directory: 'lezioni/07-applicazioni' }, collapsed: true },
					],
				},
				{
					label: '🧰 JFLAP in pratica',
					autogenerate: { directory: 'jflap' },
					collapsed: true,
				},
				{
					label: '📝 Esercizi',
					autogenerate: { directory: 'esercizi' },
					collapsed: true,
				},
				{
					label: '🛠️ Progetti',
					autogenerate: { directory: 'progetti' },
					collapsed: true,
				},
				{
					label: '📎 Riferimenti',
					autogenerate: { directory: 'riferimenti' },
					collapsed: true,
				},
			],
		}),
	],
});