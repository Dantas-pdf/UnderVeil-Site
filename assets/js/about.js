document.addEventListener("DOMContentLoaded", () => {
    // Handle FAQ toggle
    const faqQuestions = document.querySelectorAll(".faq-question")
  
    faqQuestions.forEach((question) => {
      question.addEventListener("click", function () {
        // Toggle active class on the parent faq-item
        const faqItem = this.parentElement
        faqItem.classList.toggle("active")
  
        // Update the icon
        const icon = this.querySelector(".faq-toggle i")
        if (faqItem.classList.contains("active")) {
          icon.classList.remove("fa-plus")
          icon.classList.add("fa-minus")
        } else {
          icon.classList.remove("fa-minus")
          icon.classList.add("fa-plus")
        }
      })
    })
  })
  