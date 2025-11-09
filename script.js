// S V Balaji – Devotional Interactions
// Smooth nav
const $ = (q, s=document) => s.querySelector(q);
const $$ = (q, s=document) => [...s.querySelectorAll(q)];

window.addEventListener('DOMContentLoaded', () => {
  // Mobile nav
  const toggle = $('.nav-toggle');
  const menu = $('#navMenu');
  toggle?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  $$('.nav-link').forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    const id = a.getAttribute('href');
    menu.classList.remove('open');
    const t = $(id);
    if (t) t.scrollIntoView({behavior:'smooth', block:'start'});
    $$('.nav-link').forEach(n => n.classList.remove('active'));
    a.classList.add('active');
  }));

  // Preloader fade
  const pre = $('#preloader');
  setTimeout(()=>{
    pre?.classList.add('hide');
    setTimeout(()=> pre?.remove(), 600);
  }, 1500);

  // Back-to-top
  const backTop = $('.back-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) backTop.classList.add('show'); else backTop.classList.remove('show');
  }, {passive:true});
  backTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

  // Lightbox
  const lightbox = $('#lightbox');
  $$('.g-item').forEach(item => item.addEventListener('click', () => {
    const src = item.dataset.full || item.querySelector('img')?.src;
    if (!src) return;
    lightbox.innerHTML = `<img src="${src}" alt="full" />`;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden','false');
  }));
  lightbox.addEventListener('click', (e)=>{
    if (e.target === lightbox) { lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden','true'); }
  });

  // Divine particles (diya embers + petals)
  initDivineParticles();

  // Simple counters on intersect (optional future)
});

function initDivineParticles(){
  const c = document.getElementById('divineParticles');
  if(!c) return; const ctx = c.getContext('2d');
  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  function size(){ c.width = innerWidth * DPR; c.height = innerHeight * DPR; c.style.width = innerWidth+'px'; c.style.height = innerHeight+'px'; ctx.scale(DPR,DPR); }
  size(); window.addEventListener('resize', size);

  const particles = [];
  const colors = ['rgba(255,193,7,','rgba(194,24,7,','rgba(240,98,146,'];
  for(let i=0;i<120;i++) particles.push(new Ember());

  function Ember(){
    this.reset = ()=>{
      this.x = Math.random()*innerWidth; this.y = innerHeight + Math.random()*200; this.r = Math.random()*2+0.6;
      this.vx = (Math.random()-.5)*0.2; this.vy = - (Math.random()*0.6 + 0.3);
      this.o = Math.random()*0.6 + 0.2; this.c = colors[(Math.random()*colors.length)|0];
    };
    this.reset();
    this.update = ()=>{ this.x += this.vx; this.y += this.vy; this.o -= 0.002; if(this.y < -50 || this.o<=0) this.reset(); };
    this.draw = ()=>{ ctx.beginPath(); ctx.fillStyle = this.c + this.o + ')'; ctx.arc(this.x,this.y,this.r,0,Math.PI*2); ctx.fill(); };
  }

  function loop(){
    ctx.clearRect(0,0,innerWidth,innerHeight);
    particles.forEach(p=>{ p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }
  loop();
}

// Forms (mock)
$('#contactForm')?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const toast = document.createElement('div');
  toast.textContent = '🙏 Inquiry received. We will reach out with muhurtham options!';
  Object.assign(toast.style,{position:'fixed',left:'50%',top:'30px',transform:'translateX(-50%)',background:'linear-gradient(90deg,#FFC107,#C21807)',color:'#2d1c00',padding:'12px 16px',borderRadius:'12px',fontWeight:'700',zIndex:'9999',boxShadow:'0 12px 30px rgba(0,0,0,.3)'});
  document.body.appendChild(toast); setTimeout(()=>toast.remove(), 2800);
});

$('#subscribeForm')?.addEventListener('submit',(e)=>{e.preventDefault(); alert('Subscribed to blessings ✨');});
