import { renderToHtml } from 'jsxte'

function routing (listPages) {
  const obj = {}

  for (const page of listPages) {
    obj[page.tag.name.toLowerCase()] = renderToHtml(page)
  }

  return obj
}

export {
  routing
}
