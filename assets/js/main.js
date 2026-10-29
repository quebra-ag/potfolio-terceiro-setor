/* Portfólio Terceiro Setor — Agência Quebra
   Barra de progresso · entrada da introdução · revelação ao rolar · acordeões */
(function(){
  "use strict";

  /* barra de progresso */
  var bar = document.querySelector("#progress span");
  function onScroll(){
    var y = window.scrollY || document.documentElement.scrollTop;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    if(bar) bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
  }
  window.addEventListener("scroll", onScroll, {passive:true});
  window.addEventListener("resize", onScroll);
  onScroll();

  /* entrada da introdução */
  var intro = document.querySelector(".intro");
  if(intro){ requestAnimationFrame(function(){ requestAnimationFrame(function(){ intro.classList.add("is-in"); }); }); }

  /* revelação ao rolar */
  var items = document.querySelectorAll("[data-reveal]");
  if("IntersectionObserver" in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, {rootMargin:"0px 0px -8% 0px", threshold:0.08});
    items.forEach(function(el){ io.observe(el); });
  } else {
    items.forEach(function(el){ el.classList.add("is-in"); });
  }

  /* acordeões */
  document.querySelectorAll(".acc__btn").forEach(function(btn){
    btn.addEventListener("click", function(){
      var item = btn.closest(".acc__item");
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      item.classList.toggle("is-open", !open);
    });
  });
})();
