import { HeroSection } from '@/components/home/hero-section'
import { ServicesSection } from '@/components/home/services-section'
import { AboutSection } from '@/components/home/about-section'
import { ProcessSection } from '@/components/home/process-section'
import { WhyUsSection } from '@/components/home/why-us-section'
import { FAQSection } from '@/components/home/faq-section'
import { FeaturedProductsSection } from '@/components/home/featured-products-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { FinalCTASection } from '@/components/home/final-cta-section'
import { Reveal } from '@/components/ui/reveal'

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <HeroSection />

            {/* Services Grid overlapping Hero slightly */}
            <div className="-mt-20 relative z-20">
                <Reveal width="100%" delay={0.4} variant="scale">
                    <ServicesSection />
                </Reveal>
            </div>

            <Reveal width="100%" delay={0.5} variant="slide-right">
                <AboutSection />
            </Reveal>

            {/* Divider / Brand Strip could go here */}

            <Reveal width="100%" delay={0.5} variant="fade">
                <ProcessSection />
            </Reveal>

            <WhyUsSection />

            {/* Reuse existing sections that still fit or are needed */}
            <div className="py-20 bg-white">
                <Reveal width="100%" delay={0.5} variant="slide-up">
                    <FeaturedProductsSection />
                </Reveal>
            </div>

            <Reveal width="100%" delay={0.5} variant="slide-left">
                <FAQSection />
            </Reveal>

            {/* Reuse Testimonials but maybe adapted later, keeping for content density */}
            <Reveal width="100%" delay={0.5} variant="scale">
                <TestimonialsSection />
            </Reveal>

            {/* Keeping FinalCTA as footer pre-empt */}
            <Reveal width="100%" delay={0.5} variant="blur">
                <FinalCTASection />
            </Reveal>
        </div>
    )
}
