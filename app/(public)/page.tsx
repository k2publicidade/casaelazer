import { HeroSection } from '@/components/home/hero-section'
import { ServicesSection } from '@/components/home/services-section'
import { AboutSection } from '@/components/home/about-section'
import { ProcessSection } from '@/components/home/process-section'
import { WhyUsSection } from '@/components/home/why-us-section'
import { FAQSection } from '@/components/home/faq-section'
import { FeaturedProductsSection } from '@/components/home/featured-products-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { FinalCTASection } from '@/components/home/final-cta-section'

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <HeroSection />

            {/* Services Grid overlapping Hero slightly */}
            <ServicesSection />

            <AboutSection />

            {/* Divider / Brand Strip could go here */}

            <ProcessSection />

            <WhyUsSection />

            {/* Reuse existing sections that still fit or are needed */}
            <div className="py-20 bg-white">
                <FeaturedProductsSection />
            </div>

            <FAQSection />

            {/* Reuse Testimonials but maybe adapted later, keeping for content density */}
            <TestimonialsSection />

            {/* Keeping FinalCTA as footer pre-empt */}
            <FinalCTASection />
        </div>
    )
}
