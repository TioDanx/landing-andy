"use client";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import Image from "next/image";
import Testimonial from "./Testimonial";

const waLinks: string[] = [
  "https://wa.link/3w4ea0",
  "https://wa.link/x32l2w",
  "https://wa.link/p4c892",
];

// https://wa.link/3w4ea0 = 11 2536-7338
// https://wa.link/x32l2w = 223 553-4163
// https://wa.link/p4c892 = 223 553-4168

export default function CasinoLanding() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const [players, setPlayers] = useState(10000);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  let CTAButton = (
    <div className="flex justify-center mb-12 animate-ownPulse">
      <button>
        <a
          href={waLinks[Math.floor(Math.random() * 3)]}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold text-lg px-10 py-4 rounded-full shadow-xl hover:scale-105 transition-all duration-300"
          onClick={() => {
            if (
              typeof window !== "undefined" &&
              typeof (window as any).fbq === "function"
            ) {
              (window as any).fbq("track", "Lead");
            }
          }}
        >
          🍀Contactar con una cajera🍀
        </a>
      </button>
    </div>
  );

  const randomizePlayers = () => {
    setTimeout(() => {
      const operation = Math.random() > 0.3 ? "+" : "-";
      const activeUsers =
        operation === "+"
          ? Math.floor(Math.random() * 100)
          : Math.floor(Math.random() * 100);
      setPlayers(players + activeUsers);
      randomizePlayers();
    }, 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (ctaRef.current) {
        const rect = ctaRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setShowStickyCTA(!isVisible);
      }
    };

    randomizePlayers();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-dvh w-full overflow-hidden text-white font-sans">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-[url('/bg.avif')] bg-center bg-cover bg-no-repeat" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-black to-neutral-800 opacity-90" />
      </div>

      <div className="relative z-10 px-4 py-10 max-w-screen-xl mx-auto">
        <div className="hero min-h-dvh">
          <div className="flex justify-center mb-2">
            <Image src="/logo.png" alt="logo" width={250} height={250} />
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 ">
            ACCESO VIP EXCLUSIVO
          </h1>
          <h1 className="text-5xl md:text-5xl font-bold text-center mb-10 text-yellow-400 text-shadow-md animate-pulse rotate-355 text-shadow-orange-300">
            ¡BONUS DE BIENVENIDA!
          </h1>
          <p className="text-center w-auto text-gray-300 mx-auto py-4 mb-10 border-b-red-400 border-t-red-400 border-b-2 border-t-2 text-2xl">
            ⏳ Oferta por tiempo limitado ⏳
          </p>

          <p className="text-center w-auto text-gray-300 mb-15">
            👇🟢 ¡Escribinos por WhatsApp acá abajo!
          </p>
          <div ref={ctaRef}>{CTAButton}</div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 max-w-4xl gap-3 sm:gap-5 mx-auto mb-6">
          <Card
            icon="💰"
            title="20% en el primer d3posito"
            description="Obtené un bonus del 20% en tu primer depósito."
          />
          <Card
            icon="🎯"
            title="Mínimo $2000"
            description="Ingresá al juego con un depósito mínimo de $2000."
          />
          <Card
            icon="💳"
            title="Aceptamos Mercado Pago"
            description="Paga con comodidad usando tu billetera favorita."
          />
          <Card
            icon="💸"
            title="Retiros hasta 1M por dia"
            description="Retira en cualquier momento hasta 1 millon por persona!"
          />
          <Card
            icon="👥"
            title={`+${players} jugadores activos`}
            description="Únete a una comunidad que no para de crecer."
          />
          <Card
            icon="⭐"
            title="5 estrellas"
            description="Calificación perfecta por experiencia, confianza y diversión."
          />
        </div>

        <section className="relative z-10 px-4 py-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">
            💬 Clientes Satisfechos
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <Testimonial
              name="Sofía G."
              rating={5}
              message="Lo que más me sorprendió es que podés retirar hasta 1 millón por día sin problemas. Muy confiable y la mejor atención que vi en mucho tiempo."
            />
            <Testimonial
              name="Matías R."
              rating={5}
              message="La plataforma es súper segura, nunca tuve inconvenientes. La atención por WhatsApp es rapidísima y siempre responden con buena onda."
            />
            <Testimonial
              name="Valentina C."
              rating={5}
              message="Cumplen siempre, procesan rápido y podés sacar hasta 1M en el día. Para mí, la opción más confiable y con atención de primera."
            />
          </div>
        </section>

        <div className="flex justify-center mb-10">
          <h2
            className="text-xl md:text-2xl font-bold bg-blue-700 hover:bg-blue-600 px-6 py-2 rounded-lg cursor-pointer transition-all duration-300"
            onClick={() =>
              window.open(
                "https://www.facebook.com/profile.php?id=61578328837489&rdid=4KDRtVx6hoqlwrus",
                "_blank"
              )
            }
          >
            📢 Seguinos en Facebook
          </h2>
        </div>
        {showStickyCTA && (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full">
            {CTAButton}
          </div>
        )}
        <footer className="text-center text-sm text-gray-400 border-t border-white/10 pt-4">
          Juego responsable +18 · © {new Date().getFullYear()} · Andres Bet
        </footer>
      </div>
    </div>
  );
}
