;(function (root) {
  function fileToArrayBuffer (file) {
    return new Promise(function (resolve, reject) {
      const reader = new FileReader()
      const readFile = function (event) {
        const buffer = reader.result
        resolve(buffer)
      }

      reader.addEventListener('load', readFile)
      reader.readAsArrayBuffer(file)
    })
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = fileToArrayBuffer
    }
    exports.fileToArrayBuffer = fileToArrayBuffer
  } else if (typeof define === 'function' && define.amd) {
    define([], function () {
      return fileToArrayBuffer
    })
  } else {
    root.fileToArrayBuffer = fileToArrayBuffer
  }
})(this);
