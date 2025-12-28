import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "linn@example.com",
    href: "mailto:linn@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+47 000 00 000",
    href: "tel:+4700000000",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Stavanger, Norway",
    href: "#",
  },
];

function Contact() {
  return (
    <section id="contact">
      <div className="animate-fade-in animation-delay-400">
        <div className="glass p-8">
          <h3 className="text-xl font-semibold mb-6 ">Contact Information</h3>
          <div className="space-y-4">
            {contactInfo.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    {item.label}
                  </div>
                  <div className="font-medium">{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
