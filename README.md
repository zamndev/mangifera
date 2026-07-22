# 🥭 Mangifera

**Mangifera** — небольшой сайт-журнал, посвящённый манго: откуда он взялся, почему у него есть свой праздник, как выглядят разные сорта и почему интернет так любит шутить про этот фрукт.

Никакого фреймворка, никакой сборки — чистый HTML/CSS/JS, который открывается одним двойным кликом.

---

## Что внутри

- **Hero** — заглавный экран с крупной типографикой и фоновым фото
- **История манго** — журнальная статья о происхождении и распространении фрукта, с буквицей и цитатой на полях
- **День манго** — блок про 22 июля и традиции, связанные с праздником
- **Галерея** — адаптивная masonry-сетка фотографий сортов с лайтбоксом по клику
- **Живые сцены** — три мини-анимации на чистом CSS (без единой гифки)
- **Mango Vibes** — карточки треков с визуальным плеером и ссылками на Spotify/YouTube
- **10 фактов** — блок коротких карточек с интересными фактами
- **Финал + футер** — закрывающий экран и подвал с навигацией

Дизайн — тёмная палитра с оттенками манго, шрифты Fraunces + Inter + JetBrains Mono, анимации появления при скролле через `IntersectionObserver`.

## Структура файлов

```
mangifera/
├── index.html   → разметка страницы
├── style.css    → все стили
├── script.js    → интерактив (скролл, лайтбокс, плеер, меню)
└── README.md    → этот файл
```

## Как запустить

Просто открыть `index.html` в браузере. Никаких зависимостей, npm-пакетов или сборщиков не требуется.

Для локальной разработки удобнее поднять любой статический сервер, например:

```bash
python3 -m http.server
```

## Источники изображений

Фотографии манго взяты с Wikimedia Commons (общественное достояние / CC).

## Демо

🔗 **[zamndev.github.io/mangifera](https://zamndev.github.io/mangifera/)**

---
---

# 🥭 Mangifera (EN)

**Mangifera** is a small magazine-style site all about mangoes: where they came from, why they get their own holiday, what different varieties look like, and why the internet can't stop joking about this fruit.

No frameworks, no build step — just plain HTML/CSS/JS that opens with a double-click.

---

## What's inside

- **Hero** — a bold opening screen with large typography and a full-bleed photo
- **History of mango** — a magazine-style piece on its origin and spread, with a drop cap and a margin quote
- **Mango Day** — a section about July 22nd and the traditions around it
- **Gallery** — a responsive masonry grid of variety photos with a click-to-zoom lightbox
- **Living scenes** — three mini animations built in pure CSS (not a single actual GIF)
- **Mango Vibes** — track cards with a visual player and links to Spotify/YouTube
- **10 facts** — a grid of short, punchy fact cards
- **Finale + footer** — a closing screen and footer navigation

The look is a dark palette with mango tones, typeset in Fraunces + Inter + JetBrains Mono, with scroll-reveal animations powered by `IntersectionObserver`.

## File structure

```
mangifera/
├── index.html   → page markup
├── style.css    → all styling
├── script.js    → interactivity (scroll, lightbox, player, menu)
└── README.md    → this file
```

## Running it

Just open `index.html` in a browser. No dependencies, no npm packages, no bundlers.

For local development, any static server works fine:

```bash
python3 -m http.server
```

## Image credits

Mango photos are sourced from Wikimedia Commons (public domain / CC).

## Live demo

🔗 **[zamndev.github.io/mangifera](https://zamndev.github.io/mangifera/)**
