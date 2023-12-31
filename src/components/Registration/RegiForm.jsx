import React from 'react';

const RegiForm = () => {
    return (
        <section className={"my-24 flex flex-col items-center justify-center gap-10"}>
              <div className={"flex items-center justify-center gap-5"}>
                  <h2 className={"text-2xl font-semibold text-primary"}>Login</h2>
                  <div className={"bg-neutral h-4 w-[1px]"}></div>
                  <h2 className={"text-2xl font-semibold text-neutral"}>Registration</h2>
              </div>
            <div className={" border-2 p-20 border-gray-200 w-[55%]"}>
               <form>
                   <div className={"form-control"}>
                       <input type={"text"} placeholder={"username"} className={"outline-none " +
                           " border border-gray-200 focus:border-primary p-2.5 "}/>
                   </div>
                  <div className={"form-control"}>
                      <input type={"password"} placeholder={"password"} className={"outline-none " +
                          " border border-gray-200 focus:border-primary p-2.5 my-5 "}/>
                  </div>
                  <div className={"flex items-center justify-between"}>
                      <div className="form-control">
                          <label className="label cursor-pointer">
                              <input type="checkbox" className="checkbox checkbox-primary" />
                              <span className="label-text text-md ml-1 font-semibold">Remember me</span>
                          </label>
                      </div>
                      <p className={"hover:text-primary"}>Forgot Password</p>
                  </div>

                   <button className={"bg-[#F2F2F2] py-2 mt-5 px-6 font-semibold hover:bg-primary hover:text-base-100"}>Login</button>

               </form>
            </div>
        </section>
    );
};

export default RegiForm;