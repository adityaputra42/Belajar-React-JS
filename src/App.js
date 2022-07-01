
import './App.css';
import Select from 'react-select'
import { useEffect ,useState} from 'react';

function App() {

  const [datas, setDatas] = useState([])
  const [userSelect, setUserSelect] = useState("")
  const [isSelect, setIsSelect] = useState(false)


  const getBerries = async () => {
    const berries = await fetch("https://pokeapi.co/api/v2/berry/")
    const value = await berries.json()
    const result = value.results.map(data => {

      return {
        label: data.name,
        value: data.name
   }
    })
    setDatas(result.sort((a,b) => a.label.localeCompare(b.label)))

}

  useEffect(() => {
  getBerries()
  }, [])

  const handleSubmit = () => {
   setIsSelect(state => !state)
  }

  const handleChange = (value) => {
    setUserSelect(value)
  }
  return (
    <div className="App">


      <Select options={datas} onChange={(e)=> handleChange(e.value)}></Select>
      <br></br>
      <button onClick={() => handleSubmit()} disabled={!userSelect}>{isSelect?"Hide value" :"Show Value"}</button>
      <br></br>
      <h1>{ isSelect ? userSelect : ""}</h1>
    </div>
  );
}

export default App;
