import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero/Hero";
import News from "./components/News/News";
import Newsletter from "./components/Newsletter/Newsletter";
import Testimonials from "./components/Testimonials/Testimonials";
import { getTestimonials } from "./lib/dal";
import ContactForm from "./components/ContactForm/ContactForm";


export default async function Home() {
  const testimonials = await getTestimonials()
  return (
      <main>
      <div className="hero-wrap full-width">
      <Hero/>
      </div>
      <News/>
      <Newsletter/>
      <Testimonials testimonials={testimonials}/>
      <ContactForm/>
      </main>
  );
}
