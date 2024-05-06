brew install k6

k6 run webflow.js

K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run webflow.js

K6_BROWSER_HEADLESS=false k6 run webflow.js

k6 run --out json=resules.json webflow.js

k6 run --verbose=false webflow.js



