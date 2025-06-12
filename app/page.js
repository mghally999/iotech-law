import config from "../config/config.json";
import SeoMeta from "../layouts/SeoMeta";
import HomeLanding from "../layouts/partials/HomeLanding";
import OurTeam from "../layouts/partials/OurTeam";
import Testimonials from "../layouts/partials/Testimonials";

const Home = () => {
  const { title } = config.site;

  const banner = {
    heading: "Trusted Legal Solutions",
    subheading: "Tailored for individuals and businesses.",
  };

  const feature = {
    heading: "Why Choose Us",
    items: [
      "Expert Lawyers",
      "Decades of Experience",
      "Client-Centered Approach",
    ],
  };

  const services = [
    {
      title: "Legal Consultation",
      description: "Expert advice to resolve your legal concerns quickly.",
      slug: "legal-consultation",
    },
    {
      title: "Real Estate Law",
      description: "Support for property contracts, disputes, and regulation.",
      slug: "real-estate-law",
    },
  ];

  return (
    <>
      <SeoMeta title={title} />

      {/* Banner */}
      <HomeLanding banner={banner} />

      {/* Features */}
      <OurTeam feature={feature} />

      {/* Services */}
      <Testimonials services={services} />

      {/* CTA */}
      {/* <Cta cta={call_to_action} /> */}
    </>
  );
};

export default Home;
