---
name: ROUND-Beijing
description: Real encounters, open typography, circular actions and a photographic portfolio rhythm.
colors:
  ink: "#1c1d20"
  paper: "#fff"
  blue: "#455ce9"
  blue-hover: "#3346bf"
  muted: "#606267"
  line: "#d8d9db"
typography:
  display:
    fontFamily: "Albert Sans, ROUND Sans SC, sans-serif"
    fontSize: "clamp(100px, 18vw, 340px)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Albert Sans, ROUND Sans SC, sans-serif"
    fontSize: "clamp(48px, 6.3vw, 96px)"
    fontWeight: 400
    lineHeight: 1.22
    letterSpacing: "-0.025em"
  work-title:
    fontFamily: "Albert Sans, ROUND Sans SC, sans-serif"
    fontSize: "clamp(36px, 4.6vw, 70px)"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Albert Sans, ROUND Sans SC, sans-serif"
    fontSize: "30px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Albert Sans, ROUND Sans SC, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Albert Sans, ROUND Sans SC, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  circle: "50%"
  pill: "50px"
  filter: "40px"
spacing:
  page: "clamp(24px, 7.8vw, 140px)"
  compact-gap: "10px"
  image-gap: "24px"
  section-gap: "100px"
components:
  button-round:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.circle}"
    width: "175px"
    height: "175px"
  button-round-blue:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.circle}"
    width: "175px"
    height: "175px"
  button-round-blue-hover:
    backgroundColor: "{colors.blue-hover}"
    textColor: "{colors.paper}"
  button-pill:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "20px 36px"
  button-pill-hover:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.paper}"
  filter:
    textColor: "{colors.ink}"
    rounded: "{rounded.filter}"
    padding: "14px 24px"
    typography: "{typography.label}"
  filter-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  search:
    textColor: "{colors.ink}"
    padding: "18px 0"
  work-row:
    textColor: "{colors.ink}"
    padding: "55px 8vw"
  navigation:
    textColor: "{colors.ink}"
    padding: "12px 0"
---

# Design System: ROUND-Beijing

## Overview

**Creative North Star: "让生活，围成一圈。"**

ROUND’s visual world places real encounters inside a spacious portfolio frame: white reading surfaces, charcoal invitations, oversized regular-weight type and blue circular actions. The user-selected Dennis Snellenberg reference supplies the visual and interaction language; ROUND’s original photographs, identity and activity material supply its content.

The system feels open, photographic and gently elastic. Circles appear as actions, portraits, menu controls and navigation marks; rectangular images and hairline divisions keep the surrounding material quiet. Motion connects these forms through a moving wordmark, curved transitions and restrained pointer feedback.

**Key Characteristics:**
- Authentic activity photography with generous surrounding space.
- Regular-weight Albert Sans paired with the locally hosted ROUND Sans SC Chinese face.
- Flat white and charcoal surfaces, with blue reserved for interaction.
- Circular actions, pill outlines, rectangular image fields and hairline rows.
- Responsive layouts with explicit touch controls and reduced-motion support.

## Colors

The palette is predominantly charcoal and white, with a clear periwinkle-blue interaction accent. Frontmatter contains the normative values; names below describe their application.

### Primary

- **Action Blue** (`blue`): contact discs, view indicators, hover fills, selection and keyboard focus.
- **Deep Action Blue** (`blue-hover`): the rising hover fill inside an already-blue circular action.

### Neutral

- **Charcoal Ink** (`ink`): primary text, menu, page transitions, dark contact surfaces and resting circular actions.
- **White Paper** (`paper`): reading surfaces and text on dark or blue backgrounds.
- **Quiet Grey** (`muted`): explanatory text, captions and secondary information on white.
- **Hairline Grey** (`line`): dividers and outlined controls on white.

Dark surfaces use translucent white strokes and lighter grey supporting copy. Photograph backplates are pale neutral fields; they do not introduce a second brand accent.

**The Blue Action Rule.** Use blue for interactive emphasis: action discs, hover fills, selection and focus. Preserve neutral reading surfaces.

## Typography

**Display Font:** locally hosted OFL Albert Sans, followed by ROUND Sans SC and sans-serif. ROUND Sans SC is the locally hosted OFL Noto Sans SC variable subset covering the current catalog.

**Body Font:** the same stack. Chinese glyphs use ROUND Sans SC; no separate decorative or monospaced face is present.

**Character:** regular-weight, open and unforced. Latin display text is tightly spaced; Chinese narrative copy uses substantial leading. The hierarchy is fluid rather than a fixed-ratio scale.

### Hierarchy

- **Display:** the moving Latin wordmark uses the frontmatter display role; mobile switches to (27vw), with (-0.03em) tracking and (1.2) line height.
- **Headline:** large page headings use the headline role; at the phone breakpoint they become (clamp(39px, 10.8vw, 65px)) with (1.3) line height. The activity index has a narrower floor (clamp(34px, 10.5vw, 65px)).
- **Work title:** oversized desktop activity rows use the work-title role. Grid titles use the title role; mobile grid titles are (28px).
- **Body:** the body token establishes the default. Chinese descriptive passages generally use (1.8–1.9) leading; preserved original notes use (17px / 2) on desktop and (15px / 1.95) on phones.
- **Label:** controls and supporting information use the label role. Smaller archival counts, source captions and metadata remain subordinate, with no separate display font.

**The Open Type Rule.** Build hierarchy through scale and space while retaining regular weight. Give Chinese prose its observed generous line height.

## Layout

The reading container is capped at (1100px), with a fluid page inset from the spacing token. Wide image regions retain the same inset without the reading-width cap. At (1100px) and below the inset becomes (6vw); at (760px) it becomes (24px); at (360px) it becomes (20px).

