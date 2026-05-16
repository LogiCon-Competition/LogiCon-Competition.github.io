document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('[data-nav-links]');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const makeInitials = (name) => {
    return (name || '')
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join('') || '?';
  };

  const makeFallbackAvatar = (name) => {
    const fallback = document.createElement('div');
    fallback.className = 'avatar avatar-fallback';
    fallback.setAttribute('aria-hidden', 'true');
    fallback.textContent = makeInitials(name);
    return fallback;
  };

  document.querySelectorAll('.organizer-head .avatar[src]').forEach((avatar) => {
    if (avatar.tagName.toLowerCase() !== 'img') {
      const img = document.createElement('img');
      img.className = avatar.className;
      img.src = avatar.getAttribute('src');
      img.alt = avatar.getAttribute('alt') || '';
      avatar.replaceWith(img);
    }
  });

  document.querySelectorAll('img.avatar').forEach((img) => {
    img.addEventListener('error', () => {
      img.replaceWith(makeFallbackAvatar(img.alt));
    }, { once: true });
  });
});
