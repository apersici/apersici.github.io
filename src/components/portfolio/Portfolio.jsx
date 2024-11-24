import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Observation of solar energetic particles with Metis on board Solar Orbiter on February 25, 2023",
    img: "public/paper3.png",
    desc: "The Metis coronagraph on the Solar Orbiter mission aims to capture simultaneous solar corona images in visible and ultraviolet light. A study of galactic cosmic-ray (GCR) tracks in the first Metis visible light images, compared with GCR model predictions and Monte Carlo simulations, reveals that cosmic rays impact only a small fraction of image pixels. The findings will be used for instrument diagnostics and long-term GCR monitoring throughout the mission.",
    url: "https://www.aanda.org/articles/aa/pdf/2024/06/aa49386-24.pdf", // Specific URL for this paper
  },
  {
    id: 2,
    title: "Particle monitoring capability of the Solar Orbiter Metis coronagraph through the increasing phase of solar cycle 25",
    img: "public/paper2.png",
    desc: "The study examines the impact of galactic cosmic rays (GCRs) and solar energetic particles on the Solar Orbiter Metis coronagraph’s visible-light (VL) images. By comparing Monte Carlo simulations with observations from 2020 and 2022, it confirms the effectiveness of the onboard track-removal algorithm and stable instrument performance. Findings also help estimate particle impacts on Metis and other instruments like STIX and EUI, along with assessing deep charging risks.",
    url: "https://www.aanda.org/articles/aa/pdf/2023/09/aa46679-23.pdf", // Specific URL for this paper
  },
  {
    id: 3,
    title: "Cosmic-ray flux predictions and observations for and with Metis on board Solar Orbiter",
    img: "public/paper1.png",
    desc: "A model predicting galactic cosmic-ray (GCR) flux up to hundreds of GeV was validated using Solar Orbiter observations and Monte Carlo simulations. Cosmic rays were found to impact a minimal fraction of Metis visible-light (VL) image pixels, with detection efficiency aligned to particles with Z ≥ 2. The study supports long-term GCR flux monitoring and diagnostic analysis for Metis and other instruments.",
    url: "https://www.aanda.org/articles/aa/pdf/2021/12/aa40930-21.pdf", // Specific URL for this paper
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <motion.a
              href={item.url} // Navigation URL
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="button"
              target="_blank" // Opens link in a new tab
              rel="noopener noreferrer" // Improves security
            >
              See paper
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Publications</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
