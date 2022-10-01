import React from 'react';
import { useMemo, useState, useEffect } from "react";
import Map from './components/Map';
import './App.css';
import Table from "./components/Table";
import axios from "axios";

// TODO: start here

function App() {

  const columns = useMemo(
    () => [
      {
        Header: "_id",
        columns: [
          {
            accessor: "_id"
          }
        ]
      },
      {
        Header: "id",
        columns: [
          {
            accessor: "id"
          }
        ]
      },
      {
        Header: "Tip Colectare",
        columns: [
          {
            accessor: "tip colectare"
          }
        ]
      },
      {
        Header: "Adresa",
        columns: [
          {
            accessor: "adresa"
          }
        ]
      },
      {
        Header: "Companie",
        columns: [
          {
            accessor: "companie"
          }
        ]
      },
      {
        Header: "Website",
        columns: [
          {
            accessor: "website"
          }
        ]
      },
      {
        Header: "Latitudine",
        columns: [
          {
            accessor: "latitudine"
          }
        ]
      },
      {
        Header: "Longitudine",
        columns: [
          {
            accessor: "longitudine"
          }
        ]
      }
    ],
    []
  );


  const [data, setData] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     const result = await axios.get("https://data.primariatm.ro/api/3/action/datastore_search?resource_id=d0134630-84d9-40b8-9bcb-dfdc926d66ab&limit=5");
  //     setData(result.data);
  //   })();
  // }, []);

  useEffect(() => {
    (async () => {
      const result = await fetch("/points");
      const rawData = await result.json();
      setData(rawData);
      // console.log(data)
    })();
  }, []);

if ( data )
{
  return (
    <>
      <h1>Haufe Hackathon</h1>
      <Table columns={columns} data={data} />
      <Map data={data} />
    </>
  );

}
else 
return(
  <div>No data</div>
)

}

export default App;
