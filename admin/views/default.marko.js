// Compiled using marko@4.0.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_loadTemplate = require("marko/runtime/helper-loadTemplate"),
    header_template = marko_loadTemplate(require.resolve("./header.marko")),
    menu_template = marko_loadTemplate(require.resolve("./menu.marko")),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/taglibs/core/include-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/taglibs/async/await-reorderer-tag")),
    init_components_tag = marko_loadTag(require("marko/components/taglib/init-components-tag"));

function render(input, out) {
  var data = input;

  out.w("<!doctype html><html class=\"no-js\" lang=\"en\"><head><meta charset=\"utf-8\"><meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\"><title>Admin Dashboard</title><meta name=\"description\" content=\"\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"apple-touch-icon\" href=\"apple-touch-icon.png\"><link rel=\"stylesheet\" href=\"/css/vendor.css\"><link rel=\"stylesheet\" href=\"/css/app.css\"></head><body><div class=\"main-wrapper\"><div class=\"app\" id=\"app\">");

  include_tag({
      _target: header_template
    }, out);

  include_tag({
      _target: menu_template
    }, out);

  out.w("<div class=\"sidebar-overlay\" id=\"sidebar-overlay\"></div>");

  include_tag({
      _target: input.article
    }, out);

  include_tag({
      _target: input.modal
    }, out);

  out.w("</div></div><div class=\"ref\" id=\"ref\"><div class=\"color-primary\"></div><div class=\"chart\"><div class=\"color-primary\"></div><div class=\"color-secondary\"></div></div></div><script src=\"/js/vendor.js\"></script><script src=\"/js/app.js\"></script>");

  include_tag({
      _target: input.js
    }, out);

  await_reorderer_tag({}, out);

  init_components_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "./header.marko",
      "./menu.marko",
      "marko/taglibs/core/include-tag",
      "marko/taglibs/async/await-reorderer-tag",
      "marko/components/taglib/init-components-tag"
    ]
  };
