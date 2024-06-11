export const missionData = {
  title: "Why Drug Free?",
  sections: [
    {
      subtitle: "",
      content: `
        According to the UN, India has 10 million of the world’s estimated 247 million drug abusers. There is no latest national-level data to bring out the magnitude of the problem, but doctors are registering a considerable rise in number of drug abusers.
        There are almost 267 million tobacco users in India. Each year tobacco use kills about one million Indians:
        Smoking and exposure to secondhand smoke kill about 926,000 people each year. Smokeless tobacco use kills an additional 200,000 people in India each year, accounting for 74% of the global burden of smokeless tobacco. Bidi and cigarette smokers die 6 to 10 years earlier than their non-smoking counterparts. If current trends continue tobacco will account for 13% of all deaths by 2020.
        `,
    },
    {
      subtitle: "Some Facts",
      content: `
        In the year 2019, 7719 out of the total 7860 suicide victims due to drug abuse/alcohol addiction were male. This accounts for 98.2% of all the victims and is the highest over the 10-year period of 2010 to 2019. During this 10-year period, the least share of male victims among those who committed suicide due to this cause was in 2015 with 95.7%.
        India is home to six crore alcohol addicts, more than the population of 172 world nations including Italy. Alcoholism is a condition that requires medical attention, but unfortunately only less than 3% of the people with drinking problem get any treatment. More than 3.1 crore Indians (2.8%) have reported using cannabis products, Bhang, Ganja, Charas, Heroin and Opium, in last one year. 72 lakh of these drug users are addicted to them and unfortunately only one in 20 drug addicts gets treatment at a hospital.
        `,
    },
    {
      subtitle: "Our Action Plan",
      content: `
        Primary Prevention Programs
        Tele-counselling on drugs related issues.
        Sensitisation Workshops for School Children on drug abuse.
        Centre to de-addict and rehabilitate people under Drug impact Treatment cum Rehabilitation Programme.
        With a view to reducing the demand for the consumption of alcohol and dependence producing substances, the thrust will be on preventive education programmes and on reintegration of the addicts into the mainstream of the society. The services provided at the center is – preventive education and awareness generation, Screening and Motivational Counseling, Detoxification and whole person recovery(WPR), Care and Support to families and drug users, Referral Services, After care and follow-up and rehabilitation support.
        `,
    },
  ],
};

type MissionType = {
  title: string;
  sections: {
    subtitle: string;
    content: string;
  }[];
};

const Mission: React.FC<MissionType> = ({ title, sections }) => {
  return (
    <section className="container mx-auto py-10 px-5">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      {sections.map((section, index) => (
        <div key={index} className="mb-8">
          {section.subtitle && (
            <h3 className="text-2xl font-semibold mb-4">{section.subtitle}</h3>
          )}
          <p className="text-base leading-7 whitespace-pre-wrap">
            {section.content}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Mission;
