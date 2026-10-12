import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Services from "./pages/Services.tsx";
import LiveStreamingDroneService from "./pages/LiveStreamingDroneService.tsx";
import RealEstateDroneService from "./pages/RealEstateDroneService.tsx";
import SolarPanelDroneInspection from "./pages/SolarPanelDroneInspection.tsx";
import DroneConstructionMonitoring from "./pages/DroneConstructionMonitoring.tsx";
import NotFound from "./pages/NotFound.tsx";

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

          <Route path="/drone-services-in-chennai-india" element={<Navigate to="/services" replace />} />
          <Route path="/aerial-drone-services-in-chennai" element={<Navigate to="/services" replace />} />
          <Route path="/drone-services-in-bangalore-skywheelzs" element={<Navigate to="/services" replace />} />
          <Route path="/wedding-drone-services-in-kerala" element={<Navigate to="/services" replace />} />
          <Route path="/beach-wedding-drone-services-andaman" element={<Navigate to="/services" replace />} />
          <Route path="/luxury-drone-services-delhi-ncr" element={<Navigate to="/services" replace />} />
          <Route path="/live-streaming-drone-service" element={<LiveStreamingDroneService />} />
          <Route path="/real-estate-drone-service" element={<RealEstateDroneService />} />
          <Route path="/solar-panel-drone-inspection" element={<SolarPanelDroneInspection />} />
          <Route path="/drone-construction-monitoring" element={<DroneConstructionMonitoring />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
