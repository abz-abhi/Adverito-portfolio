import Hero from "./hero";
import Services from "./services/services";
import Projects from "./projects";
import Testimonial from "./testimonial";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
      <Testimonial />
      <ContactPage />
    </div>
  );
}
