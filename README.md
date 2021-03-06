# file-to-arraybuffer

> Convert [File](https://developer.mozilla.org/en-US/docs/Web/API/File) to [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)

## Install

```bash
npm install @npmlib/file-to-arraybuffer
```

## Getting started

```javascript
const fileToArrayBuffer = require('file-to-arraybuffer')

const input = document.querySelector('#file')
input.addEventListener('change', function(event) {
  const arrayBuffer = await fileToArrayBuffer(event.target.files[0])

  console.log(arrayBuffer)
})
```

Check out the [`example/`](example/) folder for the full example.

## License

[MIT](LICENSE)
