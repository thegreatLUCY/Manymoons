# Many Moons — Google Play listing (copy-paste ready)

Everything you need to fill in Play Console. Assets are in `store/`.

## App details
- **App name:** `Many Moons`
- **Package name:** `com.manymoons.app` (already in the build)
- **Category:** Lifestyle
- **Type:** App · Free · contains no ads, no in-app purchases
- **Contact email:** thegreatlucydm@gmail.com
- **Privacy policy URL:** `https://thegreatlucy.github.io/Manymoons/privacy.html`
  *(enable GitHub → repo Settings → Pages → Deploy from branch → main → / root)*

## Short description (≤ 80 chars)
```
The real moon overhead tonight — its phase, its lore, and a collection to keep.
```

## Full description (≤ 4000 chars)
```
Many Moons is a quiet companion for the moon overhead.

Open it any night to see the moon exactly as it hangs in the sky right now — the real lunar surface, lit by tonight's true shadow, drawn from astronomy rather than guesswork. Beneath it, a short piece of folklore chosen for the night, and a plain word on what the moon is doing ("full in 4 nights").

Press the moon to keep it. A soft chime, and it's saved to your Book. Night after night a collection takes shape: build a streak, and catch the year's twelve named full moons — Wolf, Snow, Worm … Cold — each there for one night a year. A gentle nightly reminder, if you want it, makes sure you never miss one.

Tell it a birthday, or look up any past night, and see — and share — the moon that hung above it. Every card you share carries the moon, the date, and a line of its lore.

• Tonight's exact phase and illumination, from a real NASA image
• Plain-language phase and a countdown to the next full moon
• A line of hand-written lore for every night, drawn from many traditions
• A collection to complete: the year's full moons, the eight phases, and rare moons
• A nightly press streak, with an optional gentle reminder
• Look up — and share — the moon over any meaningful past date
• Dark and dusk themes
• No account. No location. No tracking. Works offline.

Same moon, different figure — wherever you're reading this from.
```

## Graphics (upload from `store/`)
- **App icon (512×512):** `store/play-store-icon-512.png`
- **Feature graphic (1024×500):** `store/feature-graphic.png`
- **Phone screenshots** (suggested order):
  1. `store/sc-tonight.png` — the moon, its phase, and the next-full-moon countdown
  2. `store/sc-welcome.png` — "Look up."
  3. `store/sc-collection.png` — the year's moons to collect
  4. `store/sc-library.png` — the eight phases
  5. `store/sc-lookup.png` — the moon over any past night
  6. `store/sc-share.png` — a shareable moon card

## Policy answers (Console → Policy → App content)
- **Data safety:** *Does your app collect or share any user data?* → **No.** Everything stays on the device; nothing is transmitted. (No data types to declare.)
- **Ads:** **No ads.**
- **Content rating questionnaire:** category Reference/Lifestyle; answer **No** to all violence/sexual/profanity/etc. → result: **Everyone / PEGI 3**.
- **Target audience:** 13+ (avoids the children's-app rules; the app has no ads or data collection).
- **App access:** *All functionality is available without any special access* (no login).
- **Government / financial / health:** No.

## Reminder
- New personal accounts must complete a **12-tester / 14-day closed test** before Production (account-level, satisfied by your other app's closed test). Until then, publish Many Moons to **Internal testing** — installable immediately.
- Every new AAB upload must **increment `versionCode`** in `android/app/build.gradle`.
