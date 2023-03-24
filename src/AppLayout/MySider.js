
import React, { useEffect, useState } from "react";
import { Breadcrumb, Layout, Menu, Divider, Input } from "antd";
// import { useSelector, useDispatch } from "react-redux";

import { FiUser } from "react-icons/fi";
import { MdOutlineClear } from "react-icons/md";
import { Helmet } from "react-helmet";

export default function MySider({ collapsed, onCollapse, menuItems=[] }) {


    return (
        <Layout.Sider 
            // style={{ background: "red", height: "100vh", overflow: 'auto' }} 
            className="sidebar-component"
            width={'var(--sidebarOpenWidth)'} 
            collapsedWidth={'var(--sidebarClosedWidth)'}
            collapsed={collapsed} 
            onCollapse={onCollapse}
            // collapsible={true}
        >
            <div className="sidebar-top-logo" style={collapsed ? {textAlign: 'center'} : {textAlign: 'center'} }>
                <FiUser style={{fontSize: '25px'}} />
                {!collapsed && 
                    <></>
                }
            </div>
           
            <div className="sidebar-content">
                <Helmet>
                    <style>
                     


                        `
                    </style>
                </Helmet>

                {/* TODO: Fix menu is flickering when the sidebar is collapsed and expanded */}
                <Menu 
                    style={{
                        background: "var(--sidebarBackground)", 
                        color: "var(--sidebarTextColor)", 
                        border: 'none', 
                        padding: '0px', 
                        width: '100%',
                        fontSize: '16px',
                        fontWeight: '500',
                    }}
                    inlineIndent={12}
                    theme="light"
                    // openKeys={openKeys}
                    // onOpenChange={(keys) => setOpenKeys(keys)}
                    // defaultSelectedKeys={["masters"]} 
                    selectable={false}
                    mode={"inline"} 
                    items={menuItems} 
                />
            </div>
            <div className="sidebar-footer">
                {collapsed ? "" : "Version : "}
                {process.env.REACT_APP_VERSION || "0.5.1"}
            </div>
        </Layout.Sider>
    );
}
