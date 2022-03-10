import './newUser.css'

export default function NewUser() {
  return (
    <div className='newUser'>
        <h1 className="newUserTitle">New User</h1>
        <form action="" className="newUserForm">
            <div className="newUserItem">
                <label>Username</label>
                <input type="text" placeholder='Jane'></input>
            </div>
            <div className="newUserItem">
                <label>Full Name</label>
                <input type="text" placeholder='Jane Doe'></input>
            </div>
            <div className="newUserItem">
                <label>Email</label>
                <input type="email" placeholder='janedoe@email.com'></input>
            </div>
            <div className="newUserItem">
                <label>Password</label>
                <input type="password" placeholder='janedoe@email.com'></input>
            </div>
            <div className="newUserItem">
                <label>Phone Number</label>
                <input type="number" placeholder='+256 26426 82426'></input>
            </div>
            <div className="newUserItem">
                <label>Address</label>
                <input type="text" placeholder='Kano | Nigeria'></input>
            </div>
            <div className="newUserItem">
                <label>Gender</label>
                <div className="newUserGender">
                <input type="radio" name="gender" id="male" value="male"/>
                <label for="male">Male</label>
                <input type="radio" name="gender" id="female" value="female"/>
                <label for="female">Female</label>
                </div>
            </div>
            <div className="newUserItem">
                <label>Active</label>
                <select className="newUserSelect" name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className="newUserButton">Create</button>
        </form>
    </div>
  )
}
