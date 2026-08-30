// scripts/submit-indexnow.mjs
// Submits all 21 site URLs to Bing & IndexNow search engine protocol

const HOST = 'scottselectric.pro';
const KEY = '8de8644e2b484a7a9d260db1629248d2';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URL_LIST = [
  `https://${HOST}/`,
  `https://${HOST}/services/`,
  `https://${HOST}/services/electrical-panel-upgrades/`,
  `https://${HOST}/services/ev-charger-installation/`,
  `https://${HOST}/services/whole-home-generators/`,
  `https://${HOST}/services/custom-lighting-installation/`,
  `https://${HOST}/services/smart-home-automation/`,
  `https://${HOST}/services/commercial-electrical/`,
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
  console.log(`🚀 Preparing IndexNow Submission for ${HOST}...`);
  console.log(`🔑 Key: ${KEY}`);
  console.log(`📄 Key Location: ${KEY_LOCATION}`);
  console.log(`📋 Total URLs: ${URL_LIST.length}`);

  const endpoints = [
    'https://api.indexnow.org/IndexNow',
    'https://www.bing.com/indexnow'
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`\n📡 Submitting to ${endpoint}...`);
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(payload)
      });

      console.log(`Status: ${response.status} ${response.statusText}`);
      if (response.status === 200 || response.status === 202) {
        console.log(`✅ Success! URLs submitted to ${endpoint}`);
      } else {
        const text = await response.text();
        console.log(`ℹ️ Response details: ${text || 'No response body'}`);
      }
    } catch (err) {
      console.error(`❌ Error submitting to ${endpoint}:`, err.message);
    }
  }
}

submitToIndexNow();
