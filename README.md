# Malatium 

## Malatium.route 

To install:  
`npm install malatium`

Malatium's `route` function allows you to pass in nested routes which are easy to reason about.
It flattens the routes, and passes them on to `mithril.route`. It also allows `mode` to be sent
in as an optional 4th parameter.  

It is a work in progress.

```js
const routes = {
  "$container": HeaderFooter,
  "/": HomePage,
  "/post": {
    "$container": Post,
    "/:id": Basic,
    "/promo/:id": Promo,
    "$default": StoryNotFound
  },
  "$default": PageNotFound
}

Malatium.route(document.body, "/", routes, "hash")

```

## Connect

Similar to the `react-redux` connect, Malatium has a connect function that makes working with Redux stores a piece of cake.

_please see the example repo below for examples_

## Example

An example of Malatium in action is availabe at:  
https://github.com/Schtauffen/mithril-redux-malatium.git

## License

https://opensource.org/licenses/ISC

