import './globals.css'

export const metadata = {
  title: 'Airbnb',
  description: 'AirBnb Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
