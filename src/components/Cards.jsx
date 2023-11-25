import '../styles/card.css'

export const Cards = ({producto, handleAgregar, handleQuitar}) => {
   const clickAgregar = () =>{
    handleAgregar()
    producto.added=true
  }
  const clickQuitar = () =>{
    handleQuitar()
    producto.added=false

  }

  return (
  
    <div className="tarjeta">
      <img src={producto.image} alt={producto.title} className="tarjeta-imagen"/>
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{producto.title}</h3>
        <p className="tarjeta-descripcion">{producto.description}</p>
        <p className="tarjeta-precio">{producto.price}</p>
        {producto.added 
        ? <button
            type="button"
            className="boton-quitar"
            onClick={clickQuitar}>
              Quitar del Carrito
          </button>
        : <button
            type="button"
            className="boton-agregar"
            onClick={clickAgregar}>
              Agregar al Carrito
          </button>}
      </div>
    </div>
  )
}
