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
    <AccordionItem value={value}>
      <AccordionTrigger className="text-muted-foreground">
        {title}
      </AccordionTrigger>
      <AccordionContent>{description}</AccordionContent>
    </AccordionItem>
  );
};

export default Faq;
