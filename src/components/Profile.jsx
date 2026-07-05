
import LionElJonson from '../assets/Lion-ElJonson.jpg'
export default function Profile(){
    return (
        <div className="profile">
            <div className="profile_top">
                <img
                    className="profile_avatar"
                    src = {LionElJonson}
                    alt = "User avatar"
                />
                <p>Lion El'Jonson</p>
                <p>@Dark</p>
                <p>Caliban, Imperium</p>
            </div>
            <ul className="profile_info">
                <li className="profile_item">
                    <span>Legio</span>
                    <span>100 000</span>
                </li>
                <li className="profile_item">
                    <span>Fratricide</span>
                    <span>0?</span>
                </li>
                <li className="profile_item">
                    <span>Back in 40k</span>
                    <span>Yes</span>
                </li>
            </ul>
        </div>
    )
}