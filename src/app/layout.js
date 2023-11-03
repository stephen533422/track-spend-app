'use client'
import './globals.css';
import { AuthContextProvider } from '@/context/AuthContext'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>React practice project</title>
        <meta name='description' content='Practice to create next app' />
      </head>
      <body>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
