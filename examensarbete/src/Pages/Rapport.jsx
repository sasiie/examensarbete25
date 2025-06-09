import { motion } from 'framer-motion';
export default function Rapport() {
    return (
    <div className="snap-container">
        <div className="home">
            <img src="/Images/RapportBack.webp" alt="middag pa röda huset" className="hero-image" />
          {/* Hero Section */}
          <section className="section hero" id="hero">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Tekniska lösningen
            </motion.h1>
          </section>
    
          {/* Section */}
    <section className="section info full-screen" id="info">
      <img src="/Images/spesso.jpg" alt="Baren på spesso med bartedner bredvid" className="hero-image" />
      <motion.div
        className="overlay-text"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Om Oss</h2>
        <p>Applikationen är byggd med React och använder React Router för navigering mellan sidor. Jag har strukturerat koden i komponenter som Navbar, Footer, Hero, Section och WeatherChart för att återanvända layout och innehåll på ett modulärt sätt. CSS är antingen skriven som separata .css-filer eller via Tailwind, beroende på komponent.

</p>

<ul>
    <li>
    Responsivitet: Tidigt i projektet såg sidorna olika ut beroende på skärmstorlek. Jag skapade ett gemensamt Layout-komponent för att alla sidor skulle följa samma struktur.
    </li>
    <li>
    Animationer: För att ge ett modernt intryck använde jag Framer Motion, men initialt visades animationerna bara vid första inladdning. Detta löstes med whileInView.
    </li>
    <li>
    Väder-API: För att uppfylla kraven på avancerad funktionalitet implementerades en väderkomponent som visar veckovis prognos hämtad från Open-Meteo, utan behov av registrering.
    </li>
</ul>
      </motion.div>
    </section>
    
    
          {/* Section nr 2*/}
          <section className="section info full-screen" id="info">
          <img src="/Images/bar.png" alt="bartender på Spesso som häller upp fyra drickor i baren" className="hero-image" />
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
    