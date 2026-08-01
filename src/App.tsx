import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FunFactsArchitecture from "./pages/FunFactsArchitecture";
import ThreeTierArchitecture from "./pages/ThreeTierArchitecture";
import ServerlessArchitecture from "./pages/ServerlessArchitecture";
import KubernetesArchitecture from "./pages/KubernetesArchitecture";
import FileSharingArchitecture from "./pages/FileSharingArchitecture";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/funfacts-architecture" element={<FunFactsArchitecture />} />
          <Route path="/threetier-architecture" element={<ThreeTierArchitecture />} />
          <Route path="/serverless-architecture" element={<ServerlessArchitecture />} />
          <Route path="/kubernetes-architecture" element={<KubernetesArchitecture />} />
          <Route path="/filesharing-architecture" element={<FileSharingArchitecture />} />
          <Route path="/signup" element={<Signup />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
