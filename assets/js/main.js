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
    fallback.style.display = 'grid';
    fallback.style.placeItems = 'center';
    fallback.style.background = '#ffe1b4';
    fallback.style.color = '#7a3d10';
    fallback.style.fontWeight = '950';
    fallback.style.fontSize = '18px';
    return fallback;
  };

  // Some organizer entries may be authored as <div class="avatar" src="...">.
  // Convert them to real images so the repository image files render correctly.
  document.querySelectorAll('.organizer-head .avatar[src]').forEach((avatar) => {
    if (avatar.tagName.toLowerCase() !== 'img') {
      const img = document.createElement('img');
      img.className = avatar.className;
      img.src = avatar.getAttribute('src');
      img.alt = avatar.getAttribute('alt') || '';
      avatar.replaceWith(img);
    }
  });

  // If an image file is missing or invalid, keep the layout intact with initials.
  document.querySelectorAll('img.avatar').forEach((img) => {
    img.addEventListener('error', () => {
      img.replaceWith(makeFallbackAvatar(img.alt));
    }, { once: true });
  });
});
