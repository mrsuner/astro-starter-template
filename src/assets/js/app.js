import LazyLoad from "vanilla-lazyload";

document.addEventListener('DOMContentLoaded', function() {
  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
  });

  lazyLoadInstance.update();
  
});