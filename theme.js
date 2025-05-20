// Theme switcher functionality
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle")
  const htmlElement = document.documentElement

  // Check for saved theme preference or use device preference
  const savedTheme = localStorage.getItem("theme")
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  // Set initial theme
  if (savedTheme) {
    htmlElement.setAttribute("data-theme", savedTheme)
  } else {
    // Default to dark theme for this design
    htmlElement.setAttribute("data-theme", "dark")
  }

  // Toggle theme when button is clicked
  themeToggle.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme")
    const newTheme = currentTheme === "dark" ? "light" : "dark"

    // Apply the new theme
    htmlElement.setAttribute("data-theme", newTheme)

    // Save theme preference
    localStorage.setItem("theme", newTheme)
  })

  // Active link highlighting
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav-menu a")

  const highlightActiveLink = () => {
    let current = ""
    const scrollPosition = window.scrollY + 100 // Offset to trigger slightly earlier

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute("id")
      }
    })

    // Special case for home section which might not have an ID
    if (scrollPosition < 100 && sections[0].id === "home") {
      current = "home"
    }

    navLinks.forEach((link) => {
      link.classList.remove("active")
      const href = link.getAttribute("href").substring(1)
      if (href === current) {
        link.classList.add("active")
      }
    })
  }

  // Initial check
  highlightActiveLink()

  // Check on scroll
  window.addEventListener("scroll", highlightActiveLink)
})
