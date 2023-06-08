import React,{useState} from 'react';
import Colors from '../Config/Colors';
import search from "../Assets/Vector.png"

function TopBar() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(true);
      // Perform any additional actions on click
      setTimeout(()=>{
        setIsClicked(false);
      },100)
    };
  const inlineStyle = {
    backgroundColor: Colors.primarylight,
  };
  const inlineStylebtn = {
    backgroundColor: Colors.primary_dark,
  };
  const boxShadowStyle = {
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
  };
  const buttonStyle = {
    padding: '0.5rem 1rem',
    color: isClicked ? 'white' : 'black',
    backgroundColor: isClicked ? 'gray' : 'white',
    borderRadius: '0.25rem',
    transition: 'background-color 0.3s, box-shadow 0.3s',
    boxShadow: isClicked ? 'none' : '0px 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div className='w-full h-20 flex justify-between items-center' style={{backgroundColor:Colors.primarylight}}>
      <h3 className='text-black font-bold text-3xl ml-2'>Lemajo Phamacy</h3>
      <div className='w-3/12 bg-white flex justify-between rounded-xl pl-2 '>
        <input type='Text' className='w-full my-2 h-5' placeholder='Search' />
        <div className="px-4 flex items-center rounded-tr-xl cursor-pointer rounded-br-xl" style={inlineStylebtn}>
        <img src={search} className='m-auto' alt="Seach" />
        </div>
      </div>
      <div className='p-5 rounded-full bg-teal-500 w-16 h-16 items-center justify-center flex '>
        <h3 className='text-white text-3xl font-bold'>L</h3>
      {/* <button className='px-5 py-2 text-white mx-2 rounded'  style={inlineStylebtn}>Login</button>
      <button className='mx-2' style={buttonStyle} onClick={handleClick}>Sign up</button> */}
      </div>
    </div>
  );
}

export default TopBar;
