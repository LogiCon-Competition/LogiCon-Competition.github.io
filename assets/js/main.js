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

  // Some organizer entries may be authored as <div class="avatar" src="..."> with
  // the organizer name nested inside the avatar div. Convert the avatar to a real
  // image while preserving and moving the name/link back into the organizer row.
  document.querySelectorAll('.organizer-head > .avatar[src]').forEach((avatar) => {
    if (avatar.tagName.toLowerCase() !== 'img') {
      const parent = avatar.parentNode;
      const img = document.createElement('img');
      img.className = avatar.className;
      img.src = avatar.getAttribute('src');
      img.alt = avatar.getAttribute('alt') || '';

      const nestedContent = Array.from(avatar.childNodes);
      parent.insertBefore(img, avatar);
      nestedContent.forEach((node) => parent.insertBefore(node, avatar));
      parent.removeChild(avatar);
    }
  });

  // If an image file is missing or invalid, keep the layout intact with initials.
  document.querySelectorAll('img.avatar').forEach((img) => {
    img.addEventListener('error', () => {
      img.replaceWith(makeFallbackAvatar(img.alt));
    }, { once: true });
  });
});
