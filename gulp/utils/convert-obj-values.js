export const convertObjValues = (object) => {
  const newObject = {}

  for (const key in object) {
    if (object[key]) {
      newObject[key] = String(object[key])

      continue
    }

    newObject[key] = 'false'
  }

  return newObject
}
