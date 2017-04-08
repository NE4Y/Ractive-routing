Ractive.load('template/hello-world.html').then(function(HelloWorld) {
    ractive = new HelloWorld({
        el: 'main',
        data: {
            name: 'Steffen'
        }
    })

    Router.adjustLinks(ractive.findAll("a", true));

}).catch(function(error) {
    console.log(error);
})