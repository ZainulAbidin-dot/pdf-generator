module.exports = {
  page1: {
    title: 'Page 1',
    body: `
Prepared For:
Name: Alex Ly
Email: lyalex@gmail.com
Phone: +1 (480) 249-8008
Property Address: 867 Mokulua Dr, Kailua, HI 96734
+1(406) 626-7978 	hey@costsegregationguys.com
Depreciation
Analysis

-- 1 of 8 --
`
  },

  page2: {
    title: 'Page 2',
    content: {
      title: "How Does Cost Segregation Work?",
      intro: [
        "The goal of a cost segregation study is to identify all property-related costs that can be depreciated over five, seven and 15 years—or written off faster using bonus depreciation, which is 60% in 2024 and 100% in 2025.",
        "To accomplish this, your advisory team reviews available property records, inspections, cost details and blueprints and may also perform a physical inspection of the property."
      ],
      example: "For example: you buy an office building for $1,000,000. Land isn’t depreciable, so you decide the land is worth $200,000, and the building is worth $800,000.",
      breakdownTitle: "Example Depreciation Breakdown\n(without Cost Segregation Study):",
      breakdown: [
        { label: "Cost Segregation Study Example", value: "$800,000", rawValue: 800000, color: "#1e3a8a" },
        { label: "Land", value: "$200,000", rawValue: 200000, color: "#93c5fd" }
      ]
    }
  },

  page3: {
    title: 'With Cost Segregation',
    // Structured data for dynamic rendering
    content: {
      chart: {
        labels: ["Building", "Land", "5‑year Property", "7‑year Property", "15‑year Property"],
        values: [500000, 200000, 100000, 100000, 100000],
        colors: ["#1e3a8a", "#3b82f6", "#93c5fd", "#bfdbfe", "#dbeafe"]
      },
      legend: [
        "Land",
        "Building",
        "Bldg Aspects that can be depreciated over a shorter period of time",
        "Bldg Aspects that can be depreciated over a shorter period of time",
        "Bldg Aspects that can be depreciated over a shorter period of time"
      ],
      intro: "After completing the study, your advisory team identifies the following costs:",
      costList: [
        "$100,000 of interior fixtures and finishes that can be depreciated over five years",
        "$100,000 of interior fixtures that can be depreciated over seven years",
        "$100,000 of land improvements that can be depreciated over 15 years"
      ],
      analysisPara1: "Based on the study, $300,000 of the $800,000 building is eligible for bonus depreciation, so 60% of the cost could be written off in 2024. Assuming a 37% tax rate, that would result in tax savings of $72,634 over depreciating the building with no cost segregation (($216,821 – $20,512.82) x 37%).",
      analysisPara2: "However, even if you didn’t take advantage of bonus depreciation, those items could be depreciated over a shorter recovery period using an accelerated depreciation method. As a result, your estimated first-year depreciation write-off would be:",
      breakdownList: [
        "Building ($500,000 / 39 years): $12,820.51",
        "• 5-year property ($100,000 / 5 years): $20,000",
        "• 7-year property ($100,000 / 7 years): $14,285.71",
        "• 15-year property ($100,000 / 15 years): $5,000"
      ],
      total: "Total first-year depreciation expense: $52,106.23 (sample)"
    },
    // Raw text kept for reference or if needed elsewhere
    body: `
www.costsegregationguys.com 	Page 03
Example Depreciation Breakdown
(with Cost Segregation Study):
Building ($500,000 / 39 years): $12,820.51
• 5-year property ($100,000 / 5 years): $20,000
• 7-year property ($100,000 / 7 years): $14,285.71
• 15-year property ($100,000 / 15 years): $5,000
Total first-year depreciation expense: $52,106.23 (sample)
After completing the study, your advisory team identifies the
following costs:
$100,000 of interior fixtures and finishes that can be depreciated over five years
$100,000 of interior fixtures that can be depreciated over seven years
$100,000 of land improvements that can be depreciated over 15 years
Based on the study, $300,000 of the $800,000 building is eligible for bonus depreciation, so 60% of
the cost could be written off in 2024. Assuming a 37% tax rate, that would result in tax savings of
$72,634 over depreciating the building with no cost segregation (($216,821 – $20,512.82) x 37%).
However, even if you didn’t take advantage of bonus depreciation, those items could be depreciated
over a shorter recovery period using an accelerated depreciation method. As a result, your estimated
first-year depreciation write-off would be:
$100,000
$100,000
$100,000
$500,000
$200,000

-- 3 of 8 --
`
  },

  page4: {
    title: 'Page 4',
    content: {
      title: "Depreciation Estimate with Cost Segregation Guys",
      intro: "Based on preliminary analysis, reclassifying assets for accelerated depreciation is expected to yield significant tax benefits. While actual savings may vary based on specific property characteristics and data, our methodology aligns with industry-standard outcomes for properties of this type.",
      analysisTitle: "Estimated Depreciation Analysis (100% Bonus Depreciation – 2025)",
      scenarios: [
        {
          name: "Moderate Scenario (25% Reclassified)",
          details: [
            { label: "Reclassified to 5- & 15-Year Property", value: "$761,250" },
            { label: "Bonus Depreciation (100%)", value: "$761,250" },
            { label: "First-Year Accelerated Depreciation", value: "$761,250" },
            { label: "Estimated Tax Savings (@37%)", value: "$281,663" }
          ]
        },
        {
          name: "Moderate Scenario (30% Reclassified)",
          details: [
            { label: "Reclassified to 5- & 15-Year Property", value: "$913,500" },
            { label: "Bonus Depreciation (100%)", value: "$913,500" },
            { label: "First-Year Accelerated Depreciation", value: "$913,500" },
            { label: "Estimated Tax Savings (@37%)", value: "$337,995" }
          ]
        }
      ],
      propertyDetails: [
        { label: "Property Type", value: "Residential (1–4 Units)" },
        { label: "Asset Class", value: "Single Family Home" },
        { label: "Building Square Footage", value: "Not provided" },
        { label: "Lot Size", value: "Not provided" },
        { label: "Lease Type", value: "Short-Term Rental" },
        { label: "Year Built", value: "Not provided" },
        { label: "Purchase Date", value: "May 21, 2025" },
        { label: "Placed in Service", value: "May 31, 2025" },
        { label: "Purchase Price", value: "$5,000,000" },
        { label: "Specific Renovation Costs", value: "$45,000" },
        { label: "Total Cost Basis", value: "$5,045,000" },
        { label: "Land Value (Client-Provided Estimate)", value: "$2,000,000" },
        { label: "Total Depreciable Basis", value: "$3,045,000" },
        { label: "Bonus Depreciation", value: "100% (Placed in Service in 2025)" },
        { label: "Tax Year", value: "2025" },
        { label: "Marginal Tax Rate", value: "37%" },
        { label: "Depreciation Method", value: "MACRS (Residential – 27.5-Year)" }
      ],
      disclaimer: "The exact depreciation amount may vary depending on the short-life assets present in the property. Please note that this estimate is preliminary and subject to adjustment based on a detailed cost segregation analysis."
    }
  },

  page5: {
    title: 'Page 5',
    content: {
      auditSupport: {
        title: "Audit Support",
        paragraphs: [
          "Reaching out to the IRS before informing us about the audit will also void the audit support. Our audit support will encompass all requisite details affirming the initial numbers shared, incurring no additional fees except for the direct travel expenses to the property if needed. It is imperative you furnish detailed photos/videos of the property under any audit circumstances. Failure to provide photos/videos of the property will void the audit support.",
          "If you face an audit and there are questions concerning the cost segregation study procured from Cost Segregation Guys, we will extend our audit support to you. We offer life time Audit support for our valued clients."
        ]
      },
      scopeOfWork: {
        title: "Scope of Work",
        items: [
          {
            id: "1",
            title: "Property Analysis:",
            description: "Detailed review of property assets to identify components eligible for shorter depreciation periods. - Application of proven methodologies to maximize depreciation benefits."
          },
          {
            id: "2",
            title: "Cost Segregation Study Report:",
            description: "Comprehensive documentation outlining reclassified assets and projected depreciation schedules. - All required materials to support depreciation claims during tax filing."
          },
          {
            id: "3",
            title: "Tax Support:",
            description: "Assistance integrating the study results into your tax filings. - Support from our team for any queries related to the study during the tax preparation process."
          }
        ]
      }
    }
  },

  page6: {
    title: 'Page 6',
    content: {
      timeline: {
        title: "Project Timeline",
        text: "Upon receipt of payment, the data collection process will begin immediately. The study will typically be completed within 5-7 business days, depending on the timely submission of the required documentation."
      },
      fees: {
        title: "Fees and Payment Terms:",
        amount: "$7,500"
      },
      terms: [
        "Circumstances may arise that will require us to do more work than reasonably contemplated by this engagement. Some of the more common circumstances include, but are not limited to: an intervening change in tax laws, regulations, judicial decisions, or administrative pronouncements, extensive due diligence efforts, errors in your records, failure of your staff to furnish accurate and complete information in a timely manner, insufficient notice of your inability to meet scheduling commitments, and unforeseen events.",
        "We require 50% of payment along with the executed engagement letter for our project team to begin work on your project. Upon completion of our study, we will provide a summary of results and balance of payment is due.",
        "In the event of a payment default, if the Company fails to meet its payment obligations under this Engagement Letter within 10 days of receiving written notice of delinquency, Cost Segregation Guys reserves the right to:",
        "Suspend Services: Performance of services will be paused until the account is brought up to date, including any additional retainer we may require for continuing services."
      ]
    }
  },

  page7: {
    title: 'Page 7',
    content: {
      termination: [
        "Terminate the Engagement: If services are terminated due to nonpayment, you will be responsible for compensating us for all recoverable damages under contract law. These damages include full payment for services rendered and profits that would have accrued from the completion of the contract.",
        "If services are suspended, they will not resume until all outstanding balances are cleared. In cases of termination, you will remain liable for any unpaid fees and associated costs.",
        "Please confirm your acceptance of this Engagement Letter, including the Terms and Conditions in Attachment A, by signing below and returning the Engagement Letter to me. We look forward to the opportunity to serve you."
      ],
      closing: [
        "We appreciate your understanding and adherence to these terms to ensure a smooth collaboration. If you have any questions or concerns, please feel free to reach out.",
        "Very truly yours,"
      ],
      sender: {
        name: "Ivy Y.",
        title: "Cost Segregation Study Specialist",
        company: "Cost Segregation Guys",
      },
      acceptance: {
        title: "Agreed and Accepted",
        text: "The foregoing letter fully describes our understanding and is accepted by us.",
        fields: [
          { label: "By:", value: "_________________________________" },
          { label: "Title:", value: "________________________________" },
          { label: "Date:", value: "_____________________________" }
        ]
      }
    }
  },

  page8: {
    title: 'Page 8',
    content: {
      title: "ENGAGEMENT TERMS AND CONDITIONS",
      terms: [
        "1. Cost Segregation Guys will conduct a virtual \"walk-through\", survey of only those areas that are readily observable, easily accessible, and deemed safe by Cost Segregation Guys at the time of the site visit. Facades will be surveyed from grade or roof terraces, if any. Cost Segregation Guys’ survey will not include indoor air quality, issues regarding mold or fungus, hazardous wastes, EMF, high voltage lines, power sources, toxic materials, or asbestos (whether within the building or on the site).",
        "2. Included in this agreement, Cost Segregation Guys will provide for audit representation. Should this cost segregation study be selected for audit, Cost Segregation Guys will defend the report to the full extent necessary, at no additional cost.",
        "3. The attached proposal and these Terms and Conditions embody the complete understanding of the parties. All prior negotiations, agreements and provisions, whether oral or written, that are not expressly incorporated into the attached proposal and these Terms and Conditions are null and void. Neither the proposal, Scope of Work, nor Terms and Conditions can be modified except by the written agreement of both parties. Any purchase order or similar document issued by the Client is not accepted by Cost Segregation Guys and is null and void. In the event of any conflict or inconsistency between the provisions set forth in the engagement letter and these Terms and Conditions, the provisions of the engagement letter shall govern.",
        "4. When the written report is submitted to the Client that satisfies the requirements of the Scope of the Work the draft report shall be deemed acceptable and final, unless Client responds to Cost Segregation Guys within 10 working days from receipt of that report and unless the Client responds to Cost Segregation Guys by the end of the period, the report will be considered final and will be issued accordingly.",
        "5. Client shall indemnify and hold harmless Cost Segregation Guys and its principals, employees, agents, representatives, successors and assigns, from and against any and all claims, liabilities, losses, damages, costs and expenses including, without limitation, reasonable legal fees and costs of litigation relating to the use made by the Client of Cost Segregation Guys Services, except to the extent that it is finally judicially determined that such claims, liabilities, losses, damages, costs or expenses were caused by bad faith or willful misconduct on the part of Cost Segregation Guys Services,, its principals, employees, agents or representatives. Under no circumstances shall Cost Segregation Guys be held liable for losses or damages incurred by Client through any use of the cost segregation report prepared by Cost Segregation Guys Services, pursuant to this agreement other than for the purpose of justifying accelerated depreciation on federal and related state and local tax returns.",
        "Client acknowledges that Cost Segregation Guys is a limited liability company, and Client agrees that any claim made by Client, its successors or assigns arising out of any act of omission and or its principals, employees, agents or representatives in the execution or performance of the Agreement shall be made against us and not against such principal, employee, agent or representative."
      ]
    }
  }

};
