export default function Profile({ name, tag, location, image, info }) {
    return (
        <div className="profile">
            <div className="profile_top">
                <img
                    className="profile_avatar"
                    src = {image}
                    alt = "User avatar"
                />
                <p className='profile_name'>{name}</p>
                <p className='profile_top_info'>@{tag}</p>
                <p className='profile_top_info'>{location}</p>
            </div>
            <ul className="profile_info">
                <li className="profile_item">
                    <span>Legio</span>
                    <span>{info.legio}</span>
                </li>
                <li className="profile_item">
                    <span>Fratricide</span>
                    <span>{info.fratricide}</span>
                </li>
                <li className="profile_item">
                    <span>Back in 40k</span>
                    <span>{info.back40k ? "Yes" : "No"}</span>
                </li>
            </ul>
        </div>
    )
}