Desktop introductions and stories use asymmetric two-column layouts. The activity grid has two columns with (85px) row and (45px) column gaps; notes have three columns with (65px / 35px) gaps. Phone activity cards become one column, while notes and photograph galleries retain two. Narrative, contact and article layouts become a single column. Filters wrap, and the grid/list switch remains independently operable.

Secondary-page headings begin after a generous top space (205px desktop; 145px phone). Desktop sections commonly use (100–160px) of vertical separation, reducing to roughly (60–85px) on phones. These are observed section spacings, not a mandatory arithmetic spacing scale.

The photographic hero occupies the small viewport height, with an intentional minimum height. Its wordmark may crop horizontally inside its own frame. On phones, the descriptor sits below the marquee and above the bottom controls; this is the implemented placement. Desktop location signage gives way to a small mobile globe. Page-width clipping contains curved transitions and the marquee without producing sideways scrolling.

## Elevation & Depth

There are no box shadows. Photography, foreground discs, translucent scrims and contrasting planes create depth. The dark side menu and page transition use curved edges; the white content region ends in an elliptical reveal over the dark footer. The photo viewer uses an almost-opaque charcoal field, keeping the image itself unframed.

**The Flat Surface Rule.** Use contrast, hairlines, photography and overlapping shapes for depth; the implemented system has no box shadows.

## Shapes

Circles are the principal action shape. Pill controls use the frontmatter pill radius, with a slightly tighter filter radius. Portraits and view indicators are circular; activity images and cards remain rectangular without rounded shells. Hairlines separate information without boxing it into panels. Arrows and utility icons are thin inline SVG strokes, not font glyphs.

Large curves belong to page transitions and section boundaries. The location tab has a square attachment to the screen edge and a rounded free end. These shapes establish the circle motif without making every surface rounded.

## Components

### Buttons

Circular actions are generous and calm: charcoal or blue with white centered bilingual copy. Standard diameter is defined in the frontmatter; phone circles reduce to (122px), with contextual footer and narrow-phone adjustments. Their colored fill rises from below over (650ms), following the shared easing. Blue circles deepen on hover.

Outlined pills use a fine neutral border, the frontmatter padding, and a minimum height (70px). On phones they use (17px 28px) padding and a (60px) minimum height. Hover reveals blue and turns the text white. On dark surfaces the resting border is translucent white.

Fine-pointer magnetic translation is decorative and uses the same elastic timing. Keyboard focus remains a blue outline (2px), offset (7px). Disabled controls reduce opacity to (0.35).

### Filters and view controls

Category filters use outlined capsules; active and desktop-hover states become charcoal with white text. On touch devices an unselected hover state stays neutral. Mobile filters retain a (44px) minimum height. Circular grid/list controls use the same selected treatment and expose their pressed state.

### Cards and project rows

Desktop selected activities appear as large, hairline-separated text rows. Hover shifts the title and metadata in opposite directions and offers a cursor-following photograph with a blue view disc. On phones, the actual photograph is placed above each title, so the activity remains understandable without hover.

Activity cards combine a rectangular cover, title-and-arrow row, hairline and small category caption. Desktop covers use a (1.3) aspect ratio; mobile covers use (1.2). Their image zoom is (1.04) on hover. The view disc is always shown on touch. Note cards use square images and modestly sized titles; photo galleries use contained images inside square neutral frames.

### Inputs and fields

The note search is a single underlined field with a visible label. It uses no filled box or rounded shell. The neutral bottom rule becomes blue and (2px) on focus within; its input caret is blue. Search updates a visible result count and supports an explicit empty result message.

### Navigation

The desktop header places a small wordmark opposite three bilingual links. Links use a small circular hover marker. The floating circular menu appears after scrolling; phones also expose a text Menu control from the start. The dark side panel opens with an elastic curved edge and a scrim. Large stacked links use a dot for the active page. Escape closes the panel, focus stays inside while open and returns to its trigger afterward.

### Photo viewer

The full-viewport dialog uses an unrounded dark field, contained photographs and circular outlined close/previous/next controls. Controls move to the lower edge on phones. Captions and an image count remain visible. Arrow keys and horizontal swipes navigate; closing restores the invoking element’s focus.

### Motion and transitions

The shared easing is (cubic-bezier(.22, 1, .36, 1)). The wordmark responds to scroll direction, image ribbons move in opposite directions, and the footer curve flattens as it enters view. Navigation uses a charcoal curved wipe with the destination name. The globe keeps its outer outline stable while the longitude ellipse turns.

Reduced motion removes animation, transitions, magnetic movement, cursor previews and route wipes; it also stops marquee, hero and ribbon transforms. The visible motion control pauses ongoing animation and scroll-driven effects. Essential navigation, filtering, search and photo access remain available.

## Do's and Don'ts

### Do:

- **Do** use the original ROUND photographs and preserve their source context.
- **Do** retain regular-weight Albert Sans and the locally hosted ROUND Sans SC Chinese face.
- **Do** pair circular actions with open, flat reading surfaces and hairline divisions.
- **Do** keep the mobile image and action visible without requiring hover.
- **Do** preserve visible keyboard focus, meaningful button labels, menu focus containment and photo-viewer keyboard controls.
- **Do** respect reduced motion and the explicit motion pause control.

### Don't:

- **Don’t** import the reference creator’s identity, portrait or project content into ROUND.
- **Don’t** turn archival activity information into invented live booking promises.
- **Don’t** replace the photographic portfolio with an inherited scrapbook composition.
- **Don’t** add shadows or rounded card shells to the existing flat image-and-rule patterns.
- **Don’t** make cursor-following previews the only way to see an activity.
