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
      heading: '1. The Iran Situation has regressed into a Zero Tolerance military standoff. As of Thursday, April 23, 2026, energy markets are directly reacting to the reported escalation in the naval rules of engagement. ',
       body: '• <b>Renewed Push for Energy Sovereignty</b>: Brent crude prices hit a volatile peak of $102.85/bbl today, after President Trump issued a shoot-to-kill order to the U.S. Navy against any vessels suspected of mine-laying in the Strait of Hormuz1 This unpredictability reinforces the conclusion by institutional investors and advisors, including the IEEFA, that local Renewable Energy is the only structural hedge against a market where energy security depends on active lethal enforcement, and ceasefires on land do not guarantee safety at sea.<sup>2</sup><br /><br />• Green Hydrogen Competitiveness: Natural gas prices remain at extreme highs as the U.K. and France convene a 30-nation conference on April 22, 2026 to address the undersea mines currently choking the Strait. These circumstances keep Green Hydrogen economically competitive. Ghana, with its 21GW potential, is positioned as a primary Green Fuel Hub for a Europe currently facing a 1-in-10 fuel stockpiling crisis3.<br /><br />• Agrivoltaics as a Resilience Buffer: With Iran vowing on 23rd April that no reopening of the Strait is possible as long as the U.S. blockade continues, fertilizer and urea exports remain paralyzed. Agrivoltaics (solar-integrated farming) are favoured to allow for the reduction and elimination of total irrigation energy costs. Agrivoltaics might remain the most viable way for Ghanaian',
      // No image for this section
      // no sources for this section
    },
    {
      heading: 'What Strong Programs Include',
      body: 'Strong compliance frameworks define policies...',
      imageUrl: '/images/articles/compliance.jpg', // Placed in public/images/articles/
      imageAlt: 'Diagram showing a modern corporate compliance framework',
      sources: [
        'https://www.example.com/compliance-report',
        'https://www.example.com/guidelines',
        'https://www.example.com/best-practices'
      ]
    },
    {
      heading: 'Our Recommendation',
      body: 'We work with clients to design practical compliance systems...',
      sources: [
        'https://www.example.com/recommendations'
      ]
    },
  ],
};

export default content;
