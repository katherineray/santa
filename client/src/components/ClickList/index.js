import React from "react"

function ClickList({list}){

return(  <ul className="list-group list-group-flush"
    style={{ backgroundColor: 'rgb(12,62,29)' }}
  >

      {list.map(toy => (
              <li className="list-group-item">
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