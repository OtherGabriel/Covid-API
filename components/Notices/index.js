import { useState } from "react";
import axios from "axios"

export function Notices () {
  const [ country, setCountry ] = useState("")
  const [ deaths, setDeaths ] = useState(0)
  const [ message, setMessage ] = useState("OK")

  async function findData () {
    let response

    const options = {
      method: 'GET',
      url: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total',
      params: { country: country },
      headers: {
        'x-rapidapi-key': 'e9bd1f9d30msh21ebc064bc0850bp12b36djsn8019af8a70a9',
        'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
      }
    };

    try {
      response = await axios.request(options)

      setDeaths(response.data.data.deaths)
      setMessage(response.data.message)
    } catch (error) {
      console.log("País não encontrado")
    }
  }

  return (
    <div>
      <input type="text" placeholder="Nome do país" value={ country } onChange={ (() => setCountry(event.target.value)) } />

      <h1>{ deaths }</h1>

      <h2>{ message }</h2>

      <button onClick={ findData }>Busca</button>
    </div>
  )
}
