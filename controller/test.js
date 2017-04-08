Ractive.load('template/test.html').then(function(HelloWorld) {
    ractive = new HelloWorld({
        el: 'main',
        data: {
            test: 'lala'
        }
    });

    Router.adjustLinks(ractive.findAll("a", true));

}).catch(function(error) {
    console.log(error);
})