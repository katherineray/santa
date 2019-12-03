import React from "react"

function ClickList({list, onClick}){

return(  <ul className="list-group list-group-flush"
    style={{ backgroundColor: 'rgb(12,62,29)' }}
  >

      {list.map((toy, i) => (
              <li className="list-group-item" onClick={()=>onClick(toy.name, i)} >
              <div className="row align-items-center no-gutters">
                <div className="col mr-2">
                  <h6 className="mb-0">
                    <strong>{toy.name}</strong>
                  </h6>
                </div>
              </div>
            </li>
          
          
          ))}

    
  </ul>)

}

export default ClickList