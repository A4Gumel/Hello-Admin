import React from 'react'
import "./sidebar.css"
import {HomeRounded, TimelineRounded, TrendingUpRounded, PeopleRounded, StorefrontRounded,
    AttachMoneyRounded, AssessmentRounded, MailRounded, FeedbackRounded, MessageRounded,
    ReportRounded} from "@mui/icons-material";
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Link to="/" className="link">
                                <HomeRounded className='sidebarIcon'/>
                                Home
                            </Link>
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
                            <Link to="/users" className="link">
                                <PeopleRounded className='sidebarIcon'/>
                                Users
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/products" className="link">
                                <StorefrontRounded className='sidebarIcon'/>
                                Products
                            </Link>
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
