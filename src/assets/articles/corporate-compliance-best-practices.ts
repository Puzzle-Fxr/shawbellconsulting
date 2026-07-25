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
  title: 'Corporate Compliance Best Practices for 2025',
  summary: 'Forward-looking compliance programs are built around clear ownership, data discipline, and a willingness to adapt quickly to new requirements.',
  bannerUrl: '/images/articles/compliance_banner.jpg', // Placed in public/images/articles/
  bannerAlt: 'Corporate team analyzing compliance data charts',
  sections: [
    {
      heading: 'From Reactive to Proactive',
      body: 'Organizations can no longer rely on annual reviews...',
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
