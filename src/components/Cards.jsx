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
  const formatConfig = {
    style: "currency",
    currency: "COP", // CNY for Chinese Yen, EUR for Euro
    minimumFractionDigits: 2,
    currencyDisplay: "symbol",
  };
  
  // setup formatters
  const spanishNumberFormatter = new Intl.NumberFormat("es-CO", formatConfig);

  return (
  
    <div className="tarjeta">
      <img src={producto.image} alt={producto.title} className="tarjeta-imagen"/>
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{producto.title}</h3>
        <p className="tarjeta-descripcion">{producto.description}</p>
        <p className="tarjeta-precio">{spanishNumberFormatter.format(producto.price)}</p>
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
