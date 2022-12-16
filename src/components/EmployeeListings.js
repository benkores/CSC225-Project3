import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../App.css';
import SingleListing from './SingleListing';

function EmployeeListings() {
    const [employees, setEmployees] = useState(null);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://api.matgargano.com/employees/')
            .then(response => {
                setEmployees(response.data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div>
                <h2 className="text-center mt-5 mb-5">Loading...</h2>
            </div>
        );
    }

    return (
        <div>
            {selectedEmployee ? (
                <SingleListing employee={selectedEmployee} />
            ) : (
                <div>
                    <h2 className="text-center mt-5 mb-5">
                        Welcome! Click on an employee to learn more about them!
                    </h2>
                    <div>
                        {employees.map(employee => (
                            <div className="card" key={employee.id} onClick={() => {
                                setSelectedEmployee(employee);
                            }}>
                                <div className="card-body">
                                    <h5 className="card-title">ID: {employee.id}</h5>
                                    <h5 className="card-title">Name: {employee.name}</h5>
                                    <h5 className="card-title">Department: {employee.department}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}


export default EmployeeListings;