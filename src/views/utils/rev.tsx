import uniqueString from 'unique-string'

const rev = () => (IS_PROD ? `?${uniqueString()}` : '')

export { rev }
