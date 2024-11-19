import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/explore-map">Explore Map</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
