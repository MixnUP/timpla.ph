# Timpla Landing Page - AI Agent Blueprint (Minimalist & R.E.D. Optimized)

**Agent Instructions:** This document serves as the exact structural and stylistic blueprint for the Timpla app acquisition landing page. You must strictly adhere to the defined Tailwind classes, R.E.D. psychological frameworks, typography scales, and asset rules to maintain the minimalist, premium brand identity.

---

## 1. Global UX Strategy: The R.E.D. Framework
When generating layout, copy, and interactions, adhere to these principles:
* **Relevance:** Connect culturally (Authentic Filipino) and functionally (Solving weeknight dinner stress). 
* **Ease:** Reduce cognitive friction. Use massive, legible typography. Make app download buttons omnipresent. Use high-contrast emotional imagery to be easily noticed.
* **Distinctiveness:** Maintain absolute consistency with brand assets. Only use the defined color palette and typography. Do not introduce generic illustrations.

## 2. Global Design Tokens & Tailwind Config
**Colors (Extend Tailwind Theme):**
* `primary`: `#D52A28` (Primary Red)
* `primary-dark`: `#B50418` (Deep Red)
* `bg-light`: `#FFFFFF` (White)
* `text-dark`: `#343132` (Dark Neutral)

**Typography:**
* **Headings (`font-display`):** `Nunito` (Weights: 700, 800). `tracking-tight`, `leading-tight`.
* **Body (`font-sans`):** `Rounded Mplus 1c` (Weights: 400, 500). `leading-relaxed`.

**Minimalist UI Rules:**
* Avoid hard borders. Use very soft `shadow-sm` or `shadow-md` for depth.
* Use `rounded-full` for all buttons. Use `rounded-3xl` (24px) for cards/images.
* Use extreme, generous whitespace (`py-24` or `py-32` on desktop).

## 3. Strict Asset Rules
* **No Text Overlays:** Never generate text inside images.
* **Authenticity Constraint 1:** Dish images must exclusively feature the dish. No extraneous sauces/dips unless traditional to the recipe.
* **Authenticity Constraint 2:** No eggs in imagery unless explicit to the recipe.

---

## 4. Section-by-Section Architecture

### Section 1: Minimalist Global Navigation (EASE - Access)
* *R.E.D Goal:* Zero friction to download. Always present.
* **Container:** `fixed w-full z-50 bg-white/90 backdrop-blur-md transition-all duration-300`
* **Layout:** `flex justify-between items-center max-w-7xl mx-auto px-6 py-4`
* **Left:** Secondary Logo (Pot icon + "TIMPLA"). `h-8 w-auto`.
* **Center:** `hidden md:flex gap-8 text-[#343132] font-medium text-sm tracking-wide`. Links: "How it Works", "Why Timpla", "Signatures".
* **Right:** `bg-[#D52A28] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#B50418] transition-colors`. Text: "Get the App".

### Section 2: The Editorial Hero (RELEVANCE - Cultural & EASE - Notice)
* *R.E.D Goal:* Create an immediate emotional reaction using cultural ties and high-contrast, mouth-watering visuals.
* **Container:** `relative w-full min-h-[90vh] bg-white flex items-center pt-20 overflow-hidden`
* **Layout:** `grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 items-center`
* **Left Column (Typography):** `flex flex-col gap-6 max-w-xl z-10`.
    * *H1:* `text-5xl lg:text-7xl font-extrabold text-[#343132] font-display leading-[1.1] tracking-tighter`. Text: "The Authentic Filipino Meal Kit."
    * *Subtitle:* `text-lg text-[#343132]/80 font-sans leading-relaxed`. Text: "Discover your next favorite meal with Timpla — personalized kits and effortless deliveries in one app."
    * *CTA Group:* `flex flex-row gap-4 mt-4`. Two App Store/Google Play badge images.
* **Right Column (Visual Focus):** `relative h-full w-full flex justify-center lg:justify-end items-center`. A floating mobile phone mockup showing the app UI, slightly overlapped by a massive, high-resolution, drop-shadowed cut-out (`drop-shadow-2xl`) of a cooked dish and raw ingredients.

### Section 3: The Minimalist Value Grid (RELEVANCE - Functional)
* *R.E.D Goal:* Address the Category Use Occasion (CUO)—the need for stress-free, high-quality dinners.
* **Container:** `w-full bg-white py-24 lg:py-32`
* **Header:** `text-center mb-16`. 
    * *Overline:* `text-[#D52A28] font-bold tracking-widest uppercase text-sm mb-4`. Text: "MURA, MADALI, MASARAP"
    * *H2:* `text-3xl lg:text-5xl font-bold text-[#343132] font-display max-w-2xl mx-auto`. Text: "Restaurant-quality meals to your kitchen with zero stress."
