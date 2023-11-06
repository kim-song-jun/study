import './globals.css'
import Link from "next/link";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="navbar">
          <Link href="/">home</Link>
          <Link href="/list">list페이지</Link>
          <Link href="/cart">cart페이지</Link>
          <Link href="/cart/payment">payment페이지</Link>
        </div>
        {children}
      </body>
    </html>
  )
}
