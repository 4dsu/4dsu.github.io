/**
 * 4dsu.me - JavaScript
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    setupEmailReveal();
    setupSmoothScroll();
    setupActiveNavLink();
  }

  /**
   * Email Reveal
   * Shows obfuscated email when button is clicked
   */
  function setupEmailReveal() {
    const button = document.getElementById('show-email');
    const emailContainer = document.getElementById('email');

    if (!button || !emailContainer) return;

    button.addEventListener('click', function () {
      // Obfuscated email parts
      const user = 'contacte';
      const domain = '4dsu';
      const tld = 'me';
      const email = user + '@' + domain + '.' + tld;

      // Create mailto link
      const link = document.createElement('a');
      link.href = 'mailto:' + email;
      link.textContent = email;

      // Clear container and append link
      emailContainer.innerHTML = '';
      emailContainer.appendChild(link);

      // Hide button after revealing
      button.style.display = 'none';
    });
  }

  /**
   * Smooth Scroll
   * Scrolls smoothly to section when nav link is clicked
   */
  function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // Update URL hash without jumping
          history.pushState(null, null, targetId);
        }
      });
    });

    // Also handle CTA buttons with hash links
    const ctaLinks = document.querySelectorAll('a.btn[href^="#"]');

    ctaLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          history.pushState(null, null, targetId);
        }
      });
    });
  }

  /**
   * Active Nav Link
   * Highlights the nav link of the currently visible section
   */
  function setupActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    if (sections.length === 0 || navLinks.length === 0) return;

    // Use Intersection Observer for better performance
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          setActiveLink(id);
        }
      });
    }, observerOptions);

    sections.forEach(function (section) {
      observer.observe(section);
    });

    function setActiveLink(sectionId) {
      navLinks.forEach(function (link) {
        link.classList.remove('is-active');
        if (link.getAttribute('href') === '#' + sectionId) {
          link.classList.add('is-active');
        }
      });
    }

    // Set initial active link based on hash or first section
    const hash = window.location.hash;
    if (hash) {
      setActiveLink(hash.substring(1));
    }
  }
})();
