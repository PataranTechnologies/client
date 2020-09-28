import React, { Component, useEffect, useState } from 'react';
import './sign.css'
import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery'; 
import DataTable from 'datatables.net';
import { MDBDataTable } from 'mdbreact';
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table'
const Home=()=>{

    const [data,setData] = useState({
        columns: [],
        rows: []
      })

    useEffect(()=>{

        fetch("https://restcountries.eu/rest/v1/all" ,{
            headers: {
              'Accept': 'application/json',
              //'Content-Type': 'application/json'
            },
            method: "GET",
        }).then(response=>response.json()).then((response)=>{
            console.log(response)

            let data=response[0]
            console.log(data)
            let lis=[]
            for( var key in data)
            {

                lis.push( {
                    label: key,
                    field: key,
                    sort: 'asc',
                    width: 150
                  })
            }
            let datalis=[]
            for (var i=0;i<response.length;i++)
            {
                datalis.push({...response[i],translations:[]});
            }


            setData({
                columns: lis,
                rows: datalis
              })


        })


    },[])

    return (
        <div className='outerContainer'>
            
        <div className='dataContainer'>
    


<MDBDataTable
      striped
      bordered
      small
      data={data}
    />


        </div>


        </div>
    )
}


export default Home;