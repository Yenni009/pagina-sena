import React from 'react';
export default function Hero(){
return (
<section className="hero">
    <div className="hero-content">
        <h1> Centro de gestión de mercados y logística de la información</h1>
        <p>Aqui podras encontrar los programas mas populares de CGMLTI.</p>
        <div className="hero-cta">
            <button className="btn">Explorar</button>
            <button className="btn ghost" style={{marginLeft:8}}>Ver..</button>
        </div>
    </div>
</section>
);
}