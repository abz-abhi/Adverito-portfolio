import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Us - Adverito Digital Agency",
  description:
    "Get in touch with Adverito for premium digital solutions. Web development, mobile apps, UI/UX design, and digital marketing services.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Let&apos;s Build Something
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                {" "}
                Amazing
              </span>{" "}
              Together
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Ready to transform your digital presence? Our team is here to help
              you create exceptional digital experiences that drive real
              business results.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-12">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">
                  24h
                </div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">
                  98%
                </div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">
                  50+
                </div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Contact Form Column */}
            <div>
              <div className="sticky top-24">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Send us a message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you
                  within 24 hours. We&apos;re excited to hear about your
                  project!
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info Column */}
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
     
    </div>
  );
}
