"use client";

import { motion } from "framer-motion";
import "../[lang]/globals.css";

import { AsunLogo } from "../[lang]/components/asun_logo/asun_logo";

const Products = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "100dvh",
        padding: "10px",
        backgroundColor: "#000000",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "100dvh",
          padding: "20px",
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
            fontSize: "100%",
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
            backgroundColor: "#ffffff",
            color: "#000",
            fontSize: "100%",
            fontWeight: "bold",
            marginTop: "20px",
          }}
          onClick={() => {
            window.open(
              "https://drive.google.com/uc?export=download&id=1rUYsiC5vAGU7AJGfEj2fJm-J22tFioa_"
            );
          }}
        >
          Download Contact
        </motion.button>
      </div>
    </div>
  );
};

export default Products;
