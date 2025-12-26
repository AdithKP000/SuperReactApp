import WelcomeHero from './WelcomeHero';
import EnergyCounter from './EnergyCounter';
import ColorShifter from './ColorShifter';
import './index.css';

function App() {
  return (
    <div className="dashboard">
      <h1>🚀 Superhero Initializer 🚀</h1>

      <section className="section">
        <h2>1. Identity Verification</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <WelcomeHero name="Captain Code" superpower="Bug Smashing" />
          <WelcomeHero name="React Ranger" superpower="Instant Rendering" />
        </div>
      </section>

      <section className="section">
        <h2>2. Power Systems</h2>
        <EnergyCounter />
      </section>

      <section className="section">
        <h2>3. Armor Calibration</h2>
        <ColorShifter />
      </section>
    </div>
  );
}

export default App;
