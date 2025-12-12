import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: EnvelopeIcon,
      title: "Email Us",
      details: ["adveritoprojects@gmail.com", "support@adverito.com"],
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: PhoneIcon,
      title: "Call Us",
      details: ["+91 77365-16031", "+91 86060-77265"],
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      icon: MapPinIcon,
      title: "Visit Us",
      details: ["123 Business Avenue", "San Francisco, CA 94107"],
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      icon: ClockIcon,
      title: "Business Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Contact Cards */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Get in touch
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {contactDetails.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${item.bg}`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ/Info Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-100 rounded-lg">
            <ChatBubbleLeftRightIcon className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            What happens next?
          </h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold mt-1">
              1
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Initial Response</h4>
              <p className="text-gray-600 text-sm">
                Our team will respond within 24 hours to discuss your project
                needs.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mt-1">
              2
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Discovery Call</h4>
              <p className="text-gray-600 text-sm">
                We&apos;ll schedule a free consultation to understand your goals
                and requirements.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold mt-1">
              3
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">
                Proposal & Timeline
              </h4>
              <p className="text-gray-600 text-sm">
                You&apos;ll receive a detailed proposal with timelines and cost
                estimates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social/Map Section */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-500/20 rounded-lg">
            <GlobeAltIcon className="w-6 h-6 text-green-400" />
          </div>
          <h3 className="text-xl font-bold">Global Presence</h3>
        </div>
        <p className="text-gray-300 mb-6">
          Serving clients worldwide with offices in San Francisco, New York, and
          London.
        </p>
        <div className="aspect-video bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">Interactive Map</div>
            <p className="text-sm text-gray-300">Our global locations</p>
          </div>
        </div>
      </div>
    </div>
  );
}
