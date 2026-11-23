/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/warehouse` | `/warehouse`; params?: Router.UnknownInputParams; } | { pathname: `/stock-in/add-item`; params?: Router.UnknownInputParams; } | { pathname: `/stock-in/create`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/warehouse` | `/warehouse`; params?: Router.UnknownOutputParams; } | { pathname: `/stock-in/add-item`; params?: Router.UnknownOutputParams; } | { pathname: `/stock-in/create`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/warehouse${`?${string}` | `#${string}` | ''}` | `/warehouse${`?${string}` | `#${string}` | ''}` | `/stock-in/add-item${`?${string}` | `#${string}` | ''}` | `/stock-in/create${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString | Router.ExternalPathString | `/_sitemap` | `${'/(tabs)'}` | `/` | `${'/(tabs)'}/warehouse` | `/warehouse` | `/stock-in/add-item` | `/stock-in/create`; params?: Router.UnknownInputParams; };
    }
  }
}
