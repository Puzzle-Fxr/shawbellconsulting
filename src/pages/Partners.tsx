import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, ChevronDown } from 'lucide-react';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { partners } from '../lib/data';

const collaborations = [
  {
    title: '1. THE FIRM HAS SERVED GOVERNMENTAL AND PUBLIC SECTOR BODIES AND DEVELOPMENT PARTNERS',
    content:
      "Other notable work we have undertaken:<br /><br /><ul><li>• Consultancy to establish a Renewable Energy Authority for Ghana and Framework of Operation.</li><li>• Constructed the framework and developed the steps for migrating the (5) major Tax Sector Agencies, namely IRS, CEPS, VATS, Small Taxpayer’s Unit into one single Authority, after extensive institutional reviews. (IMF)</li><li>• Provided a framework for Harmonization of Legislation Governing Non-Bank Financial Institutions of countries in the West Africa Monetary Zone, namely Ghana, Sierra Leone, The Gambia, and Nigeria, (Guinea and Liberia).</li><li>• Undertook a country-wide Judicial Sector Review and conducted a Performance Audit and Restructuring of the Judicial Training Institute of the Judicial Service.</li><li>• Provided recommendations for the establishment of a Land Court system through a Census of land cases in 10 courts nationwide under the auspices of the Millennium Development Authority and Judicial Service.</li><li>• Reforming the Registry of Marriages under the Registrar General’s Department, and to provide Standard Operating Procedures with a view to enhancing the operations of the Registry. Its ultimate purpose was to strengthen the capacity of the Registry of Marriages to perform its mandated functions smoothly and without penetration by fraudulent and dishonest elements.</li><li>• Our firm undertook a Project Management programme for the Office of Parliament.</li><li>• We developed Legislative Instruments to regulate the Private Health Sector, namely Private Health Institutions, Private Mortuary Facilities and Private Ambulance Services in Ghana (Ministry of Health/IFC).</li></ul>",
  },
  {
    title: '2. SHAWBELLCONSULTING HAS PROVIDED TRANSACTION ADVISORY SERVICES TO GOVERNMENT',
    content:
      "We have provided business advisory services to the Government of Ghana and its Agencies. Our firm has been involved in key Business Transactions and has provided Intermediary, Legal Opinions, Due Diligence and Value for Money Services.<br /><br /><b>2018 – Present</b><br /><ul><li>• Our CEO served as member of the Government of Ghana side in Negotiations with a Strategic Investor.</li><li>• Our firm was retained by the Ghana Stock Exchange/Ministry of Finance/AfDB to provide Legal Due Diligence Services for SMEs wishing to list the Alternative Stock Market, as part of a team of Transaction Advisors.</li><li>• We provided Transaction Advisory Services for the Development of Transit Terminal for Haulage Trucks under a PPP arrangement for the Sekondi-Takoradi Metropolitan Authority to accommodate 500 haulage trucks at a time. (GOG)</li><li>• We provided Transaction Advisory Services for the Redevelopment of Sekondi Market Project under a Public-Private Partnership Arrangement for the Sekondi-Takoradi Metropolitan Authority. (GoG)</li></ul><br /><br /><b>Prior to 2018</b><br /><ul><li>• Our CEO was appointed Statutory Advisor to the Board of the Ghana Infrastructure Investment Fund in 2015.</li><li>• Transaction Advisory Services have been provided for the Accra Metropolitan Authority in the Redevelopment of Kantamanto Market Project with an estimated Project Cost of US$25.2m.(GoG)</li><li>• We also provided Transaction Advisory Services for the Government of Ghana for the Ghana Nationwide Water Supply Project Phase 1: Western Region with an estimated Project Cost of US$681m.</li><li>• We established Public Private Partnership and Outsourcing Contracts and Guidelines for Local Authorities in Revenue Mobilization and Drafting of Public Private Partnership Contract Templates and Outsourcing Guidelines.(World Bank)</li><li>• Drafting Terms and Conditions of a major undertaking between the Ministry of Transport and an International Group for a Public Private Partnership project for the Ports Sector.</li></ul>",
  },
  {
    title: '3. OUR FIRM OPERATES IN MIXED SECTORS - MINING, COMMUNICATIONS/IT, WATER AND SANITATION,<br />\
    FOOD, FISHERIES AND AGRICULTURE, POWER, ENERGY, INDUSTRY, HEALTH, RENEWABLES, MANUFACTURING,<br />\
    INFRASTRUCTURE, etc ',
    content:
      "We have served a variety of thematic areas and sectors through project assignments and sector surveys, including scoping studies for strengthening investor and other business sector-serving agencies. Assignments have included:<br /><br /><b>2018 - Present</b><ul><li>• Conducted three (3) Renewable Energy Sector Reviews on the Legal Aspects of Establishing a Special Purpose Vehicle and PV Power Purchase Agreements, Assessment of Currency Exchange Risks, Accounting and Taxation Framework in Ghana in relation to Renewable Energy (GIZ/BBH law firm, Germany).</li><li>• Advised investors in respect of Government’s policy to leverage the country’s bauxite reserves.</li><li>• Assisted firms in the Mining Sector to develop Proposals and Feasibility Reports.</li><li>• Legal Research Partner to the World Bank for the World Bank - Enabling the Business of Agriculture study.</li><li>• Feasibility Study for producer of locally sourced and produced biodegradable eco-friendly reusable bags.</li></ul><br /><br /><b>Prior to 2018</b><br /><ul><li>• We advised a major Telecoms provider on their strategic options.</li><li>• We have served clients doing business in the Oil and Gas sector in Ghana.</li><li>• Evaluation of IT Programme and Projects of the International Institute for Communication and Development, involving the Ministries of Communication, Environment, Food and Agriculture, Health, CSIR, the and the University of Uganda in the following IT projects:<br /><ul><li>- E-Commerce project</li><li>- Environmental Information Network</li><li>- National Information Clearing House</li><li>- GAINS Project</li><li>- Global Teenager Project</li><li>- Uganda Project</li></ul></li><br /><li>• Oil and Gas Sector Evaluation Project for the multi-donor STAR-Ghana Fund.</li><li>• Political Economy Analysis of the Oil and Gas/Energy Sector in Ghana.(GOGIG/DFID)</li><li>• Baseline Mapping of the Energy Oil and Gas/Sector in Ghana.(GOGIG/DFID)</li><li>• Impact Assessment of the Capacity Building Component of the District Development Fund and development of a Monitoring, Evaluation mechanism for Improvement in the Design and Operations of the Capacity Building Mechanism for decentralized agencies under the auspices of the Swiss Secretariat for Economic Affairs.</li><li>• Capacity Building for the Social Investment Fund.</li><li>• Project to map, define and regulate the legal relationships between sector agencies and donors of the Ministry of Health and its Agencies, involving investigative reviews of Health Sector players such as the Ministry of Finance and Economic Planning and 36 Government entities, Statutory Agencies, Parliament, NGOs and Development Partners in Health, to examine budget allocation process and establish a critical accountability tool for tracking funds applications. (Ministry of Health/DFID).</li><li>• We conducted an Anti-Corruption Training Programme for the Judicial Service of Ghana. (DANIDA).</li><li>• We undertook a project to evaluate and restructure four Spin-off programmes of the Open Society Initiative of West Africa engaged in developmental projects in Ghana, Senegal, Nigeria.(OSI)</li><li>• We planned and executed a strategic workshop for the then Ministry of Ports, Harbours & Railways accomplished by directing eighty (80) ports sector stakeholders to obtain consensus on a Universal Sector Policy and Strategic Mission. We also designed and developed an outline strategic plan of direction and development of a Road Map with concrete methods & instruments for ensuring effective oversight of the Ports Sector by the Ministry. The firm had undertaken a pre-conference needs assessment of Ports Operators. (GoG/Ports Operators).</li></ul>",
  },
  {
    title: '4. SHAWBELLCONSULTING HAS SERVED INCOMING INVESTORS AND MULTINATIONALS ',
    content:
      "ShawbellConsulting has, from 2002 provided local interventions, intermediary support and linkage services to potential investors, conducted due diligence on prospective local business partners and service providers in Ghana, established a local presence for investors, assisted to promote their businesses locally, and in some cases, served as local representatives of their business concerns. We have won several awards for our service excellence within the oil and gas industry. Some of the services we have rendered have been provided to global firms ranked on the Fortune 500 and Forbes Global 2000 lists, as well as the World’s Largest Retailer, are described below:<br /><br /><b>2002 – Present</b><br /><ul><li>• We have served Global Operators within the Upstream Petroleum Sector:</li><ul><li>★ International Service Companies – Established local presence, obtained operating licenses and permits, and provided coaching on local practices for international investors providing support services to the industry.</li><li>★ Consortium of five (5) Global Petroleum Corporations –Obtained an Exploration License, Contract Extensions and other approvals, and served as local representative for the respective Corporations for eight (8) years.</li></ul></li><br /><li>• We served the Global firm of Amazon.com as Local Manager for ten (10) years from 2002, until they dissolved the company’s business in Ghana.</li><li>• We represented the Global Firm of Transocean in matters relating to third party services provision for three (3) years.</li><li>• Served a mix of Foreign Investors:<br /><ul><li>★ Assisted a variety of Foreign Investors from Europe, USA, Asia, Australia, the Middle East, & elsewhere in Africa to establish a local presence in Ghana.</li><li>★ Provided Legal Opinions and conducted research for investors.</li><li>★ Provided Corporate Services, drafted legal agreements and partnership contracts and advised on a diversity of legal transactions.</li><li>★ Provided Local Intermediary, Negotiation and Advisory Support between Foreign-based clients and local business partners.</li><li>★ Engaged Local Staff and provided Advisory Services on Labour & Employment.</li><li>★ Coached local and foreign staff on a diversity of topics.</li></ul></li></ul>",
  },
  {
    title: '5. OUR FIRM HAS SERVED LOCAL PRIVATE SECTOR AND ENTREPRENEURS, INDIGENOUS BUSINESS,<br />\
    AND INTERNATIONAL ENTITIES WITH A PRESENCE IN GHANA ',
    content:
      "We provide below a selection of the services we have undertaken for private sector business in Ghana, from a diversity of sectors:<br /><br /><b>2020 - Present</b><ul><li> • Organizational Development Services to strengthen a private social enterprise providing technical and social solutions to challenges in water, sanitation, and agri-business in West Africa with its headquarters in Ghana.</li><li>• We have provided transformational advisory services for a locally-owned Group of Warehouses, Golf Course and a Resort.</li><li>• We have provided corporate compliance and transaction advisory services for a major Infrastructure Development Group doing business within the West Africa region.</li></ul><br /><br /><b>Prior to 2020</b><br /><ul><li>• We established the Cocoa Abrabopa Association of Cocoa Farmers in Ghana, setting up its legal, management, HR and Operating policies, systems & structures and providing implementation assistance. We also conducted a Performance Evaluation of the Cocoa Abrabopa Association after some years in operation.</li><li>• Provided establishment and advisory services to a Cocoa Processing Industry.</li><li>• Provided export advisory services to 1647: Apparel Manufacturer.</li><li>• Undertook a Job Evaluation, Functional Review and Organizational Restructuring of Panbros Salt Industries Limited, and Recruitment of Senior Staff. Salt Manufacturing.</li><li>• Assisted to establish the Lister Medical Services and provided legal services in the form of business advisory and contractual drafting services, established an Operating Institutional Framework, developed Job Descriptions for senior staff, designed a Pay Structure and Conditions of Service, Recruited Senior Staff and Drafted Employment Contracts; Reviewed the structure and policy of entitlements of top management; provided a shortlist for a Company Secretary.</li><li>• Undertook a Human Resource restructuring exercise for the Opportunity International Savings and Loans Company in Ghana. This was a Savings and Loans company with an NGO heritage.</li><li>• Evaluated and support six (6) Civil Society Organizations under the STAR-Ghana funded project for developing Step Change plans towards more strengthened advocacy and policy development.</li><li>• We provided training for staff of Plan Ghana, a Development Sector NGO, in Project Management.</li><li>• Provided training for staff of Camelot Ghana, a major Printing Company serving the West Africa sub-region.</li><li>• We developed marketing strategies and recruited staff for an IT firm.</li><li>• Developed a Senior Staff Salary Structure for Simnet Ghana Limited, a lotteries systems support firm.</li><li>• Our firm developed Guidelines of Operation for the Coalition of NGOs in Health.(DANIDA)</li><li>• We have undertaken Search and Selection assignments for many Public Sector organizations</li><li>• Some private organizations who serve as partners of our firm on the basis of MOUs in respect of training and staffing are:<br /><ul><li>- e-Solutions (Tech-Hub)</li><li>- Margins Group</li><li>- Cocoa Abrobopa Association (Cocoa)</li><li>- Dannex Limited (Pharmaceuticals)</li><li>- EIB Network Camelot (Printing)</li><li>- PZ Cussons (Industry)</li><li>- Japan Motors (Motor Industry)</li><li>- Maize Association of Ghana (Agriculture)</li><li>- Multichoice Ghana (Media)</li><li>- Global Media Alliance (Media)</li><li>- SMEs and Micro Enterprises including those operated by women groups and NGOs.</li></ul></li><br /><li>• We have undertaken Staff Search and Selection assignments for the following public and private sector firms:<br /><ul><li>- National Communications Authority</li><li>- Quality Life Assurance Company</li><li>- Ghana National Petroleum Company</li><li>- Ministry of Finance</li><li>- Social Security and National Insurance Trust</li><li>- Wienco Ghana Limited (Agriculture)</li><li>- Panbros Salt Industries</li><li>- Lister Medical Services</li><li>- Maersk (Shipping)</li><li>- Skills Resource Network (Japan Motors)</li><li>- Ghana Bottling Company</li><li>- EA Business Group</li><li>- Meridian Port Services</li><li>- UT Holdings (Banking)</li><li>- Institute of Democratic Governance</li><li>- Labadi Beach Hotel</li><li>- Cyclus International Netherlands (Waste Recycling)</li><li>- National Lottery Authority</li><li>- Volta River Authority</li><li>- USAID-Assess Program</li><li>- China Europe International Business School</li><li>- Coastal Resource Centre/USAID</li><li>- Medlab</li><li>- Skills Resource Network (Consulting)</li><li>- Atlantic Port Services</li><li>- Institute of Economic Affairs</li><li>- Cocoa Abrabopa Association</li><li>- Timber Firm</li><li>- Key Architectural Group</li><li>- Weatherford International (Oil and Gas)</li></ul></li></ul>",
  },
  {
    title: '6. OUR FIRM SUPPORTS GOVERNMENT\'S HUMAN DEVELOPMENT POLICIES AS REGARDS THE SDGs,<br />\
    PARTICULARLY LABOUR AND EMPLOYMENT, THE YOUTH, SMEs, THE DISABLED, WOMEN AND OTHER VULNERABLE GROUPS. ',
    content:
      "Many of the assignments we have undertaken for clients address the Sustainable Development Goals that relate to human development. We also established the Ghana Institute of Consulting (GIC) to support capacity building for both adults and the youth, as well as for better business performance in Ghana. The following are some relevant assignments:<br /><br /><b>2002 - Present</b><br /><ul><li>• Through the legal and corporate health clinic for Start-Ups and SMES, the firm provides the opportunity for free walk-ins/business advisory sessions, formalized training, as well as for direct professional services involving the pathways to setting up, maintaining (and passing on) a healthy business.</li><br /><li>• Our firm conducted a Nationwide Baseline Study of Access to Justice by the Poor and Vulnerable under the auspices of the Judicial Service. This was an extensive study which addressed access to justice by the poor and needy, women, children, and the disabled throughout Ghana. (DANIDA).<br /><ul><li>• We have provided Business Advisory services to NGOs engaged in health, gender, the disabled, and the youth. These include:<br /><ul><li>▸ Sickle Cell Association of Ghana</li><br /><li>▸ ShareCare Ghana (Autoimmune diseases)</li><br /><li>▸ SalValley Outreach (HIV-Aids)</li><br /><li>▸ Skills Resource Network (Professional), etc</li></ul></li><br /><li>• Projects conducted for the following public institutions have addressed matters of gender and the disabled:<br /><ul><li>▸ Judicial Service/Judiciary studies: Commercial Justice, Traditional Adjudication, and Judicial Training School projects.</li><br /><li>▸ Commission of Human Rights and Administrative Justice, Organizational Development services</li><br /><li>▸ Immigration Service, Register of Marriages, and Migration studies.</li><br /><li>▸ Ministry of Business Development Entrepreneurship, Trade Financing, and Private Sector Development study.</li><br /><li>▸ West African Monetary Zone Non-Bank Financial/Micro Finance Legislation study.</li><br /><li>▸ All Energy Sector-related studies in regard to Oil and Gas, Power and Renewable Energy projects.</li><br /><li>▸ Metropolitan and District Assembles Transaction Advisory services.</li><br /><li>▸ Ministry of Health/Ghana Health Service projects.</li><br /><li>▸ Ghana Alternative Stock Exchange, etc</li></ul></li><br /><li>• We conduct Organizational Development services and Development of HR Policies and Practices for Private Sector Companies as listed in previous Sections above.</li><br /><li>• We developed Remuneration Survey and Development of Salary Policies for the National Petroleum Authority, State Insurance Company, MMC Facilities Management Company, and other public and private sector agencies.</li><br /><li>• We run the Stellar Graduate Professional Programme at our Ghana Institute of Consulting (GIC) which aims to prepare the Youth for the world of work through specialist Entrepreneurial and Consultancy Training Programmes. This specialist training coupled with ICT training prepares the youth towards the development of an entrepreneurial mindset at subsidized rates. The GIC has over the past few years trained 150+ young professionals and new graduates in the Stellar Graduate Professional Programme (SGPP). The SGPP provides practical Entrepreneurial and Consultancy skills, Introduction to Business Value Chain Linkages, Strategic Business Planning and Business Development and Sustainability Essentials. Another relevant body established within the ShawbellConsulting Group to assist the youth is the Skills Resource Network (SRN). The SRN is a unique non-profit organization whose objective is to link SGPP certificate holders (who are members of the Skills Bank) to partner organizations, thereby providing internships and other exposure to the business world, at no charge. The Skills Bank is the resource pool of persons who have obtained their GIC certificates and who wish to join The Skills Resource Network.</li></ul>",
  },
  {
    title: '7. EDUCATION, TECHNICAL AND VOCATIONAL TRAINING, SKILLS TRANSFER, INNOVATION AND TECH HUBS',
    content:
      "Aside from work conducted by ShawbellConsulting in education and training, our flagship Training Institute, namely the Ghana Institute of Consulting (GIC) as mentioned above, has conducted many training courses for private sector organizations in assisting them to set up, as well as to sustain their businesses. The GIC is founded upon the principles, techniques, and discipline of professional and business practices. Based in Accra, Ghana, it has trained people from all over Africa in various skills, practices and procedures that are applicable to a wide range of domains. Our firm's combined experience is as follows:<br /><br /><b>2002 - Present</b><br /><ul><li>• We are Certified Trainers in Creative Training Techniques from the Bob Pike Group, USA.</li><br /><li>• We have held Training Partnerships and MoUs with private and public sector organizations such as the Ghana Association of Consultants, the Business Council for Africa, the Institute of Local Government Services, and several private sector institutions, as mentioned in previous sections.</li><br /><li>• We are certified by the Ministry of Local Government to provide capacity building services to Metropolitan, Municipal and District Assemblies and their External Service Providers.</li><br /><li>• Our firm has conducted a Training Needs Assessment, Development of Training Plan, Training Manuals and Curricula for Training and Capacity Building in support of the Objectives of the Ghana Urban Management Pilot Programme for Public Private Partnerships at the District Level and also for Strategies for Attracting Investments to Regions and Districts (Agence Francaise de Developpement)</li><br /><li>• We have conducted Certificate Training in professional practices at the Ghana Institute of Consulting for 400+ participants since 2009.</li><br /><li>• Through our not-for-profit agency, namely the GIC/Skills Resource Network (SRN), (G - 28,948), we have linked SMEs up with business opportunities that arise at no charge</li><br /><li>• The firm has promoted a Resource Library, namely the Ghana Consultancy Resource Centre. (Sponsored)</li><br /><li>• The 'Every District Is a Star' (EDIAS) Project, developed by ShawbellConsulting was aimed at supporting capacity building and strengthening of institutions involved in fiscal decentralization.</li><br /><li>• We have provided Attitudinal Training for 170 Junior to Middle-Level Executives of the Ghana National Petroleum Corporation, and others.</li><br /><li>• We have undertaken a Skills Audit and Competency Assessments for a Computerized Database of Job Profiles and Staff Development Plans for the Ghana National Petroleum Corporation.</li><br /><li>• We have conducted Training at our Ghana Institute of Consulting and have collaborations with Tech Hubs on the firm's projects that involve Innovation and Entrepreneurship.</li><br /><li>• We have conducted Capacity Building for Members of Professional Associations such as the Chartered Institute of Management.</li><br /><li>• We undertook a major Evaluation of IT Programme Targets and Training for five Partner Institutions and Projects of the International Institute for Communication and Development (IICD) at the Hague, involving the Ministries of Environment, Communication, Food and Agriculture, Health, CSIR, the Global Teenager Project and the University of Uganda in diverse IT projects:</li><br /><li>• Our consultants have worked with COTVET, Gratis and EMPRETEC who are engaged in technical training and support to the business here in Ghana.</li></ul>",
  },
];

