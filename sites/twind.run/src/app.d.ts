// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
/// <reference types="@sveltejs/kit" />
/// <reference types="@sveltejs/adapter-cloudflare" />

declare namespace App {
  interface Platform {
    env: {
      // WORKSPACES: KVNamespace
      WORKSPACES: R2Bucket
      // YOUR_DURABLE_OBJECT_NAMESPACE: DurableObjectNamespace
    }
  }
}

declare module 'es-module-lexer/js' {
  export const parse: typeof import('es-module-lexer')['parse']
  export const init: typeof import('es-module-lexer')['init']
}
