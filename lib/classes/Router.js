/**
 * Simple map implementation
 * @constructor
 */
var Map = function () {
    this.storage = {};

    /**
     * Add key value store
     * @param key
     * @param value
     */
    this.put = function (key, value) {
        this.storage[key] = value;
    }

    /**
     * Get value identified by key
     * @param key
     * @returns {string}
     */
    this.get = function (key) {
        return this.storage[key].replace("/", "");
    }
}

var Router = function () {}

Router.routeMapping = new Map();

/**
 * Route
 * @param path
 */
Router.route = function (path) {
    if(path == undefined) {
        path = "/"+this.getParameterByName("p");
    }

    $.getScript("controller/" + Router.routeMapping.get(path) + ".js").fail(function () {
        alert("Controller not found");
    })
}

/**
 * Adjust links in html to enable / routing
 * @param elements
 */
Router.adjustLinks = function (elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].href = "?p=" + elements[i].href.replace("file:///", "").replace("?", "&");
    }
}

/**
 * Add route
 * @param route
 * @param template
 */
Router.add = function (route, template) {
    this.routeMapping.put(route, template);
}

/**
 * Get parameter by name, especially route parameter
 * @param name
 * @returns {*}
 */
Router.getParameterByName = function (name) {
    var regexS = "[\\?&]" + name + "=([^&#]*)",
        regex = new RegExp(regexS),
        results = regex.exec(window.location.search);
    if (results == null) {
        return "";
    } else {
        return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
}

/**
 * Redirect to path
 * @param path
 */
Router.redirect = function(path) {
    path = path.replace("/", "");

    if(path != Router.getParameterByName("p")) {
        window.location.href = "?p=" + path.replace("/", "");
    }
}



