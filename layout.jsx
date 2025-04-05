// Root layout file for the entire application
// This wraps all pages and provides global UI elements and styles

import "./globals.css"
import { Inter } from "next/font/google"

// Load the Inter font with Latin character subset
const inter = Inter({ subsets: ["latin"] })

// Metadata for the application (SEO and browser tab info)
export const metadata = {
  title: "Expergo - Find Local Talent, Instantly",
  description:
    "Connect with skilled professionals for your immediate needs - from musicians to chefs, stylists to electricians.",
}

// RootLayout component that wraps all pages
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add Font Awesome for icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

