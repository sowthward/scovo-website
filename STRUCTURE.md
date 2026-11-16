# STRUCTURE.md

Section map of the reference homepage and how each part maps to SCOVO.

- Reference: https://www.claritybusinesstravel.com (homepage), studied 16 Nov 2026 in a headless browser at 1440px and 390px.
- Taken: section order, layout patterns, navigation model, spacing and type scale.
- Not taken: text, images, video, logos, icons, CSS, JavaScript, colours, fonts.

## 1. What I observed

### Header

| Element | Observed |
|---|---|
| Height | 64px, white, thin rule under it |
| Left | Logo |
| Menu | 6 items. 3 open dropdowns, 3 are plain links |
| Grouped dropdown | One dropdown ("sectors") holds 10 links under 2 group titles. The other two dropdowns are flat lists of 3 and 4 links |
| Right | Language selector (a flag that opens a list of 6 languages), a log-in text link, one pill button in the accent colour |
| Mobile | Collapses to a menu button. Dropdowns become accordions |

### Sections, top to bottom

| # | Pattern | Detail observed |
|---|---|---|
| 1 | Hero | Full-width dark band, about 610px tall on desktop, 440px on mobile. One left-aligned H1, max width about 780px. One control: a "play video" button. Background is a video or image |
| 2 | Intro plus two product cards | One row, three columns: H2 and two short paragraphs on the left (about 30% width), then two equal cards. Card one is filled with the accent colour, card two is light grey. Each card: product name, one sentence, one outline pill button. Cards have small rounded corners and no border |
| 3 | Divider | A single thin rule across the container |
| 4 | Three services | Two columns. Left: H2, then one service at a time (H3, paragraph, button), pinned while scrolling. Right: three tall rounded images stacked, one per service. On mobile it becomes three stacked blocks |
| 5 | Feature tabs | Dark band. Centred H2 and paragraph. A pill switch with 2 tabs. Under it, two columns: left is a vertical list (8 items in tab 1, 5 in tab 2), each item with a small label, an H3 and two lines of text, split by thin rules; the active item is bright and the rest are dimmed. Right is one media panel that changes with the active item. Items advance on a timer |
| 6 | Sector cards | Light grey band. Left-aligned H2 and one sentence. A horizontal row of 9 image cards with a progress line and two arrow buttons. Each card links to a sector page |
| 7 | Without / with | Dark band. Centred H2 and paragraph. Two equal panels side by side, each with a heading above it carrying a cross or a tick. 5 lines in each. The "with" panel has an accent-colour outline. Stacks on mobile |
| 8 | Counters | Same dark band, directly under the comparison. 4 columns: large number in the accent colour, bold label, one sentence. Numbers count up from 0 on scroll. 2 columns, then 1, on mobile |
| 9 | Testimonials | White. Centred H2 and paragraph. A carousel of 5 photo cards with a quote and a round arrow button, two arrow controls under it |
| 10 | Logo strip | White. One small centred line, then a row of client logos |
| 11 | Form | Full-width accent-colour band. Centred H2 and two lines. Form about 900px wide, two columns: 4 text fields, 1 select ("where did you hear about us"), 1 further text field, 1 full-width message area. Fields are underlined, not boxed. One centred dark pill button |
| 12 | Footer | Dark. Logo, then 6 link columns (3, 3, 10, 3, 3 and 11 links; the last is the legal list), 4 social links, copyright line |

### Spacing and type

| Item | Desktop (1440) | Mobile (390) |
|---|---|---|
| Container | Max 1520px, 48px side gutters | 18px side gutters |
| Section padding, top and bottom | About 100 to 120px (measured from screenshots) | About 56 to 64px |
| H1 | 64px, line height 76px | 41px / 49px |
| H2 | 48px / 53px | 33px / 37px |
| H3 | 24 to 27px | 22 to 24px |
| Body | 18px / 27px | 16px / 24px |
| Heading weight | Medium (500) throughout | Same |
| Alignment | Headings left in sections 1, 2, 4, 6. Centred in 5, 7, 9, 11. Body text follows its heading | Same |
| Buttons | Pill shape, 40px tall, 12px by 16px padding, 16px label | 14px label |
| Cards | Rounded corners about 8 to 12px, no shadow | Same |
| Background rhythm | Dark hero, white, white, dark, light grey, dark, white, white, accent, dark | Same |

