import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  title?: string;
  label?: string;
  light?: boolean;
}

export default function FaqSection({ faqs, title = 'Frequently Asked Questions', label = 'FAQ', light = false }: FaqSectionProps) {
  return (
    <section className={`py-24 ${light ? 'bg-forest text-ivory' : 'bg-white'}`}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <SectionLabel light={light} className="justify-center mb-6">{label}</SectionLabel>
          <h2 className={`font-display text-4xl md:text-5xl italic ${light ? 'text-ivory' : 'text-forest'}`}>{title}</h2>
          <GoldDivider className="justify-center mt-8" />
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className={`border ${light ? 'border-ivory/10' : 'border-gold/10'} p-8 md:p-10 hover:bg-gold/5 transition-colors`}>
              <h3 className={`font-display text-2xl italic mb-4 ${light ? 'text-ivory' : 'text-forest'}`}>{faq.question}</h3>
              <p className={`font-serif text-base leading-relaxed ${light ? 'text-ivory/70' : 'text-taupe'}`}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
