import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";
import { faq } from "@/data/data";
import CallToAction from "./CTA";


const FAQ = () => {
  return (
    <section>
        <div className="min-h-screen flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-2xl">
                <h2 className="text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight text-blue-800">
                    Frequently Asked Questions
                </h2>
                <p className="mt-1.5 text-lg text-muted-foreground">
                    Quick answers to common questions about our products and services.
                </p>
                <Accordion
                    type="single"
                    collapsible
                    className="mt-8 space-y-4"
                    defaultValue="question-0"
                >
                    {faq.map(({ question, answer }, index) => (
                        <AccordionItem
                            key={question}
                            value={`question-${index}`}
                            className="bg-accent py-1 px-4 rounded-xl border-none"
                        >
                            <AccordionPrimitive.Header className="flex text-blue-800">
                                <AccordionPrimitive.Trigger
                                    className={cn(
                                        "flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                                        "text-start text-lg"
                                    )}
                                >
                                    {question}
                                    <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                                </AccordionPrimitive.Trigger>
                            </AccordionPrimitive.Header>
                            <AccordionContent className="text-muted-foreground">{answer}</AccordionContent>
                        </AccordionItem>
                ))}
                </Accordion>
            </div>
        </div>
        <CallToAction />
    </section>
    
  );
};
export default FAQ;