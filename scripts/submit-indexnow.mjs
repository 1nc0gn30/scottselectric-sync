// scripts/submit-indexnow.mjs
// Submits all 31 canonical site URLs to Bing & IndexNow search engine protocol

const HOST = 'scottselectric.pro';
const KEY = '8de8644e2b484a7a9d260db1629248d2';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URL_LIST = [
  `https://${HOST}/`,
  `https://${HOST}/services/`,
  `https://${HOST}/services/emergency-electrician-757/`,
  `https://${HOST}/services/electrical-panel-upgrades/`,
  `https://${HOST}/services/ev-charger-installation/`,
  `https://${HOST}/services/whole-home-generators/`,
  `https://${HOST}/services/pool-hot-tub-wiring/`,
  `https://${HOST}/services/historic-home-rewiring/`,
  `https://${HOST}/services/meter-base-weatherhead-repair/`,
  `https://${HOST}/services/ceiling-fan-chandelier-installation/`,
  `https://${HOST}/services/subpanel-workshop-wiring/`,
  `https://${HOST}/services/whole-home-surge-protection/`,
  `https://${HOST}/services/electrical-code-inspections/`,
  `https://${HOST}/services/custom-lighting-installation/`,
  `https://${HOST}/services/smart-home-automation/`,
  `https://${HOST}/services/commercial-electrical/`,
  `https://${HOST}/guides/757-electrical-cost-guide/`,
  `https://${HOST}/guides/757-electrical-permits-dominion-energy/`,
  `https://${HOST}/virginia-beach-electrician/`,
  `https://${HOST}/norfolk-electrician/`,
  `https://${HOST}/chesapeake-electrician/`,
  `https://${HOST}/newport-news-electrician/`,
  `https://${HOST}/hampton-electrician/`,
  `https://${HOST}/portsmouth-electrician/`,
  `https://${HOST}/suffolk-electrician/`,
  `https://${HOST}/faqs/`,
  `https://${HOST}/ax/`,
  `https://${HOST}/about/`,
  `https://${HOST}/contact/`,
  `https://${HOST}/privacy/`,
  `https://${HOST}/terms/`
];

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: URL_LIST
};

async function submitToIndexNow() {
  console.log(`Preparing IndexNow Submission for ${HOST} (${URL_LIST.length} URLs)...`);
  const endpoints = [
    'https://api.indexnow.org/IndexNow',
    'https://www.bing.com/indexnow'
  ];

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload)
      });
      console.log(`${endpoint} -> ${response.status} ${response.statusText}`);
    } catch (err) {
      console.error(`Error submitting to ${endpoint}:`, err.message);
    }
  }
}

submitToIndexNow();
