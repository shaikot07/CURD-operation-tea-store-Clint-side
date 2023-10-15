import Swal from "sweetalert2";


const AddedTea = () => {

      const handleAddedTea=(event)=>{
            event.preventDefault()
            const form = event.target;
            const name = form.name.value;
            const chef = form.chef.value;
            const test = form.test.value;
            const photo = form.photo.value;
            const newTea={name,chef,test,photo,};
            // console.log(newTea);
            fetch('https://tea-store-server-ms2c30h98-shaikats-projects.vercel.app/tea',{
                  method:'POST',
                  headers:{
                        'content-type':'application/json'
                  },
                  body:JSON.stringify(newTea)
            })
                  .then(res =>res.json())
                  .then(data =>{
                        console.log(data);
                        if (data.insertedId) {
                              Swal.fire({
                                    title: 'success!',
                                    text: 'tea added Successfully',
                                    icon: 'success',
                                    confirmButtonText: 'Cool'
                              })
                        }
                        else {
                              Swal.fire({
                                    title: 'error!',
                                    text: 'tea do not added',
                                    icon: 'error',
                                    confirmButtonText: 'Try Agin'
                              })
                        }
                  })
      }

      return (
            <div className="w-1/2 mx-auto">
                  <h2 className="text-2xl font-bold">Added Tea</h2>
                  <form onSubmit={handleAddedTea} className="w-full bg-pink-300 p-6">
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
                        <button type="submit" className="btn mt-4 btn-block bg-fuchsia-500">Added Tea</button>
                  </form>
            </div>
      );
};

export default AddedTea;