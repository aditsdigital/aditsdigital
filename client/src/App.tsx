import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import Clients from "@/pages/Clients";
import Testimonials from "@/pages/Testimonials";
import Blog from "@/pages/Blog";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import SEO from "@/pages/services/SEO";
import SocialMedia from "@/pages/services/SocialMedia";
import PPC from "@/pages/services/PPC";
import EmailMarketing from "@/pages/services/EmailMarketing";
import SMSMarketing from "@/pages/services/SMSMarketing";
import WhatsAppMarketing from "@/pages/services/WhatsAppMarketing";
import Branding from "@/pages/services/Branding";
import GMBPhoneFix from "@/pages/services/GMBPhoneFix";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/seo" component={SEO} />
      <Route path="/services/social-media" component={SocialMedia} />
      <Route path="/services/ppc" component={PPC} />
      <Route path="/services/email-marketing" component={EmailMarketing} />
      <Route path="/services/sms-marketing" component={SMSMarketing} />
      <Route path="/services/whatsapp-marketing" component={WhatsAppMarketing} />
      <Route path="/services/branding" component={Branding} />
      <Route path="/services/gmb-phone-fix" component={GMBPhoneFix} />
      <Route path="/contact" component={Contact} />
      <Route path="/clients" component={Clients} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/blog" component={Blog} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Layout>
          <Router />
        </Layout>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
