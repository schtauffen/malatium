# Malatium 

## Installation

`npm install malatium`


## Usage

Malatium is a collection of utilities for mithril+redux apps.
It is a work in progress.

```js
import m from 'mithril'
import Provider from "malatium"
import store from './store'

import App from './containers/app'

m.mount(document.body, Provider(m, store, App))
```

## flattenRoutes 

Malatium's `flattenRoutes` function allows you to pass in nested routes which are easy to reason about.
It flattens the routes, so you can pass them on to `mithril.route`.

```js
import { flattenRoutes } from 'malatium'

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

m.route(document.body, "/", flattenRoutes(routes))

```


## Connect

Similar to the `react-redux` connect, Malatium has a connect function that makes working with Redux stores a piece of cake.

```js
import { connect } from 'malatium'

class Counter {
    view (ctrl, props, children) {
        const { counter } = props
        const incrementOne = incrementAction(1)

        return m(...
            m('span', String(counter)),
            m('button', { onclick: incrementOne }, '+'),
            ...
        )
    }
}

function selector (state) {
    const { counter } = state
    return { counter }
}

export connect(selector, { incrementAction, decrementAction })(new Counter)
```

You can also pass a string as your selector:

```js
connect('counter', ...)
```
* eventually it will allow nesting: `'todo[0].etc'`


## License

https://opensource.org/licenses/ISC

