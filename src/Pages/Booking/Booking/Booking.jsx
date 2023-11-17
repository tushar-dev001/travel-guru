import { useLoaderData } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

const Booking = () => {
  const bookingsInfo = useLoaderData();
  console.log(bookingsInfo);
  return (
    
    <div className="my-20">
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
          {
        bookingsInfo.map((booking, index) => <tr key={booking._id}>
            <th>{index + 1}</th>
            <td>{booking.name}</td>
            <td>{booking.email}</td>
            <td>{booking.date}</td>
            <button className="btn btn-outline btn-sm btn-square mx-4"><MdDelete /></button>
            <button className="btn btn-outline btn-sm btn-square"><AiFillEdit /></button>
          </tr>)
      }

          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default Booking;
