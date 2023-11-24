import { useContext } from "react"
import { Cards } from "../components/Cards"
import { ProductosContext } from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext"

export const ComprasPage = () => {
 
  const {productos, setProductos} = useContext(ProductosContext)
  const {
    agregarCompra,
    eliminarCompra,
  } = useContext(CarritoContext);

  const handleAgregar =(compra) => {
    agregarCompra(compra)
  }
  const handleQuitar =(id) => {
    eliminarCompra(id)
  }

  return (
    <>
      <h1>Compras</h1>
      <hr />
      {productos.map( (producto) => (
      <Cards
        key={producto.id}
        producto={producto}
        handleAgregar={() => handleAgregar(producto)}
        handleQuitar={() => handleQuitar(producto.id)}
        />
      ))}
    </>
  )
}
