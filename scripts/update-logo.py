from pathlib import Path
import shutil,base64
root=Path.cwd()
source=Path(r'C:/Users/Haier/Downloads/Gemini_Generated_Image_fgyydsfgyydsfgyy.png')
original=root/'public/media/viet-quan-logo-original.png'
shutil.copy2(source,original)
encoded=base64.b64encode(original.read_bytes()).decode()
svg=f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="114 545 460 460"><title>Việt Quán Noodle House</title><defs><clipPath id="badge"><circle cx="344" cy="775" r="229"/></clipPath></defs><image x="0" y="0" width="688" height="1532" href="data:image/png;base64,{encoded}" clip-path="url(#badge)"/></svg>'''
(root/'public/media/viet-quan-logo.svg').write_text(svg,encoding='utf-8')
p=root/'src/App.tsx'
t=p.read_text(encoding='utf-8').replace("media('logo.webp')","media('viet-quan-logo.svg')")
t=t.replace('<span>VIETNAMESE NOODLE HOUSE</span></a><nav','<span className="brand-wordmark">VIỆT QUÁN<small>NOODLE HOUSE · BICTON</small></span></a><nav')
p.write_text(t,encoding='utf-8')
p=root/'index.html'
p.write_text(p.read_text(encoding='utf-8').replace('/media/logo.webp','/media/viet-quan-logo.svg'),encoding='utf-8')
p=root/'src/index.css'
with p.open('a',encoding='utf-8') as f:f.write('''
/* Official logo supplied by the client. SVG only frames the original pixels. */
.header .brand{width:auto;display:flex;align-items:center;gap:13px;text-align:left}
.header .brand img{width:72px;height:72px;object-fit:contain;margin:0;mix-blend-mode:normal;flex-shrink:0}
.header .brand-wordmark{font-family:Georgia,serif;font-size:20px;letter-spacing:1.4px;line-height:1.2;margin:0}
.header .brand-wordmark small{font-family:'Plus Jakarta Sans',sans-serif;display:block;font-size:7px;letter-spacing:1.5px;margin-top:8px}
.footer-main img{width:112px;height:112px;object-fit:contain;mix-blend-mode:normal;filter:none}
@media(max-width:760px){.header .brand{gap:10px}.header .brand img{width:58px;height:58px}.header .brand-wordmark{font-size:16px;letter-spacing:.8px}.header .brand-wordmark small{font-size:5.5px;letter-spacing:1px;margin-top:6px}.header .nav-actions{gap:7px}}
@media(max-width:360px){.header .brand-wordmark{font-size:14px}.header .brand img{width:52px;height:52px}.header{padding:0 15px}}
''')
p=root/'CONTENT-NOTES.md'
with p.open('a',encoding='utf-8') as f:f.write('\n\n## Client logo replacement\nThe user supplied Gemini_Generated_Image_fgyydsfgyydsfgyy.png as the official restaurant logo. Its unchanged original is saved at public/media/viet-quan-logo-original.png. The SVG version embeds the original pixels and uses a circular viewport/clip to exclude the surrounding checkerboard and excess canvas. The header, footer and favicon now use this logo with its original green/yellow colours.\n')
print('Saved original; updated header, footer and favicon.')
