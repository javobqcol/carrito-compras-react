import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const CarritoPage = () => {
  const {
    listaCompras,
    aumentarCantidad,
    disminuirCantidad,
    eliminarCompra,
  } = useContext(CarritoContext);
 
  const calcularTotal = () =>{
    return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0)
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
    <div className="container padding" >
      <table className="table table-sm table-hover align-middle">
        <thead>
          <tr className="fst-italic">
            <th scope="col" className="text-center">Nombre</th>
            <th scope="col" className="text-end">Precio</th>
            <th scope="col" className="text-center">Cantidad</th>
            <th scope="col" className="text-end">Valor.</th>
            <th scope="col" className="text-center">Eliminar</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {listaCompras.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td className="text-end">{spanishNumberFormatter.format(item.price)}</td>
              <td className="text-center">
                <button onClick={() => disminuirCantidad(item.id)} className="btn btn-outline-primary">-</button>
                <button className="btn btn-primary">{item.cantidad}</button>
                <button onClick={() => aumentarCantidad(item.id) } className="btn btn-outline-primary">+</button>
              </td>
              <td className="text-end">
               {spanishNumberFormatter.format(item.cantidad * item.price)}
              </td>
              <td className="text-center">
                <button 
                  type="button"
                  className="btn btn-danger"
                  onClick={() => eliminarCompra(item.id)}>
                    Eliminar
                  </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="table-group-divider">
          <tr>
            <td colSpan={3} className="text-center"><b><i>Total:</i></b></td>
            <td className="text-end">{spanishNumberFormatter.format(calcularTotal())}</td>
            <td></td>
          </tr>
          </tfoot>
      </table>
      <div className="d-grid gap-2">
        <button className="btn btn-primary">Comprar</button>
      </div>
    </div>
  );
};
