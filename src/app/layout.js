import Schema from "./Schema";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: " Watch and chat with Netflix watch party extension ",
  description:
    "Netflix watch party extension allows friends and family to watch it together, even when they are far apart. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/logo.svg" />
        <link
          rel="canonical"
          href="https://www.netflixwatchparty.com/"
        />

        <meta
          property="og:url"
          content="https://www.netflixwatchparty.com/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Netflix watch party " />
        <meta
          property="og:description"
          content="Netflix watch party extension allows friends and family to watch it together, even when they are far apart. "
        />
        <meta
          property="og:image"
          content="https://www.netflixwatchparty.com/main-logo.svg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="netflixwatchparty.com"
        />
        <meta
          property="twitter:url"
          content="https://www.netflixwatchparty.com/"
        />
        <meta name="twitter:title" content="Netflix watch party " />
        <meta
          name="twitter:description"
          content="Netflix watch party extension allows friends and family to watch it together, even when they are far apart. "
        />
        <meta
          name="twitter:image"
          content="https://www.netflixwatchparty.com/main-logo.svg"
        />
      </head>
      <body>
        <Schema />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
