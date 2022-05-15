import { format } from 'date-fns';
import sl from 'date-fns/esm/locale/sl/index.js';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ date, treatment,setTreatment }) => {
    const [user, loading, error] = useAuthState(auth);
    const { _id,name,slots } = treatment
    const formatedDate=format(date, 'PP')
    const handelBooking=(e)=>{
        e.preventDefault()
        const slotTime=e.target.slot.value
        console.log(date,slotTime)
        const booking={
            treatmentId:_id,
            treatmentName:name,
            date:formatedDate,
            slotTime,
            patient:user.email,
            patientName:user.displayName,
            phone:e.target.phone.value
        }
        fetch('http://localhost:5000/booking',{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.success){
                toast(`appointment is set ${formatedDate} at ${slotTime}`)
            }
            else{
                toast.error(`Alerady have a appointment on ${data.booking?.date} at ${data.booking?.slotTime}`)
            }
            setTreatment(null)
        })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Bookin For : {name}</h3>
                    <form onSubmit={handelBooking} className='grid grid-cols-1 justify-items-center mt-3 gap-3'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot,index)=><option 
                                value={slot} Key={index}>{slot}
                                </option>)
                            }
                            
                        </select>
                        <input type="text" name='name' disabled  value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Your Phone" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' className="btn btn-secondary text-white w-full max-w-xs" />


                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;