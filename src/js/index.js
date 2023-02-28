const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    414: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 32,
      slidesPerGroup: 3,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
  },
});

toggleMobileMenu();
toggleFAQ();
checkFaqItem();

window.onload = changeText;
window.addEventListener('resize', changeText);

function toggleMobileMenu() {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const bodyRef = document.querySelector('[data-body]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    bodyRef.classList.toggle('no-scroll');
  });
}

function toggleFAQ() {
  const faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach(el =>
    el.addEventListener('click', () => {
      el.classList.toggle('is-open');
    })
  );
}

function changeText() {
  const navListBoutiks = document.querySelector(
    '.nav__list--item-link-boutiks'
  );
  if (window.matchMedia('(min-width: 1024px)').matches) {
    navListBoutiks.textContent = 'Nos boutiks';
  } else {
    navListBoutiks.textContent = 'Nos BOUTIKS';
  }
}

function checkFaqItem() {
  const faqList = document.querySelector('.faq__list');
  const items = document.querySelectorAll('.faq__item');
  const firstItem = items[0];
  const secondItem = items[1];
  const lastItem = items[items.length - 1];

  faqList.addEventListener('click', () => {
    faqList.classList.remove('faq__faq__list');

    if (
      firstItem.classList.contains('is-open') &&
      secondItem.classList.contains('is-open')
    ) {
      faqList.classList.add('faq__faq__list');
      return;
    }

    if (
      firstItem.classList.contains('is-open') &&
      lastItem.classList.contains('is-open')
    ) {
      faqList.classList.add('faq__faq__list');
      return;
    }

    if (
      secondItem.classList.contains('is-open') &&
      lastItem.classList.contains('is-open')
    )
      faqList.classList.add('faq__faq__list');
  });
}
