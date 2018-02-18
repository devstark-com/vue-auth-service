# vue-authenticate-service

[![npm](https://img.shields.io/npm/v/vue-authenticate-service.svg) ![npm](https://img.shields.io/npm/dm/vue-authenticate-service.svg)](https://www.npmjs.com/package/vue-authenticate-service)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

Flexible Vue Auth Service & Plugin

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)

# Installation

```
npm install --save vue-authenticate-service
```

## Default import

```javascript
import Vue from 'vue'
import VueAuthenticateService from 'vue-authenticate-service'

Vue.use(VueAuthenticateService, {
  // options
})
```

## Browser

```html
<link rel="stylesheet" href="vue-authenticate-service/dist/vue-authenticate-service.css"/>

<script src="vue.js"></script>
<script src="vue-authenticate-service/dist/vue-authenticate-service.browser.js"></script>
```

The plugin should be auto-installed. If not, you can install it manually with the instructions below.

```javascript
Vue.use(VueAuthenticateService)
```


# Usage

> TODO

# Example

> TODO

---

# Plugin Development

## Installation

The first time you create or clone your plugin, you need to install the default dependencies:

```
npm install
```

## Watch and compile

This will run webpack in watching mode and output the compiled files in the `dist` folder.

```
npm run dev
```

## Manual build

This will build the plugin into the `dist` folder in production mode.

```
npm run build
```

---

## License

[MIT](http://opensource.org/licenses/MIT)
