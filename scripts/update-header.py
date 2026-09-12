from pathlib import Path
import re, hashlib
p=Path('src/App.tsx')
t=p.read_text(encoding='utf-8')
tail=t[t.index('      <div className="values-strip">'):]
hero='''      <section className="hero reference-hero" aria-label="Welcome to Việt Quán">
        <div className="hero-copy">
          <p className="eyebrow">A TASTE OF VIETNAM, RIGHT HERE IN BICTON</p>
          <h1>VIỆT QUÁN<em>Phở &amp; more.</em></h1>
          <p>Fragrant broth. Fresh herbs. Flavours to come home to.<br/>Your neighbourhood noodle house at Hawaiian’s Melville.</p>
          <div className="hero-actions">
            <a href="#menu" className="button">Explore menu <ArrowRight size={17}/></a>
            <div className="hero-price"><strong>$20</strong><small>AUD<br/>Combination phở</small></div>
          </div>
        </div>
        <div className="hero-visual">
          <svg className="hero-brush" viewBox="0 0 600 600" aria-hidden="true">
            <path fill="currentColor" d="M303 18C154 3 39 103 21 250C2 393 100 537 250 570C388 602 536 518 574 382C610 251 552 94 420 40C381 24 342 19 303 18ZM305 96C423 91 508 180 511 297C515 414 422 506 304 509C190 511 94 424 92 306C91 189 183 102 305 96Z"/>
            <path d="M44 333C41 457 153 566 290 574C393 587 479 552 535 495M63 399C101 508 224 564 332 555M28 215C61 91 178 14 314 30" fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round"/>
            <path d="M84 457L68 470M113 501L99 516M484 74L470 92M548 151L527 163M187 43L194 64M406 542L414 562" fill="none" stroke="#143c2b" strokeWidth="7"/>
          </svg>
          <img className="hero-photo" src={media('map-4.webp')} alt="Việt Quán combination beef phở with fresh herbs" fetchPriority="high"/>
          <span className="hero-chopsticks" aria-hidden="true"/>
          <span className="hero-dish-caption">PHỞ ĐẶC BIỆT · A HOUSE CLASSIC</span>
        </div>
        <div className="hero-bottom">
          <External href={business.maps} className="hero-rating"><span className="stars" aria-label="Rated 4.7 out of 5">★★★★★</span><span>4.7 · 106 Google reviews</span><ArrowUpRight size={13}/></External>
          <div className="live-status"><span className={`status-dot ${status.open?'open':''}`}/><span>{status.label} · Perth time</span></div>
          <a href="#menu" className="hero-scroll">DISCOVER THE MENU <span className="scroll-track"/></a>
        </div>
      </section>'''
t,n=re.subn(r'      <section className="hero">.*?</section>',lambda m:hero,t,count=1,flags=re.S)
assert n==1
assert t[t.index('      <div className="values-strip">'):]==tail,'Other sections must remain unchanged'
t=t.replace("import {openingStatus} from './utils/openingStatus';","import {openingStatus} from './utils/openingStatus';\nimport './header.css';")
p.write_text(t,encoding='utf-8')
print('Updated header and hero. All following sections verified unchanged.')
