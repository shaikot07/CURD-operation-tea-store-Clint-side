import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateTea = () => {
      const tea = useLoaderData();
      const { _id, name, chef, test, photo } = tea;
      const handleUpdatedTea=(event)=>{
            event.preventDefault()
            const form = event.target;
            const name = form.name.value;
            const chef = form.chef.value;
            const test = form.test.value;
            const photo = form.photo.value;
            const updatedTea={name,chef,test,photo,};
            // console.log( updatedTea);
            fetch(`https://tea-store-server-ms2c30h98-shaikats-projects.vercel.app/tea/${_id}`, {
                  method: 'PUT',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify( updatedTea)

            })
                  .then(res =>res.json())
                  .then(data =>{
                        console.log(data);
                        if (data.modifiedCount > 0) {
                              Swal.fire({
                                    title: 'success!',
                                    text: 'tea Update Successfully',
                                    icon: 'success',
                                    confirmButtonText: 'Cool'
                              })
                        }
                        
                  })
      }
      return (
            <div>
                  <h2 className='text-4xl text-red-900'>Update tea</h2>
                  <div className="w-1/2 mx-auto">
                        <form onSubmit={handleUpdatedTea} className="w-full bg-pink-300 p-6">
                              <div className="flex w-full">
                                    <div className="form-control ">
                                          <label className="label">
                                                <span className="label-text">Tea name</span>
                                          </label>
                                          <label className="input-group">
                                                <input type="text" name="name" placeholder="tea Name" className="input input-bordered" />
                                          </label>
                                    </div>
                                    <div className="form-control ml-6">
                                          <label className="label">
                                                <span className="label-text">Chef</span>
                                          </label>
                                          <label className="input-group">
                                                <input type="text" name="chef" placeholder="Chef Name" className="input input-bordered" />
                                          </label>
                                    </div>
                              </div>
                              {/* SECOND ROW  */}
                              <div className="flex w-full ">
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Test</span>
                                          </label>
                                          <label className="input-group">
                                                <input type="text" name="test" placeholder="tea Name" className="input input-bordered" />
                                          </label>
                                    </div>
                                    <div className="form-control ml-6">
                                          <label className="label">
                                                <span className="label-text">Photo</span>
                                          </label>
                                          <label className="input-group">
                                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                                          </label>
                                    </div>
                              </div>
                              <button type="submit" className="btn mt-4 btn-block bg-fuchsia-500">Update Tea</button>
                        </form>
                  </div>
            </div>
      );
};

export default UpdateTea;