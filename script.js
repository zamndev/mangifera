(function(){
  "use strict";

  // Nav scroll state
  var nav = document.getElementById('siteNav');
  window.addEventListener('scroll', function(){
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, {passive:true});

  // Mobile nav toggle
  var toggle = document.getElementById('navToggle');
  var links = document.querySelector('nav.links');
  toggle.addEventListener('click', function(){
    var isOpen = links.style.display === 'flex';
    if(isOpen){
      links.style.display = 'none';
    } else {
      links.style.display = 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'fixed';
      links.style.top = '4.4rem';
      links.style.right = '6vw';
      links.style.background = '#221910';
      links.style.border = '1px solid rgba(244,234,217,0.12)';
      links.style.borderRadius = '12px';
      links.style.padding = '1rem 1.4rem';
      links.style.gap = '1rem';
      links.style.zIndex = '150';
    }
  });
  links.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      if(window.innerWidth <= 920){ links.style.display = 'none'; }
    });
  });

  // Explore button smooth scroll
  document.getElementById('exploreBtn').addEventListener('click', function(){
    var target = document.getElementById('history');
    if(target){ target.scrollIntoView({behavior:'smooth', block:'start'}); }
  });

  // Scroll reveal
  var revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, {threshold:0.14, rootMargin:'0px 0px -60px 0px'});
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('in'); });
  }

  // Lightbox gallery
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  document.querySelectorAll('.gallery-grid figure').forEach(function(fig){
    fig.addEventListener('click', function(){
      var img = fig.querySelector('img');
      var full = img.getAttribute('data-full') || img.src;
      lightboxImg.src = full;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('open');
    });
  });
  function closeLightbox(){ lightbox.classList.remove('open'); lightboxImg.src=''; }
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function(e){ if(e.target === lightbox){ closeLightbox(); } });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape'){ closeLightbox(); } });

  // Music play toggle (visual only)
  var currentlyPlaying = null;
  document.querySelectorAll('.track-card').forEach(function(card){
    var btn = card.querySelector('.play-btn');
    btn.addEventListener('click', function(){
      var isThisPlaying = card.classList.contains('is-playing');
      if(currentlyPlaying && currentlyPlaying !== card){
        currentlyPlaying.classList.remove('is-playing');
        currentlyPlaying.querySelector('.play-btn').classList.remove('playing');
        currentlyPlaying.querySelector('.play-btn').textContent = '▶';
      }
      if(isThisPlaying){
        card.classList.remove('is-playing');
        btn.classList.remove('playing');
        btn.textContent = '▶';
        currentlyPlaying = null;
      } else {
        card.classList.add('is-playing');
        btn.classList.add('playing');
        btn.textContent = '❚❚';
        currentlyPlaying = card;
      }
    });
  });
})();
