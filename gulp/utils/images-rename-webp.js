const imagesRenameWebp = path => {
  const { extname } = path

  const valid = ![
    extname === '.jpeg',
    extname === '.jpg',
    extname === '.png'
  ].every(tern => tern === false)

  if (valid) {
    path.extname = '.webp'
  }
}

export {
  imagesRenameWebp
}
