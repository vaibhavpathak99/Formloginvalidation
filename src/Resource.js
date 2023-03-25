import React, { useState } from 'react'
import moment from "moment";
function Resource() {
const [date,setDate] = useState([])
  return (
    <div>
      {/* <h1>resource</h1> */}
      <h1>Date:{moment(date[2].setDate).format(('DD MMM YYYY hh:mm A'))}</h1>    

      
    </div>
  )
}

export default Resource
