import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeData } from '../../redux/tableSlice';
import './style.css';

const Header = () => {
  const selectedOption = useSelector((state) => state.table);
  const [options, setOptions] = useState([]); 
  const dispatch = useDispatch();
  console.log("HEADEEEER -->", selectedOption.option);
  useEffect(() => {
    // Función para realizar la solicitud al endpoint
    async function fetchFiles() {
      try {
        const response = await fetch('http://localhost:4000/files/list');
        const data = await response.json();
        setOptions(data.files);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFiles();
  }, []);

  function handleFileSelect(event) {
    console.log(event.target.value);
    dispatch(changeData(event.target.value))
  }
  return (
    <header>
      <h1>React Test App</h1>
      <select value={selectedOption.option} onChange={handleFileSelect}>
        <option value="">Todos los documentos</option>
        {options.map((file, index) => (
          <option key={index} value={file}>{file}</option>
        ))}
      </select>
    </header>
  )
}

export default Header
