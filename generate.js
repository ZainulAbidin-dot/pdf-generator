const puppeteer = require('puppeteer');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Load centralized text/data
  const proposalData = require('./data/proposalData');

  // Helper to render EJS templates
  const render = async (file, data) => {
    return ejs.renderFile(
      path.join(__dirname, 'templates', file),
      data
    );
  };

  // ---------- PAGE 1: COVER ----------
  // Convert images to base64 for embedding
  const logoPath = path.join(__dirname, 'assets/logo.png');
  const buildingPath = path.join(__dirname, 'assets/building.png');
  const logoBase64 = fs.readFileSync(logoPath).toString('base64');
  const buildingBase64 = fs.readFileSync(buildingPath).toString('base64');

  const coverHtml = await render('page-01-cover.ejs', {
    logo: `data:image/png;base64,${logoBase64}`,
    building: `data:image/png;base64,${buildingBase64}`,
    client: {
      name: 'Alex Ly',
      email: 'lyalex@gmail.com',
      phone: '+1 (480) 249-8008',
      address: '867 Mokulua Dr, Kailua, HI 96734'
    }
  });

  // ---------- PAGE 2: WITHOUT COST SEG ----------
  const page2Html = await render(
    'page-02-without-cost-seg.ejs',
    { proposalData }
  );

  // ---------- PAGE 3: WITH COST SEG ----------
  const page3Html = await render(
    'page-03-with-cost-seg.ejs',
    { proposalData }
  );


  // ---------- PAGE 4: ESTIMATED DEPRECIATION ----------
  const page4Html = await render(
    'page-04-estimated-depreciation.ejs',
    { proposalData }
  );

  // ---------- PAGE 5: AUDIT SUPPORT ----------
  const page5Html = await render(
    'page-05-audit-support.ejs',
    { proposalData }
  );

  // ---------- PAGE 6: PROJECT TIMELINE ----------
  const page6Html = await render(
    'page-06-project-timeline.ejs',
    { proposalData }
  );

  // ---------- PAGE 7: ACCEPTANCE ----------

  const signaturePath = path.join(__dirname, 'assets/signature.png');
  const signatureBase64 = fs.readFileSync(signaturePath).toString('base64');
  const page7Html = await render(
    'page-07-acceptance.ejs',
    {
      proposalData,
      signature: `data:image/png;base64,${signatureBase64}`
    }
  );

  // ---------- PAGE 8: TERMS ----------
  const page8Html = await render(
    'page-08-terms.ejs',
    { proposalData }
  );

  // Combine pages (each template is a full page)
  const finalHtml = `
    ${coverHtml}
    <div style="page-break-before: always;"></div>
    ${page2Html}
    <div style="page-break-before: always;"></div>
    ${page3Html}
    <div style="page-break-before: always;"></div>
    ${page4Html}
    <div style="page-break-before: always;"></div>
    ${page5Html}
    <div style="page-break-before: always;"></div>
    ${page6Html}
    <div style="page-break-before: always;"></div>
    ${page7Html}
    <div style="page-break-before: always;"></div>
    ${page8Html}
  `;

  await page.setContent(finalHtml, { waitUntil: 'networkidle0' });

  // Wait for Chart.js to be loaded and all charts to render
  await page.evaluate(() => {
    return new Promise((resolve) => {
      // Wait for Chart.js to be available
      const checkCharts = setInterval(() => {
        if (typeof Chart !== 'undefined') {
          clearInterval(checkCharts);
          // Give charts additional time to fully render
          setTimeout(resolve, 1500);
        }
      }, 100);

      // Timeout after 5 seconds
      setTimeout(() => {
        clearInterval(checkCharts);
        resolve();
      }, 5000);
    });
  });

  await page.pdf({
    path: 'output/proposal.pdf',
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    footerTemplate: `
      <div style="
        width:100%;
        font-size:10px;
        color:#777;
        display:flex;
        justify-content:space-between;
        padding:0 40px;">
        <span>Confidential</span>
        <span>
          Page <span class="pageNumber"></span>
          of <span class="totalPages"></span>
        </span>
      </div>
    `,
    headerTemplate: '<div></div>',
    margin: { top: '80px', bottom: '80px' }
  });

  await browser.close();
})();
