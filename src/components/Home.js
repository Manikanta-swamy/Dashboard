import React, { createContext, useReducer, useState } from 'react'
import {Link} from "react-router-dom"
import user from "../assets/person.png"
import bell from "../assets/bell.png"
import filledBell from "../assets/bell (1).png"
import search from '../assets/search.png'
import "../components/Home.css"
import Widget from './Widget'
import mydata from "./data.json"
import Modal from './Modal';


let reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_WIDGET':
            // Loop through categories to find the widget
                let newState = state.map(category => {
                // Check if the widget exists in the current category
                const widgetToAdd = mydata["dashboard"].categories
                    .find(cat => cat.categoryId === category.categoryId)
                    ?.widgets.find(widget => widget.widgetId === action.payload);
                    // console.log(widgetToAdd)
                    
                if (widgetToAdd) 
                {
                    const widgetAlreadyPresent = category.widgets.some(widget => widget.widgetId === action.payload);

                    if (!widgetAlreadyPresent) 
                    {
                        return {
                            ...category,
                            widgets: [...category.widgets, widgetToAdd]
                        };
                    }
                }
                return category;
            });

            return newState;

        case 'REMOVE_WIDGET':
            return action.payload;

        default:
            return state;
    }
};


export let toggleContext = createContext();

function Home() 
{
    const [click,setClick] = useState(false);
    const [widget,dispatch] = useReducer(reducer,mydata["dashboard"].categories);
    const [toggle,setToggle] = useState(false);

    console.log(widget)
    return (
    <toggleContext.Provider value={{toggle:toggle,updater:setToggle, originalData:mydata , data:widget, dispatch:dispatch}}>



      <nav className='navbar navbar-expand'>
        <ul className='navbar-nav w-100 d-flex align-items-center mx-4 '>
            <li className='nav-item'><Link className='nav-link '>home</Link></li>
            <li className='nav-item ms-auto'>
                <span>
                    <input type='text' className='px-5 rounded'  placeholder='search anything...'/>
                    <img alt='search' src={search}/>
                </span>
            </li>
            <li className='nav-item mx-5'>
                <button className='nav-link' onClick={()=>{setClick(!click)}}>
                    <img src={click?filledBell:bell} alt='user'/>
                </button>
            </li>
            <li className='nav-item'>
                <button className='nav-link'>
                    <img  src={user} alt='user'/>
                </button>
            </li>
            <li className='nav-item mx-5'><Link className='nav-link '>login</Link></li>
        </ul>
      </nav>

      <div className='Titlebar'>
      <section className='container-fluid px-5 p-3' style={{height:"100vh" , backgroundColor:"#F0F5FA"}}>
            <h6>CNAPP dashboard</h6>
            <ul>
                {widget.map((item,i)=>{
                    return <li key={i}><Widget currState={toggle} item={item} /></li>
                })}
            </ul>
            <div className='btn-group m-1 p-1'>
                <button className='btn rounded mx-1' onClick={()=>{setToggle(!toggle)}}>
                    Add Widget&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-plus-lg" viewBox="2 0 16 16">
                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                    </svg> 
                </button>
                <button className='btn rounded mx-1' onClick={()=>{window.location.reload()}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                </svg>
                </button>
                <button className='btn rounded mx-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                </svg>
                </button>
                <button className='btn rounded mx-1 me-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stopwatch-fill" viewBox="0 0 16 16">
                        <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584l.013-.012.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354-.012.012A6.97 6.97 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0"/>
                    </svg> &nbsp; l &nbsp;Last 2 days
                </button>
            </div>
      </section>
      </div>
      <Modal />
    </toggleContext.Provider>
  )
}
export default Home