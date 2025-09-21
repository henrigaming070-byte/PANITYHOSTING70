import React from "react";
import { motion } from "framer-motion";

export default function PanityHostingLanding() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-green-400 rounded-lg flex items-center justify-center text-white font-bold"
              whileHover={{ rotate: 15, scale: 1.1 }}
            >PH</motion.div>
            <div>
              <h1 className="text-lg font-semibold">PanityHosting</h1>
              <p className="text-xs text-gray-500">Hosting rápido y confiable</p>
            </div>
          </motion.div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            {['Características', 'Planes', 'Nosotros', 'Contacto'].map((link, i) => (
              <motion.a
                key={i}
                href={`#${link.toLowerCase()}`}
                className="hover:text-indigo-600"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * i }}
                whileHover={{ scale: 1.05 }}
              >
                {link}
              </motion.a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Hosting veloz, panel simple, soporte 24/7</h2>
            <p className="mt-4 text-gray-600">Servidores optimizados para sitios, juegos y aplicaciones. Despliega en segundos con nuestro panel intuitivo y soporte en español.</p>
            <div className="mt-6 flex gap-4">
              <motion.a 
                href="#planes" 
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded shadow hover:bg-indigo-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver planes
              </motion.a>
              <motion.a 
                href="#contacto" 
                className="inline-flex items-center gap-2 border px-5 py-3 rounded hover:bg-gray-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contacto
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="w-full max-w-md bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-white rounded-xl border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-400">Servidor</div>
                    <div className="font-medium">Madrid, España</div>
                  </div>
                  <motion.div className="text-right" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }}>
                    <div className="text-sm text-green-600">En línea</div>
                    <div className="text-xs text-gray-400">CPU 12% • RAM 28%</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Características */}
        <section id="características" className="mt-16">
          <motion.h3 className="text-2xl font-semibold" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>Características principales</motion.h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { title: "Panel sencillo", text: "Instala aplicaciones, gestiona dominios y revisa métricas fácilmente." },
              { title: "Copias automáticas", text: "Respaldo diario y restauración con un clic." },
              { title: "Red global", text: "Servidores distribuidos para baja latencia." }
            ].map((f, i) => (
              <motion.div key={i} className="p-6 bg-white rounded-lg shadow-sm" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }}>
                <h4 className="font-semibold">{f.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Planes */}
        <section id="planes" className="mt-16">
          <h3 className="text-2xl font-semibold">Planes</h3>
          <p className="mt-2 text-sm text-gray-600">Elige el plan que más se adapte a ti. Sin contratos ocultos.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {["Básico", "Popular", "Avanzado"].map((plan, i) => (
              <motion.div key={i} className="p-6 bg-white rounded-lg shadow-sm border" whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }}>
                <div className="text-sm text-gray-500">{plan}</div>
                <div className="mt-4 text-3xl font-extrabold">$ {(i+1)*2.99}<span className="text-base font-medium">/mes</span></div>
                <button className="mt-6 w-full py-2 rounded bg-indigo-600 text-white">Contratar</button>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}