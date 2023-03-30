import React, { useState } from 'react'
import moment from "moment";
import { Table,Button} from 'antd';
function Resource() {
// const [date,setDate] = useState([])
const [panels, setPanels] = useState([]);
const columns = [
        
  {
      title: 'Id',
      dataIndex: 'panel_id',
      width: '50px',
      hidden: window.location.hostname !== 'localhost',
      sorter: (a, b) => a.panel_id - b.panel_id,
  },
  
  {
      title: 'Name',
      dataIndex: 'panel_name',
      // sorter:(a,b)=>a.panel_name.localeCompare(b.panel_name)
  
      
 
   },

   
  {
      title: 'Code',
   
      // sorter: (a, b) => a.panel_code - b.panel_code,
      
  },
  {
      title: 'Location',

      // sorter: (a, b) => a.region_location - b.region_location,
  },
  {
      title: 'Type',
   
    
  },
  {
      title: 'Actions',
   
  },
]
  return (
    <div>
      {/* <h1>resource</h1> */}
      {/* <h1>Date:{moment(date[2].setDate).format(('DD MMM YYYY hh:mm A'))}</h1>     */}

<Table
                columns={columns}
                dataSource={panels}
                // loading={loading}
                size="small"
                pagination={{
                    position: ['bottomRight'],
                    // position: ['topRight'],
                    showSizeChanger: true,
                }}/>
      
    </div>
  )}


export default Resource
