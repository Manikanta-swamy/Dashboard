import React, { useContext } from 'react'
import "./Widget.css"
import Card from './Card'
import {toggleContext} from "./Home"

function Widget({item})
{
    let btn = useContext(toggleContext)
  return (
    <> 
        <h6>{item.categoryName}</h6>
        <div className='d-flex flex-row justify-content-start'>
            {item.widgets.map((data,i)=>{
                return <Card key={i} dataObj={data}/>
            })}
            <div className='card p-5 m-2 align-items-center justify-content-center'>
                <button className=' rounded' onClick={()=>{btn.updater(!btn.toggle)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-plus-lg" viewBox="2 0 16 16">
                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                    </svg> 
                    &nbsp; Add Widget
                </button>
            </div>
        </div>
    </>
  )
}

export default Widget

