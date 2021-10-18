


import React from 'react'
import {useFetch} from '../services/requests';

export default function UploadForm(props) {


    const [response, loading, hasError] = useFetch("http://localhost:5000/data")

if(!response) return (<div>Loading ... </div>)


  return(
    <div>

    <div>Insira aqui seu arquivo csv</div>
    <br/> <br/>
{JSON.stringify(response)}
      <input type="file" name="docx" onChange={setFile.bind(this)} />
      <input type="button" onClick={postFile} value="Upload" />
    </div>
  )
  function postFile(event) {   
    // HTTP POST  
  }
  function setFile(event) {
    // Get the details of the files
    console.log(event.target.files)
  }
}



