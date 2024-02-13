import React from 'react'
import { Outlet } from 'react-router-dom'
import FifthButton from '../../../../Components/Buttons/Btn-5/FifthButton'
function Default() {
  return (
    <div>
      <div className="flex gap-10 justify-around mb-[20px] mt-[20px]">
        <FifthButton title={"Office"} link={"office"} />
        <FifthButton title={"Health Care"} link={"healthcare"} />
        <FifthButton title={"Home"} link={"#"} />
        <FifthButton title={"All Projects"} link={"all-products"} />
      </div>
      <Outlet />
    </div>
  );
}

export default Default