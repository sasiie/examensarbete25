import { motion } from 'framer-motion';
import './Home.css'; // for custom styling

export default function Home() {
  return (
    <div className="snap-container">
    <div className="home">
        <img src="/Images/Background.jpg" alt="No38 building" className="hero-image" />
      {/* Hero Section */}
      <section className="section hero" id="hero">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Välkommen till No38
        </motion.h1>
      </section>

      {/* Info Section */}
<section className="section info full-screen" id="info">
  <img src="/Images/hero2.jpg" alt="roda huset" className="hero-image" />
  <motion.div
    className="overlay-text"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h2>Om Oss</h2>
    <p>Text om konceptet bakom plattformen...</p>
  </motion.div>
</section>


      {/* Another Section */}
      <section className="section info full-screen" id="info">
      <img src="/Images/hero3.jpg" alt="mat" className="hero-image" />
        <motion.div
            className="overlay-text"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Verksamheter</h2>
          <p>Beskrivning av Space, Spesso, Sergel Hub, Röda Huset...</p>
        </motion.div>
      </section>
    </div>
    </div>
  );
}
