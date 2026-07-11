import FriendListItem from './LegioListItem.jsx'
import styles from './LegioList.module.css'

export default function LegioList({legions}) {
    return(
        <ul className={styles.listOfLegions}>
            {
                legions.map((legio) => {
                    return (
                        <li className={styles.legioItem} key={legio.id} >
                            <FriendListItem avatar={legio.avatar} name={legio.name} isLoyal={legio.isLoyal} />
                        </li>
                    )
                })
            }
        </ul>
    )
}