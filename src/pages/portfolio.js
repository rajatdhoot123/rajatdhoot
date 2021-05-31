const WORK = [
  {
    company: "Ownership of consumer facing product kukufm.com",
    duration: "Feb 2020 - Present | India",
    name: "Kukufm",
    designation: "Senior Frontend Developer",
    work: [
      "Ownership of consumer facing product kukufm.com",
      "Migrate site from client side to server side using Next js",
      "Build all the product from scratch.",
      "Responsible for end to end (developing to deployment)",
      "Develop many campains to boost product growth",
    ],
  },
  {
    company:
      "Zomato is an Indian multinational restaurant aggregator and food delivery company. Zomato provides information, menus and user-reviews of restaurants as well as food delivery options from partner restaurants",
    duration: "July 2018 - Nov 2019 | India",
    name: "Zomato",
    designation: "Software Developer",
    work: [
      "Build zomato chat support client for customer",
      "Build smart dashboard for customer support with prefilled order details for quick resolution",
      "Build merchant order management dashboard",
      "Build merchant onboarding dashboard (Do it yourself)",
      "Work on Zomato design system (Sushi)",
    ],
  },
  {
    company:
      "Platform to make fundraising easier for startups. LetsVenture web platform enables startups looking to raise seed / angel money to create investment ready profiles online, and connect to accredited Investors.",
    duration: "June 2017 - May 2018 | India",
    name: "Letsventure",
    designation: "Frontend Developer",
    work: [
      "Skills Learned and used - Javascript, Node, HTML/CSS",
      "Developed user friendly website",
      "Fix bugs from existing website and implemented enhancements that significantly improved webfunctionality and speed",
    ],
  },
];

const SubHeading = ({ children }) => (
  <h2 className="text-2xl my-2">{children}</h2>
);
const Title = ({ children }) => <h3 className="text-xl">{children}</h3>;

const CompanyBox = ({ name, duration, work, designation, company }) => (
  <>
    <div className="flex items-center">
      <div className="font-bold">{name}</div>
      <div style={{ margin: "10px" }}>|</div>
      <span>{designation}</span>
    </div>
    <h4>{duration}</h4>
    <p className="mb-2">{company}</p>
    <ul className="list-inside	list-disc">
      {work.map((wr) => (
        <li key={wr}>{wr}</li>
      ))}
    </ul>
  </>
);

const Portfolio = () => {
  return (
    <div className="a4-page p-5">
      <div>
        <h1 className="text-center text-3xl">Rajat Dhoot</h1>
        <div className="flex justify-center items-center">
          <span>
            <p>
              <a href="mailto:someone@example.com">
                Email: rajatdhoot123@gmail.com
              </a>
            </p>
          </span>
          <span className="m-5">|</span>
          <span>
            <a href="tel:+918855866494">Ph: +91 8855866494</a>
          </span>
        </div>
      </div>
      <div className="flex">
        <div>
          <div>
            <SubHeading>Education</SubHeading>
            <Title>University</Title>
            <h4>Bachlers of Engg</h4>
            <h4>Computer Scinence</h4>
            <h4>Pune University June 2016 | India</h4>
          </div>
          <div>
            <SubHeading>Links</SubHeading>
            <ul>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <div>Linkedin</div>
                  <div>https://www.linkedin.com/in/rajatdhoot</div>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <div>Github</div>
                  <div>https://github.com/rajatdhoot123</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <SubHeading>Work Experience</SubHeading>
          {WORK.map(({ name, duration, work = [], designation, company }) => (
            <CompanyBox
              company={company}
              key={name}
              work={work}
              name={name}
              duration={duration}
              designation={designation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
