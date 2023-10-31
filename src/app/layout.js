import Schema from "./Schema";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: " Watch and chat with Netflix watch party extension ",
  description:
    "Netflix watch party extension allows friends and family to watch it together, even when they are far apart. ",
  openGraph: {
    title: " Watch and chat with Netflix watch party extension ",
    description:
      "Netflix watch party extension allows friends and family to watch it together, even when they are far apart. ",
    url: "https://www.netflixparty.net/",
    type: "website",
    images: "https://www.netflixparty.net/main-logo.svg",
  },
  alternates: {
    canonical: "https://www.netflixparty.net/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/logo.svg" />
        <meta
          name="google-site-verification"
          content="wefdcsbNQa9n1rO0IDurbEcJi_U5N6z1Z4MIllanSXM"
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-42J6ET0TSQ" />
        <Script
          id="gtm-script"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-42J6ET0TSQ');
          `,
          }}
        />
      </head>
      <body>
        <Schema />
        {children}
      </body>
    </html>
  );
}
