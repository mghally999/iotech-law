import SeoMeta from "../../../layouts/SeoMeta";
import { notFound } from "next/navigation";
import "../../../styles/sections.scss"; // Gradient + shadow styles
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    slug: "legal-consultation",
    title: "Legal Consultation Services",
    description:
      "Lorem Ipsum is one of the leading legal firms that offer exceptional advisory services for both individuals and companies. Our mission is to provide effective legal solutions with professionalism and dedication. We believe in a transparent and efficient legal process to help you navigate any legal challenge.",
    categories: [
      {
        title: "General Legal Consultation",
        points: [
          "Law firm services for everyday legal consultations covering all legal aspects that our clients may encounter.",
          "Providing legal opinions and reviews.",
          "Drafting and reviewing contracts and agreements.",
        ],
      },
      {
        title: "Corporate Legal Consultation",
        points: [
          "Corporate structuring advice and the integration of legal consultations for companies to build and evolve their internal and external processes.",
          "Reviewing key business documents.",
          "Advisory on risk, taxation, and compliance.",
          "Intellectual property and transactional issues and registrations.",
        ],
      },
      {
        title: "Individual Legal Consultation",
        points: [
          "Same firm offers customized advisory services for individuals, including:",
          "Family matters, labor issues, and criminal representation.",
          "Real estate, tenancy, and personal disputes.",
        ],
      },
    ],
  },
];

const ServiceDetailPage = async ({ params }) => {
  const { slug } = params;
  const matched = services.find((item) => item.slug === slug);

  if (!matched) return notFound();

  const { title, description, categories } = matched;

  return (
    <>
      <SeoMeta title={title} />

      {/* ✅ Full Height Hero Image */}
      <section className="relative w-full h-[100vh] overflow-hidden">
        <Image
          src="/images/hero-background.jpg"
          alt="Service Background"
          fill
          priority
          className="object-cover object-center z-0"
        />
        <div className="absolute inset-0 z-10 gradient-overlay" />
        <div className="absolute inset-0 z-10 bg-black/40" />

        <div className="absolute inset-0 z-20 flex items-center justify-center px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
            {title}
          </h1>
        </div>
      </section>

      {/* ✅ Content Section */}
      <section className="section bg-white">
        <div className="container max-w-4xl mx-auto py-12">
          <Link
            href="/"
            className="mb-6 inline-block text-sm text-[#4B2615] underline"
          >
            &larr; Back
          </Link>

          <p className="text-[#333] mb-6">{description}</p>

          {categories.map((category, i) => (
            <div key={i} className="mb-8">
              <h2 className="text-2xl font-semibold text-[#4B2615] mb-2">
                {category.title}
              </h2>
              <ul className="list-disc list-inside text-[#333] space-y-1">
                {category.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;
