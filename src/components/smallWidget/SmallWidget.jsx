import "./smallWidget.css"
import {VisibilityRounded} from "@material-ui/icons";

export default function SmallWidget() {
  return (
    <div className="smallWidget">
        <span className="smWidgetTitle">New Members</span>
        <ul className="smWidgetList">
            <li className="smWidgetListItem">
                <img src="https://avatars.githubusercontent.com/u/71941098?v=4" alt="img" className="smWidgetImg" />
                <div className="smWidgetUser">
                    <span className="smWidgetUsername">A4Gumel</span>
                    <span className="smWidgetUserTitle">Software Engineer</span>

                </div>
                <button className="smWidgetButton">
                    <VisibilityRounded className="smWidgetIcon"/>
                    View
                </button>
            </li>

            <li className="smWidgetListItem">
                <img src="https://avatars.githubusercontent.com/u/71941098?v=4" alt="img" className="smWidgetImg" />
                <div className="smWidgetUser">
                    <span className="smWidgetUsername">A4Gumel</span>
                    <span className="smWidgetUserTitle">Software Engineer</span>

                </div>
                <button className="smWidgetButton">
                    <VisibilityRounded className="smWidgetIcon"/>
                    View
                </button>
            </li>

            <li className="smWidgetListItem">
                <img src="https://avatars.githubusercontent.com/u/71941098?v=4" alt="img" className="smWidgetImg" />
                <div className="smWidgetUser">
                    <span className="smWidgetUsername">A4Gumel</span>
                    <span className="smWidgetUserTitle">Software Engineer</span>

                </div>
                <button className="smWidgetButton">
                    <VisibilityRounded className="smWidgetIcon"/>
                    View
                </button>
            </li>

            <li className="smWidgetListItem">
                <img src="https://avatars.githubusercontent.com/u/71941098?v=4" alt="img" className="smWidgetImg" />
                <div className="smWidgetUser">
                    <span className="smWidgetUsername">A4Gumel</span>
                    <span className="smWidgetUserTitle">Software Engineer</span>

                </div>
                <button className="smWidgetButton">
                    <VisibilityRounded className="smWidgetIcon"/>
                    View    
                </button>
            </li>

            <li className="smWidgetListItem">
                <img src="https://avatars.githubusercontent.com/u/71941098?v=4" alt="img" className="smWidgetImg" />
                <div className="smWidgetUser">
                    <span className="smWidgetUsername">A4Gumel</span>
                    <span className="smWidgetUserTitle">Software Engineer</span>

                </div>
                <button className="smWidgetButton">
                    <VisibilityRounded className="smWidgetIcon"/>
                    View
                </button>
            </li>
        </ul>
    </div>
  )
}
