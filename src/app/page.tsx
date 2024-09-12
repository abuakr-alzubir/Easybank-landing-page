import About from "./components/About";
import Articles from "./components/Articles";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About className="bg-slate-400" />
      <Articles />
    </>
  );
}
