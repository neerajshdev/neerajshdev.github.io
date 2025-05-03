import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Android Developer Portfolio",
  description: "Personal portfolio website for an Android developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        {children}
        <Script src="https://unpkg.com/scrollreveal@4.0.9/dist/scrollreveal.min.js" />
      </body>
    </html>
  );
}
