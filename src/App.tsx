import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CupcakeVol1 from "./pages/CupcakeVol1";
import Book2 from "./pages/book2"; // This imports the Book2 component
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "@/Context/languagecontext";

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
              <Route path="/" element={<Home />} />
              {/* Route for first book - Cupcake Evolution */}
              <Route path="/cupcake-vol1" element={<CupcakeVol1 />} />
              {/* Route for second book - Alchemy in Layers */}
              <Route path="/book2" element={<Book2 />} />
              {/* Catch all route for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;