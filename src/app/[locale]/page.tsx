import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Stack } from "@/components/Stack";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen text-white selection:bg-cyber-primary selection:text-black">
            <Navigation />
            <Hero />
            <Stack />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}
