// Compiled using marko@4.0.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_loadTemplate = require("marko/runtime/helper-loadTemplate"),
    default_template = marko_loadTemplate(require.resolve("./default.marko")),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/taglibs/core/include-tag"));

function render(input, out) {
  var data = input;

  include_tag({
      _target: default_template,
      article: {
          renderBody: function renderBody(out) {
            out.w("<article class=\"content item-editor-page\"><div class=\"title-block\"><h3 class=\"title\">Add new item <span class=\"sparkline bar\" data-type=\"bar\"></span></h3></div><form name=\"item\"><div class=\"card card-block\"><div class=\"form-group row\"><label class=\"col-sm-1 form-control-label text-xs-right\">Title:</label><div class=\"col-sm-11\"><input type=\"text\" class=\"form-control boxed\" id=\"title\" name=\"title\" placeholder=\"\"></div></div><div class=\"form-group row\"><label class=\"col-sm-1 form-control-label text-xs-right\">Url:</label><div class=\"col-sm-10\"><input type=\"text\" class=\"form-control underlined\" id=\"url\" name=\"url\" readonly=\"\" placeholder=\"\"></div><div class=\"col-sm-1\"><button type=\"button\" class=\"btn btn-secondary btn-sm\" id=\"edit-url\" name=\"edit-url\" style=\"padding: 8px;width: 100%;\">Edit</button></div></div><div class=\"form-group row\"><label class=\"col-sm-1 form-control-label text-xs-right\">Content:</label><div class=\"col-sm-11\"><input class=\"post-content\"></div></div><div class=\"form-group row\"><label class=\"col-sm-1 form-control-label text-xs-right\">Tags:</label><div class=\"col-sm-11\"><input type=\"text\" class=\"form-control underlined\"></div></div><div class=\"form-group row\"><label class=\"col-sm-1 form-control-label text-xs-right\">Category:</label><div class=\"col-sm-5 category\"><input id=\"box1\" type=\"checkbox\"><label for=\"box1\">Checkbox 1</label><br><input id=\"box2\" type=\"checkbox\"><label for=\"box2\">Checkbox 2</label><br><input id=\"box3\" type=\"checkbox\"><label for=\"box3\">Checkbox 3</label><br><input id=\"box4\" type=\"checkbox\"><label for=\"box4\">Checkbox 4</label><br><input id=\"box5\" type=\"checkbox\"><label for=\"box5\">Checkbox 5</label><br><input id=\"box6\" type=\"checkbox\"><label for=\"box6\">Checkbox 6</label><br></div><label class=\"col-sm-1 form-control-label text-xs-right\">Image:</label><div class=\"col-sm-5\"></div></div><div class=\"form-group row\"><label class=\"col-sm-1 form-control-label text-xs-right\">Image:</label></div><div class=\"form-group row\"><div class=\"col-sm-11 col-sm-offset-1\"><button type=\"submit\" class=\"btn btn-primary\">Save</button></div></div></div></form></article>");
          }
        },
      modal: {
          renderBody: function renderBody(out) {
            out.w("<div class=\"modal fade\" id=\"modal-media\"><div class=\"modal-dialog modal-lg\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button><h4 class=\"modal-title\">Media Library</h4></div><div class=\"modal-body modal-tab-container\"><ul class=\"nav nav-tabs modal-tabs\" role=\"tablist\"><li class=\"nav-item\"><a class=\"nav-link\" href=\"#gallery\" data-toggle=\"tab\" role=\"tab\">Gallery</a></li><li class=\"nav-item\"><a class=\"nav-link active\" href=\"#upload\" data-toggle=\"tab\" role=\"tab\">Upload</a></li></ul><div class=\"tab-content modal-tab-content\"><div class=\"tab-pane fade\" id=\"gallery\" role=\"tabpanel\"><div class=\"images-container\"><div class=\"row\"></div></div></div><div class=\"tab-pane fade active in\" id=\"upload\" role=\"tabpanel\"><div class=\"upload-container\"><div id=\"dropzone\"><form action=\"/\" method=\"POST\" enctype=\"multipart/form-data\" class=\"dropzone needsclick dz-clickable\" id=\"demo-upload\"><div class=\"dz-message-block\"><div class=\"dz-message needsclick\">Drop files here or click to upload.</div></div></form></div></div></div></div></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button><button type=\"button\" class=\"btn btn-primary\">Insert Selected</button></div></div></div></div>");
          }
        },
      js: {
          renderBody: function renderBody(out) {
            out.w("<script src=\"/js/tinymce/tinymce.min.js\"></script><script src=\"/js/init-tinymce.js\"></script><script src=\"/js/gen-url.js\"></script>");
          }
        }
    }, out);
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "./default.marko",
      "marko/taglibs/core/include-tag"
    ]
  };
