/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/warehouse` | `/warehouse`; params?: Router.UnknownInputParams; } | { pathname: `/kiem-hang`; params?: Router.UnknownInputParams; } | { pathname: `/nhap-hang/good-receipt`; params?: Router.UnknownInputParams; } | { pathname: `/nhap-hang`; params?: Router.UnknownInputParams; } | { pathname: `/xuat-hang`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/warehouse` | `/warehouse`; params?: Router.UnknownOutputParams; } | { pathname: `/kiem-hang`; params?: Router.UnknownOutputParams; } | { pathname: `/nhap-hang/good-receipt`; params?: Router.UnknownOutputParams; } | { pathname: `/nhap-hang`; params?: Router.UnknownOutputParams; } | { pathname: `/xuat-hang`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/warehouse${`?${string}` | `#${string}` | ''}` | `/warehouse${`?${string}` | `#${string}` | ''}` | `/kiem-hang${`?${string}` | `#${string}` | ''}` | `/nhap-hang/good-receipt${`?${string}` | `#${string}` | ''}` | `/nhap-hang${`?${string}` | `#${string}` | ''}` | `/xuat-hang${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString | Router.ExternalPathString | `/_sitemap` | `${'/(tabs)'}` | `/` | `${'/(tabs)'}/warehouse` | `/warehouse` | `/kiem-hang` | `/nhap-hang/good-receipt` | `/nhap-hang` | `/xuat-hang`; params?: Router.UnknownInputParams; };
    }
  }
}
