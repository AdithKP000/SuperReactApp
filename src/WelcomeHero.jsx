function WelcomeHero(props) {
    return (
        <div className="hero-card">
            <h2>🦸 Super ID: {props.name}</h2>
            <p>Superpower: <strong>{props.superpower}</strong></p>
        </div>
    );
}

export default WelcomeHero;
