import { rev } from '@/views/utils/rev'

type props = {
  title?: string,
  children?: JSXTE.ElementChildren
}

const Main = ({ title, children }: props) => {
  return (
    <html lang="ru">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href={'/css/styles.css' + rev()} />
      <title>{title ?? 'Современная сборка верстки под MVP'}</title>
    </head>
    <body>
      {children}
    </body>

    <script src={'/js/main.js' + rev()} />
    </html>
  )
}

export {
  Main
}
