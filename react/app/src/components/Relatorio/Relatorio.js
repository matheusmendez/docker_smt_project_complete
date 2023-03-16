import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import "./relatorio.css"
import {Line} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';
    
ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)



function Table () {


    const [values, setValues] = useState([]);
    const [newValues, setnewValues] = useState ([]);
    

    const changevalue = (event) => {
        setValues((prevevent) => ({
            ...prevevent,
            [event.target.name]: event.target.value,
            }));
    }
    
    

    useEffect(() =>{
        Axios.get("http://localhost:3001/")
        .then((response) => {setnewValues(response.data)})
    },[])

    let graphvalue = [];
    let graphhum = [];
 
    newValues.filter((newValues) => newValues.id_sensor.split(" ")
    .indexOf(values.id_sensor) !== -1).map((res) =>{
        graphvalue.push(parseFloat(res.temp_value))
        })

    newValues.filter((newValues) => newValues.id_sensor.split(" ")
    .indexOf(values.id_sensor) !== -1).map((res) =>{
        graphhum.push(parseFloat(res.humi_value))
        })
    

    let vet = [...Array(graphvalue.length).keys()]
    

    const data = {
        labels: vet,
        datasets: [
            {
                label:'Temperatura',
                data: graphvalue,
                backgroundColor: 'red',
                borderColor: 'red',
                borderWidth: 3,
            },
            {
                label:'Humidade',
                data: graphhum,
                backgroundColor: 'aqua',
                borderColor: 'aqua',
                borderWidth: 3,
            },

        ]
    }

    const options = {
       scales:{
        x:{
           display: true
        },
        y:{
            grid:{
                color: '#FAEBD7'
            }
        }
       }
    }

    let timeElapsed = new Date(Date.now())
    console.log(vet)
    
    const id = () => 
    {typeof vet !=="undefined" &&
        vet.map((id)=>{
            return <>

                <td>{id}</td>

            </>
    })}


    return (
        <>
            <h1 className="titulo">Relatório</h1>

            <div className="inputarea">
                <h2>Inicio: </h2>
                <input name="date_time"  type="date" value="03-23-2023" onChange={changevalue} /> 
                
                <p></p>

                <h2>Sensor: 
                    <p></p>
                    <select name ="id_sensor" onChange={changevalue}>
                        <option  value="sensor_drybox"  >Drybox</option>
                        <option  value="sensor_geladeira" >Geladeira</option>
                        <option  value="sensor_ambiente_1" >Ambiente 1</option>
                        <option value="sensor_ambiente_2" >Ambiente 2</option>
                        <option value="sensor_ambiente_3" >Ambiente 3</option>
                    </select> 
                </h2>
            </div>
            <div>
            
            <div>
                <Line 
                    data={data}
                    options ={options}
                    width={1200}
                    height={200}
                    

                />
          </div>
            </div>
            <table className="tabledrybox">
                    <th>ID</th>
                    <th>Temperatura</th>
                    <th>Humidade</th>
                    <th>Horário</th>
                        
                        {typeof newValues !=="undefined" &&
                            newValues.filter((newValues) => newValues.id_sensor.split(" ")
                            .indexOf(values.id_sensor) !== -1 && newValues.date_time.split(" ")
                            .indexOf(values.date_time)).map((res) =>{
                            
                            
                            return <>
                            
                            <tr>
                            <td>{() => vet.map()}</td>
                            <td>{res.temp_value}</td>
                            <td>{res.humi_value}</td>
                            <td>{res.date_time}</td>
                            </tr>
                            </>
                                
                        })}
                </table>
        </>
    )
}

export default Table;