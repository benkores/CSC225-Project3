import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../App.css';

function SingleListing({employee}) {
    const [employeeInfo, setEmployeeInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://api.matgargano.com/employees/${employee.id}`)
            .then(response => {
                setEmployeeInfo(response.data);
                setLoading(false);
            });
    }, [employee.id]);

    if (loading) {
        return (
            <div>
                <h2 className="text-center mt-5 mb-5">Loading...</h2>
            </div>
        );
    }

    return (
        <div>
            <h2 className="text-center mt-5 mb-5">
                Employee Information
            </h2>
            <div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">ID: {employeeInfo.id}</h5>
                        <h5 className="card-title">Name: {employeeInfo.name}</h5>
                        <h5 className="card-title">Department: {employeeInfo.department}</h5>
                        <h5 className="card-title">Started on {employeeInfo.startDate}</h5>
                        <h5 className="card-title">Role: {employeeInfo.role}</h5>
                        <img src={employeeInfo.photo} alt="employee_photo"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleListing;