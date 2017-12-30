# xhtml-template
* template(path,data)
* template.format(string,data)
* template.buffer(path,data)

```javascript
const csv = require('xhtml-template');
var str1=template(path,{content:""});
var str2=template.format(path,{content:""});
var buffer=template.buffer(path,{content:""});
```