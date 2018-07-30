function getBuildArray(build) {
  let buildArray = []
  for (var property in build) {
    buildArray = [...buildArray, build[property]]
  }
  return buildArray
}

module.exports = getBuildArray