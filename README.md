# Ractive router

A simple ractive router.

## Usage

Add route /route and corresponding ractive controller test

```js
Router.add("/test", "test");
```
and start the routing process afterwards

```js
Router.route();
```
where a ractive controller looks like

```js
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

