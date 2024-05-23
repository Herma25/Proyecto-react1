
import react from "react" ; 

import '../hojas-de-estilo/Testimonio.css';
 
function Testimonio (props) {
return (
<div className= "contenedor-testimonio">
<img 
className = "imagen-testimonio"
src={require (`../imagenes/imagen-${props.imagen}.png`)}
alt="foto"/>
<div className="contenedor-texto-testimonio">
    <p className="nombre-pais">
        <strong>{props.nombre}</strong> en {props.pais}</p>
    <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
    <p className="texto-testimonio"> {props.testimonio}</p>
</div></div>
)}


export default Testimonio;