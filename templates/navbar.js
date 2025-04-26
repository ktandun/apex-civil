      function toggleNav() {
        const navLinksMobile = document.querySelector(".nav-links-mobile");
        navLinksMobile.classList.toggle("open");

        const topNav = document.querySelector(".navbar");
        topNav.classList.toggle("open");
      }
