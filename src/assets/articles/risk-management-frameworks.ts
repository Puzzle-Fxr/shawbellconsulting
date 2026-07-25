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
  title: 'Enterprise Risk Management: A Modern Framework',
  summary: 'Modern risk programs must connect strategic oversight with operational resilience and fast, informed decision-making.',
  sections: [
    {
      heading: 'A Broader View of Risk',
      body: 'Risk management is no longer limited to financial exposure. Organizations now need to address operational, reputational, cybersecurity, and regulatory risk in an integrated way.',
    },
    {
      heading: 'Building an Adaptive Framework',
      body: 'An effective framework brings together risk identification, evaluation, response planning, and reporting in a structured but flexible manner. This supports leadership in making timely and informed decisions.',
    },
    {
      heading: 'How We Support Clients',
      body: 'We help organizations create risk systems that are practical, measurable, and aligned to their operating environment. That creates a stronger foundation for resilience and sustainable growth.',
    },
  ],
};

export default content;
