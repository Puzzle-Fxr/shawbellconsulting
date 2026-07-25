export type ArticleSection = {
  heading: string;
  body: string;
  imageUrl?: string; // Optional: Image for this specific section
  imageAlt?: string;  // Optional: Accessibility text for the section image
  sources?: string[];
};

export interface ArticleContent {
  title: string;
  summary: string;
  bannerUrl?: string; // Optional: Main image at the top of the article
  bannerAlt?: string;  // Optional: Accessibility text for the banner
  sections: ArticleSection[];
}

const content: ArticleContent = {
  title: 'The Impact Of The Current Iran Situation On Renewable Energy Sources',
  summary: 'The ongoing geopolitical tensions in Iran have far-reaching implications for the global renewable energy sector. This article explores how these developments affect energy markets, investment strategies, and the transition to sustainable energy sources.',
  bannerUrl: '/images/articles/iran_situation_banner.jpg',
  bannerAlt: 'A symbolic representation of renewable energy sources amidst geopolitical tensions',
  sections: [
    {
      heading: "1. The Iran Situation has regressed into a Zero Tolerance military standoff. As of Thursday, April 23, 2026, energy markets are directly reacting to the reported escalation in the naval rules of engagement. ",
      body: "• <b>Renewed Push for Energy Sovereignty</b>: Brent crude prices hit a volatile peak of $102.85/bbl today, after President Trump issued a <b>shoot-to-kill order</b> to the U.S. Navy against any vessels suspected of mine-laying in the Strait of Hormuz<sup>1</sup>This unpredictability reinforces the conclusion by institutional investors and advisors, including the IEEFA, that local Renewable Energy is the only structural hedge against a market where energy security depends on active lethal enforcement, and ceasefires on land do not guarantee safety at sea.<sup>2</sup><br /><br />\
       • <b>Green Hydrogen Competitiveness</b>: Natural gas prices remain at extreme highs as the U.K. and France convene a 30-nation conference on April 22, 2026 to address the undersea mines currently choking the Strait. These circumstances keep <b>Green Hydrogen</b> economically competitive. Ghana, with its <b>21GW potential</b>, is positioned as a primary Green Fuel Hub for a Europe currently facing a 1-in-10 fuel stockpiling crisis<sup>3</sup>.<br /><br />\
       • <b>Agrivoltaics as a Resilience Buffer</b>: With Iran vowing on 23rd April that no reopening of the Strait is possible as long as the U.S. blockade continues, fertilizer and urea exports remain paralyzed. <b>Agrivoltaics</b> (solar-integrated farming) are favoured to allow for the reduction and elimination of total irrigation energy costs. Agrivoltaics might remain the most viable way for Ghanaian farmers to lower their total operational overhead and survive the 9.6% inflation shock projected for the end of 2026.<sup>4</sup> Agrivoltaics would serve as a vital buffer, as ECG's current maintenance works across Tema, Central, and Accra West, highlight the ongoing need for decentralized, off-grid power solutions.<sup>5</sup>",
      // No image for this section
      sources: [
        "LiveMint: Trump orders Navy to 'shoot and kill' any boat suspected of laying mines in Hormuz(1)",
        "Times of India: 'No reopening possible': Iran rules out resuming Hormuz passage while US blockade persists(2)",
        "South Carolina Public Radio: Ships attacked in Strait of Hormuz after ceasefire extension (April 22, 2026)(3)",
        "IC Group: Ghana Macro Risk Flash: Gold Windfall or Oil Price Shock?(4)",
        "Modern Ghana: Areas to be affected by ECG's planned maintenance today - April 23(5)",
      ]
    },
    {
      heading: "2. Conversely, the Green Transition and Renewable Energy Sources remain critically tethered to the very petroleum supply chains currently under threat.",
      body: "• <b>The Synthetic Graphite Bottleneck</b>: Despite the ceasefire, the U.S. Navy continues to enforce a strict blockade of Iranian ports, specifically boarding the sanctioned tanker <b>Majestic X</b> in the Indian Ocean on <b>April 23, 2026.</b><sup>6</sup>  Production of synthetic graphite for EV batteries continues to suffer from the Infrastructure Scars of earlier strikes. This sustained global maritime enforcement keeps the supply of <b>calcined petroleum coke</b> - the precursor for EV battery graphite, at critical lows, ensuring battery price inflation through the remainder of 2026.  Indeed, the global supply of calcined petroleum coke remains in a deficit position that will take long and difficult months to repair, according to recent White House briefings.<sup>7</sup><br /><br />\
      • <b>Mineral Refining Vulnerabilities</b>: The High-Pressure Acid Leaching (HPAL) process which is used to refine nickel, cobalt, and copper for batteries, relies heavily on sulphur, which is another byproduct of oil refining.  With nearly 21% of global oil passing through the now restricted Strait, sulphur remains a global price setter, keeping the cost-efficiency of renewable storage under pressure.<sup>8</sup><br /><br />\
      • <b>Petrochemical Input Inflation</b>: Beyond batteries, petroleumbased polymers and resins are essential for high-performance solar panel backsheets and wind turbine blades. However, their costs are affected by Refining Margin Blowout (RMB). RMB is the widening gap between crude oil costs and refined product prices. This has increased petrochemical input costs such as plastics and resins. As a result, capital expenditure for new renewable energy installations in 2026 may still rise, due to the ongoing standstill in the Gulf.<sup>9</sup>",
      sources: [
        "LiveMint: Trump orders Navy to 'shoot and kill' any boat suspected of laying mines in Hormuz(6)",
        "Gulf News: US-Iran ceasefire on edge: Trump warns fighting may resume (April 21, 2026)(7)",
        "Meyka: U.S. Navy Seizes Iranian Ship April 21: Oil Prices Surge 4%(8)",
        "Associated Press: Brent oil tops US$100 on uncertainty about the Iran war (April 22, 2026)(9)",
      ]
    },
    {
      heading: "3. As of April 21, 2026, the landed cost of green technology in Ghana faces a new wave of uncertainty.",
      body: "• <b>Logistics Inflation</b>:  Maritime insurers have not lowered the premiums for war risk cover, as the threat of Iran targeting any approaching vessels remains active.<sup>10,11</sup> Indeed, while the Strait is open on paper, the U.S. tripling its mine-sweeping efforts and authorizing lethal force as of 23rd April, has solidified the $1 billion <b>War Risk insurance cover as a permanent cost.</b><sup>12</sup>. For Ghana, the <b>8-15-day Cape of Good Hope delay</b> is now the confirmed baseline for all solar and EV component shipments.<sup>13</sup><br /><br />\
      • <b>Aluminium Supply Gaps<b/>: Middle Eastern primary aluminium remains a casualty of regional damage, with forecasts holding near $4,000/t. However, in a major hopeful move for Ghanaian consumers, the PURC's 4.81% reduction in electricity tariffs (effective April 1, 2026)<sup>14</sup> and the new commercial EV charging tariff (201.6 GHp/kWh),<sup>15</sup> should significantly improve the operational affordability of EVs in Ghana, even as upfront hardware costs remain high.<sup>16</sup>",
      sources: [
        "Meyka: U.S. Navy Seizes Iranian Ship April 21: Oil Prices Surge 4% (April 21, 2026).(10)",
        "https://www.theguardian.com/world/2026/apr/21/tuesday-briefing-what-it-might-take-for-lasting-peace-between-the-us-andiran#:~:text=In%20today's%20newsletter%3A%20Our%20diplomatic,Good%20morning. (11)",
        "The Hindu: Trump orders U.S. Navy to 'shoot, kill' small boats in Strait of Hormuz (April 23, 2026).(12)",
        "https://www.gbcghanaonline.com/features/iran-attacks-ships-in-strait-of-hormuz-after-trump-extends-ceasefire/2026/ (13)",
        "Ghanaian Times: PURC reduces electricity tariffs by 4.81% and water by 3.06% (March 13/April 1, 2026) (14)",
        "Asaase Radio: PURC announces utility reductions, introduces first-ever EV charging rate (April 2026). (15)",
        "https://citinewsroom.com/2026/03/ghana-introduces-first-commercial-ev-chargingtariff/#:~:text=The%20introduction%20of%20the%20EV,the%20PURC's%20routine%20quarterly%20review (16)",
      ]
    },
    {
      heading: "A RESILIENT PATH FORWARD FOR GHANA",
      body: "As of <b>April 23, 2026</b>, the lesson for Ghana is stark: a diplomatic ceasefire on land has been replaced by a shoot-to-kill directive at sea. The vow by Iran to keep the Strait closed during the blockade, proves that the status quo ante is gone. By leveraging its <b>21GW renewable potential,</b> implementing the programmes embodied in the <i>National Energy Transition Framework</i> and pursuing its associated renewable energy commitments, Ghana would be building a localized foundation that should ensure that it is no longer a price-taker on the global stage. With an economy powered by our own sun and wind, the fate of distant straits will have little or no impact on the country's local circumstances and the well-being of its citizens.",
      // No image for this section
    },
  ],
};

export default content;
