export function buildFun (n) {
  var res = []

  for (var i = 0; i < n; i++) {
    res.push(function () {
      console.log(i)
    })
  }
  return res
}
