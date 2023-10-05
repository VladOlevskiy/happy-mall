import { NextResponse } from 'next/server';

import { i18n } from '../i18n';

import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocale(request) {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales = i18n.locales;

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // // If you have one
  if (
    [
      '/manifest.json',
      '/favicon.ico',
      '/media/icons/logo.png',
      '/media/icons/map.png',
      '/media/icons/map-mob.png',
      '/media/icons/mob-menu.png',
      '/media/pictures/hero-picture.jpg',
      '/media/pictures/hero-picture-375px.jpg',
      '/media/pictures/hero-picture-768px.jpg',
      '/media/pictures/hero-picture-1440px.jpg',
      '/media/video/video.mp4',
      '/media/pictures/poster-video.jpg',
      '/media/pictures/about-picture.jpg',
      '/media/pictures/brand-jil-sander.jpg',
      '/media/pictures/brand-zara.jpg',
      '/media/pictures/brand-karl-lagerfeld.jpg',
      '/media/pictures/backgroundNew.jpg',
      '/media/pictures/sliderPicture1.jpg',
      '/media/pictures/sliderPicture2.jpg',
      '/media/icons/arrow-top.png',
      '/media/icons/arrow-bottom.png',
      '/media/icons/arrow-right.png',
      '/media/pictures/sliderImg.png',
      '/media/icons/arrowLeftSlider.png',
      '/media/icons/arrowRightSlider.png',
      '/media/icons/iconClose.png',

      // Your other files in `public`
    ].includes(pathname)
  )
    return;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
