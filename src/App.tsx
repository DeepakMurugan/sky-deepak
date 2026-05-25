import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Services from "./pages/Services.tsx";
import Chennai from "./pages/Chennai.tsx";
import Bangalore from "./pages/Bangalore.tsx";
import Kerala from "./pages/Kerala.tsx";
import Andaman from "./pages/Andaman.tsx";
import Delhi from "./pages/Delhi.tsx";
import NotFound from "./pages/NotFound.tsx";
import Chennaidrone from "./pages/chennaidrone.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<Contact />} />

          <Route path="/drone-services-in-chennai-india" element={<Chennaidrone />} />

          <Route path="/aerial-drone-services-in-chennai" element={<Chennai />} />
          <Route path="/drone-services-in-bangalore-skywheelzs" element={<Bangalore />} />
          <Route path="/wedding-drone-services-in-kerala" element={<Kerala />} />
          <Route path="/beach-wedding-drone-services-andaman" element={<Andaman />} />
          <Route path="/luxury-drone-services-delhi-ncr" element={<Delhi />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
