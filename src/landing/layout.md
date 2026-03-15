# Timpla Landing Page - AI Agent Blueprint (Minimalist App Acquisition)

**Agent Instructions:** This document serves as the exact structural and stylistic blueprint for the Timpla landing page. You must strictly adhere to the defined Tailwind classes, color tokens, typography scales, and asset generation rules to maintain the minimalist, premium brand identity.

---

## 1. Global Design Tokens & Tailwind Config Rules

**Colors (Extend Tailwind Theme):**
* `primary`: `#D52A28` (Primary Red)
* `primary-dark`: `#B50418` (Deep Red)
* `bg-light`: `#FFFBEB` (Cream)
* `text-dark`: `#343132` (Dark Neutral)
* `white`: `#FFFFFF`

**Typography:**
* **Headings (`font-display`):** `Nunito` (Weights: 700, 800). Use tight tracking (`tracking-tight`) and tight leading (`leading-tight` or `leading-none` for H1/H2).
* **Body (`font-sans`):** `Rounded Mplus 1c` (Weights: 400, 500). Use relaxed leading (`leading-relaxed`).

**Minimalist UI Rules:**
* **Borders & Shadows:** Avoid hard borders. Use very soft, highly dispersed shadows (`shadow-sm` or `shadow-md` with reduced opacity) only when absolutely necessary for depth.
* **Radii:** Use `rounded-full` for all interactable buttons. Use `rounded-3xl` (24px) for any image containers or cards to maintain the brand's soft, comforting feel.
* **Whitespace:** Use extreme, generous padding for sections (e.g., `py-24` or `py-32` on desktop) to allow the content to breathe.

## 2. Strict Asset & Photography Rules
* **No Text Overlays:** Never generate or include the word "Mealkit" (or any text) baked into the images.
* **Authenticity Constraint 1:** Images of food must exclusively feature the dish itself. Absolutely no extraneous sauces or dips in the frame unless they are a core, traditional component of that specific dish.
* **Authenticity Constraint 2:** Do not include eggs in any dish imagery unless an egg is explicitly mentioned as a core ingredient of that specific recipe.

---

## 3. Section-by-Section Architecture

### Section 1: Minimalist Global Navigation
* **Container:** `fixed w-full z-50 bg-[#FFFBEB]/90 backdrop-blur-md transition-all duration-300`
* **Layout:** `flex justify-between items-center max-w-7xl mx-auto px-6 py-4`
* **Left:** Secondary Logo (Pot icon + "TIMPLA" text). `h-8 w-auto`.
* **Center:** Desktop only. `hidden md:flex gap-8 text-[#343132] font-medium text-sm tracking-wide`. Links: "Signatures", "How it Works", "Our Story".
* **Right:** `bg-[#D52A28] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#B50418] transition-colors`. Text: "Get the App".

### Section 2: The Editorial Hero (Cream Background)
* **Container:** `relative w-full min-h-[90vh] bg-[#FFFBEB] flex items-center pt-20 overflow-hidden`
* **Layout:** `grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 items-center`
* **Left Column (Typography Focus):** `flex flex-col gap-6 max-w-xl z-10`.
    * *H1:* `text-5xl lg:text-7xl font-extrabold text-[#343132] font-display leading-[1.1] tracking-tighter`. Text: "The Authentic Filipino Meal Kit."
    * *Subtitle:* `text-lg text-[#343132]/80 font-sans leading-relaxed`. Text: "Pre-portioned ingredients. Chef-crafted recipes. Download the Timpla app to cook your favorite 'Pinas classics in under 30 minutes."
    * *CTA Group:* `flex flex-row gap-4 mt-4`. Two App Store/Google Play badge images (`h-12 w-auto object-contain`).
* **Right Column (Visual Focus):** `relative h-full w-full flex justify-center lg:justify-end items-center`.
    * *Composition:* A sleek, floating mobile phone mockup showing the app UI, slightly overlapped by a massive, high-resolution, drop-shadowed cut-out (`drop-shadow-2xl`) of a cooked dish (e.g., Beef Mechado) and raw ingredients. No containing boxes—the elements must float organically over the Cream background.

### Section 3: The Minimalist Value Grid ("Mura, Madali, Masarap")
* **Container:** `w-full bg-[#FFFBEB] py-24 lg:py-32`
* **Header:** `text-center mb-16`. H2: `text-3xl lg:text-5xl font-bold text-[#343132] font-display`.
* **Layout:** `grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-6`
* **Card UI (Stripped Back):** `flex flex-col items-center text-center gap-6`. (Do *not* use white background cards. Let the items sit directly on the Cream background for a cleaner look).
    * *Visual:* A large, fully rounded `rounded-3xl` `aspect-square` high-quality image focusing tightly on the concept (e.g., fresh ingredients, easy prep, final dish).
    * *Text:* H3 `text-xl font-bold text-[#343132]` followed by `<p>` `text-[#343132]/70 text-sm leading-relaxed`.

### Section 4: Timpla Signatures (Dark Mode Contrast)
* **Container:** `w-full bg-[#B50418] py-24 lg:py-32 rounded-t-[3rem]` (Soft curve to transition into the dark section).
* **Header:** `text-center mb-16`. H2: `text-3xl lg:text-5xl font-bold text-white font-display`.
* **Layout:** `flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-6 max-w-7xl mx-auto hide-scrollbar`.
* **Card UI:** `min-w-[300px] md:min-w-[400px] bg-[#FFFBEB] rounded-3xl p-6 flex flex-col gap-4 snap-center shrink-0`.
    * *Image:* `w-full aspect-[4/3] rounded-2xl object-cover mb-2`.
    * *Text:* H3 `text-2xl font-bold text-[#343132]`. Paragraph `text-[#343132]/80 text-sm`.
    * *Button:* `mt-auto w-full text-center bg-[#D52A28] text-white py-3 rounded-full font-bold`.

### Section 5: The Process & Trust (Tech/App Aesthetic)
* **Container:** `w-full bg-[#FFFBEB] py-24 lg:py-32 border-b border-[#343132]/10`
* **Layout:** `grid grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-6 gap-y-12 gap-x-8 divide-x-0 lg:divide-x lg:divide-[#343132]/10`
* **Node UI:** `flex flex-col items-center text-center px-4`.
    * *Top:* `text-4xl font-extrabold text-[#D52A28] font-display mb-4`. (e.g., "100%", "30m").
    * *Bottom:* `text-[#343132] font-medium text-sm tracking-wide uppercase`. (e.g., "Authentic", "To Cook").

### Section 6: The Bold Footer
* **Container:** `w-full bg-[#B50418] pt-24 pb-12 px-6 flex flex-col items-center text-center`
* **CTA Block:** `max-w-2xl flex flex-col gap-8 mb-24`.
    * *H2:* `text-3xl md:text-5xl font-bold text-white leading-tight font-display`. Text: "Bring the taste of home to your kitchen."
    * *Badges:* `flex justify-center gap-4`. (App Store / Play Store).
* **Brand Graphic:** A massive SVG or typography block of the word "TIMPLA" spanning the entire max-width of the container `text-[15vw] font-black text-white/10 leading-none select-none`.
* **Sub-footer:** `w-full max-w-7xl flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-white/20 text-white/60 text-sm`.