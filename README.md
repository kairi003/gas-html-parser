# html-parser-bundled
[node-html-parser](https://www.npmjs.com/package/node-html-parser) bundles for browsers and other environments.

# Install
Get from [release](https://github.com/kairi003/html-parser-bundled/releases/latest) or build.
```
git clone https://github.com/kairi003/html-parser-bundled
cd html-parser-bundled
npm install
npm run build
```

# Usage
```js
<script src="/path/to/bundle.js"></script>
<script>
  const { parse } = window.HTMLParser;
  const dom = parse('<body><div class="foo">bar</div></body>');
  console.log(dom.querySelector('.foo').textContent);
</script>
```

# Reference
- node-html-parser [npm](https://www.npmjs.com/package/node-html-parser) [github](https://github.com/taoqf/node-html-parser)

