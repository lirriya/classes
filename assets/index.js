 function showClass(index) {
      const sections = document.querySelectorAll('.class-section');
      const buttons = document.querySelectorAll('.class-buttons button');

      sections.forEach((section, i) => {
        section.classList.toggle('active', i === index);
      });

      buttons.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
      });
    }