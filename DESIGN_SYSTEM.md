# Timpla Design System & Brand Guidelines

This document outlines the design tokens, components, and brand rules for the Timpla landing page and digital ecosystem. It ensures a consistent, professional identity that aligns with the brand's vision locally and internationally.

---

## 1. Brand Identity & Voice

### Vision & Mission
* **Vision:** To be the world's leading provider of smart, convenient, and healthy meal kits, inspiring people everywhere to rediscover the joy of cooking and connection through food. We also aim to be the top provider of authentic Filipino cuisine for overseas Filipinos missing the taste of home.
* **Mission:** To revolutionize home cooking by providing convenient, healthy, and globally inspired meal kits that empower busy individuals and families to create delicious, wholesome meals with minimal effort.

### Brand Personality & Tone
* **Comforting:** Warm, familiar, family-oriented.
* **Innovative:** Modern, efficient, tech-driven.
* **Bold:** Confident, pioneering, forward-looking.
* **Tone of Voice:** Relatable, homey, and heartfelt, balanced with modern practicality and confidence. Use simple, familiar language. Provide clear, useful information.

---

## 2. Design Tokens

### Color Palette
The Timpla color palette reflects a bold, approachable, and authentic character. Red serves as the primary color, symbolizing warmth, flavor, and energy, while supporting neutrals provide balance and versatility.

| Role | HEX Code | CSS Variable | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Red** | `#D52A28` | `--color-primary` | Main CTA buttons, hero backgrounds, primary emphasis. |
| **Deep Red** | `#B50418` | `--color-primary-dark` | Hover states, rich hero backgrounds, footer backgrounds. |
| **Dark Neutral** | `#343132` | `--color-text-dark` | Body copy, headings on light backgrounds, high-contrast UI elements. |
| **Cream (Bg)** | `#FFFBEB` | `--color-bg-light` | Primary page backgrounds, card backgrounds on dark sections. |
| **Accent 1** | `#FFD967` | `--color-accent-1` | Highlights and small visual accents only (never body text). |
| **Accent 2** | `#F68846` | `--color-accent-2` | Secondary highlights. |
| **Accent 3** | `#F3BB24` | `--color-accent-3` | Tertiary highlights. |

**Contrast Rules:** * **Do:** Use Red on white, white on red, or charcoal on light backgrounds.
* **Don't:** Use low-contrast combinations such as red on black or orange on gold.

### Typography
We utilize a two-font system to balance strong presence with high readability.

* **Headlines (Nunito):** Use primarily for headlines and emphasis text to establish a strong, recognizable presence.
    * *Weights:* Bold (700), ExtraBold (800).
* **Body Copy (Rounded Mplus 1c):** Use for body copy and supporting content to maintain readability and contrast with Nunito's bolder headline style.
    * *Weights:* Regular (400), Medium (500).
    * *Base Size:* 14pt to 21pt.

### Shape & Radii (The "Soft & Friendly" Rule)
To reflect the comforting and inviting brand voice, sharp edges are avoided in the UI.
* **`--radius-full` (9999px):** Used for all buttons, pills, and badges.
* **`--radius-lg` (24px):** Used for feature cards, product images, and content containers.
* **`--radius-md` (16px):** Used for smaller UI elements like inputs or dropdowns.

---

## 3. Core Components

### Buttons
* **Primary Button:** * Background: Primary Red (`#D52A28`).
    * Text: White.
    * Radius: Full (`9999px`).
    * Usage: Main calls-to-action (e.g., "Order Now", "View Menu") on Cream backgrounds.
* **Ghost/Secondary Button (Dark Mode):** * Background: Transparent.
    * Border: 2px solid White.
    * Text: White.
    * Radius: Full (`9999px`).
    * Usage: Secondary actions on Red backgrounds.

### Cards
* **Light Theme (on Cream background):** * Background: White (`#FFFFFF`).
    * Radius: Large (`24px`).
    * Shadow: Soft, dispersed drop-shadow for elevation.
* **Dark Theme (on Red background):** * Background: Cream (`#FFFBEB`).
    * Radius: Large (`24px`).
    * Shadow: None or minimal.

---

## 4. Layout Patterns & Pacing

To maintain visual interest and clear information architecture, alternate section backgrounds:
* **Impact Sections:** Use Primary Red (`#D52A28`) for Hero sections, email capture footers, and major promotional banners. Text must be White.
* **Content Sections:** Use Cream (`#FFFBEB`) for reading areas, product grids, testimonials, and detailed FAQs. Text must be Dark Neutral (`#343132`).

---

## 5. Logo & Asset Usage

### Logo Variations
* **Local Primary Logo:** Includes the tagline "mura, masarap, madali, masustansya.". Use on all packaging, campaigns, and promotional materials within the Philippines.
* **International Primary Logo:** Includes the tagline "pinas sa bawat kagat". Use on all international packaging, exports, campaigns, and promotional materials outside the Philippines.
* **Secondary Logo:** Pot icon and "TIMPLA" wordmark without a tagline. Use in minimal layouts, small-scale applications, or compact brand placements.
* **App Logo:** Simplified, square-based version. Use specifically for mobile applications, website icons (favicons), and social media profile images.

### Logo Restrictions
* Do not stretch or distort the logo.
* Do not rotate, flip, or tilt the logo.
* Do not change the colors or apply gradients.
* Do not place the logo on cluttered or low-contrast backgrounds.
* Do not add outlines, shadows, or effects.
* Do not modify or add text.

### Photography
* Whenever possible, use floating product elements (items with transparent backgrounds) or soft-masked images.
* Avoid harsh, square bounding boxes for photography to maintain the "Soft & Friendly" visual language.