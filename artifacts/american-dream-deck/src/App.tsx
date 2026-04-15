import React, { useEffect, useState } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import NavBar from "@/components/NavBar";
import Hero from "@/components/sections/Hero";
import Why from "@/components/sections/Why";
import Retail from "@/components/sections/Retail";
import Luxury from "@/components/sections/Luxury";
import Dining from "@/components/sections/Dining";
import Entertainment from "@/components/sections/Entertainment";
import Events from "@/components/sections/Events";
import Sponsorship from "@/components/sections/Sponsorship";
import Leasing from "@/components/sections/Leasing";
import Contact from "@/components/sections/Contact";

const queryClient = new QueryClient();

function MainDeck() {
  return (
    <div className="bg-background min-h-screen text-foreground font-sans overflow-x-hidden">
      <NavBar />
      <main>
        <Hero />
        <Why />
        <Retail />
        <Luxury />
        <Dining />
        <Entertainment />
        <Events />
        <Sponsorship />
        <Leasing />
        <Contact />
      </main>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={MainDeck} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
