import React from "react";

function Sidebar() {
  return (
    <div className="flex flex-col w-[350px]">
      <div className="flex flex-col w-[90%] pb-6 border-b-2 ">
        <p className="uppercase font-semibold">price range</p>
        <p>slider</p>
      </div>
      <div className="flex flex-col w-[90%] pb-6 border-b-2 ">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <p className="uppercase font-semibold mr-4">brand</p>
            <p className="uppercase text-[10px] text-gray-600 font-semibold">
              show all
            </p>
          </div>
          <p className="text-4xl">-</p>
        </div>
        <div class="flex flex-col">
          <label class="flex items-center">
            <input type="radio" class="form-radio text-indigo-600" />
            <span class="ml-2">Opcion 1</span>
          </label>
          <label class="flex items-center ">
            <input type="radio" class="form-radio text-indigo-600" />
            <span class="ml-2">Opcion 2</span>
          </label>
        </div>
      </div>
      <div className="flex flex-col w-[90%] pb-6 border-b-2 ">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <p className="uppercase font-semibold mr-4">gender</p>
            
          </div>
          <p className="text-4xl">-</p>
        </div>
        <div class="flex flex-col">
          <label class="flex items-center">
            <input type="radio" class="form-radio text-indigo-600" />
            <span class="ml-2">Male</span>
          </label>
          <label class="flex items-center ">
            <input type="radio" class="form-radio text-indigo-600" />
            <span class="ml-2">Female</span>
          </label>
          <label class="flex items-center ">
            <input type="radio" class="form-radio text-indigo-600" />
            <span class="ml-2">All</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
