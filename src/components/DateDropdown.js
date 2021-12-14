import React, { useState, useEffect } from 'react'
import Axios from 'axios';


function YearDropdown() {
    const [years, setYears] = useState([]);
    useEffect(() => {
        Axios.post('http://localhost:8000/fetchyears').then((response) => {
        console.log(response)  ;  
        setYears(response.data);
        }).catch((error) => {
            console.log(error);
        })
      }, []);
    return (
        <>
         <option value></option>
         {years.map((item) => {
             const { year, year_id } = item;
             return <option value={year} key={year_id}>{year}</option>
         })}   
        </>
    )
}

export const MonthDropdown = () => {
    const [months, setMonths] = useState([]);
    useEffect(() => {
        Axios.post('http://localhost:8000/fetchmonths').then((response) => {
            console.log(response);
            setMonths(response.data);
        }).catch((error) => {
            console.log(error);
        })
      }, []);
      return (
        <>
         <option value></option>
         {months.map((item) => {
             const { month, month_id } = item;
             return <option value={month} key={month_id}>{month}</option>
         })}   
        </>
    )
}

export default YearDropdown
