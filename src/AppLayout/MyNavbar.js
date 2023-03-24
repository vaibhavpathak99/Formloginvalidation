import { Layout} from "antd";
import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import GlobalSearch from "./GlobalSearch";
export default function MyNavbar({ collapsed, setCollapse, globalSearchItems }) {

    return (
        <Layout>
            <Layout.Header>
                <div className="navbar-component">
                    <span style={{ display: "inline-flex", alignItems: "center", gap: '0px' }}>
                        <span style={{ cursor: "pointer", fontSize: "22px", marginLeft: '5px' }} onClick={() => setCollapse(!collapsed)}>
                            {collapsed ? (
                                <MenuUnfoldOutlined />
                            ) : (
                                <MenuFoldOutlined />
                            )}
                        </span>
                        <img
                            alt="logo"
                            src="https://images.smart-iam.com/logo.png"

                            style={{ height: "30px", marginLeft: '10px' }}
                        />
                    </span>
                    <div id="navbar-portal">

                    </div>
                </div>
            </Layout.Header>
            <Layout.Content className="main-content-div">

                <Outlet />

            </Layout.Content>
        </Layout>
    );
}


