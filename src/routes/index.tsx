import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Marq from "@/components/Marq";
import { lazy, Suspense } from "react";

const Cards = lazy(() => import("@/components/CardsSection"));
const Solutions = lazy(() => import("@/components/Solutions"));
const Community = lazy(() => import("@/components/Community"));
const Footer = lazy(() => import("@/components/Footer"));

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <main>
        <div className="grid grid-rows-[auto_1fr_auto] h-screen scroll-smooth">
          <Header />
          <Main />
          <Marq />
        </div>

        {/* Lazy loaded components with fallback */}
        <Suspense fallback={<div>Loading...</div>}>
          <Cards />
          <Solutions />
          <Community />
        </Suspense>
      </main>

      <footer>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </footer>
    </>
  );
}
