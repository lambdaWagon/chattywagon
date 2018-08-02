export function getRegionFromPoint(latitude, longitude, aspectRatio) {
  const latitudeDelta = 0.00922
  const longitudeDelta = latitudeDelta * aspectRatio
  // const offset = 0.0015
  const offset = 0.0

  return {
    latitude: latitude - offset,
    longitude,
    latitudeDelta,
    longitudeDelta
  }
}

export function getRegionFromArray(points) {
  // points should be an array of { latitude: X, longitude: Y }
  const accuracy = 0.005
  let minX
  let maxX
  let minY
  let maxY

  // init first point
  ;(point => {
    minX = point.latitude
    maxX = point.latitude
    minY = point.longitude
    maxY = point.longitude
  })(points[0])

  // calculate rect
  points.forEach(point => {
    minX = Math.min(minX, point.latitude)
    maxX = Math.max(maxX, point.latitude)
    minY = Math.min(minY, point.longitude)
    maxY = Math.max(maxY, point.longitude)
  })

  const midX = (minX + maxX) / 2
  const midY = (minY + maxY) / 2
  const deltaX = maxX - minX
  const deltaY = maxY - minY

  return {
    latitude: midX,
    longitude: midY,
    latitudeDelta: deltaX + accuracy,
    longitudeDelta: deltaY + accuracy
  }
}
