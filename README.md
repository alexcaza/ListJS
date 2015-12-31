# ListJS
Super tiny function that works like PHP's list() function

### Installation

---------------
#### In the browser:

All you have to do is `git clone https://github.com/alexcaza/ListJS.git` into your directory and include the script file into your html file!

```html
<script src="list.js"></script>
```

#### NodeJS:
Simply require the file
```javascript
var list = require('path/to/list');
```
and you're done!

### Usage
---------------
```javascript
// NodeJS
function run() {
  let data = ['thing1', 'thing2']
  list('var1', 'var2')(data)

  console.log(var1, var2)
}
run() // output => thing1 thing2
```
`list` Has one optional parameter, an object to bind to. if one isn't present, it'll default to `global` for Node or `window` for browsers. it can take as many variables as you can throw at is.

````javascript
list(...arguments[, boundObject])(array)
```
---------------

Please feel free to fork it and make it better! It's not perfect, by any means. It's something I hacked together for fun.

If one person finds it useful I feel like it's served it's purpose.
