import initSwiper from "./carrosel.js";
import initActionsProduct from "./productsActions.js";
import initZoom from "./zoom.js";

const init = () => {
  initSwiper();
  initActionsProduct();
  initZoom("js-image-zoom");
};

init();
