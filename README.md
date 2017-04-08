# Ractive router

A simple ractive router for an example ractive web app using external templates.

Goal is to enable simple phonegap support to use this web app as android /ios app.
## Dependencies
- Ractive
- Ractive-loader
- Jquery

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

