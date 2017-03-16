// Compiled using marko@4.0.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename);

function render(input, out) {
  var data = input;

  out.w("<aside class=\"sidebar\"><div class=\"sidebar-container\"><div class=\"sidebar-header\"><div class=\"brand\"><div class=\"logo\"><span class=\"l l1\"></span><span class=\"l l2\"></span><span class=\"l l3\"></span><span class=\"l l4\"></span><span class=\"l l5\"></span></div> Admin</div></div><nav class=\"menu\"><ul class=\"nav metismenu\" id=\"sidebar-menu\"><li><a href=\"index\"><i class=\"fa fa-home\"></i> Dashboard</a></li><li class=\"\" id=\"post\"><a href=\"\"><i class=\"fa fa-pencil-square-o\"></i> Post <i class=\"fa arrow\"></i></a><ul><li parentId=\"post\"><a href=\"/newpost\">New Post</a></li><li parentId=\"post\" class=\"active\"><a href=\"./listpost\">List Post</a></li><li><a href=\"./category\">Categories</a></li><li><a href=\"./tag\">Tags</a></li><li><a href=\"grid.html\">Grid</a></li></ul></li></ul></nav></div><footer class=\"sidebar-footer\"><ul class=\"nav metismenu\" id=\"customize-menu\"><li><ul><li class=\"customize\"><div class=\"customize-item\"><div class=\"row customize-header\"><div class=\"col-xs-4\"></div><div class=\"col-xs-4\"><label class=\"title\">fixed</label></div><div class=\"col-xs-4\"><label class=\"title\">static</label></div></div><div class=\"row hidden-md-down\"><div class=\"col-xs-4\"><label class=\"title\">Sidebar:</label></div><div class=\"col-xs-4\"><label><input class=\"radio\" type=\"radio\" name=\"sidebarPosition\" value=\"sidebar-fixed\"><span></span></label></div><div class=\"col-xs-4\"><label><input class=\"radio\" type=\"radio\" name=\"sidebarPosition\" value=\"\"><span></span></label></div></div><div class=\"row\"><div class=\"col-xs-4\"><label class=\"title\">Header:</label></div><div class=\"col-xs-4\"><label><input class=\"radio\" type=\"radio\" name=\"headerPosition\" value=\"header-fixed\"><span></span></label></div><div class=\"col-xs-4\"><label><input class=\"radio\" type=\"radio\" name=\"headerPosition\" value=\"\"><span></span></label></div></div><div class=\"row\"><div class=\"col-xs-4\"><label class=\"title\">Footer:</label></div><div class=\"col-xs-4\"><label><input class=\"radio\" type=\"radio\" name=\"footerPosition\" value=\"footer-fixed\"><span></span></label></div><div class=\"col-xs-4\"><label><input class=\"radio\" type=\"radio\" name=\"footerPosition\" value=\"\"><span></span></label></div></div></div></li></ul><a href=\"\"><i class=\"fa fa-cog\"></i> Customize</a></li></ul></footer></aside>");
}

marko_template._ = render;

marko_template.meta = {};