const clients = [
  {
   name: 'Ghana Broadasting Corporation (GBC)',
   logo: "images/logo/gbc.png",
   detail: "<ul><li>▪ Our firm undertook an Organizational Review and Development of a Strategic Plan for the Ghana Broadcasting Corporation.</li></ul>",
  },
  {
   name: 'Bank of Ghana',
   logo: "images/logo/bog.png",
   detail: "<ul><li>▪ Development of a Bespoke Peer Evaluation Tool for the Board of Directors of the Bank of Ghana.</li></ul>",
  },
  {
   name: 'Korle Bu Teaching Hospital',
   logo: "images/logo/kbth.png",
   detail: "<ul><li>▪ Undertook an Institutional Review and developed a Strategic Plan for the Korle Bu Teaching Hospital, the third largest hospital in Africa.</li></ul>",
  },
  {
   name: 'Ministry of Communications (Ghana)',
   logo: "images/logo/minofcom.png",
   detail: "<ul><li>▪ We undertook a major Evaluation of e-Communications/IT Programme Targets and Training for five Partner Institutions and Projects of the International Institute for Communication and Development (IICD) at the Hague, involving the Ministry of Communications and other governmental agencies.</li></ul>",
  },
  {
   name: 'African Development Bank',
   logo: "images/logo/africanDevBank.png",
   detail: "<ul><li>▪ Our firm was retained by the Ghana Stock Exchange/Ministry of Finance/AfDB to provide Legal Due Diligence Services for SMEs wishing to list the Alternative Stock Market, as part of a team of Transaction Advisors.</li></ul>",
  },
]

