// Hero SERP rank-climb animation
const query = "Best Coir Mat Exports Company in Kerala";
const typedEl = document.getElementById('typed-query');
const badge = document.getElementById('rank-badge');
const history = document.getElementById('rank-history');
let i = 0;
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function typeChar(){
  if(i <= query.length){
    typedEl.textContent = query.slice(0, i);
    i++;
    setTimeout(typeChar, 55);
  } else {
    animateRank();
  }
}

function animateRank(){
  if(prefersReduced){ badge.textContent = '#1'; return; }
  const path = [47,32,21,14,9,5,3,1];
  let step = 0;
  const tick = () => {
    if(step < path.length){
      badge.textContent = '#' + path[step];
      step++;
      setTimeout(tick, 260);
    }
  };
  tick();
}

if(prefersReduced){
  typedEl.textContent = query;
  badge.textContent = '#1';
} else {
  setTimeout(typeChar, 500);
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if('IntersectionObserver' in window && !prefersReduced){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold:0.12});
  revealEls.forEach(el=>io.observe(el));
} else {
  revealEls.forEach(el=>el.classList.add('in'));
}

// Contact form -> opens WhatsApp with prefilled message to your number
document.getElementById('audit-form').addEventListener('submit', function(e){
  e.preventDefault();

  // 👉 change this to your WhatsApp number (country code + number, no + or spaces)
  const yourWhatsAppNumber = "918925619987";

  const name = document.getElementById('name').value.trim();
  const site = document.getElementById('site').value.trim();
  const msg  = document.getElementById('msg').value.trim();

  if(!name){
    alert("Please enter your name");
    return;
  }

  const text =
`New SEO audit request:
Name: ${name}
Website: ${site || "-"}
Wants to rank for: ${msg || "-"}`;

  const waLink = `https://wa.me/${yourWhatsAppNumber}?text=${encodeURIComponent(text)}`;
  window.open(waLink, '_blank');
});