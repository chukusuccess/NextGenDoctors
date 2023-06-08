import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="NextGen Doctors" />
        <meta name="twitter:card" content="NextGen Doctors" />
        <meta
          name="twitter:url"
          content="https://next-gen-doctors.vercel.app"
        />
        <meta name="twitter:title" content="NextGenDoctors" />
        <meta
          name="twitter:description"
          content="Provide Consultation from anywhere in the world"
        />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NextGen" />
        <meta
          property="og:description"
          content="Provide Consultation from anywhere in the world"
        />
        <meta property="og:site_name" content="NextGen Doctors" />
        <meta
          property="og:url"
          content="https://next-gen-doctors.vercel.app"
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
