from pathlib import Path
import re
p=Path('src/App.tsx')
t=p.read_text(encoding='utf-8')
t=t.replace('<header className="header">','<header className="header site-header">')
t,n=re.subn(r'<svg className="hero-brush".*?</svg>','<div className="hero-colour-circle" aria-hidden="true"/>',t,count=1,flags=re.S)
assert n==1
t=t.replace('<span className="hero-chopsticks" aria-hidden="true"/>','')
t=t.replace("src={media('map-4.webp')} alt=\"Việt Quán combination beef phở with fresh herbs\"", "src={media('map-8.webp')} alt=\"Beef phở at Việt Quán, from the restaurant photos you supplied\"")
t=t.replace('PHỞ ĐẶC BIỆT · A HOUSE CLASSIC','FRESH PHỞ · FROM OUR TABLE')
p.write_text(t,encoding='utf-8')
print('Fixed header contrast and replaced hero with supplied restaurant photo. No reference image is used.')
