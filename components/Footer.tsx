import { MailPlus, PhoneCall } from "lucide-react";

const Footer = () => {
  return (
    <footer className="wrapper py-10 bg-border/50 dark:bg-accent rounded-t-2xl">
      <div className="px-5 flex gap-12 flex-col">
        <div>
          <p className="h_sm text-primary leading-0">Orgoto tours</p>
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div>
            <p className="font-semibold text-lg">Policy</p>
            <ul className="flex flex-col gap-2 mt-3 text-muted-foreground">
              <li>Privacy policy</li>
              <li>Terms & conditions</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-lg">Support</p>
            <ul className="flex flex-col gap-2 mt-3 text-muted-foreground">
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-lg">Contact info</p>
            <ul className="flex flex-col gap-2 mt-3 text-muted-foreground">
              <li className="inline-flex items-center gap-3">
                <PhoneCall className="text-primary size-5" /> +91-8005993442
              </li>
              <li className="inline-flex items-center gap-3">
                <MailPlus className="text-primary size-5" /> info@orgototours.in
              </li>
            </ul>
          </div>
        </div>

        <div>
          <hr className="bg-muted-foreground/70 h-[1px] rounded-full" />
          <div className="mt-10">
            <p className="text-center text-muted-foreground">
              &copy; Orgoto Tours 2025, All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
