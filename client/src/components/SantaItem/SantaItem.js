import React from "react";

function SantaItem(props){

return (<div className="card">
    <img src={props.imgUrl} width="150" height="150"  />
    <p>
    {props.productName}
    </p>
    </div>)


}

export default SantaItem;