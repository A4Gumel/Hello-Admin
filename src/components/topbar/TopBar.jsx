import React from 'react'
import "./topbar.css"
import {NotificationsNoneRounded, LanguageRounded, SettingsRounded} from "@material-ui/icons";

export default function TopBar() {
    return (
        <div className="topBar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Hello Admin</span>
                </div>

                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNoneRounded/>
                        <span className="topIconBadge">2</span>
                    </div>

                    <div className="topbarIconContainer">
                        <LanguageRounded/>
                    </div>

                    <div className="topbarIconContainer">
                        <SettingsRounded/>
                    </div>

                    <img src="https://kanofocus.com/wp-content/uploads/2019/12/Kano-State-Logo.jpg" alt="Profile Icon" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
