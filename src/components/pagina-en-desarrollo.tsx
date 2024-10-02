"use client"

import { motion } from 'framer-motion'
import { Construction } from 'lucide-react'

export function PaginaEnDesarrolloComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="inline-block mb-4"
        >
          <Construction className="w-16 h-16 text-gray-600" />
        </motion.div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Sitio en Desarrollo</h1>
        <p className="text-xl text-gray-600 mb-8">Estimado visitante, nos encontramos en proceso de actualización de nuestro sitio web.</p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        >
          <div className="bg-gray-700 text-white py-2 px-4 rounded-lg shadow-lg">
            <p className="text-sm">Le agradecemos su comprensión.</p>
            <p className="text-sm mt-1">Estaremos de vuelta pronto con nuevas mejoras.</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}