export default function Partners() {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const [openPartner, setOpenPartner] = useState<number | null>(0);
  const [openClient, setOpenClient] = useState<number | null>(0);

  return (
    <div className="page-enter">
      <SEO
        title="Our Partners"
        description="ShawbellConsulting's trusted partners and client collaborations across public and private sectors. Learn about our institutional partnerships and experience."
        canonical={(typeof window !== 'undefined' ? window.location.origin : 'https://www.shawbellconsulting.com') + '/partners'}
      />
      <PageHero
        title="Our Partners"
        subtitle="Our firm has served the following business groups, clients, and sectors"
        image="images/handshake.jpg"
        description="Our firm has provided services to many governmental bodies and their development partners on policy, strategic planning, governance and organizational development, establishment of operational systems, standard operating procedures for process optimization, monitoring and evaluation, risk management, capacity building and other projects. "
      />

      {/* Partners Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <p className="font-heading text-xs uppercase tracking-[0.28em] text-ocean mb-3">Trusted and Respected</p>
            <h2 className="text-3xl font-bold text-slate-900">Collaborations</h2>
          </div>
          <div className="space-y-4">
            {partners.map((partner, i) => {
              const isOpen = openPartner === i;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
                    <button
                      type="button"
                      onClick={() => setOpenPartner(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-4">
                        <img src={partner.logo} alt={partner.name} className="h-12 w-auto rounded-md bg-white p-2 object-contain shadow-sm" />
                        <div>
                          <h3 className="text-lg font-bold text-slate-800">{partner.name}</h3>
                          <p className="text-sm text-slate-500">View details</p>
                        </div>
                      </div>
                      <ChevronDown className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="border-t border-slate-200 bg-white px-5 py-4 sm:px-6"
                      >
                        <p className="text-sm leading-relaxed text-slate-600 sm:text-base" dangerouslySetInnerHTML={{ __html: partner.detail }} />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Clients*/}
        <section className="bg-slate-50 py-10 lg:py-28 mt-15">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-8">
              <p className="font-heading text-xs uppercase tracking-[0.28em] text-ocean mb-3">Our Optimized Clients</p>
              <h2 className="text-3xl font-bold text-slate-900">Selected Client Collaborations</h2>
            </div>
            <div className="space-y-4">
              {clients.map((client, index) => {
                const isOpen = openClient === index;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
                      <button
                        type="button"
                        onClick={() => setOpenClient(isOpen ? null : index)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-center gap-4">
                          <img src={client.logo} alt={client.name} className="h-12 w-auto rounded-md bg-white p-2 object-contain shadow-sm" />
                          <div>
                            <h3 className="text-lg font-bold text-slate-800">{client.name}</h3>
                            <p className="text-sm text-slate-500">View details</p>
                          </div>
                        </div>
                        <ChevronDown className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="border-t border-slate-200 bg-white px-5 py-4 sm:px-6"
                        >
                          <p className="text-sm leading-relaxed text-slate-600 sm:text-base" dangerouslySetInnerHTML={{ __html: client.detail }} />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Other Partners Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-14 lg:mt-16">
          <div className="mb-8">
            <p className="font-heading text-xs uppercase tracking-[0.28em] text-ocean mb-3">Experience</p>
            <h2 className="text-3xl font-bold text-slate-900">Other Notable Involvements</h2>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8 max-w-4xl">
            Our firm has served the following business groups, clients, and sectors:
          </p>

          <div className="space-y-4">
            {collaborations.map((item, index) => {
              const isOpen = openItem === index;

              return (
                <div key={item.title} className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpenItem(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ocean/10 text-ocean">
                        <Building2 size={18} />
                      </span>
                      <span className="text-base font-semibold text-slate-800 sm:text-lg" dangerouslySetInnerHTML={{ __html: item.title }} />
                    </div>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="border-t border-slate-200 bg-white px-5 py-4 sm:px-6"
                    >
                      <p className="text-sm leading-relaxed text-slate-600 sm:text-base" dangerouslySetInnerHTML={{ __html: item.content }} />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
          <Link to="/contact" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold">
            Contact Us <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
