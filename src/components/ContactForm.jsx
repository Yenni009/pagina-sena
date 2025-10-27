import React from 'react';
export default function ContactForm(){
return (
<div className="right-panel">
<h3 style={{marginTop:"60px",textAlign:"center"}}>Contacto rápido</h3>
<form className="form" onSubmit={(e)=>{e.preventDefault(); alert('Mensaje enviado (demo)')}}>
<input className="input" placeholder="Nombre" required />
<input className="input" placeholder="Correo" type="email" required />
<textarea className="input textarea" placeholder="Mensaje" required />
<div className="submit">
<button className="btn" type="submit">Enviar mensaje</button>
</div>
</form>
</div>
);
}