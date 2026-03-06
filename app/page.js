import Hero from "@/components/Hero";
import FeaturedBooks from "@/components/FeaturedBooks";
import Categories from "@/components/Categories";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedBooks />
      <Categories />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}