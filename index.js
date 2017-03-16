var loaderUtils = require('loader-utils');
var Minimize = require('minimize');

module.exports = function(source) {
    var callback = this.async();

    if (this.cacheable) {
        this.cacheable();
    }

    var opts = loaderUtils.getOptions(this) || this.options['html-minify-loader'] || {};
    minimize = new Minimize(opts);
    minimize.parse(source, callback);
};
