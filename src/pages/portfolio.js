const WORK = [
  {
    duration: "Feb 2020 - Present | India",
    name: "Kukufm",
    work: [
      "Ownership of consumer facing product kukufm.com",
      "Migrate site from client side to server side using Next js",
      "Build all the product from scratch.",
      "Responsible for end to end (developing to deployment)",
      "Develop many campains to boost product growth",
    ],
  },
  {
    duration: "Feb 2020 - Present | India",
    name: "Zomato",
    work: [
      "Ownership of consumer facing product kukufm.com",
      "Migrate site from client side to server side using Next js",
      "Build all the product from scratch.",
      "Responsible for end to end (developing to deployment)",
      "Develop many campains to boost product growth",
    ],
  },
  {
    duration: "Feb 2020 - Present | India",
    name: "Letsventure",
    work: [
      "Ownership of consumer facing product kukufm.com",
      "Migrate site from client side to server side using Next js",
      "Build all the product from scratch.",
      "Responsible for end to end (developing to deployment)",
      "Develop many campains to boost product growth",
    ],
  },
];

const CompanyBox = ({ name, duration, work }) => (
  <>
    <div style={{ display: "flex", alignItems: "center" }}>
      <h3>{name}</h3>
      <div style={{ margin: "10px" }}>|</div>
      <span>Senior Frontend Developer</span>
    </div>
    <h4>{duration}</h4>
    <ul class="no-style-ul">
      {work.map((wr) => (
        <li key={wr}>{wr}</li>
      ))}
    </ul>
  </>
);

const Portfolio = () => {
  return (
    <div>
      <div style={{ textAlign: "center", margin: "10px" }}>
        <h1 style={{ margin: "0px" }}>Rajat Dhoot</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>
            <p>
              <a href="mailto:someone@example.com">
                Email: rajatdhoot123@gmail.com
              </a>
            </p>
          </span>
          <span style={{ margin: "5px" }}>|</span>
          <span>
            <a href="tel:+918855866494">Ph: +91 8855866494</a>
          </span>
        </div>
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "30%" }}>
          <div>
            <h2>Education</h2>
            <h3 style={{ margin: "0" }}>University</h3>
            <h4>Bachlers of Engg</h4>
            <h4>Computer Scinence</h4>
            <h4>Pune University June 2016 | India</h4>
          </div>
          <div>
            <h2>Links</h2>
            <ul class="no-style-ul">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Linkedin: https://www.linkedin.com/in/rajatdhoot
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Github: https://github.com/rajatdhoot123
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ width: "70%" }}>
          <h2>Work Experience</h2>
          {WORK.map(({ name, duration, work = [] }) => (
            <CompanyBox
              key={name}
              work={work}
              name={name}
              duration={duration}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
