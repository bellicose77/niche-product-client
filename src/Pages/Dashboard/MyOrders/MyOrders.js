import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();
    // const { user } = allContexts;
    useEffect(() => {
        axios.get(`https://aqueous-inlet-49489.herokuapp.com/orders/${user.email}`)
            .then(res => {
                setMyOrders(res.data);
            });
    }, [user.email])


    const cancelOrder = (id) => {
        const cofirmation = window.confirm('confirm to delete!');
        if (cofirmation) {
            axios.delete(`https://aqueous-inlet-49489.herokuapp.com/delete/${id}`)
                .then(res => {
                    if (res.data === 1) {
                        const rest = myOrders.filter(order => order._id !== id);
                        setMyOrders(rest);
                        alert('succesfull deletion');
                    } else {
                        alert('Something went wrong!!');
                    }

                });
        }
    };
    return (
        <>
            <table className="table table-hover container">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                        <th scope="col">Buyer</th>
                        <th scope="col">Cancellation</th>
                    </tr>
                </thead>
                <tbody>
                    {myOrders?.map(myOrder => {
                        const { _id, name, title, price, status } = myOrder;
                        return (
                            <tr
                                key={_id}
                            >
                                <td className="td">{title}</td>
                                <td className="td">{price}</td>
                                <td className="text-primary">{status}</td>
                                <td className="td">{name}</td>
                                <td className="td">
                                    <button
                                        onClick={() => cancelOrder(_id)}
                                        className="btn btn-danger"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <Link to="/">
                <button className="btn btn-primary mx-3">Go Home</button>
            </Link>

            <Link to="/dashboard">
                <button className="btn btn-primary">Go Dashboard</button>
            </Link>
        </>
    );
};

export default MyOrders;