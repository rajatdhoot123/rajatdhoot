const Links = [
  { title: "Github", link: "github.com/rajatdhoot123" },
  { title: "Linkedin", link: "www.linkedin.com/in/rajatdhoot" },
  { title: "Website", link: "rajatdhoot123.github.io/rajatdhoot" },
];

const SKILLS = [
  { title: "Language", data: ["Javascript", "HTML", "CSS", "PHP"] },
  {
    title: "Framework/Library",
    data: [
      "React",
      "Node",
      "Express",
      "Nextjs",
      "Mongodb",
      "React Native",
      "Firebase",
      "Redux",
    ],
  },
  { title: "Familiar", data: ["AWS", "Python"] },
];

const INTREST = ["Travelling", "Gadgets", "Cricket", "Table Tennis"];

const SIDE_PROJECTS = [
  {
    title: "Movie Dovie",
    description: "Show you the common matches of movie to watch together",
    link: "https://bit.ly/2SEXu7n",
  },
  {
    title: "Courier Api",
    description: "Get json traking details of courier vendors",
    link: "https://bit.ly/3i7KOk7",
  },
];

const WORK = [
  {
    company:
      "Kuku FM is a podcast platform that is re-inventing the traditional radio by more diverse audio contents",
    duration: "Feb 2020 - Present | India",
    name: "Kukufm",
    designation: "Senior Frontend Developer",
    work: [
      "Full Ownership of consumer-facing product kukufm.com",
      "Migration of site from client to server by using next js",
      "Build all the products from scratch.",
      "Responsible for handling projects from start to end (developing to deployment)",
      "Develop multiple campaigns to boost product growth",
    ],
  },
  {
    company:
      "Zomato is an Indian multinational restaurant aggregator and food delivery company. Zomato provides information, menus, and user-reviews of restaurants as well as food delivery options from partner restaurants",
    duration: "July 2018 - Nov 2019 | India",
    name: "Zomato",
    designation: "Software Developer",
    work: [
      "Build zomato chat support client for customer",
      "Build a smart dashboard for customer support with prefilled order details for quick resolution",
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

const SubHeading = ({ children }) => <h2 className="text-2xl">{children}</h2>;
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
          <div className="mb-5">
            <SubHeading>Education</SubHeading>
            <Title>University</Title>
            <h4>Bachelor of Engineering</h4>
            <h4>Computer science</h4>
            <h4>Pune University June 2016 | India</h4>
          </div>
          <div className="my-5">
            <SubHeading>Links</SubHeading>
            <ul>
              {Links.map(({ title, link }) => (
                <li className="mb-2" key={link}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <div>{title}</div>
                    <div>{link}</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="my-5">
            <SubHeading>Skills</SubHeading>
            <ul>
              {SKILLS.map(({ title, data }) => (
                <li className="mb-2" key={title}>
                  <div>{title}</div>
                  <div className="flex flex-wrap">
                    {data.map((el) => (
                      <span className="ml-2" key={el}>
                        {el}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="my-5">
            <SubHeading>Side Projects</SubHeading>
            <ul className="flex flex-wrap">
              {SIDE_PROJECTS.map(({ title, description, link }) => (
                <li className="m-2" key={title}>
                  <div>{title}</div>
                  <div>{description}</div>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="my-5">
            <SubHeading>Intrest</SubHeading>
            <ul className="flex flex-wrap">
              {INTREST.map((el) => (
                <li className="m-2" key={el}>
                  <div>{el}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="m-5 mt-0">
          <SubHeading>Work Experience</SubHeading>
          {WORK.map(({ name, duration, work = [], designation, company }) => (
            <div className="mb-5" key={name}>
              <CompanyBox
                company={company}
                key={name}
                work={work}
                name={name}
                duration={duration}
                designation={designation}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
