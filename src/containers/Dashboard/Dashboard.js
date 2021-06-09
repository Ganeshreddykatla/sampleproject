
        import React from 'react';
        import Menubar from '../../components/Menubar/Menubar'


        const Dashboard = ({ sidebarOpen, openSidebar }) => {
        return (
            <div className="main">
                  <Menubar />
                <h2>Dashboard</h2>
            </div>
        );
        };

        export default Dashboard;
