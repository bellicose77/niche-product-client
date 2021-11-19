import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './Blog.css';

const Blog = () => {
    const { user } = useAuth();
    // const { user } = allContexts;
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/blogs', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Succesfully Added New Blogs')
                }
                // console.log(res);
                reset();
            })


    }
    return (
        <div className="add-service">
            <h2>Post A Blog</h2>
            {/* <h3>{user.displayName}</h3>
			<img src={user.photoURL} alt="" /> */}

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title",)} placeholder="Title" />
                <textarea {...register("description")} placeholder="Description" />
                {/* <input {...register("duration", { required: true })} placeholder="Milage" />
				<input type="number" {...register("rating", { required: true, maxLength: 20 })} placeholder="Rating" />
				<input type="number" {...register("price")} placeholder="price" /> */}
                <input {...register("img")} placeholder="image url" />
                <input type="submit" className="btn btn-primary" />
            </form>

        </div>
    );
};

export default Blog;