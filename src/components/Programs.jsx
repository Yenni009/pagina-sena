import React from 'react';
function Card({title, children}){
return (
<article className="card">
<div>
<h3>{title}</h3>
<p>{children}</p>
</div>
<div style={{textAlign:'right'}}>
<small style={{color:'var(--muted)'}}>Última actualización 2d</small>
</div>
</article>
);
}


export default function Programs(){
return (
<div className="programs">
<div className="programs-title">Programas</div>
<div className="cards">
<Card title="Analisis y desarrollo de sofware">En este programa visualizaras el mundo de la tecnologia creando pagina web y aplicaciones.</Card>
<Card title="Desarrolllo de videojuegos">En este programa te prepararas y veras un panorama amplio de los videojuegos en el cual conoceras..</Card>
<Card title="Desarrollo 3D">En este tecnico en desarrollo 3D te prespararas en distintos ambitos y exploraras muchas herramientas conoce mas al respecto...</Card>
</div>
</div>
);
}