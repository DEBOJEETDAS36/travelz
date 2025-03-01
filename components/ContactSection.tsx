import { MailPlus, PhoneCall } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="wrapper flex flex-col md:flex-row gap-5 py-10"
    >
      <div className="bg-primary/30 w-full md:w-1/2 aspect-square max-h-136 rounded-2xl"></div>
      <div className="md:w-1/2">
        <h2 className="h_md text-primary">Contact us</h2>
        <p className="text-lg text-muted-foreground mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          laborum ex, fuga consequatur harum sequi cupiditate expedita deserunt
          porro minus, labore molestias impedit distinctio voluptatum voluptatem
          obcaecati nesciunt. Magnam, mollitia?
        </p>
        <div className="grid gap-3 mt-5 lg:grid-cols-2">
          <Button variant="secondary" size="lg" className="py-6 text-base">
            <MailPlus className="size-6" />
            Gmail
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
