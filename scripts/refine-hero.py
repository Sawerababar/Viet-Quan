from pathlib import Path
p=Path('src/index.css')
s=p.read_text(encoding='utf-8').replace('font-family:Georgia,serif',"font-family:'Playfair Display',Georgia,serif")
p.write_text(s,encoding='utf-8')
p=Path('src/header.css')
s=p.read_text(encoding='utf-8').replace("font-family:Georgia,'Times New Roman',serif","font-family:'Playfair Display',Georgia,serif").replace('font-weight:900;letter-spacing:-.055em','font-weight:700;letter-spacing:-.04em')
s+='''\n/* Shared typography across the header, content and interactive controls. */
:root{--font-heading:'Playfair Display',Georgia,serif;--font-body:'Plus Jakarta Sans',sans-serif}
body,input,select,textarea,button{font-family:var(--font-body)}
h1,h2,.header .brand-wordmark,.story-signoff,.review-score>span,.visit-image-caption strong,.empty-state h3{font-family:var(--font-heading)}
.reference-hero h1,.reference-hero h1 em{font-family:var(--font-heading);text-shadow:none}
.reference-hero h1 em{font-style:normal;font-weight:500;font-size:.7em;letter-spacing:-.035em}
.reference-hero .hero-photo{filter:none}
'''
p.write_text(s,encoding='utf-8')
