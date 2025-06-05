import { MailPlus, PhoneCall } from "lucide-react";
import { Button } from "./ui/button";
import OptimizedImage from "./shared/OptimizedImage";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="wrapper grid grid-cols-1 md:grid-cols-2 gap-5 py-10"
    >
      {/* <div className="bg-primary/30 w-full md:w-1/2 aspect-square max-h-136 rounded-2xl"></div> */}

      <OptimizedImage
        path="/travelz/faq"
        containerClassName="aspect-square max-h-136 rounded-2xl overflow-hidden"
      />

      <div>
        <h2 className="h_md text-primary">Contact us</h2>
        <p className="text-lg text-muted-foreground mt-3">
          Have queries or need assistance planning your next adventure? 
          Orgoto Tours is here to assist you. 
          Explore our catalogue and reach out to us today to turn your dream trip into reality!
        </p>
        <div className="grid gap-3 mt-5 lg:grid-cols-2">
          <Button variant="secondary" size="lg" className="py-6 text-base">
            <MailPlus className="size-6" />
            Email
          </Button>
          <Button variant="secondary" size="lg" className="py-6 text-base">
            <PhoneCall className="size-6" />
            Phone
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
