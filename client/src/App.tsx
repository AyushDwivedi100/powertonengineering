import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";

// Layout
import Layout from "@/components/layout/layout";

// Pages
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Products from "@/pages/products";
import Projects from "@/pages/projects";
import Portfolio from "@/pages/portfolio";
import Resources from "@/pages/resources";
import Configurator from "@/pages/configurator";
import Technology from "@/pages/technology";
import Quote from "@/pages/quote";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import Chatbot from "@/components/chatbot/chatbot";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/projects" component={Projects} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resources" component={Resources} />
        <Route path="/configurator" component={Configurator} />
        <Route path="/technology" component={Technology} />
        <Route path="/quote" component={Quote} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Chatbot />
    </Layout>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
