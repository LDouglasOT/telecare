import React from 'react'
import Colors from '../Config/Colors'
import { AiOutlineAppstoreAdd } from 'react-icons/ai';

function SideBar() {
    const counter = [1,1,1,1,1,1,1,1,1]
    const style={
        width:"300px",
    }
    const mainbtns = {
        height:"65px",
        backgroundColor:"#629B99"
    }
  return (
    <div className='h-10/12 flex flex-col items-center pt-20 bg-teal-100' style={{...style,backgroundColor:Colors.primarylight}}>
        {counter.map(()=>(
          <div className='bg-green-800 my-1 cursor-pointer bg-teal-600 w-10/12 rounded flex justify-start items-center px-2' style={mainbtns}>
          <AiOutlineAppstoreAdd className='text-white w-8 h-8'/>
          <h3 className='ml-2 text-white font-bold'>Add</h3>
          </div>
        ))}
    </div>
  )
}

export default SideBar