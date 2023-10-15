import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye,FaBolt,FaBeerMugEmpty} from "react-icons/fa6";
import Swal from 'sweetalert2';

const TeaCard = ({ tea, setTeas,teas }) => {
      const { _id, name, chef, test, photo } = tea;



      const handleDelete = (_id) => {
            console.log(_id);
            Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                  if (result.isConfirmed) {

                        console.log('delete confrm');
                        fetch(`https://tea-store-server-ms2c30h98-shaikats-projects.vercel.app/tea/${_id}`, {
                              method: 'DELETE'
                        })
                              .then(res => res.json())
                              .then(data => {
                                    console.log(data);
                                    if (data.deletedCount > 0) {
                                          Swal.fire(
                                                'Deleted!',
                                                'Your file has been deleted.',
                                                'success'
                                          )
                                          const remaining =teas .filter(ca =>ca._id !== _id);
                                          setTeas(remaining)
                                    }
                              })
                  }
            })
      }
      return (
            <div>
                  <div className="card card-side bg-[#F5F4F1] shadow-xl ">
                        <figure><img src={photo
                        } alt="coffee" /></figure>
                        <div className="card-body flex justify-between">
                              <h2 className="card-title">{name}</h2>
                              <p>{chef}</p>
                              <p>{test}</p>

                        </div>
                        <div className="card-actions justify-end">
                              <div className="btn-group btn-group-vertical">
                                    <button className="btn btn-active "><FaEye></FaEye> </button>
                                    <Link to={`/updatetea/${_id}`}>
                                          <button className="btn bg-red-200"><FaBolt className='text-white'></FaBolt> </button>
                                    </Link>
                                    <button
                                          onClick={() => handleDelete(_id)}
                                          className="btn  bg-red-200"><FaBeerMugEmpty className='text-white'></FaBeerMugEmpty> </button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default TeaCard;