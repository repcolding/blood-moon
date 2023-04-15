import { renderToHtml } from 'jsxte'

function routing(listPages) {
  const obj = {}

  for (const page of listPages) {
    obj[page.path] = renderToHtml(page.component)
  }

  return obj
}

export { routing }
