# fadein.js
A jQuery extension that fades in objects once they appear within the active browser view.

## Installation
Include jQuery first then fadein.js.
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="fadein.js"></script>
```

## Usage
Add the "fadein" class to any object. You should use an inline style or class stylesheet to set this element's opacity to 0.
```html
<div class="fadein" style="opacity:0;">This DIV will fade in.</div>
```

## Examples
Fade in 3 images, on the same line, 300ms apart.
```html
<img src="/images/image1.jpg" class="fadein">
<img src="/images/image2.jpg" class="fadein" data-delay="300">
<img src="/images/image3.jpg" class="fadein" data-delay="600">
```

Fade in one image, extremely slow, over the span of 5 seconds.
```html
<img src="/images/image1.jpg" class="fadein" data-speed="5000">
```

## Attributes
| Attribute   | Purpose                                                                  | Default Value |
| ----------- |------------------------------------------------------------------------- | --------------|
| data-delay  | time in milliseconds before the fading in of an element begins.          | 0             |
| data-speed  | time in milliseconds that elapses during the fade in animation.          | 800           |
| data-always | a true or false that fades in element regardless of position.            | false         |

## Live Demo
```html
http://everbranded.com
```


