import styles from './LegioListItem.module.css'
import clsx from 'clsx';

const images = import.meta.glob('../assets/*.webp', { eager: true, import: 'default' })

export default function LegioListItem({avatar, name, isLoyal}){
    return (
        <div>
            <img src={images[`../assets/${avatar}`]} alt="Avatar" />
            <p className={styles.name} >{name}</p>
            {isLoyal ? (<p className={clsx(styles.loyal, styles.status)} >Loyal</p>) : (<p className={clsx(styles.traiters, styles.status)} >Traiters</p>)}
            
        </div>

    );
}