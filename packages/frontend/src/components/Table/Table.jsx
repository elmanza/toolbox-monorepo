import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
const TableC = () => {
  const [tableData, setTableData] = useState([]);  
  const [columns, setColumns] = useState([]);
  const selectedOption = useSelector((state) => state.table);
  useEffect(() => {
    // Función para realizar la solicitud al endpoint que devuelve los datos de la tabla
    async function fetchTableData() {
      try {
        const response = await fetch(`http://localhost:4000/files/data${selectedOption.option !== "" ? `?fileName=${selectedOption.option}`: ''}`);
        const data = await response.json();
        if (data.length) {
          const lines = data.filter(file => file.lines.length > 0);
          if (lines.length) {
            setColumns(Object.keys(lines[0].lines[0]));
          }
        }
        setTableData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTableData();
  }, [selectedOption.option]);
  console.log("fetchTableData", tableData.length);
  return (
    <div className='containerTable'>
      { tableData.length > 0 ? (
        <table className='table table-striped table-hover table-bordered'>
          <thead>
            <tr>
             {columns.map((row, index) => (
                  <th key={index}>{row}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              row.lines.map((row, index) => (
                <tr key={index}>
                  <td>{row.file}</td>
                  <td>{row.hex}</td>
                  <td>{row.number}</td>
                  <td>{row.text}</td>
                </tr>
              ))
            ))}
          </tbody>
        </table>
      ) : (<p>Este archivo no se pudo descargar</p>) }
    </div>
  )
}

export default TableC
