import '../styles/styles.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Sidebar from '../components/sidebar';
// import AnalyticsWrapper from '../components/analytics';

const kaisei = localFont({
  src: '../public/fonts/kaisei-tokumin-latin-700-normal.woff2',
  weight: '700',
  variable: '--font-kaisei',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "LeeJinWoo's Portfolio",
    template: "%s | LeeJinWoo's Portfolio",
  },
  description: 'Developer, writer, and creator.',
  openGraph: {
    title: "LeeJinWoo's Portfolio",
    description: 'Developer, writer, and creator.',
    url: 'https://leerob.io',
    siteName: "LeeJinWoo's Portfolio",
    images: [
      {
        url: 'https://leerob.io/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: "LeeJinWoo's Portfolio",
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    yandex: '14d2e73487fa6c71',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={clsx('bg-white text-black dark:bg-[#111010] dark:text-white', kaisei.variable)}>
      <body>
        <div className="root-container">
          <div className="inner-container bg mx-4 flex h-[80vh] max-w-6xl flex-col overflow-y-scroll bg-slate-900/[0.4] antialiased  tablet:flex-row tablet:py-[5%]">
            <Sidebar />
            <main className="h-max-[100%] mt-6 flex h-[100%] min-h-full min-w-0 flex-auto flex-col px-[5%] tablet:mt-0 ">
              {children}
              {/* <AnalyticsWrapper /> */}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
