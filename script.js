// Contact form functionality
document.addEventListener("DOMContentLoaded", () => {
  // Initialize EmailJS (replace with your actual user ID)
  emailjs.init("3yu1qq7AlSdAp3MRU")

  const contactForm = document.getElementById("contactForm")
  const feedbackElement = document.getElementById("feedback")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const nameInput = document.getElementById("name")
      const emailInput = document.getElementById("email")
      const subjectInput = document.getElementById("subject")
      const messageInput = document.getElementById("message")

      // Show loading state
      feedbackElement.textContent = "Sending message..."
      feedbackElement.style.color = "var(--color-text-secondary)"

      // Prepare template parameters
      const templateParams = {
        from_name: nameInput.value,
        email_id: emailInput.value,
        subject: subjectInput.value,
        message: messageInput.value,
      }

      // Send email using EmailJS
      emailjs.send("service_klenidn", "template_tldv8fj", templateParams).then(
        () => {
          // Success message
          feedbackElement.textContent = "Message sent successfully!"
          feedbackElement.style.color = "var(--color-accent-3)"

          // Reset form
          contactForm.reset()

          // Clear success message after 5 seconds
          setTimeout(() => {
            feedbackElement.textContent = ""
          }, 5000)
        },
        (error) => {
          // Error message
          console.error("Error:", error)
          feedbackElement.textContent = "Failed to send message. Please try again."
          feedbackElement.style.color = "var(--color-accent-1)"
        },
      )
    })
  }

  // Animate skill bars on scroll
  const skillLevels = document.querySelectorAll(".skill-level")

  const animateSkills = () => {
    skillLevels.forEach((skill) => {
      const skillPosition = skill.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (skillPosition < screenPosition) {
        skill.style.width = skill.style.width
      }
    })
  }

  // Initial check
  animateSkills()

  // Check on scroll
  window.addEventListener("scroll", animateSkills)
})
