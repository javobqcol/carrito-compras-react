import { useContext } from "react"
import { Cards } from "../components/Cards"
import { ProductosContext } from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext"

export const ComprasPage = () => {
 
  const {productos} = useContext(ProductosContext)
  const {
    listaCompras,
    agregarCompra,
    aumentarCantidad,
    disminuirCantidad,
    eliminarCompra,
  } = useContext(CarritoContext);

  const handleAgregar =(compra) => {
    agregarCompra(compra)
  }
  const handleQuitar =(id) => {
    eliminarCompra(id)
  }
  const handleAumentar =() => {

  }
  const handleDisminuir =() => {

  }
  return (
    <>
      <h1>Compras</h1>
      <hr />
      {productos.map( (producto) => (
      <Cards
        key={producto.id}
        imagen={producto.image}
        titulo={producto.title}
        descripcion={producto.description}
        precio={producto.price}
        handleAgregar={() => handleAgregar(producto)}
        handleQuitar={() => handleQuitar(producto.id)}
        />
      ))}
    </>
  )
}
