'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const overlay = document.getElementById('overlay');
  const navLinks = nav.querySelectorAll('a');
  const backToTop = document.getElementById('back-to-top');

  // ヘッダーとback-to-top表示
  const onScroll = () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (window.scrollY > 200) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  // 開閉切り替え
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.contains('open');

    if (isOpen) {
      nav.classList.remove('open');
      overlay.classList.remove('show');
      body.classList.remove('no-scroll');
      menuToggle.classList.remove('active');
    } else {
      nav.classList.add('open');
      overlay.classList.add('show');
      body.classList.add('no-scroll');
      menuToggle.classList.add('active');
    }
  });

  // ナビ内リンク or オーバーレイをクリック → 閉じる
  function closeNav() {
    nav.classList.remove('open');
    overlay.classList.remove('show');
    body.classList.remove('no-scroll');
    menuToggle.classList.remove('active');
  }

  overlay.addEventListener('click', closeNav);
  navLinks.forEach(link => link.addEventListener('click', closeNav));

  // メニュー内リンククリックで閉じる
  navLinks.forEach(link => {
    link.addEventListener('click', closeNav);
  });

  // トップへ戻る
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // フェードインアニメーション
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

});
