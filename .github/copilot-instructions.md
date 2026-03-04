This repository is an Expo (React Native) introductory app used for classroom examples.

Key facts
- Project type: Expo React Native app (SDK ~53). See `package.json` scripts: `start`, `android`, `ios`, `web`.
- Entry point: `App.js` and `index.js` at repository root.
- UI pattern: component-per-folder. Most UI modules live under `src/` and follow the pattern `index.js` + `styles.js` (e.g., `src/atividades/atv05/input/index.js`).
- Navigation: uses `@react-navigation/*` packages. Look in `src/revisao/navegacao/index.js` for router patterns.

When making changes
- Run the dev server with `npm install` then `npm start` (or `npm run android` / `npm run ios`). These map to `expo start` commands defined in `package.json`.
- Test interactively on device/emulator using Expo QR or the platform-specific script.
- No automated test suite is included — prefer manual verification when editing UI or navigation.

Conventions and patterns to follow
- Folder/component layout: each screen or component uses its own folder with `index.js` exporting the component and `styles.js` exporting a StyleSheet. Follow existing naming and structure.
- Small, focused components: most nested folders are tiny components (e.g., `botao`, `input`, `card`, `button`, `display`) — keep them single-responsibility.
- Styling: local `styles.js` files contain StyleSheet objects. Avoid global style mutations; add helpers only when repeated styles appear.
- Data and mocks: check `src/revisao/rev02/produtos.js` for example static data usage patterns.

Editing examples (how an agent should make small changes)
- To change a button implementation used in activities: edit the component at `src/atividades/atv06/botao/index.js` and its styles in `src/atividades/atv06/botao/styles.js`.
- To add a new example screen: add `src/exemplos/exNN/index.js` and `styles.js`, then register it with the navigation in `src/revisao/navegacao/index.js` if it should be routable.

Integration points & dependencies
- Expo CLI and Metro dev server: `expo` is the runtime for development and bundling.
- Navigation: `@react-navigation/native` and `@react-navigation/native-stack` are used — follow patterns in existing navigation files.
- Native modules: limited; mostly JS and Expo-managed APIs.

Agent behavior guidance
- Be conservative: change one file at a time and run `npm start` to smoke-test behavior.
- Preserve existing exports: components are imported by folder path relying on `index.js` default exports.
- Keep commits small and descriptive: `fix(component): ...` or `feat(screen): ...`.

Where to look first
- App bootstrap: `App.js`, `index.js`.
- Scripts & deps: `package.json`.
- Example screens and components: `src/atividades/` and `src/exemplos/`.
- Navigation examples: `src/revisao/navegacao/index.js` and `src/revisao/rev02`.

If you modify this file
- Merge any existing human-written guidance first; avoid overwriting classroom notes.
- Ask the repo owner for runtime specifics (preferred emulator, published app details) if you need them.

If anything here is unclear or you want examples for a particular file, ask and I'll expand with exact code snippets.
