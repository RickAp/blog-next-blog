import { Html, Head, Main, NextScript } from 'next/document';

function Document() {
   
  return (
    <Html>
      <Head>
        {/* GTM Head */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NX3T94XP');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* GTM Body */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NX3T94XP"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
      </body>
    </Html>
  );
}

export default Document;