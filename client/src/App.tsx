import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/hooks/use-theme";

// Layout
import Layout from "@/components/layout/layout";

// Pages
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Products from "@/pages/products";
import Projects from "@/pages/projects";
import Contact from "@/pages/contact";
import Quote from "@/pages/quote";

import News from "@/pages/news";
import NewsArticle from "@/pages/news-article";
import Sitemap from "@/pages/sitemap";

import TermsOfService from "@/pages/terms-of-service";
import PortfolioDownload from "@/pages/portfolio-download";

import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/projects" component={Projects} />

        <Route path="/news" component={News} />
        <Route path="/news/:slug" component={NewsArticle} />
        <Route path="/sitemap" component={Sitemap} />

        <Route path="/terms-of-service" component={TermsOfService} />
        <Route path="/portfolio-download" component={PortfolioDownload} />

        <Route path="/quote" component={Quote} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="system" storageKey="powerton-ui-theme">
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
