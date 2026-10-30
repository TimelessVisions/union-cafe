# UNION Cafe design review

30 October 2026. Written as a graphic-design critique of the whole public page, after the marquee change on `feat/marquee-coffee-cloud`. Ranked by severity. This is not a restyle. The CANOFEE mock is direction only. Its assets and brand are not for use here.

## Fixed in this branch

1. **Marquee.** The yellow bar and green asterisks are gone. The words are unchanged: “COFFEE BRINGS US TOGETHER”, “MADE FRESH, EVERYDAY”, “YOUR HARLEM HANGOUT”. Separators are a crop of the owner-supplied cup, saucer, and cloud. The strip background is a crop of that painting’s sky. Dark type `#1a120e` is above WCAG AA on the teal and mint field (measured above 4.5:1). A few near-black speckles in the sky crop were lifted just enough that a glyph sitting on one still clears AA. The scroll still runs, and `prefers-reduced-motion` still stops it.
2. **Photo-card labels at 390px.** Under 520px the label and corner arrow were stacking, so the arrow sat on its own line under “THE COFFEE”. They are back on one row. The three-column grid itself is unchanged.

## Needs an owner decision

### 1. Critical. The pictures are not the cafe

The hero is a coffee simulation. The three cards and the favorites row are generic drink, interior, and pastry photos hosted on the old deployment. They read as stock. A visitor cannot tell this is a room on 142nd Street. Real Instagram and Maps photos are the next restyle. Do not invent stand-ins.

### 2. Critical. Rights on the marquee painting

The sky and the cup crop come from a painting signed **MS '16**. The owner found it via Cosmos, https://www.cosmos.so/e/1815613725. The pin credits **karenmvaz**. That credit is not a license. Keep the art off production until the owner confirms it can be published and redistributed. The crops live at `public/art/cloud-coffee-cup.png` and `public/art/cloud-coffee-sky.jpg`.

### 3. High. The page is four designs at once

- Espresso fluid hero, glass pills, yellow badge.
- Painted teal sky marquee.
- Lime kinetic “YOU + ME + COFFEE.” poster. This panel stays. It was approved.
- Cream editorial middle, then a yellow illustrated UNION footer with characters.

Each piece is loud. Together they do not share a type scale, a corner radius, or a palette. A full restyle should pick one voice. Do not sand the approved poster or the fluid and footer animations while deciding.

### 4. High. SaaS chrome on a cafe page

Pill buttons (“Come on in”, “Find your favorite”, “Meet us at Union”, “Get directions”), a glass pause circle on the hero’s lower right, and arrow-in-the-corner photo cards are the default marketing-site kit. The pause control is the floating circle: a 16px icon in a round glass button, easy to miss and easy to confuse with a chat widget. The yellow “GOOD COFFEE” badge is a second circle on the same edge and fights the headline.

Recommendation, not done here: one text button for the fluid (“Stir” / “Pause”) in the same style as the headline buttons, and a decision on whether the yellow badge stays.

### 5. High. Mobile type and the three-up row

At 390px the hero eyebrow and the photo labels are very small, and three photos stay in one row. The labels are readable only because they are short. When real photos arrive, one photo per row, or a horizontal snap, will carry more of the room. Changing that grid now would throw out the current layout before the photos exist.

### 6. High. Copy that sounds like a template

Kept as-is on purpose. Candidates to cut or rewrite with the owner, not by us:

- “MORE UNION, LESS SCROLLING.” / “But while you’re here…”
- “YOU BELONG HERE.”
- “SAME CITY. YOUR LITTLE CORNER.”
- “MOVE YOUR CURSOR. MAKE SOME WAVES.”

“A little more together.” is the page’s actual line. Leave it. Hours, address, and email are still unverified and should stay visibly provisional until the owner signs off.

### 7. Medium. Favorites are a gallery, not a menu

Three cards, a plus icon, and a sentence. No prices, no names of drinks the shop actually sells. That is correct while the menu is unknown. It should not grow fake items. When a real menu exists, a spec list will do more than another photo card.

### 8. Medium. Color is now wider than the cafe

Espresso, cream, yellow, lime, and the painting’s teal. The teal is required for this marquee. It should not spread into the header or the visit block unless the full restyle adopts it.

### 9. Low. Spacing rhythm

Header, hero, marquee, photo row, favorites, poster, visit, and footer each use their own padding. Nothing is broken. A later pass can put sections on one vertical step (for example 64 / 32 / 16) once the layout is chosen.

## How the CANOFEE direction could apply to Union

The reference is a ready-to-drink can site: a photographed landscape, a cream pill wordmark, small hand-drawn stickers, olive italic nav pills, a sage product block with a huge condensed title and thin spec rows, and a peach footer with scribbles. Palette to borrow as a starting point, not a spec: sage around `#c9d1a3`, olive around `#5a6b2f`, cream around `#fde6cc`, ink around `#2a1f1a`. Do not copy its photos, doodles, wordmark, or layout.

Use it when real Union photos arrive. Per section:

| Section | What to carry over | What to leave alone until then |
| --- | --- | --- |
| Top bar | A short olive or ink line, or retire it if the marquee already says the refrain. | Do not add sticker labels in the bar. |
| Header | Small lowercase italic pills for “visit” and “instagram”, ink on cream, instead of the tracked uppercase row and the outlined “Come on in” pill. The word “union” can stay the logo. It does not need a bean inside the letter. | Do not rebuild the header in this branch. |
| Hero | A real interior or cup photo, full bleed, with the line “A little more together.” set in a cream pill. A few original ink doodles (cup, stool, street) as small cream stickers, drawn for Union, not traced from the mock. The fluid can sit behind the photo at low opacity, or move under the fold. | The fluid animation stays as it is until that photo exists. |
| Marquee | Keep this painted sky and cup as the one borrowed artwork, rights permitting. It already plays the role of the reference’s handmade sticker rhythm. | Do not retint it to sage. The painting’s sky is teal. |
| Photo row | Real photos, one strong crop each, caption as a small sticker instead of a white arrow in the corner. | The three stock frames stay until replacements exist. The arrow-under-label bug is already fixed. |
| Favorites | Sage field, one oversized condensed title (“Good things.” or the real menu name), then rows: name on the left, a short note on the right, separated by a hairline. No prices until the owner provides them. | Do not invent a menu to fill the rows. |
| YOU + ME + COFFEE. | Keep the approved lime block and the sliding bars. It is the graphic moment. The reference’s peach scribble band is a different idea and should not replace this. | No further restyle of this panel in the CANOFEE pass. |
| Visit | The same spec-row pattern: FIND US / COME BY / SAY HELLO with the values on the right. The illustrated street map can go once a real photo or a plain address is enough. | Address and hours stay marked unconfirmed. |
| Social strip | One line and the handle. Drop the “less scrolling” joke if the owner agrees. | Copy not changed here. |
| Footer | Choose one illustration language. The character UNION wordmark is already built and should keep animating until the owner picks. The reference’s quiet peach scribbles would replace it, not sit on top of it. | Footer motion stays. |

## Not in this pass

No new business facts, no new marketing lines, no full palette swap, no new photography, no change to the fluid simulation, the UNION footer animation, or the approved poster.
