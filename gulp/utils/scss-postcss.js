import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import minmax from 'postcss-media-minmax'

export const scssPostcss = async (source, resolveDir) => {
  const { css } = await postcss([autoprefixer, minmax]).process(source, {
    from: undefined
  })

  return css
}
