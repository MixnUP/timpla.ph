# Timpla Landing Page Architecture & Layout Plan

This document outlines the section-by-section layout for the Timpla app acquisition landing page. It blends organic, comforting food imagery with modern, tech-forward grid structures.

## Global Design Tokens
* **Colors:** Deep Red (`#B50418`), Primary Red (`#D52A28`), Cream (`#FFFBEB`), Dark Neutral (`#343132`), White (`#FFFFFF`).
* **Radii:** `rounded-full` (9999px) for buttons. `rounded-2xl` (16px) for UI cards.
* **Borders (Tech Accent):** Thin, 1px solid borders using an opacity-reduced White or Red to create structured, app-like grids.

---

## 1. Global Navigation (The Header)
* **Structure:** A sticky `flex` container (row), `justify-between`, `items-center`, `border-b border-gray-200`.
* **Background:** Cream (`#FFFBEB`).
* **Elements:**
  * **Left:** Secondary Logo (Pot icon + "TIMPLA" wordmark).
  * **Right:** A `rounded-full` Primary Red (`#D52A28`) button: "Download the App".

## 2. The Hero Section (The Overlapping Card - *Ref: Verona*)
* **Structure:** `relative`, `min-h-[80vh]`. A large, edge-to-edge background photograph of a finished dish and raw ingredients, heavily darkened or blurred.
* **The "Readability Box":** Positioned `absolute` (bottom-left or center). A solid Cream (`#FFFBEB`) or frosted-glass card (`backdrop-blur-md`), `rounded-3xl`, with generous padding.
  * **H1:** "The Authentic Filipino Meal Kit." (Dark Neutral, Nunito).
  * **Subtitle:** "Pre-portioned ingredients. Chef-crafted recipes. Delivered via the Timpla app."
  * **CTA:** App Store / Google Play badges.
* **Strict Image Rules:** No "Mealkit" text on images. Sauces must be dish-specific. No eggs unless explicit to the recipe.

## 3. The App-First Trust Grid (The Tech Edge - *Ref: Cultural Connectors*)
* **Structure:** A dark-mode CSS Grid (`grid-cols-2 md:grid-cols-4`).
* **Background:** Deep Red (`#B50418`).
* **Styling:** Use thin 1px white borders (`border-r`, `border-b` with low opacity) to separate the columns, giving it an editorial, app-interface feel. Include small crosshair (`+`) accents in the grid intersections.
* **Content Nodes (White Text):**
  * "Pre-Measured" | "Zero Grocery Shopping" | "Chef-Crafted" | "Cook in 30 Mins"
  * Top element is a large, sharp number or icon; bottom is the label.

## 4. The Value Proposition Bento ("Mura, Madali, Masarap" - *Ref: Pretzels*)
* **Structure:** Cream (`#FFFBEB`) background. 
* **Layout:** An asymmetrical "Bento Box" CSS Grid.
  * **Left Area (Span 2 cols):** A large, vertical card for "Masarap" (Taste) featuring a massive, mouth-watering close-up.
  * **Right Area (Stacked):** Two smaller, horizontal cards for "Mura" (Affordability) and "Madali" (Convenience).
* **Accents:** Apply absolute-positioned, floating PNG cut-outs of ingredients (garlic, chili) overlapping the edges of these cards to break the rigid grid.

## 5. Timpla Signatures (The Dense Menu - *Ref: Verona*)
* **Structure:** Deep Red (`#B50418`) background to make the food photography pop.
* **Layout:** A structured, dense 2x2 or 3x2 CSS Grid (No carousel).
* **Card UI:** Cream (`#FFFBEB`) background, `rounded-2xl`, subtle drop shadow. 
  * Layout is horizontal (`flex-row`). A square, fully rounded thumbnail of the dish on the left; Title, brief description, and a small "View in App" text link on the right. 

## 6. The Timpla Story (About Us)
* **Structure:** Cream (`#FFFBEB`) background. `grid-cols-1 md:grid-cols-2`.
* **Left:** Editorial typography (large Nunito H2, clean paragraphs) detailing the mission to bring "Pinas sa bawat kagat" to overseas Filipinos.
* **Right:** Soft-masked photo of the kitchen/founders.

## 7. Footer (The Close)
* **Structure:** Deep Red (`#B50418`) background.
* **Visual:** A massive, full-width, edge-to-edge "TIMPLA" wordmark in White at the absolute bottom.
* **Content:** App download badges centered above the wordmark, flanked by clean, minimal navigational links.