document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  const faqAnswers = document.querySelectorAll('.faq-answer');

  // Initially hide all answers except for the one with index 2
  faqAnswers.forEach((answer, index) => {
    if (index !== 2) {
      answer.classList.remove('show');
    }
  });

  faqQuestions.forEach((question, index) => {
    question.addEventListener('click', function() {
      const isActive = question.classList.contains('active');

      // Remove active class and hide all answers
      faqQuestions.forEach(q => q.classList.remove('active'));
      faqAnswers.forEach(a => a.classList.remove('show'));

      // If this question wasn't already active, activate it and show the answer
      if (!isActive) {
        question.classList.add('active');
        faqAnswers[index].classList.add('show');
      }
    });
  });
});


// JavaScript to toggle dark mode
const toggleSwitch = document.querySelector('#darkmode-switch');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

// Apply the saved theme on page load
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

// Listen for toggle switch changes
toggleSwitch.addEventListener('change', function(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});



