import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import FixedCallButtons from "@/components/FixedCallButtons";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Repair Home Center",
  description: "We repair your home with care and precision.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

<head>
        {/* Include gtag.js script */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16624322208" />

        {/* Include gtag.js initialization script */}
        <Script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16624322208');
        ` }} />
               

</head>

      
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        {children}
        <FixedCallButtons />
      </body>
    </html>
  );
}
