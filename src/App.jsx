import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <>
      <Helmet>
        <title>Link | Indy Interior</title>
        <link rel="canonical" href="https://link.interiorbyindy.com/" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Indy Interior membantu Anda merancang desain interior untuk rumah, apartemen, kantor, dan banyak lagi. Segera wujudkan desain interior impian Anda sekarang juga. Kunjungi situs kami !" />
        <meta name="keywords" content="indy interior, interior by indy, desain, interior, custom furniture, jakarta, indonesia, link tree " />
        <meta property="og:title" content="Link | Indy Interior" />
        <meta property="og:description" content="Indy Interior membantu Anda merancang desain interior untuk rumah, apartemen, kantor, dan banyak lagi. Segera wujudkan desain interior impian Anda sekarang juga. Kunjungi situs kami !" />
        <meta property="og:image" content="./indylogo.webp" />
        <meta property="og:url" content="https://link.interiorbyindy.com/" />
        <meta property="og:site_name" content="Interior By Indy" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:url" content="https://link.interiorbyindy.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Indy Interior" />
        <meta name="twitter:description" content="Indy Interior membantu Anda merancang desain interior untuk rumah, apartemen, kantor, dan banyak lagi. Segera wujudkan desain interior impian Anda sekarang juga. Kunjungi situs kami !" />
        <meta name="twitter:image" content="./indylogo.webp" />
      </Helmet>
      <div className="bg-back bg-cover bg-center relative h-screen">
        <div className="absolute inset-0 bg-gray-800 opacity-70 h-screen z-10"></div>
        <div className="relative z-20">
          <div className="flex flex-col justify-center items-center py-16 gap-y-2">
            {/* Animated Image */}
            <motion.img className="rounded-full w-56 h-56 lg:w-80 lg:h-80" src="/indylogo.webp" alt="" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }} />

            {/* Animated Texts */}
            <motion.p className="text-6xl text-white text-center font-primary leading-none" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}>
              Indy Interior
            </motion.p>

            <motion.p className="font-light md:text-lg text-white font-secondary" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}>
              Interior Design, Build, Custom In Jakarta
            </motion.p>

            {/* Animated Buttons */}
            <motion.div className="space-y-4 lg:max-w-7xl w-80 md:w-[40rem]" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}>
              <motion.a
                href="https://wa.me/6285779474462?text=haloo%20admin%20mau%20konsul%20dong"
                className="lg:text-2xl text-xl block bg-custom-gradient font-secondary text-white text-center py-5 px-4 rounded-full shadow transition duration-300 ease-in-out hover:bg-custom-gradient-hover hover:shadow-lg hover:text-gray-900"
                whileHover={{ scale: 1.05 }}
              >
                <i className="fa-brands fa-whatsapp me-2"></i>Whatsapp
              </motion.a>
              <motion.a
                href="https://www.instagram.com/indy_interior/"
                className="lg:text-2xl text-xl block font-secondary bg-instagram-gradient text-white text-center py-5 px-4 rounded-full shadow transition duration-300 ease-in-out hover:bg-instagram-gradient-hover hover:shadow-lg hover:text-gray-900"
                whileHover={{ scale: 1.05 }}
              >
                <i className="fa-brands fa-instagram me-2"></i>Instagram
              </motion.a>
              <motion.a
                href="https://www.interiorbyindy.com/"
                className="lg:text-2xl text-xl block font-secondary bg-github-gradient text-white text-center py-5 px-4 rounded-full shadow transition duration-300 ease-in-out hover:bg-github-gradient-hover hover:shadow-lg hover:text-gray-900"
                whileHover={{ scale: 1.05 }}
              >
                <i className="fa-solid fa-globe me-2"></i>Website
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
