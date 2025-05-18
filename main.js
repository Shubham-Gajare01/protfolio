document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting me!');
  });
  

  const form = document.getElementById('contactForm');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !subject || !message) {
    feedback.style.color = 'red';
    feedback.textContent = 'Please fill in all fields.';
    return;
  }

  feedback.style.color = 'black';
  feedback.textContent = 'Sending...';

  emailjs.send("service_klenidn", "template_tldv8fj", {
    name: name,
    email: email,
    subject: subject,
    message: message
  })
  .then(() => {
    feedback.style.color = 'green';
    feedback.textContent = 'Message sent successfully!';
    form.reset();
  }, (error) => {
    feedback.style.color = 'red';
    feedback.textContent = 'Failed to send message. Try again later.';
    console.error('EmailJS error:', error);
  });
});
