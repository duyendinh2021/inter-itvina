var recent = $("#carousel-recently");
var carousel_recommend = $("#carousel-recommend");
var carousel_hot_product = $("#carousel-hot-product");
var carousel_deals = $("#carousel-today-deals");
var carousel_bast_saller = $("#carousel-bast-saller");
var carousel_category = $("#carousel-category");
var carousel_deals_month = $("#carousel-deals-month");
var carousel_catalog = $("#carousel-catalog");
recent.owlCarousel({
  loop: true,
  nav: true,
  navContainerClass: "nav-carousel",
  navClass: ["nav-prev", "nav-next"],
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    960: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
});
recent.on("mousewheel", ".owl-stage", function (e) {
  if (e.deltaY > 0) {
    owl.trigger("next.owl");
  } else {
    owl.trigger("prev.owl");
  }
  e.preventDefault();
});

carousel_recommend.owlCarousel({
  loop: true,
  margin: 10,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    960: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});
carousel_recommend.on("mousewheel", ".owl-stage", function (e) {
  if (e.deltaY > 0) {
    owl.trigger("next.owl");
  } else {
    owl.trigger("prev.owl");
  }
  e.preventDefault();
});

carousel_hot_product.owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    960: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});
carousel_hot_product.on("mousewheel", ".owl-stage", function (e) {
  if (e.deltaY > 0) {
    owl.trigger("next.owl");
  } else {
    owl.trigger("prev.owl");
  }
  e.preventDefault();
});

carousel_deals.owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    960: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});

carousel_bast_saller.owlCarousel({
  loop: true,
  nav: true,
  navContainerClass: "nav-carousel",
  navClass: ["nav-prev", "nav-next"],
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    960: {
      items: 3,
    },
    1200: {
      items: 6,
    },
  },
});

carousel_category.owlCarousel({
  loop: true,
  nav: true,
  navContainerClass: "nav-carousel-category",
  navClass: ["nav-prev-category", "nav-next-category"],
  margin: 10,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 3,
    },
    960: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
});

carousel_deals_month.owlCarousel({
  loop: true,
  // nav: true,
  // navContainerClass: "nav-carousel-category",
  // navClass: ["nav-prev-category", "nav-next-category"],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    960: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
});

carousel_catalog.owlCarousel({
  loop: true,
  nav: true,
  navContainerClass: "nav-carousel-catalog",
  navClass: ["nav-prev-catalog", "nav-next-catalog"],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    960: {
      items: 3,
    },
    1200: {
      items: 5,
    },
  },
});
