import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../sections/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CarpTravel. Uncover Carpathian’s Secrets.",
  description:
    "7 day journey. We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!",
  icons: {
    icon: [
      {
        type: "image/x-icon",
        url: "/img/favicon.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        type: "image/png",
        url: "/img/favicon.png",
        media: "(prefers-color-scheme: light)",
        sizes: "32x32",
      },
      {
        type: "image/x-icon",
        url: "/img/favicon-dark.ico",
        media: "(prefers-color-scheme: dark)",
      },
      {
        type: "image/png",
        url: "/img/favicon-dark.png",
        media: "(prefers-color-scheme: dark)",
        sizes: "32x32",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
