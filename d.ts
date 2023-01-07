// Assets
declare module '*.png'
declare module '*.svg'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.webp'
declare module '*.mp4'
declare module '*.webm'
declare module '*.ogg'

// Env
declare const IS_DEV
declare const IS_PROD
declare const IS_WATCH
declare const SCOPE
declare const CDN

// Custom tag
declare namespace JSX {
  interface IntrinsicElements {
    use: {
      href: string
    }
  }
}
