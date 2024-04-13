import aboutImg from "../images/about.jpg";
import Title from "./Title";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subtitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            we are passionate about showcasing the diverse beauty and cultural
            richness of India through meticulously crafted travel experiences
          </p>
          <p>
            With years of expertise in the travel industry, our team is
            dedicated to curating personalized tours that cater to your
            interests, preferences, and budget.
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
