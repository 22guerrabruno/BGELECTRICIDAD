import { Great_Vibes, Raleway, Oswald } from 'next/font/google';

const vibes_init = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-vibes',
  display: 'swap',
});

const raleway_init = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-raleway',
  display: 'swap',
});

const oswald_init = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
});

export const vibes = vibes_init.variable;
export const raleway = raleway_init.variable;
export const oswald = oswald_init.variable;
