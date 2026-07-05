
import LionElJonson from '../assets/Lion-ElJonson.webp'
export default function Profile(){
    return (
        <div className="profile">
            <div className="profile_top">
                <img
                    className="profile_avatar"
                    src = {LionElJonson}
                    alt = "User avatar"
                />
                <p className='profile_name'>Lion El'Jonson</p>
                <p className='profile_top_info'>@Dark</p>
                <p className='profile_top_info'>Caliban, Imperium</p>
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