// app/layout.js
import "./globals.css";

export const metadata = {
  title: "NatureNest",
  description: "Transforming Your Space Into a Green Haven",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Remix Icon CDN */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-100 text-gray-800">{children}</body>
    </html>
  );
}
