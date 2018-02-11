function fakeAjax (url, cb) {
  const fakeResponses = {
    'file1': 'The first text',
    'file2': 'The middle text',
    'file3': 'The last text'
  }
  const randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000

  console.log('Requesting: ' + url)

  setTimeout(function () {
    cb(fakeResponses[url])
  }, randomDelay)
}

function output (text) {
  console.log(text)
}

// **************************************
// The old-n-busted callback way

function getFile (file) {
  fakeAjax(file, function (text) {
    // what do we do here?
  })
}

// request all files at once in "parallel"
getFile('file1')
getFile('file2')
getFile('file3')
