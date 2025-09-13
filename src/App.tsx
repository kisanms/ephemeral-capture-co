import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useScrollToTop } from "./hooks/useScrollToTop";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import PortfolioView from "./pages/PortfolioView";
import About from "./pages/About";
import TeamMember from "./pages/TeamMember";
import Investment from "./pages/Investment";
import Blog from "./pages/Blog";
import BookSession from "./pages/BookSession";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppRoutes = () => {
  useScrollToTop();

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/:id" element={<PortfolioView />} />
      <Route path="/about" element={<About />} />
      <Route path="/team-member/:id" element={<TeamMember />} />
      <Route path="/investment" element={<Investment />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/book-session" element={<BookSession />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
