import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import ContactForm from '../components/ContactForm';
import '../css/landing.css';


export default function Home(){
return (
<div className="container">
<Navbar />
<Hero />
<Programs />


<div className="layout-grid">
<div className="left-large">
<h3 style={{marginTop:0}}>Panel principal</h3>
<p style={{color:'var(--muted)'}}>Aquí iría el contenido amplio: tablas, gráficos o información detallada del sistema.</p>
</div>
<ContactForm />
</div>
</div>
);
}