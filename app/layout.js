import "./globals.css";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${poppins.className} overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
