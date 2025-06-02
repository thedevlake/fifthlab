import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Marq from "@/components/Marq";
import Cards from "@/components/CardsSection";
import Solutions from "@/components/Solutions";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <div className="grid grid-rows-[auto_1fr_auto] h-screen scroll-smooth">
        <Header />
        <Main />
        <Marq />
      </div>

      <div>
        <Cards />
      </div>
      <div className="scroll-smooth"></div>
      <Solutions />
      <Community />
      <Footer />
    </>
  );
}
