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
  title: 'Navigating Regulatory Change in the Financial Sector',
  summary: 'Regulatory transformation now sits at the center of strategic decision-making for financial institutions, demanding proactive governance and disciplined execution.',
  sections: [
    {
      heading: 'When a frustrated Ghanaian business executive was asked “how can sunshine come from rain?”, he glibly answered “when the rain stops”!',
      body: "By considering the deluge as an asset to be captured, rather than an inevitable crisis of infrastructural deficits and commuter frustration to be survived, businesses can truly extract sunshine from rain by:\
       Implementing value-adding business continuity arrangements\
       Investing in integrated renewable energy systems, and also by\
       Lawfully harvesting rainwater.",
    },
    {
      heading: 'Key Considerations',
      body: 'Leadership teams must align legal, risk, and operational functions around a clear implementation roadmap. That roadmap should include horizon scanning, impact assessments, policy updates, training, and control enhancements so that new obligations are translated into practical action.',
    },
    {
      heading: 'Our Perspective',
      body: 'At Shawbell Consulting, we help clients build regulatory programs that are resilient, scalable, and commercially grounded. Our approach links legal interpretation with business execution so that organizations can respond confidently and preserve strategic momentum.',
    },
    {
      heading: 'Looking Ahead',
      body: 'Institutions that invest early in regulatory readiness will be better positioned to manage emerging obligations, protect stakeholder confidence, and turn compliance into a source of competitive advantage.',
    },
  ],
};

export default content;
