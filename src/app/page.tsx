"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="large"
        background="floatingGradient"
        cardStyle="layered-gradient"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Menu",          id: "menu"},
        {
          name: "FAQ",          id: "faq"},
      ]}
      brandName="Brew & Bean"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "gradient-bars"}}
      logoText="Brew & Bean"
      description="Experience the finest artisanal coffee and handcrafted bites in the heart of the city. Join us for a moment of peace."
      buttons={[
        {
          text: "View Menu",          href: "#menu"},
        {
          text: "Visit Us",          href: "#about"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-business-woman-sitting-cafe-with-coffee-phone_1303-9808.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="Crafted with Passion"
      description="From our locally sourced beans to our farm-to-table ingredients, every element of our cafe is designed to provide you with the most authentic experience possible."
      bulletPoints={[
        {
          title: "Artisan Roasts",          description: "We hand-roast our beans in small batches."},
        {
          title: "Fresh Ingredients",          description: "Sourced daily from our partner farms."},
        {
          title: "Community Focus",          description: "A gathering space for everyone."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-coffee-beans-mug_23-2148453593.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "item1",          name: "Signature Cappuccino",          price: "$4.50",          imageSrc: "http://img.b2bpic.net/free-photo/hot-coffee-cup-with-cappuccino-latte-art-eyeglasses-open-book-table_23-2147893349.jpg"},
        {
          id: "item2",          name: "Artisan Latte",          price: "$5.00",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-view-tasty-cupcake-with-chocolate-chips_23-2148718786.jpg"},
        {
          id: "item3",          name: "Americano",          price: "$3.75",          imageSrc: "http://img.b2bpic.net/free-photo/chocolate-mousse-dessert-garnished-with-mint-leaf-isolated-white-background_123827-26243.jpg"},
      ]}
      title="Our Extensive Menu"
      description="Explore our wide range of freshly brewed coffees, seasonal drinks, and delicious snacks."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      textboxLayout="split"
      useInvertedBackground={true}
      animationType="slide-up"
      testimonials={[
        {
          id: "1",          name: "Alice Miller",          handle: "@alicem",          testimonial: "The best cappuccino in town!",          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-drinking-coffee-urban-cafe_158595-676.jpg"},
        {
          id: "2",          name: "Bob Smith",          handle: "@bobsmith",          testimonial: "Perfect spot to work and relax.",          imageSrc: "http://img.b2bpic.net/free-photo/happy-pretty-woman-cafe-talking-phone_1262-14968.jpg"},
        {
          id: "3",          name: "Charlie D.",          handle: "@charlied",          testimonial: "I visit every single morning.",          imageSrc: "http://img.b2bpic.net/free-photo/elegant-young-smiling-woman-with-cup-drink-near-window-cafe_23-2148071599.jpg"},
        {
          id: "4",          name: "Dana White",          handle: "@danawhite",          testimonial: "Excellent service and cozy vibe.",          imageSrc: "http://img.b2bpic.net/free-photo/people-drinking-coffee-spacious-cafeteria_23-2150423998.jpg"},
        {
          id: "5",          name: "Eva Ross",          handle: "@evaross",          testimonial: "The pastry selection is incredible.",          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-drinking-coffee-urban-cafe_158595-676.jpg"},
      ]}
      title="Loved by Locals"
      description="Don't just take our word for it—hear what our regulars have to say about our coffee and service."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",          title: "Do you offer oat milk?",          content: "Yes, we offer a variety of milk alternatives."},
        {
          id: "f2",          title: "Are you open on weekends?",          content: "Absolutely, we are open 7 days a week."},
        {
          id: "f3",          title: "Can I reserve a table?",          content: "We work on a first-come, first-served basis."},
      ]}
      title="Frequently Asked"
      description="Got questions about our ingredients or opening hours? We've got answers."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Links",          items: [
            {
              label: "About",              href: "#about"},
            {
              label: "Menu",              href: "#menu"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Contact",              href: "#"},
          ],
        },
      ]}
      bottomLeftText="© 2024 Brew & Bean. All rights reserved."
      bottomRightText="123 Coffee St, City"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
