import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.variable}>
       <head>

        <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
