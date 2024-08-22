import React, { useContext} from 'react';
import { toggleContext } from './Home';
// import { Link } from 'react-router-dom';

function Modal() 
{
    let btn = useContext(toggleContext)
    return (
        <div className={`modal fade ${btn.toggle ? 'show' : ''}`} style={{ display: btn.toggle ? 'block' : 'none' }} tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">

                <div className="modal-header">
                    <h5 className="modal-title">Add Widget</h5>
                    <button type="button" className="btn-close" onClick={() => btn.updater(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    </button>
                </div>

                <div className="modal-body w-100">

                    {
                        btn.originalData["dashboard"].categories.map((item) => (
                            <h3 key={item.categoryId}>
                                {item.widgets.map((cat, index) => (
                                    <p key={index}>
                                        <input
                                            type="checkbox"
                                            id={cat.widgetId}
                                            onClick={(e) => {

                                                // console.log(e.target.checked)
                                                
                                                const widgetId = e.target.id;
                                                if(e.target.checked === false)
                                                {
                                                    const updatedCategories = btn.data.map(category => {
                                                        return {
                                                            ...category,
                                                            widgets: category.widgets.filter(widget => widget.widgetId !== widgetId)
                                                        };
                                                    });
                                                    btn.dispatch({type:"REMOVE_WIDGET",payload:updatedCategories})
                                                }
                                                else
                                                {
                                                    btn.dispatch({type:"ADD_WIDGET",payload:e.target.id})
                                                }
                                            }}
                                            
                                            defaultChecked
                                        />
                                        <label htmlFor={cat.widgetId} className="ps-2">{cat.widgetName}</label>
                                    </p>
                                ))}
                            </h3>
                        ))
                        
                    }
                    
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-primary text-light" onClick={()=>{return btn.updater(false)}} >submit</button>
                </div>

            </div>
        </div>
        </div>
    );
}

export default Modal;