* **Layout:** `grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-6`
* **Card UI:** `flex flex-col items-center text-center gap-6`.
    * *Visual:* Large, fully rounded `rounded-3xl` `aspect-square` high-quality image.
    * *Col 1 (Mura):* H3: "Farm-Fresh Guarantee". P: "Premium ingredients sourced directly from trusted farms, delivered fresh to maintain the highest quality."
    * *Col 2 (Madali):* H3: "Time-Saving Convenience". P: "Skip the meal planning and grocery shopping. We handle everything so you can enjoy cooking without the stress."
    * *Col 3 (Masarap):* H3: "Tested & Perfected". P: "Every recipe is carefully tested and perfected to guarantee delicious results every time you cook."

### Section 4: Timpla Signatures (RELEVANCE - Social & Cultural)
* *R.E.D Goal:* Showcase the "party-talk worthy" dishes that build a culturally relevant herd.
* **Container:** `w-full bg-[#B50418] py-24 lg:py-32 rounded-t-[3rem]`
* **Header:** `text-center mb-16`. 
    * *H2:* `text-3xl lg:text-5xl font-bold text-white font-display`. Text: "Explore Meal Kits in the Timpla App."
    * *Subtitle:* `text-white/80 mt-4`. Text: "Discover and order your favorite dishes with ease, right from your phone."
* **Layout:** `flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-6 max-w-7xl mx-auto hide-scrollbar`.
* **Card UI:** `min-w-[300px] md:min-w-[400px] bg-white rounded-3xl p-6 flex flex-col gap-4 snap-center shrink-0`.
    * *Image:* `w-full aspect-[4/3] rounded-2xl object-cover mb-2`.
    * *Text:* H3 `text-2xl font-bold text-[#343132]`.
    * *Button:* `mt-auto w-full text-center bg-[#D52A28] text-white py-3 rounded-full font-bold`.

### Section 5: The Process (EASE - Access)
* *R.E.D Goal:* Remove psychological friction by proving how simple the process is.
* **Container:** `w-full bg-white py-24 lg:py-32 border-b border-[#343132]/10`
* **Header:** `text-center mb-16`. H2: `text-3xl lg:text-5xl font-bold text-[#343132] font-display`. Text: "From craving to cooking in three simple steps."
* **Layout:** `grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto px-6 gap-y-12 gap-x-8 lg:divide-x lg:divide-[#343132]/10`
* **Node UI:** `flex flex-col items-center text-center px-4`.
    * *Top:* `text-5xl font-extrabold text-[#D52A28] font-display mb-6`. (Numbers: 1, 2, 3).
    * *Middle:* `text-xl font-bold text-[#343132] mb-3`. (1: Choose, 2: Wait & Track, 3: Cook & Serve).
    * *Bottom:* `text-[#343132]/80 font-medium text-sm leading-relaxed`. 
        * *Step 1:* "Browse our selection of dishes and discover your new favorite recipe!"
        * *Step 2:* "Fresh and perfectly proportioned kits delivered to your doorstep. Track orders in real-time!"
        * *Step 3:* "Follow our simple step-by-step guide. Your home-cooked meal is ready to share and savor."

### Section 6: The Bold Footer (DISTINCTIVENESS)
* *R.E.D Goal:* Hammer home the unique, ownable brand asset (The Timpla name) consistently.
* **Container:** `w-full bg-[#B50418] pt-24 pb-12 px-6 flex flex-col items-center text-center`
* **CTA Block:** `max-w-3xl flex flex-col gap-8 mb-24`.
    * *H2:* `text-3xl md:text-5xl font-bold text-white leading-tight font-display`. Text: "Get Fresh Ingredients & Perfect Recipes Delivered Today!"
    * *Subtitle:* `text-lg text-white/80`. Text: "Skip the planning and shopping - your delicious experience is just a tap away."
    * *Badges:* `flex justify-center gap-4`. (App Store / Play Store).
* **Brand Graphic:** Massive SVG or typography block of the word "TIMPLA" spanning the entire max-width `text-[15vw] font-black text-white/10 leading-none select-none`.
* **Sub-footer:** `w-full max-w-7xl flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-white/20 text-white/60 text-sm`.