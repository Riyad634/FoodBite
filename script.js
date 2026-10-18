const header=document.getElementById('header');
const navToggle=document.getElementById('navToggle');
const navLinks=document.getElementById('navLinks');

window.addEventListener('scroll',()=>{
  header.classList.toggle('scrolled',window.scrollY>40);
});

navToggle.addEventListener('click',()=>navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link=>{
  link.addEventListener('click',()=>navLinks.classList.remove('open'));
});

// Menu filter
const chips=document.querySelectorAll('.chip');
const dishes=document.querySelectorAll('.dish');
chips.forEach(chip=>{
  chip.addEventListener('click',()=>{
    chips.forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    const filter=chip.dataset.filter;
    dishes.forEach(dish=>{
      const show=filter==='all'||dish.dataset.category===filter;
      dish.style.display=show?'block':'none';
    });
  });
});

// Reveal on scroll
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Booking form
const form=document.getElementById('bookingForm');
const toast=document.getElementById('toast');
form.addEventListener('submit',e=>{
  e.preventDefault();
  toast.classList.add('show');
  form.reset();
  setTimeout(()=>toast.classList.remove('show'),3500);
});