import { useState } from 'react';
import './App.css'

function App() {

  let formData = new FormData();
  const [data, setData] = useState([]);
  function upload(e:any){
    e.preventDefault();
    fetch("http://localhost:3002/", {
            method:"POST",
            body:formData
          }).then((res:any) => res.json()).then((datas:any) => setData(datas));
  }
  return (
    <>
      <form>
        <input type='file' onChange={(e) => formData.append('file', e.target.files![0])} accept='.csv'/>
        <button onClick={upload}>
          Upload
        </button>
      </form>
      {data.length > 0 && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
  )
}

export default App
