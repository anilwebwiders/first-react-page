import React, { useState, useEffect } from "react";
import GetData from "../Services/api"
const CovidData = () => {

    const [list, setList] = useState([]);

    const getRecords = async () => {
        const newData = await GetData();
        console.log(newData.data.cases_time_series);
        setList(newData.data.cases_time_series);
        console.log('list',list);
    }

    useEffect( async () => {
        await getRecords();
    },[])

    

    return (
        <>
        <div className="row">
            <div className="col-sm-12">
                <div className="tabl-responsive">
                    <table className="table table-bordered table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>S No.</th>
                                <th>Daily Confirmed</th>
                                <th>Daily Deceased</th>
                                <th>Daily Recovered</th>
                                <th>Date</th>
                                <th>Total Confirmed</th>
                                <th>Total Deceased</th>
                                <th>Total Recovered</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.map((ele,index) => {
                                    return(
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>{ele.dailyconfirmed}</td>
                                            <td>{ele.dailydeceased}</td>
                                            <td>{ele.dailyrecovered}</td>
                                            <td>{ele.date}</td>
                                            <td>{ele.totalconfirmed}</td>
                                            <td>{ele.totaldeceased}</td>
                                            <td>{ele.totalrecovered}</td>
                                        </tr>
                                    )
                                })
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}

export default CovidData;