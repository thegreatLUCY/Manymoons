# Many Moons — Android (Capacitor) build & release

The app is a web app (the canonical source lives at the repo root: `index.html`,
`sw.js`, `manifest.json`, `icons/`, `textures/`). Capacitor wraps it in a native
Android shell. `www/` is the Capacitor web directory and is **generated** — never
edit it by hand; edit the root files and run the copy step.

## One-time setup (on a machine with Android Studio + JDK 17+)

```bash
npm install                 # installs Capacitor + plugins
npm run build:web           # copies root web files into www/
npx cap add android         # generates the native android/ project
npm run sync                # build:web + cap sync (copies web + native plugins)
npx cap open android        # opens the project in Android Studio
```

Requirements: Node 18+, JDK 17+, Android Studio with the Android SDK.
(JDK 8 will NOT build a modern Android project.)

## Everyday development loop

- **Web/UI/content change** (99% of work): edit the root `index.html` etc., then:
  ```bash
  npm run sync               # or: npm run build:web && npx cap copy
  ```
  Or live-reload on a device/emulator:
  ```bash
  npm run run:android        # add --livereload in cap for hot reload
  ```
- **Bump the service-worker cache** (`CACHE = 'manymoons-vN'` in `sw.js`) whenever
  assets change, so the PWA/web path doesn't serve stale files.

## Before the FIRST Play upload

- **`appId` is permanent.** It's `com.manymoons.app` in `capacitor.config.json` —
  change it to your final reverse-domain id now; it cannot change after release.
- Set `versionName` / `versionCode` in `android/app/build.gradle`.
- App icon & splash: drop source art in and run `npx @capacitor/assets generate`
  (install `@capacitor/assets`), or set them in Android Studio.
- Notification small icon: the config expects a drawable `ic_stat_moon`
  (white-on-transparent) in `android/app/src/main/res/drawable*`.
- Consider bundling the two web fonts locally (currently loaded from Google Fonts)
  so first paint and offline are font-correct.

## Native features already wired (activate once `cap add android` is run)

- **Local notifications** — the nightly reminder schedules the next 30 nights via
  `@capacitor/local-notifications` (each with that night's moon). The Off/On toggle
  is in the Book settings.
- **Native share** — share cards write a PNG to cache and open the system share
  sheet via `@capacitor/share` + `@capacitor/filesystem` (falls back to Web Share /
  download on the web).
- **Status bar** — tracks the theme (dark / dusk-parchment) via `@capacitor/status-bar`.
- **Android back button** — closes Lookup → About → Book, then exits, via `@capacitor/app`.
- **Splash** — hidden on load.

## Still native-only / TODO

- **Home-screen widget** — needs a native Android App Widget (Kotlin) reading the
  current phase; not yet built.

## Build a release AAB

```bash
npm run sync
# In Android Studio: Build > Generate Signed Bundle/APK > Android App Bundle
# (create/registser an upload keystore), then upload the .aab to Play Console.
```
