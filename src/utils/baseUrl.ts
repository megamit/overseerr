import getConfig from 'next/config';
import { UrlObject } from 'url';

const {
  publicRuntimeConfig: { basePath = '' },
} = getConfig();

declare type Url = string | UrlObject;

export default function baseUrl(url: UrlObject): UrlObject;
export default function baseUrl(url: string): string;
export default function baseUrl(url: Url): Url;
export default function baseUrl(url: Url): Url {
  if (typeof url === 'string') {
    return basePath + url;
  }

  url.pathname = basePath + url.pathname;
  return url;
}
