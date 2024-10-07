import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import ProjectCard from "../Component/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="projects">
      <div className="mx-5">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mx-auto"
          style={{ width: "18rem" }}
        >
          <Tab eventKey="profile" title="Tabs">
            {projects.map((project, index) => {
              return <ProjectCard key={index} {...project} />;
            })}
          </Tab>
          {/* <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab> */}
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
