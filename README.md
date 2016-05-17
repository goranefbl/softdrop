# SoftDrop
Simple and light (2kb) JS plugin to customize &lt;select> elements. Thats about it!

## Live Demo

To see it in action, check out the [live demo here.](http://itsgoran.com/select/)

## Installation

For now, download the package and reference the JavaScript and CSS files manually:

```html
<script src="dist/softdrop.min.js"></script>
<link rel="stylesheet" type="text/css" href="dist/softdrop.min.css">
```

## Example Usage

As simple as it gets:


```javascript
SoftDrop.init({
 	selector:'your-select-class', // select class
 	mobile:true  // to show on mobile
});
```

## Browser Support

This component has been tested in the following browsers:

| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/callmenick/browser-logos/master/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/callmenick/browser-logos/master/safari/safari_48x48.png) | ![IE](https://raw.githubusercontent.com/callmenick/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Opera](https://raw.githubusercontent.com/callmenick/browser-logos/master/opera/opera_48x48.png) |
|:-:|:-:|:-:|:-:|:-:|
| Chrome | Firefox | Safari | IE 9+ | Opera |

If anyone wants to run any tests on older browser versions, please do so and reach out to me!

# License

The MIT License (MIT)

Copyright (c) 2016 Goran Jakovljevic