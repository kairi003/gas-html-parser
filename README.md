# gas-html-parser
[node-html-parser](https://www.npmjs.com/package/node-html-parser) bundles for Google Apps Script.

# Install
Script ID :`1JTLPVXGW6Pq4zSAV5ED9XrWOPydVywumQZSOWN7l6KJ0UtWxtX3RbYO6`

# Example
```
const html = `<body>
  <ul id="fruits">
    <li class="apple">Apple</li>
    <li class="orange">Orange</li>
    <li class="pear">Pear</li>
  </ul>
</body>`;
const dom = HtmlParser.parse(html);
console.log(dom.querySelector('#id .pear').textContent);
```

# Reference
- node-html-parser [npm](https://www.npmjs.com/package/node-html-parser) [github](https://github.com/taoqf/node-html-parser)
- GAS Project [link](https://script.google.com/home/projects/1JTLPVXGW6Pq4zSAV5ED9XrWOPydVywumQZSOWN7l6KJ0UtWxtX3RbYO6)
