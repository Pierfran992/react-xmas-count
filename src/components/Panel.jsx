export default function Panel() {
    return (
        <div className="panel">
            <h1>Xmas is coming</h1>
            {/* counter */}
            <div className="counter">
                <div className="counter-block">
                    <div id="days" className="counter-block-number">00</div>
                    <div className="counter-block-label">Giorni</div>
                </div>
                <div className="counter-block">
                    <div id="hours" className="counter-block-number">00</div>
                    <div className="counter-block-label">Ore</div>
                </div>
                <div className="counter-block">
                    <div id="minutes" className="counter-block-number">00</div>
                    <div className="counter-block-label">Minuti</div>
                </div>
                <div className="counter-block">
                    <div id="seconds" className="counter-block-number">00</div>
                    <div className="counter-block-label">Secondi</div>
                </div>
            </div>
        </div>
    );
}