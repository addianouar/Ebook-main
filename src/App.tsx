import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main Landing
import MainLanding from "./pages/MainLanding";

// Ebooks
import EbooksPage from "./pages/EbooksPage";
import CupcakeVol1 from "./pages/CupcakeVol1";
import Book2 from "./pages/book2";

// Blogs
import BlogsPage from "./pages/BlogsPage";

// Masterclasses
import MasterclassesPage from "./pages/MasterclassesPage";
import SweetTable2026 from "./components/sections/Masterclasses/SweetTable2026";
import BeginnerCakeDesign from "./components/sections/Masterclasses/BeginnerCakeDesign";
import WeddingCakeMasterclass from "./components/sections/Masterclasses/WeddingCakeMasterclass";
import Cake3DMasterclass from "./components/sections/Masterclasses/Cake3DMasterclass";
import PrivateMasterclass from "./components/sections/Masterclasses/PrivateMasterclass";

// Legacy & 404
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "@/Context/languagecontext";
import { Analytics } from "@vercel/analytics/react";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Main Landing Page */}
              <Route path="/" element={<MainLanding />} />
              
              {/* Ebooks Section */}
              <Route path="/ebooks" element={<EbooksPage />} />
              <Route path="/cupcake-vol1" element={<CupcakeVol1 />} />
              <Route path="/book2" element={<Book2 />} />
              
              {/* Blogs Section */}
              <Route path="/blogs" element={<BlogsPage />} />

              {/* Masterclasses Section */}
              <Route path="/masterclasses" element={<MasterclassesPage />} />
              <Route path="/masterclass/sweet-table-2026" element={<SweetTable2026 />} />
              <Route path="/masterclass/beginner-cake-design" element={<BeginnerCakeDesign />} />
              <Route path="/masterclass/wedding-cake" element={<WeddingCakeMasterclass />} />
              <Route path="/masterclass/cake-3d" element={<Cake3DMasterclass />} />
              <Route path="/masterclass/private" element={<PrivateMasterclass />} />
              
              {/* Legacy route for backwards compatibility */}
              <Route path="/home" element={<Home />} />
              
              {/* Catch all route for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <Analytics />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;