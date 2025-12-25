import { HeroSection } from "./components/hero-section";
import { ComboOffers } from "./components/combo-offers";
import { CollectionsSection } from "./components/collections-section";
import { PremiumProducts } from "./components/premium-products";
import { AboutSection } from "./components/about-section";
import { CertificationsSection } from "./components/certifications-section";
import { BestSellerSection } from "./components/best-seller-section";
import { InstagramSection } from "./components/instagram-section";
import { NewsletterSection } from "./components/newsletter-section";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ComboOffers />
      <CollectionsSection />
      <PremiumProducts />
      <BestSellerSection />
      <AboutSection />
      <CertificationsSection />
      <InstagramSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
