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
  title: 'How Sunshine Can Come From Rain',
  summary: "Capitalizing on opportunities in Ghana's natural resources, renewable energy, and business continuity planning is complex and requires specialized guidance.",
  bannerUrl: "/images/articles/how_sunshine_banner.jpg",
  bannerAlt: "image of flowers in a light rain with a warm sunshine",
  sections: [
    {
      heading: 'When a frustrated Ghanaian business executive was asked “how can sunshine come from rain?”, he glibly answered “when the rain stops”!',
      body: "By considering the deluge as an asset to be captured, rather than an inevitable crisis of infrastructural deficits and commuter frustration to be survived, businesses can truly extract sunshine from rain by:<br /><br />\
      ☼ Implementing value-adding business continuity arrangements<br /><br />\
      ☼ Investing in integrated renewable energy systems, and also by<br /><br />\
      ☼ Lawfully harvesting rainwater.",
    },
    {
      heading: 'Value-Adding Business Continuity:',
      body: "By pursuing the steps to ensure that a business entity's commercial engines continue to prosper even when the skies open, executives might establish a Business Continuity Plan with associated Standard Operating Procedures.  A Business Continuity Plan assures the smooth performance of essential functions and critical services during crisis periods and can in fact enhance business value even when it rains. In preparing the Business Continuity Plan, a business must take the following and more into consideration:<br /><br />\
      • <b>The nature of the business and the risks</b> it might suffer, including even the opportunities potentially arising from any work disruption.<br /><br />\
      • <b>The policy and legal framework of the business.</b> The regulatory implications of the diverse elements such as the people, security, data and facilities that will be affected by unforeseen events.<br /><br />\
      • <b>Task responsibilities, work-dependent pathways, monitoring and performance measurement</b>, must all be identified, vetted, established, and properly assigned within the establishment.<br /><br />\
      • <b>Work-from-home arrangements that truly ensure business continuity.</b> Such arrangements must be seamless and must ensure that the business does not suffer from staff absence or underperformance, and also that staff are not demotivated.<br /><br />\
      • <b>Options for staff training while at home</b>. A well-crafted Business Continuity Plan is an opportunity for a business to examine and determine its capacity building needs, along with the modalities for enhancing the skills of employees while they remain home-bound.",
    },
    {
      heading: 'Investing in Integrated Renewable Energy Systems:',
      body: "Ghana's national grid relies heavily on hydropower, a renewable energy source driven directly by rainfall. The country's primary dams - Akosombo, Bui, and Kpong - depend on steady, rain-fed river inflows to sustain electricity generation. When the grid is stable, businesses avoid the crippling operational costs of running backup diesel generators, thereby boosting overall production, improving worker output, and keeping employers satisfied.<br /><br />However, not all communities have access to such power supply. Opportunities that surround rainfall include the utilization of mini-grids to deliver clean and reliable power to small enterprises and households in off-grid areas across rural communities. Ghana's renewable energy policy and regulatory framework<sup>1</sup> provides a strategic headstart for investors and operators that wish to join the government in implementing these programmes. By outlining actionable guidelines for harnessing hydro, wind, solar, and biomass, the existing regulatory framework ensures sustainable deployment of renewable energy sources, while unlocking longterm economic value for both businesses and communities in Ghana.",
      sources: [
        "Renewable Energy Act, 2011 (Act 832), as amended by the Renewable Energy (Amendment) Act 10454 and the revised National Energy Policy (1)",
      ],
    },
    {
      heading: 'Harvesting rain ... lawfully:',
      body: "The concept of rain bringing sunshine to Ghana and its citizens captures the significant policy and economic opportunities associated with the country's seasonal rainfall. This natural climatic phenomenon can be transformed into productive value through innovations such as rainwater harvesting. In the agricultural sector, for instance, reliance solely on seasonal rain restricts most farmers to a single production cycle annually. Therefore, effective water management is crucial for securing the yields of essential staples such as maize and rice, while also protecting key export crops particularly cocoa from prolonged droughts.<br /><br />\
      Rainwater serves as a vital renewable natural resource, and experts in water management worldwide, have identified rainwater harvesting as an under-utilized, sustainable alternative water source for communities facing water scarcity. Rainwater harvesting can be achieved through both passive and active systems:<br /><br />\
      • <b>Passive systems</b> operate without energy and are designed to retain water until it can naturally infiltrate the ground.<br /><br />\
      • <b>Active systems.</b> In contrast, rainwater collected through active systems can be stored and utilized for both non-potable and potable water needs, depending on the level of treatment applied. Traditionally, the focus of active systems has been on irrigation, with countries in Asia, Australia, Africa, and Europe employing rainwater for both domestic and commercial purposes<sup>2</sup>.<br /><br />\
      By investing significantly in rainwater harvesting infrastructure, such as small-scale dams, retention ponds, and localized reservoirs, farmers can unlock the potential for year-round agricultural production.<br /><br />\
      It is important to note that directly-collected rainwater is generally not classified as an abstraction of water resources and does not require a permit for ordinary domestic use. However, once rainwater comes into contact with the ground and becomes surface runoff, or enters natural water systems, it falls under the regulatory framework of the Water Resources Commission Act, 1996 (Act 522). This Act vests ownership and control of all water resources in the President, who acts on behalf of the citizens of the Republic. Section 13 of the Act explicitly prohibits any individual from diverting, damming, storing, abstracting, or using water resources, or from constructing related works without statutory authorization<sup>3</sup>. Section 14(1) provides an exemption for ordinary domestic use, allowing individuals with lawful access to abstract water for household needs. Investors and operators intending to implement large-scale or commercial rainwater harvesting systems must adhere to the Water Use Regulations, 2001 (L.I. 1692), which outline the environmental requirements for commercial irrigation, aquaculture, and industrial water use.",
      sources: [
        "Rainwater as a renewable resource to achieve net zero urban water in water stressed cities, Resources, Conservation and Recycling, Volume 164, January 2021, 105203 (2)",
        "The Act defines water resources to include water flowing over the surface of the ground or contained in or flowing from any river, spring, stream or natural lake or part of a swamp or in or beneath a watercourse and all underground water but excluding any stagnant pan or swamp wholly contained within the boundaries of any private land.  It does not include rainfall in its direct form. (3)",
      ],
    },
    {
      heading: 'Generating Sunshine from Rain in Ghana',
      body: "Successfully developing Business Continuity Plans, investing in Renewable Energy, or navigating the Regulatory Frameworks associated with Ghana's natural resources in seeking to generate sunshine from rain, can be complex and requires guidance.   Any corporate entity seeking to capitalize on opportunities arising within the respective domains, must therefore consult with legal and business advisory professionals who are specialised in the respective areas, before proceeding to do so.",
    },
  ],
};

export default content;
