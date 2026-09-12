from pathlib import Path
import json

app = Path('src/App.tsx')
t = app.read_text(encoding='utf-8')
t = t.replace('<div className={`toast ${toast?', '<div aria-hidden={!toast || drawer} className={`toast ${toast?')
t = t.replace('<button onClick={()=>{setDrawer(true);setToast(\'\');}}>View list', '<button tabIndex={toast && !drawer ? 0 : -1} onClick={()=>{setDrawer(true);setToast(\'\');}}>View list')
t = t.replace('<small className="bag-status">{status.label}', '<p className="copy-status" role="status">{toast}</p><small className="bag-status">{status.label}')
app.write_text(t,encoding='utf-8')

manifest = Path(r'C:\Users\Haier\AppData\Local\Temp\browser-use\assets\414049c0-552a-4f55-b458-e50085827ba2\manifest.json')
data = json.loads(manifest.read_text())
sources = [{'file':f'public/media/map-{i}.webp','source':a['url'].split('=')[0]+'=w1600'} for i,a in enumerate(data['assets']+data['failures'])]
Path('media-sources.json').write_text(json.dumps(sources,indent=2),encoding='utf-8')
Path('README.md').write_text('''# Việt Quán website

React + TypeScript + Vite. Redesigned around the restaurant’s supplied menu, original lettering and authentic photography.

## Run

```sh
npm install
npm run dev
npm run lint
node scripts/check-hours.mjs
npm run build
```

Use Node 22.18+ for the TypeScript hours test. The deployable static site is generated in `dist`. No Gemini key is required. On this Windows environment, Vite must run outside the restricted sandbox to load its configuration.

## Features

- Responsive jade/parchment design, mobile navigation and sticky call/book/list actions.
- Search with Vietnamese accent normalization, category and vegan-option filters.
- Takeaway list with live totals, quantity limits, safe local storage and cross-tab synchronization.
- Honest call-to-order flow and Google’s restaurant booking link; no simulated confirmations.
- Native accessible dialogs with keyboard dismissal and original menu image navigation.
- User-controlled video, lazy-loaded WebP photos and Perth regular-hours status.
- Verified business address/phone and corrected structured location data.

## Maintain

`src/data/siteData.ts`: menu prices, categories, images, phone and links.
`src/utils/openingStatus.ts`: regular trading hours. This calculates scheduled opening, not live kitchen status. Holiday exceptions need owner updates.
`public/media`: web assets. Original supplied files remain in `pictures`.
`CONTENT-NOTES.md` and `media-sources.json`: source provenance and remaining client inputs.

## Before public launch

The requested hours-sign photo was not accessible; replace the short text summary when provided. Confirm prices and holiday schedule with the owner. Obtain the client’s ordering/booking provider details for any direct integration or live kitchen updates. Confirm usage rights for customer-uploaded Maps photography. Configure production domain and absolute social-preview URLs when hosting is selected. No deployment has been performed.
''',encoding='utf-8')
