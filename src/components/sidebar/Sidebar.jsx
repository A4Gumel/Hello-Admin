import React from 'react'
import "./sidebar.css"
import {HomeRounded, TimelineRounded, TrendingUpRounded, PeopleRounded, StorefrontRounded,
    AttachMoneyRounded, AssessmentRounded, MailRounded, FeedbackRounded, MessageRounded,
    ReportRounded} from "@mui/icons-material";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <HomeRounded className='sidebarIcon'/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <TimelineRounded className='sidebarIcon'/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpRounded className='sidebarIcon'/>
                            Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <PeopleRounded className='sidebarIcon'/>
                            Users
                        </li>
                        <li className="sidebarListItem">
                            <StorefrontRounded className='sidebarIcon'/>
                            Products
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoneyRounded className='sidebarIcon'/>
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <AssessmentRounded className='sidebarIcon'/>
                            Reports
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailRounded className='sidebarIcon'/>
                            Mails
                        </li>
                        <li className="sidebarListItem">
                            <FeedbackRounded className='sidebarIcon'/>
                            Feedbacks
                        </li>
                        <li className="sidebarListItem">
                            <MessageRounded className='sidebarIcon'/>
                            Messages
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staffs</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <AssessmentRounded className='sidebarIcon'/>
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <TimelineRounded className='sidebarIcon'/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <ReportRounded className='sidebarIcon'/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
