import './user.css'
import {PermIdentityRounded, MailOutlineRounded, LocationCityRounded, PhoneRounded, CalendarTodayOutlined} from "@mui/icons-material";

export default function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="https://vignette.wikia.nocookie.net/theangrybirdsmovie2/images/0/08/Silver_Angry_Birds_(1)_-_Edited.jpg/revision/latest?cb=20190505004816" 
            alt="" 
            className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Silver</span>
              <span className="userShowUserTitle">Mechanical Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentityRounded className="userShowIcon"/>
              <span className="userShowInfoTitle">EngrSilver</span>
            </div>

            <div className="userShowInfo">
              <CalendarTodayOutlined className="userShowIcon"/>
              <span className="userShowInfoTitle">12.12.2020</span>
            </div>

            <div className="userShowInfo">
              <PhoneRounded className="userShowIcon"/>
              <span className="userShowInfoTitle">+123 7985 62662</span>
            </div>
            <div className="userShowInfo">
              <MailOutlineRounded className="userShowIcon"/>
              <span className="userShowInfoTitle">engr@angrybirds.com</span>
            </div>
            <div className="userShowInfo">
              <LocationCityRounded className="userShowIcon"/>
              <span className="userShowInfoTitle">Kano | Nigeria.</span>
            </div>
          </div>
        </div>
        <div className="userUpdate"></div>
      </div>
    </div>
  )
}
