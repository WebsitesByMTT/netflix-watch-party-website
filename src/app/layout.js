import Schema from "./Schema";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

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
      </head>
      <body>
        <Schema />
        {children}
      </body>
    </html>
  );
}
