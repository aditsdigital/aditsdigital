import Hero from "@/components/Hero";
import TestimonialCard from "@/components/TestimonialCard";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "ADITS Digital transformed our online presence completely. Our organic traffic increased by 300% in just 6 months, and we're now ranking on the first page for our most important keywords!",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechCorp Inc",
      rating: 5,
    },
    {
      quote: "The team's expertise in PPC advertising helped us achieve a 250% ROI on our ad spend. Their strategic approach and continuous optimization have been game-changing for our business.",
      author: "Michael Chen",
      position: "CEO",
      company: "InnovateLabs",
      rating: 5,
    },
    {
      quote: "Professional, results-driven, and always ahead of the curve. ADITS Digital is our trusted digital marketing partner, and we couldn't be happier with the results they deliver.",
      author: "Emily Rodriguez",
      position: "Founder",
      company: "StartupXYZ",
      rating: 5,
    },
    {
      quote: "Working with ADITS Digital has been an absolute pleasure. Their social media strategies helped us grow our following by 200% and significantly increased our engagement rates.",
      author: "David Thompson",
      position: "Brand Manager",
      company: "GlobalBrand Co",
      rating: 5,
    },
    {
      quote: "The email marketing campaigns created by ADITS Digital have exceeded all our expectations. Our open rates are up 45% and conversions have tripled. Highly recommend!",
      author: "Lisa Park",
      position: "E-commerce Director",
      company: "RetailHub",
      rating: 5,
    },
    {
      quote: "From branding to SEO, ADITS Digital has been instrumental in establishing our market presence. Their comprehensive approach and attention to detail are unmatched.",
      author: "James Wilson",
      position: "Operations Manager",
      company: "EnterpriseHub",
      rating: 5,
    },
    {
      quote: "The WhatsApp marketing strategy implemented by ADITS Digital has opened up a new channel for us to connect with customers. The engagement levels have been phenomenal!",
      author: "Rachel Green",
      position: "Customer Success Lead",
      company: "ConnectPro",
      rating: 5,
    },
    {
      quote: "ADITS Digital's SMS marketing campaigns have been incredibly effective. We've seen a 60% increase in customer engagement and a significant boost in repeat purchases.",
      author: "Mark Anderson",
      position: "Marketing Manager",
      company: "ShopSmart",
      rating: 5,
    },
    {
      quote: "Their expertise in fixing our Google My Business issues was impressive. They resolved our phone number verification problem quickly, and our local visibility has improved dramatically.",
      author: "Jennifer Lee",
      position: "Business Owner",
      company: "LocalServices Pro",
      rating: 5,
    },
  ];

  return (
    <div>
      <Hero
        title="Client Testimonials"
        subtitle="Don't just take our word for it. Here's what our satisfied clients have to say about working with ADITS Digital."
        showCta={false}
        variant="minimal"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-testimonials-heading">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real feedback from real clients who have experienced the ADITS Digital difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.author}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
                rating={testimonial.rating}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" data-testid="text-join-heading">
            Join Our Success Stories
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Ready to achieve similar results? Let's discuss how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover-elevate active-elevate-2 transition-all" data-testid="button-get-started">
                Get Started Today
              </button>
            </a>
            <a href="/services">
              <button className="px-8 py-3 bg-transparent border-2 border-primary text-primary rounded-md font-semibold hover-elevate active-elevate-2 transition-all" data-testid="button-view-services">
                View Our Services
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
