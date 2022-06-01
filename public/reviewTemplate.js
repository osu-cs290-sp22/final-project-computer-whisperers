(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['review'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"review\">\r\n    <div class=\"review-content\">\r\n      <div class=\"review-time-stamp\">\r\n        <p class=\"review-date\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"date") || (depth0 != null ? lookupProperty(depth0,"date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":4,"column":31},"end":{"line":4,"column":39}}}) : helper)))
    + "</p> <p> || </p> <p class=\"review-time\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"time") || (depth0 != null ? lookupProperty(depth0,"time") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data,"loc":{"start":{"line":4,"column":80},"end":{"line":4,"column":88}}}) : helper)))
    + " </p>\r\n      </div>\r\n      <p class=\"review-text\">\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":7,"column":16}}}) : helper)))
    + "\r\n      </p>\r\n      <p class=\"review-author\">\r\n        <a href=\"#\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":10,"column":20},"end":{"line":10,"column":30}}}) : helper)))
    + "</a>\r\n      </p>\r\n    </div>\r\n</article>\r\n";
},"useData":true});
})();