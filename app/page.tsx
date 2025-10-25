import Hero from "./hero";
import Clients from "./clients";
import Services from "./services/services";
import Projects from "./projects";
import Testimonial from "./testimonial";
import PopularClients from "./popular-clients";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <Clients />
      <Services />
      <Projects />
      <Testimonial />
      <PopularClients />
      <ContactPage />
    </div>
  );
}
