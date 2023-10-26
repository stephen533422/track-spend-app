import './globals.css'

export const metadata = {
  title: 'React practice project',
  description: 'Practice to create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
