/* ========== CONFIG ========== */
/* Substitua abaixo pelos links reais antes de publicar */
const HOTMART_LINK_1 = "https://pay.hotmart.com/F102732215R"; // Sessão
const HOTMART_LINK_2 = "https://pay.hotmart.com/E102732313C"; // Suporte
const HOTMART_LINK_3 = "https://pay.hotmart.com/W102732349S"; // Mentoria
const WHATSAPP_LINK = "https://wa.me/353832099994"; // editar (formato internacional)

/* Substitui os hrefs placeholders se encontrados */
document.querySelectorAll('a[href="https://pay.hotmart.com/F102732215R"]').forEach(a => a.href = HOTMART_LINK_1);
document.querySelectorAll('a[href="https://pay.hotmart.com/E102732313C"]').forEach(a => a.href = HOTMART_LINK_2);
document.querySelectorAll('a[href="https://pay.hotmart.com/W102732349S"]').forEach(a => a.href = HOTMART_LINK_3);

/* Smooth reveal on scroll */
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{threshold:0.18});

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

// Animação suave quando a seção aparece na tela
window.addEventListener("scroll", function() {
  const aboutSection = document.querySelector(".about-section");
  const position = aboutSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if (position < screenPosition) {
    aboutSection.classList.add("active");
  }
});


/* Lightbox */
function openLightbox(src){
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  img.src = src;
  lb.style.display = 'flex';
  setTimeout(()=> lb.style.opacity = '1', 20);
}
function closeLightbox(){
  const lb = document.getElementById('lightbox');
  lb.style.opacity = '0';
  setTimeout(()=> lb.style.display = 'none', 300);
}

/* WhatsApp actions */
function openWhatsApp(e){
  if(e) e.preventDefault();
  window.open(WHATSAPP_LINK, '_blank');
}
function openWhatsAppWithText(msg){
  const base = WHATSAPP_LINK.split('?')[0] || WHATSAPP_LINK;
  const url = base + "?text=" + encodeURIComponent(msg);
  window.open(url, '_blank');
}

/* Checkout tracking */
function handleCheckout(name){
  // aqui você pode adicionar tracking personalizado (ga, fb, pixel)
  console.log("Checkout:", name);
  // o botão já redireciona para o link configurado
}

/* Smooth anchor */
document.querySelectorAll('a[href="#servicos"]').forEach(a=>{
  a.addEventListener('click', function(e){ e.preventDefault(); document.getElementById('servicos').scrollIntoView({behavior:'smooth'}); });
});

/* Small UX: close lightbox with ESC */
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape') closeLightbox();
});