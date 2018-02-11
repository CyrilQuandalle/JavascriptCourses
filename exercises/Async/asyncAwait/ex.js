function fakeAjax (url, cb) {
  const fakeRsponses = {
    'file1': 'The first text',
    'file2': 'The middle text',
    'file3': 'The last text'
  }
  const randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000

  console.log('Requesting: ' + url)

  setTimeout(function () {
    cb(fakeRsponses[url])
  }, randomDelay)
}

function output (text) {
  console.log(text)
}

// **************************************

function getFile (file) {
  // what do we do here?
}

// request all files at once in "parallel"
