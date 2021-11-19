import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-inlet-49489.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [services])

    const handleDelete = id => {
        const confirmation = window.confirm('confirm to delete!');
        const url = `https://aqueous-inlet-49489.herokuapp.com/products/${id}`;
        if (confirmation) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const response = data.deleteCount;
                    if (response > 0) {
                        window.confirm('Are you Sure?')
                    } else {
                        alert('something went wrong!!')
                    }


                })
        }
    }
    return (
        <div>
            <h2>Manage Services</h2>
            {
                services.map(service => <div
                    key={service._id}>

                    <h4>Name: {service.title}</h4>
                    <img src={service.img} alt="" className="img-fluid" />

                    <Link to={`/updateForm/${service._id}`}>
                        <button className="btn btn-primary m-2">Update</button>
                    </Link>

                    <button onClick={() => handleDelete(service._id)} className="btn btn-primary m-2">Delete</button>
                </div>

                )
            }

        </div>
    );
};

export default ManageProducts;