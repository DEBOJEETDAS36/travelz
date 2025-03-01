import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = ({
  title,
  description,
  value,
}: {
  title: string;
  description: string;
  value: string;
}) => {
  return (
    <AccordionItem value={value} className="mt-2">
      <AccordionTrigger className="hover:px-0">{title}</AccordionTrigger>
      <AccordionContent>{description}</AccordionContent>
    </AccordionItem>
  );
};

export default Faq;
