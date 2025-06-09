Portfolio Website to share CV for opportunities and coding skills.

# Portfolio & Blog

## Lighthouse Audits

To check performance, accessibility, and SEO:
1. Run `npm run dev` and open your site in Chrome.
2. Open DevTools > Lighthouse tab.
3. Click "Analyze page load" for a full report.

## Analytics

To add analytics (e.g., Plausible, Google Analytics), insert the script in `app/layout.js` or `app/page.js` as needed. Example for Google Analytics:

```js
// In app/layout.js or _app.js
import Script from 'next/script';

<Script
  src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
  strategy="afterInteractive"
/>
<Script id="gtag-init" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

Replace `GA_MEASUREMENT_ID` with your actual ID.
