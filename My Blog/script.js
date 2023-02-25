// Función para cambiar el color de fondo del botón al hacer clic
const btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
  this.style.backgroundColor = '#005c90';
});

// Función para mostrar y ocultar el contenido del acordeón
const accordionBtns = document.querySelectorAll('.accordion-btn');
accordionBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    const accordionContent = this.nextElementSibling;
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
      accordionContent.style.maxHeight = '0';
    }
  });
});

// Función para mostrar el formulario de contacto al hacer clic en el botón correspondiente
const contactBtn = document.querySelector('#contact-btn');
const contactForm = document.querySelector('#contact-form');
contactBtn.addEventListener('click', function() {
  contactForm.classList.toggle('active');
});

// Función para enviar el formulario de contacto al hacer clic en el botón correspondiente
const submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener('click', function(event) {
  event.preventDefault();
  // Lógica para enviar el formulario de contacto
});

// Función para animar los elementos al hacer scroll
const teamMembers = document.querySelectorAll('.team-member');
window.addEventListener('scroll', function() {
  const triggerBottom = window.innerHeight * 0.8;
  teamMembers.forEach(function(member) {
    const memberTop = member.getBoundingClientRect().top;
    if (memberTop < triggerBottom) {
      member.classList.add('animate');
    }
  });
});

// Función para mostrar la hora actual en la página
function showCurrentTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const time = `${hours}:${minutes}:${seconds}`;
  const timeDisplay = document.getElementById("current-time");
  timeDisplay.textContent = time;
}

// Ejecutar la función showCurrentTime cada segundo para actualizar el tiempo
setInterval(showCurrentTime, 1000);

  


