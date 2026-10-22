# Church project — Ministerio Palabra Viva SC

A complete one-page site for **Ministerio Palabra Viva SC**, a real Spanish-
language church in Greenville, SC (Jesse's church) — built as a portfolio
project. Their current site (ministeriopalabraviva.org) has an outdated
address on the homepage and sends viewers off-site to watch; this redesign
puts the livestream and sermons on the main page.

**Live preview:** https://ministerio-palabra-viva.netlify.app

**Design brief (Jesse, 2026-10-22):** modern and current; heavy on faith and
biblical foundations; warm and family-oriented. Spanish-first, like the
congregation. **Colors (Jesse's direction, 2026-10-22): match the church's
own identity** — their site and building are black and white with the
metallic gold of their logo (~#C9A227/#D4AF37). The build uses their actual
logo (circular gold open-book + sprout badge, `images/logo.webp`, from
their site) in the header, hero, and footer. (A first pass in navy/gold
was replaced the same day — don't resurrect it.)

## What's on the page

- `index.html` — Hero, Hebrews 4:12 verse band, **En Vivo** (smart
  live/latest player), **Prédicas** (latest-uploads player + featured
  study + series list), **Horarios** (Sun/Tue/Thu cards), **Familias**
  (MPV Kids / MPV Jóvenes), **Nosotros** (history + faith), **Visítanos**
  (info + map), plus the church's full navigation: a desktop **"Más"
  dropdown** and a mobile **full-screen menu** mirroring their current
  site's menu (Nuestra Historia, Cuerpo Ministerial, Declaración de Fe,
  Prédicas & Estudios, MPV Jóvenes, MPV Kids, Misiones, Ofrendar,
  Oración, Contacto, Galería, Tienda). Items with a home on this page
  anchor locally (#historia, #declaracion, #mpv-kids, #mpv-youth,
  #predicas, #visitanos); the rest link to the church's current pages
  on ministeriopalabraviva.org (new tab).
- `styles.css` — Responsive black/white/gold layout, sticky header,
  desktop dropdown, and mobile full-screen menu
- `script.js` — Menu interactions, smart live-player switching, auto year
- `images/logo.webp` — The church's circular gold logo, used in the
  header, hero, mobile menu, and footer

## Key wiring (verified 2026-10-22 — see research-notes.md)

- YouTube channel: @ministeriopalabravivainc,
  ID **UCacVwwlQ1P9p6HZ0Nu82a8A** (13.6K subs)
  - Live embed: `youtube.com/embed/live_stream?channel=UCacVwwlQ1P9p6HZ0Nu82a8A`
    (shows the service automatically when they go live)
  - **Smart player (Jesse's pick, 2026-10-22):** the En Vivo box defaults to
    the latest-uploads player (most recent service) and `script.js` switches
    it to the live embed during service windows (ET): Sun 9:45 AM–1:00 PM,
    Tue 8:15–10:30 PM. Between services it never shows YouTube's
    "video unavailable" message.
  - Latest uploads: `youtube.com/embed/videoseries?list=UUacVwwlQ1P9p6HZ0Nu82a8A`
    (channel uploads playlist — self-updating)
  - Featured study embed: video `UUCwAiktLls` ("La Santidad", parte 1)
- Church Online (their current streaming door):
  ministeriopalabravivasc.online.church — kept as a button
- Socials: Instagram @mpv_inc · Facebook facebook.com/MPVInc

## Confirmed details (Jesse's decisions, 2026-10-22)

- **Address: 14 Gladys Dr, Greenville, SC 29607** (current; the old Greer
  address on their homepage is outdated — not used)
- **Phone: (864) 248-0182** (the Google listing number — not the
  (864) 684-6828 on their contact page)
- Email: info@ministeriopalabraviva.org
- Maps/directions: https://maps.app.goo.gl/nwS884jPYsfMhaig6
- Service times: Sun 10:00 AM worship & preaching · Tue 7:30 PM prayer
  (stream 8:30 PM) · Thu 7:30 PM Bible study
- Pastors: founded 2019 by Pr. Israel Benítez & Pra. Alba N. Bonilla;
  SC: Pr. Yamil Colón & Pra. Isarelis Benítez, Pr. Felipe Ramírez &
  Pra. Lorena Mejía

## TODO / open

- Real church photos (hero + gallery) would replace the gradient hero —
  needs the church's photos/permission.
- MPV Kids / Jóvenes copy is warm placeholder-level: confirm program
  details (ages, meeting times) with the church before calling it final.
- If the church ever wants it: bilingual EN toggle, events section,
  online giving section (they have an Ofrendar page today).
