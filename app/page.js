import Hero from "@/components/Hero";
import FeaturedBooks from "@/components/FeaturedBooks";
import Categories from "@/components/Categories";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <FeaturedBooks />
      <Categories />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}