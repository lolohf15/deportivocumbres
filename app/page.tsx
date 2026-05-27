import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Instalaciones from "@/components/Instalaciones";
import Reservaciones from "@/components/Reservaciones";
import Eventos from "@/components/Eventos";
import Formulario from "@/components/Formulario";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Instalaciones />
      <Reservaciones />
      <Eventos />
      <Formulario />
      <Footer />
    </main>
  );
}
