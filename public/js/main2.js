
// (function () {
//   window.onload = function () {
//     var preloader = document.querySelector('.page-loading');
//     preloader?.classList.remove('active');
//     setTimeout(function () {
//       preloader.remove();
//     }, 2000);
//   };
// })();
(function () {
    window.onload = function () {
      var preloader = document.querySelector('.page-loading');
  
      if (preloader) {
        preloader.classList.remove('active');
        setTimeout(function () {
          preloader.remove();
        }, 2000);
      }
    };
  })();