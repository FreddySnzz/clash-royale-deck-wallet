"use client";

import { motion, AnimatePresence } from "framer-motion";
import React from "react";

type ToastProps = {
  message: string;
  type?: "success" | "error" | "info";
  isVisible: boolean;
  onClose: () => void;
};

export default function Toast({ 
  message, 
  type = "info", 
  isVisible, 
  onClose 
}: ToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className={`fixed bottom-6 right-6 px-4 py-3 rounded-lg shadow-lg text-white z-50
            ${type === "success" ? "bg-green-600" : type === "error" ? "bg-red-600" : "bg-blue-600"}`}
        >
          <div className="flex items-center justify-between gap-3">
            <span>{message}</span>
            <button
              onClick={onClose}
              className="text-white font-bold hover:opacity-80 transition"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
