import FriendListItem from './LegioListItem.jsx'

export default function LegioList({legions}) {
    return(
        <ul>
            <li>
                {
                    legions.map((legio) => {
                        return <FriendListItem avatar={legio.avatar} name={legio.name} isLoyal={legio.isLoyal} />
                    })
                }
            </li>
        </ul>
    )
}