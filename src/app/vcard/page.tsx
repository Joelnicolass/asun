"use client";

import { motion } from "framer-motion";

import { AsunLogo } from "../[lang]/components/asun_logo/asun_logo";

const Products = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100svh",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "15px",
        backgroundColor: "#fff",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
          fontWeight: "bold",
          color: "#000",
        }}
      >
        <AsunLogo size={100} />
        FRANCISCO E. MACHEO LORCA
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        style={{
          width: "100%",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "15px",
          backgroundColor: "#fff",
          color: "#000",
          fontSize: "20px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
        onClick={() => {
          window.open("https://contact.asun.ar/fmacheo");
        }}
      >
        Download Contact
      </motion.button>
    </div>
  );
};

export default Products;
