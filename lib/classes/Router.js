var Map = function () {
    this.storage = {};

    this.put = function (key, value) {
        this.storage[key] = value;
    }

    this.get = function (key) {
        return this.storage[key].replace("/", "");
    }
}

var Router = function () {
}

Router.routeMapping = new Map();


Router.route = function (path) {
    if(path == undefined) {
        path = "/"+this.getParameterByName("p");
    }


    $.getScript("controller/" + Router.routeMapping.get(path) + ".js").fail(function () {
        alert("Controller not found");
    })
}


Router.adjustLinks = function (elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].href = "?p=" + elements[i].href.replace("file:///", "");
    }
}

Router.add = function (route, template) {
    this.routeMapping.put(route, template);
}

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

Router.redirect = function(path) {
    path = path.replace("/", "");

    if(path != Router.getParameterByName("p")) {
        window.location.href = "?p=" + path.replace("/", "");
    }
}



