# Ractive router

A simple ractive router.

## Usage

Add route /route and corresponding ractive controller test

```
Router.add("/test", "test");
```

where a ractive controller looks like

```
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
```

Links have to be adjusted to guarantee routing without server.

