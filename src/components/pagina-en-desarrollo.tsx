"use client"

import { motion } from 'framer-motion'
import { Construction } from 'lucide-react'

export function PaginaEnDesarrolloComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#020f27] to-[#041e4e]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center p-8 rounded-lg bg-[#020f27]/80 backdrop-blur-sm"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="inline-block mb-6"
        >
          <Construction className="w-20 h-20 text-[#ffd700]" />
        </motion.div>
        <h1 className="text-5xl font-bold text-white mb-6">Sitio en Desarrollo</h1>
        <p className="text-xl text-[#8ab4f8] mb-8 max-w-2xl">
          Estimado visitante, nos encontramos en proceso de actualización y mejora de nuestro sitio web para ofrecerle una experiencia excepcional.
        </p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        >
          <div className="bg-[#1e3a8a] text-white py-4 px-6 rounded-lg shadow-lg border border-[#3b82f6]">
            <p className="text-lg mb-2">Le agradecemos su comprensión y paciencia.</p>
            <p className="text-lg">Estaremos de vuelta pronto con innovaciones significativas.</p>
          </div>
        </motion.div>
      </motion.div>
      
    </div>
  )
}