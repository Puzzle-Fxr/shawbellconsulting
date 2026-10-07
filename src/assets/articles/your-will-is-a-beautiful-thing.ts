export type ArticleSection = {
  heading: string;
  imageUrl?: string; // Optional: Image for this specific section
  imageAlt?: string;  // Optional: Accessibility text for the section image
  body: string;
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
  title: 'Your Will is a Beautiful Thing',
  summary: "It is an act of profound care and forethought for the people you love.",
  bannerUrl: "/images/articles/fireworksinglass.jpg",
  bannerAlt: "image of fireworks reflected in a glass",
  sections: [
    {
      heading: 'INTRODUCTION',
      imageUrl: "/images/articles/couple.jpg",
      body: "● When we think about the future, we often think about providing for our families, securing our homes, and protecting what we have worked hard to build.<br />\
      ● Have we also thought about how our assets will be managed and distributed when we are no longer able to make those decisions ourselves?<br />\
      ● That is why understanding how a Will operates, is an important part of planning ahead.",
    },
    {
      heading: 'WILLS: MEANING AND IMPORTANCE',
      imageUrl: "/images/articles/houses.jpg",
      body: "● A Will is a legal document in which a person known as the Testator specifies how their property should be managed and distributed after their demise In Ghana the Wills Act 1971 Act 360 outlines who has the legal capacity to create a Will and the strict formalities required to make it legally binding.<br />\
      ● Making a Will today does not restrict you from using or enjoying your property during your lifetime A Will only comes into effect upon the death of the Testator.<br />\
      ● Drafting a valid Will ensures your wishes are honoured it empowers you to choose trusted Executors to manage your affairs protects your dependents and prevents costly legal challenges from disgruntled relatives.<br />\
      ● As described in the Living Will section, a person may during their lifetime also express their preferences concerning medical care in advance through a Living Will.",
    },
    {
      heading: 'Some Words And Phrases Involved In Wills',
      body: '<table width="100%" cellpadding="10">\
      <tr><td>● Personal</td><td>● Validity</td></tr>\
      <tr><td>● Property</td><td>● Ownership</td></tr>\
      <tr><td>● Executor</td><td>● Legal Authority</td></tr>\
      <tr><td>● Testator</td><td>● Family</td></tr>\
      <tr><td>● Beneficiary</td><td>● Declaration</td></tr>\
      <tr><td>● Bequest</td><td>● Alteration</td></tr>\
      <tr><td>● Estate</td><td>● Revocation</td></tr>\
      <tr><td>● Residuary Clause</td><td>● High Court</td></tr>\
      <tr><td>● Witnesses</td><td>● Probate</td></tr>\
      </table>',
    },
    {
      heading: 'Who Qualifies to Write a Will?',
      imageUrl: "/images/articles/drums.jpg",
      body: "<b>QUALIFIED</b><br />\
      Per Section 1 of the Wills Act 1971 Act 360 any person may write a Will to dispose of property if:<br />\
      ✓ They own or are entitled to the property at death, and<br />\
      ✓ They are aged 18 or older, and<br />\
      ✓ They are of sound mind, and that<br />\
      ✓ The Will is made freely without duress, undue influence, or fraud.<br /><br />\
      <b>DISQUALIFIED</b><br />\
      Section 1(2) of Act 360 specifically disqualifies anyone suffering from insanity or infirmity of mind from drafting a Will during the continuance of that insanity or infirmity of mind",
    },
    {
      heading: 'What is a Valid Will?',
      imageUrl: "/images/articles/army.jpg",
      body: "<b>Section 2 of Act 360 mandates that for a Will to be valid:</b><br />\
      ● It must be in writing and signed by the Testator or by another person acting at the Testator's direction<br />\
      ● The signature of the Testator must be made or acknowledged by him in the presence of at least two Witnesses present at the same time.<br />\
      ● The Witnesses must also attest and sign the Will in the presence of the Testator.<br />\
      <b>For blind or illiterate Testators</b><br />\
      ● A competent person must read and explain the contents to a blind or illiterate Testator.<br />\
      ● The competent person must add a Written Declaration that the Will was read over and understood before the Will was executed."
      },
    {
      heading: 'EXCEPTIONS TO THE GENERAL REQUIREMENTS',
      imageUrl: "/images/articles/book.jpg",
      body: "While Section 2 of Act 360 sets out the requirements for a valid Will, the law recognises certain exceptions:<br />\
      ● Members of the <b>Armed Forces on active service</b> may make a Will in any of these three forms:<br />\
      <ul><li>○ A written and unattested Will, provided the material provisions and signature are in the testator's handwriting,</li>\
      <li>○ A written Will attested by one witness, or</li>\
      <li>○ An oral Will made before two witnesses.</li></ul><br />\
      ● Ghana's legal framework also recognises the validity of oral testamentary dispositions made in accordance with <b>Customary Law,</b> per Section 19(3) of Act 360.",
    },
    {
      heading: 'CONTENTS OF A WILL',
      imageUrl: "/images/articles/housekey.jpg",
      body: "● A standard Will typically begins with a <b>declaration</b> identifying the <b>Testator</b> and revoking any prior documents.<br />\
      ● An <b>Executor</b> is the person appointed by the Testator to carry out instructions under the Will. Per Section 3 of Act 360, an Executor must be at least 21 years old and possess the <b>legal capacity</b> to enter into a contract<br />\
      ● At the heart of the Will are specific <b>Bequests</b> of movable and immovable properties to chosen beneficiaries.<br />\
      ● A <b>Beneficiary</b> is a person named to receive <b>Assets</b> from a Testator's estate.<br />\
      ● A <b>Residuary Clause</b> acts as a safety net by making provision for all property currently owned or to be later acquired by the Testator, that has not been specifically mentioned in the Will.",
    },
    {
      heading: 'WHAT QUALIFIES TO BE BEQUEATHED?',
      imageUrl: "/images/articles/court.jpg",
      body: "● A Testator may bequeath any <b>property</b> or <b>interest</b> that they legally own and have the right to dispose of upon death.<br />\
      ● Such property may include land, buildings, money, vehicles, shares, investments and personal belongings.<br />\
      ● However, property that belongs to another person or is held as <b>family property</b> may not be bequeathed as the Testator's personal property. The validity of a bequest therefore depends on the Testator's <b>ownership</b> and <b>legal authority</b> to dispose of the property.",
    },
    {
      heading: 'SAFE CUSTODY, ALTERATION AND REVOCATION OF WILLS',
      imageUrl: "/images/articles/help.jpg",
      body: "● After execution, the Will may be deposited at the Registry of the <b>High Court</b> for safe custody, in accordance with Section 11 of Act 360.<br />\
      ● A Testator retains the right to alter, amend, or revoke their Will. A Will may, under specific conditions, be revoked through physical destruction, a new Will, or a Written Declaration per Section 9 of Act 360.<br />\
      ● Once revoked, a Will can only be revived through re-execution or a written declaration of intention per Section 10 of Act 360.",
    },
    {
      heading: 'LIVING WILLS',
      imageUrl: "/images/articles/pen.jpg",
      body: "● A person may also express their preferences concerning medical care in advance during their lifetime. This is commonly referred to as a Living Will.<br />\
      ● A Living Will sets out a person's instructions regarding medical treatment and care during their final stages of life, to guide healthcare decisions if they later lose the capacity to make those decisions.<br />\
      ● It may address matters such as life-sustaining treatment and other forms of medical care during the final stages of life.<br />\
      ● The legal requirements of Living Wills vary across jurisdictions.",
    },
    {
      heading: 'Checklist',
      body: "<i>Writing a valid Will requires careful preparation. Before you begin, keep the following essentials in mind</i>:<br />\
      <ul><li>✔︎ <b>Personal Information</b>: Confirm your full legal name and current residential address, ensuring you are at least 18 years old and of sound mind.</li>\
      <li>✔︎ <b>Assets Inventory</b>: Make a clear list of all movable and immovable properties that you legally own and intend to distribute</li>\
      <li>✔︎ <b>Beneficiary Details</b>: Gather the names and details of the people you want to receive your properties</li>\
      <li>✔︎ <b>Executors</b>: For practical reasons consider at least two trusted persons to serve as Executors. Remember that the law requires that an Executor must be at least 21 years old and legally capable of entering into a contract.</li>\
      <li>✔︎ <b>Witnesses</b>: Choose at least two Witnesses who are not Beneficiaries to attest the Will</li>\
      <li>✔︎ <b>Legal Consultation</b>: Consult a qualified lawyer to help you navigate the legal nuances of preparing your Will, and the management and distribution of your lawful assets upon your demise</li></ul>",
      sources: [
        "⭐ Note that in the formal legal process of Probate hereafter, a Probate Certificate will be issued by the Court to signify that your Will has been duly validated and that the Executor has the authority to administer your estate. ⭐",
      ],
    },
    {
      heading: '⚖︎ CONCLUSION',
      body: "🏛️ <b>The Validity of a Will</b> depends not only on what it contains, but also on whether it has been <u>properly executed</u> in accordance with the law.<br /><br />\
      👩🏽‍⚖️ <b>Careful selection</b> of executors and witnesses, accurate identification of assets and beneficiaries, and compliance with the formal requirements, are essential.<br /><br />\
      ⚖️ Where there is any uncertainty, <b>obtaining appropriate legal advice</b> can help avoid mistakes that may affect the validity of the Will.<br /><br />\
      🤷🏻‍♀️ Ultimately, a Will is not about anticipating death. It is about taking control of what happens to what you have worked hard to build and leaving your <b>loved ones</b> with clarity, protection, and peace of mind.",
    },
  ],
};

export default content;
