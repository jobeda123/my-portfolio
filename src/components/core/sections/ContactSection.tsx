import SectionWrapper from "@/components/wrapper/SectionWrapper";
import SectionHeader from "@/components/core/typography/SectionHeader";
import ContactForm from "@/components/core/form/ContactForm";
import ContactInformation from "../../contact/ContactInformation";


export default function ContactSection() {
  return (
    <SectionWrapper name="contact">
      <div className="space-y-8 w-full mx-auto pb-0 lg:pb-8">
        <SectionHeader
          blackText="Contact"
          coloredText="Information"
          subtitle="Get in touch with me for collaborations, projects, or just to say hello!"
        />

        <ContactInformation />

        <div className="bg-white rounded-xl shadow-lg p-5 lg:p-6">  
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
}
