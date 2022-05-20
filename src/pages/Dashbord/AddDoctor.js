import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../sheard/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const { isLoading, error, data: services } = useQuery('services', () =>
        fetch('http://localhost:5000/serviceDoctor').then(res =>
            res.json()
        ))

    const imageStorageKey = '6ce3afe560f57a201360f8fa1d1b65ca'
    if (isLoading) {
        return <Loading></Loading>
    }
    const onSubmit = async data => {
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                if(result.success){
                    const img=result.data.url
                    const doctor={
                        name:data.name,
                        email:data.email,
                        spacialty:data.spacialty,
                        img:img
                    }
                    fetch('http://localhost:5000/doctor',{
                        method:'POST',
                        headers:{
                            'content-type':'application/json',
                            authorization:`Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body:JSON.stringify(doctor)
                    })
                    .then(res=>res.json())
                    .then(inserted=>{
                        if(inserted.insertedId){
                            toast.success('Added New Doctor')
                            reset()
                        }
                        else{
                            toast.error('Error Added Doctor')
                        }
                    })
                }
            })
    };
    return (
        <div className=' text-2xl '>
            <h2>Add A Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'name is requird'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'email is requird'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Type a valid email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">spacialty</span>
                    </label>
                    <select {...register('spacialty')} class="select input-bordered w-full max-w-xs">
                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}
                            >{service.name}</option>)
                        }
                    </select>
                </div>

                <label className="label">
                    <span className="label-text">Photo</span>
                </label>
                <input
                    type="file"
                    placeholder="Your Name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("image", {
                        required: {
                            value: true,
                            message: 'image is requird'
                        }
                    })}
                />
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                </label>
                <input className='btn w-full max-w-xs' type="submit" value="add" />
            </form>
        </div>
    );
};

export default AddDoctor;