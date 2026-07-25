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
  title: 'Governance Frameworks for Digital Transformation',
  summary: 'Digital transformation delivers its best results when governance, accountability, and control are embedded from the outset.',
  sections: [
    {
      heading: 'The Governance Imperative',
      body: 'Technology initiatives often fail not because the idea is weak, but because governance arrangements are unclear. Successful programs rely on well-defined decision rights, oversight mechanisms, and coordinated execution.',
    },
    {
      heading: 'Designing the Operating Model',
      body: 'Organizations need a governance framework that supports prioritization, funding, risk oversight, and value realization. This allows leadership to balance innovation with discipline and avoid fragmented implementation.',
    },
    {
      heading: 'Practical Advice',
      body: 'We help clients establish governance structures that connect strategic ambition with day-to-day delivery. The result is greater transparency, stronger accountability, and better outcomes across the transformation lifecycle.',
    },
  ],
};

export default content;
