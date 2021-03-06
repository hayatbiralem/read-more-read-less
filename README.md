# read-more-read-less
Zero dependency read more link implementation to any kind of content.

## Installation

With npm

```
npm i read-more-read-less -S
```

You can download the latest version or checkout all the releases [here](https://github.com/hayatbiralem/read-more-read-less/releases).

## Usage

### Browser

You can import this plugin into your project as follows:

```html
<link href="path/to/read-more-read-less.min.css" rel="stylesheet">
<script src="path/to/read-more-read-less.min.js" defer async></script>
```

.. and you're ready to go.

### Webpack

If you want to import the plugin with your webpack build you can do it by:

```js
import "read-more-read-less";
```

You should look at `sass-loader` implementation on [webpack documentation](https://webpack.js.org/loaders/sass-loader/).

### Refresh

You can process new dynamic contents by calling:

```
window.processReadMoreReadLess();
```

or in Webpack way:

```js
import processReadMoreReadLess from "read-more-read-less/src/js/utils/process";
processReadMoreReadLess();
```

Only news ones will be processed.

## Examples

### Works inline

The second sentence and the following inline tags will be hidden.

```html
<p>Lorem ipsum dolor sit amet. <span class="o-read-more-read-less__toggle"></span> Lorem ipsum dolor sit amet. <span>Some</span> <strong>useful</strong> <em>tags</em>.</p>
```

Edit on [CodePen](https://codepen.io/hayatbiralem/pen/KKdGeep)

### Works with blocks

Following blocks will be hidden.

```html
<p>Lorem ipsum dolor sit amet.</p>
<p class="o-read-more-read-less__toggle"></p>
<p>Mollitia inventore quidem harum sunt.</p>
<ul>
  <li>Lorem.</li>
  <li>Quam.</li>
  <li>Inventore!</li>
</ul>
<img src="https://picsum.photos/200/300" alt="Some image">
```

Edit on [CodePen](https://codepen.io/hayatbiralem/pen/RwWeJBY)

### Customize more/less texts

```html
<p>Lorem ipsum dolor sit amet.</p>
<p class="o-read-more-read-less__toggle" data-more="More" data-less="Less"></p>
<p>Mollitia inventore quidem harum sunt.</p>
<ul>
  <li>Lorem.</li>
  <li>Quam.</li>
  <li>Inventore!</li>
</ul>
<img src="https://picsum.photos/200/300" alt="Some image">
```

Edit on [CodePen](https://codepen.io/hayatbiralem/pen/mdezKva)

### Summary

In short `.o-read-more-read-less__toggle` element will hide all next siblings including white spaces.

### Development

Clone this repo, go to the project directory and install dependencies with

```
npm install
```

and rebuild dist folder with

```
npx webpack
```

## TODO

- [x] Add to the npm directory.

## Contributors

- [Ömür Yanıkoğlu @hayatbiralem](https://twitter.com/hayatbiralem)

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
