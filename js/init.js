// Configuration for the addcourse page.

jQuery(document).ready(function ($) {
  $("body > div.section").changeElementType("section");
  $("body > :not(section)").wrapAll("<header></header>");
  $("section#credits").changeElementType("footer");
  $("section,header,footer").wrapInner("<div class='row'></div>");
});
