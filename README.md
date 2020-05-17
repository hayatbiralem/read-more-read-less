# read-more-read-less
Zero dependency read more link implementation to any kind of content.

## Installation

With npm

```
npm i inuit-displays -S
```

You can download the latest version or checkout all the releases [here](https://github.com/hayatbiralem/read-more-read-less/releases).

## Usage

You can import this plugin into your project sample code like this:

```html
<script src="read-more-read-less.min.js" defer async></script>
<link href="read-more-read-less.min.css" rel="stylesheet"></head>
```

.. and you're ready to go.

## Examples

### Works inline

```html
<p>Lorem ipsum dolor sit amet. <span class="o-read-more-read-less__toggle"></span> Lorem ipsum dolor sit amet. <span>Some</span> <strong>useful</strong> <em>tags</em>.</p>
```

The second sentence and the following inline tags will be hidden.

### Works with blocks

```html
<p>Lorem ipsum dolor sit amet.</p>
<span class="o-read-more-read-less__toggle"></span>
<p>Lorem ipsum dolor sit amet.</p>
<ul>
<li>Lorem.</li>
<li>Quam.</li>
<li>Inventore!</li>
</ul>
<img src="path/to/image.jpg" alt="Some image">
```

Following blocks will be hidden.


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

- [ ] Add to the npm directory.

## Contributors

- [Ömür Yanıkoğlu @hayatbiralem](https://twitter.com/hayatbiralem)

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
