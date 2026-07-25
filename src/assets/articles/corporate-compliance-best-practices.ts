type ArticleSection = {
  heading: string;
  body: string;
};

export interface ArticleContent {
  title: string;
  summary: string;
  sections: ArticleSection[];
}

const content: ArticleContent = {
  title: 'Corporate Compliance Best Practices for 2025',
  summary: 'Forward-looking compliance programs are built around clear ownership, data discipline, and a willingness to adapt quickly to new requirements.',
  sections: [
    {
      heading: 'From Reactive to Proactive',
      body: 'Organizations can no longer rely on annual reviews and patchwork controls to manage compliance expectations. A modern program requires continuous monitoring, regular reassessment, and close coordination across functions.',
    },
    {
      heading: 'What Strong Programs Include',
      body: 'Strong compliance frameworks define policies, assign accountability, track incidents, and connect oversight to business risk. They also make it easier for leaders to demonstrate that controls are operating as intended.',
    },
    {
      heading: 'Our Recommendation',
      body: 'We work with clients to design practical compliance systems that are fit for purpose, easy to maintain, and aligned with strategic objectives. The aim is not bureaucracy; it is confidence and control.',
    },
  ],
};

export default content;
