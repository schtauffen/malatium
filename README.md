# Malatium 

## Installation

`npm install malatium`


## Usage

Malatium is a collection of utilities for mithril+redux apps.
It is a work in progress.

```js
import m from "mithril"
import Malatium from "malatium"
import { createStore } from "redux"

import reducer from "./reducer"
import routes from "./routes"

const store = createStore(reducer)

Malatium
  .init(m, store)
  .route(document.body, "/", routes)
```


## Malatium.route 

Malatium's `route` function allows you to pass in nested routes which are easy to reason about.
It flattens the routes, and passes them on to `mithril.route`. It also allows `mode` to be sent
in as an optional 4th parameter.  

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

_please see the example repo below to get started_


## Example

An example of Malatium in action is availabe at:  
https://github.com/Schtauffen/mithril-redux-malatium


## License

https://opensource.org/licenses/ISC

