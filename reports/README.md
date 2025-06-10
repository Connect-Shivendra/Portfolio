have you ensure that it's on the right s# Performance Reports

This directory contains various performance and quality reports for the portfolio website.

## Lighthouse Reports

Lighthouse reports are stored in the `lighthouse` subdirectory. These reports provide insights into:
- Performance
- Accessibility
- Best Practices
- SEO

### How to Add a New Lighthouse Report

1. Run Lighthouse in Chrome DevTools
2. Click "Download Report" in the Lighthouse panel
3. Save the HTML file in the `reports/lighthouse` directory with a descriptive name:
   ```
   reports/lighthouse/YYYY-MM-DD-description.html
   ```
   Example: `reports/lighthouse/2024-06-10-homepage.html`

### Report Naming Convention

Use the following format for report names:
```
YYYY-MM-DD-[page-name]-[type].html
```

Examples:
- `2024-06-10-homepage.html`
- `2024-06-10-blog-post.html`
- `2024-06-10-mobile.html`

### Tracking Improvements

When adding new reports, consider:
1. Comparing with previous reports
2. Documenting any significant changes
3. Tracking improvements over time
4. Noting any regressions

## Other Reports

This directory can also contain other types of reports:
- Performance monitoring
- Accessibility audits
- SEO analysis
- Security scans 