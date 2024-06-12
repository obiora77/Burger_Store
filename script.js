const menuicon = document.getElementById('menu-icon')
      const navLinks = document.getElementById('nav-link')

      menuicon.addEventListener('click', () => {
         navLinks.classList.toggle('show')

         const listIcon = document.querySelector('.bi-list');
         const closeIcon = document.querySelector('.bi-x-lg');
         if (navLinks.classList.contains('show')) {
            listIcon.style.display = 'none';
            closeIcon.style.display = 'block';
         } else {
            listIcon.style.display = 'block';
            closeIcon.style.display = 'none';
         }
      })