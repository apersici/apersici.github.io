import { useRef } from "react";
import "./background.scss";
import { motion, useInView } from "framer-motion";

const itemVariants = {
  initial: { opacity: 0, x: -150 },
  animate: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: i * 0.3, // Sequential animations
      ease: "easeInOut",
    },
  }),
};

const Background = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const items = [
    {
      title: "Politecnico di Milano",
      description: "M. Sc. in Computer Science and Engineering",
      icon: "/public/polilogo.png", // Image path for icon
      date: "2021 - Present",
    },
    {
      title: "Euclid Consortium",
      description: "ESA Associate",
      icon: "/public/euclidcon.png", // Image path for icon
      date: "December 2023 - Present",
    },
    {
      title: "European Space Agency (ESA)",
      description: "Traineeship",
      icon: "/public/esa.png", // Image path for icon
      date: "June 2023 - November 2023",
    },
    {
      title: "Università degli Studi di Urbino Carlo Bo",
      description: "B.Sc. in Applied Computer Science",
      icon: "/public/uniurb.png", // Image path for icon
      date: "2017 - 2021",
    },
    {
      title: "Solar Orbiter Metis Cosmic Rays Topical Team",
      description: "Member of the Topical Team 13",
      icon: "/public/metis.png", // Image path for icon
      date: "February 2021 - Present",
    },
    {
      title: "Internship Section of Physics",
      description: "Università degli Studi di Urbino Carlo Bo",
      icon: "/public/uniurb.png", // Image path for icon
      date: "August 2020 - February 2021",
    },
  ];

  return (
    <div className="background" ref={ref}>
      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0, transition: { duration: 1 } } : {}}
      >
        Background
      </motion.h1>
      <div className="timeline">
        {items.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            custom={index}
            variants={itemVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            whileHover={{
              scale: 1.05, // Slightly increase size
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Add shadow effect
              transition: { duration: 0.3, ease: "easeInOut" }, // Smooth transition
            }}
          >
            <img src={item.icon} alt={item.title} className="timeline-icon" /> {/* Image instead of emoji */}
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <span className="date">{item.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Background;
