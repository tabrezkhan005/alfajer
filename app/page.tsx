import { HeroSection } from "./components/hero-section";
import { WeAreMadeOf } from "./components/we-are-made-of";
import { ValuePropositionStrip } from "./components/value-proposition-strip";
import { ShopByCategory } from "./components/shop-by-category";
import { BestSellersGrid } from "./components/best-sellers-grid";
import { ValueCombosHighlight } from "./components/value-combos-highlight";
import { TestimonialsSection } from "./components/testimonials-section";
import { NewsletterSignup } from "./components/newsletter-signup";
import { BrandStorySection } from "./components/brand-story-section";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* Hero Section */}
      <div className="w-full">
        <HeroSection />
      </div>

      {/* We Are Made Of Section */}
      <div className="w-full">
        <WeAreMadeOf />
      </div>

     

      {/* Shop by Category */}
      <div className="w-full">
        <ShopByCategory />
      </div>

      {/* Best Sellers Grid */}
      <div className="w-full">
        <BestSellersGrid />
      </div>

      {/* Value Combos Highlight */}
      <div className="w-full">
        <ValueCombosHighlight />
      </div>

      {/* Testimonials Section */}
      <div className="w-full">
        <TestimonialsSection />
      </div>

      {/* Brand Story Section */}
      <div className="w-full">
        <BrandStorySection />
      </div>

      {/* Newsletter Signup */}
      <div className="w-full">
        <NewsletterSignup />
      </div>

      {/* Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
}
