export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <h1>Home Group Layout</h1>
          <main>{children}</main>
        </body>
      </html>
    )
  }