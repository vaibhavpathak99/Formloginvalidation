import React, { useState } from 'react'
import { Button, message, Popconfirm, Table, Modal, Space } from 'antd';
import { Link } from 'react-router-dom';
// import {  editButtonTitle,} from '../../Constant';
import { DeleteOutlined } from "@ant-design/icons";


function Role() {

    const ref = () => {
        window.location.reload(false);
    }
    const confirm = (e) => {

        message.success('Deleted succefully!!');
    };



    const [dataSource, setDataSource] = useState([
        {
            id: '1',
            key: '1',
            name: 'All role',
            description: 'all role',
        },
        {
            id: '2',
            key: '1',
            name: 'All role',
            description: 'all role',
        },
        {
            id: '3',
            key: '1',
            name: 'All role',
            description: 'all role',
        },

        {
            id: '3',
            key: '1',
            name: 'All role',
            description: 'all role',
        },


    ])





    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            width: '100px',

        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',


        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            width: '390px',


        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            width: '100px',
            render: (record) => (
                <Space size="middle">

                    <Button size='midium' onClick={confirm} type="primary" danger>Delete</Button>
                </Space>
            ),

        }]
    return (

        <div>

            <span className='my-form-title'>Roles</span>
            <Table dataSource={dataSource} columns={columns} size="small"></Table>

            <>
                <Button className='btn' type="primary" onClick={ref}>Refersh</Button>
            </>
        </div>
    )
}


export default Role