## 2. How each part maps to SCOVO

| Reference | SCOVO (prompt section 4) | What changes |
|---|---|---|
| Header | Row 1. Wordmark, menu, one dropdown (Settori), IT / EN switch, "Richiedi la prova" | No log-in link. Language switch is two text links, no flags, no list. Only one dropdown, shown only when sector pages are published. Hidden pages drop out of the menu |
| 1 Hero | Row 2. Scientific Blue band, H1, sub, orange button, "Guarda un esempio" link | Two columns: text left, HTML mock of the Summary page right. No video, no play control. A sub-line and a button are added, which the reference hero does not have |
| 2 Intro plus two cards | Rows 3 and 4. "Passaparola Digitale" intro, then "Come ti vede l'AI" and "Cosa fare adesso" | Split into two steps: a centred H2 and paragraph first, then the two cards in a row. Both cards are white with a grey border; each holds a small product view and a text link |
| 3 Divider | Kept as a grey rule between rows 4 and 5 | None |
| 4 Three services | Row 5. Fallo tu · Passa al tuo web developer · Può farlo ctrlpost | Three cards in one row, not a pinned scroll. No photos. Each card has a numbered circle and one sample action. Third card says the service comes later |
| 5 Feature tabs | Row 6. "Cosa misuriamo" (8) and "Cosa ricevi" (5) | Same two-tab switch and same 8 and 5 counts. Items are shown as an icon grid (4 by 2, then 5 across), not a timed list with a media panel. Sand background, not dark. Both tab panels are in the HTML; no timer |
| 6 Sector cards | Row 7. Three sector cards | 3 cards in a static row, no carousel, no arrows, no photos. Each card shows one buyer question. Link only when the sector page is published |
| 7 Without / with | Row 8. Senza SCOVO / Con SCOVO | White panels on a white or sand section. The "with" panel has a blue outline. Cross and tick icons carry text alternatives |
| 8 Counters | Row 9. 4 · 12 · 144 · 14 | Its own Scientific Blue band, white numbers. Real numbers in the HTML; count-up is an enhancement, off with reduced motion |
| 9 Testimonials | Row 10. Built, switched off | While the list is empty: one line, "Primi clienti in questo settore: partecipa al pilota." No carousel is rendered |
| 10 Logo strip | Row 11. Left out | Not built |
| 11 Form | Row 12. "Richiedi la prova" | Blue band with the form on a white card. Boxed fields with visible labels (better for accessibility than underlines). 6 fields, privacy checkbox, honeypot, reassurance line under the orange button |
| 12 Footer | Row 13 | 4 link columns (Prodotto · Settori · Informazioni · Inizia), legal list of 2, one social link (LinkedIn), parent line, company details TODO, copyright |

### SCOVO background rhythm

Blue hero · white (intro) · sand (two cards) · white (three actions) · sand (tabs) · white (sectors) · sand (without / with) · blue (counters) · white (pilot line) · blue (form) · white footer with a grey top rule.

### SCOVO type and spacing tokens (proposed)

Same scale as the reference, set in Inter. Headings are Inter Bold where the reference uses a medium weight, as the brand guidelines require.

| Token | Desktop | Mobile |
|---|---|---|
| H1 | 60px / 1.15, bold | 38px / 1.2 |
| H2 | 44px / 1.15, bold | 30px / 1.2 |
| H3 | 24px / 1.3, bold | 21px / 1.3 |
| Body | 18px / 1.5 | 16px / 1.5 |
| Container | Max 1280px, 48px gutters | 20px gutters |
| Section padding | 104px | 60px |
| Card | 12px radius, 1px grey border, 32px padding | 24px padding |
| Button | 48px tall, 8px radius; orange button label bold 18px | Same |

Two deliberate departures from the reference: H1 and H2 are one step smaller because Inter Bold reads heavier than the reference face, and the container is narrower (1280px) so text lines stay readable beside the product mock.

## 3. Points to confirm before building

1. **Feature tabs as a grid.** The reference shows the 8 and 5 items as a timed list beside a media panel. The prompt asks for icon grids. I will build icon grids under a two-tab switch.
2. **Button shape.** The reference uses full pill buttons. I propose 8px rounded rectangles so the buttons match the rounded cards and do not echo the reference. Say if you prefer pills.
3. **Three actions as cards.** The reference pins text while photos scroll. SCOVO has no photos, so three cards in a row.
