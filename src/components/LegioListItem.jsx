const images = import.meta.glob('../assets/*.webp', { eager: true, import: 'default' })

export default function LegioListItem({avatar, name, isLoyal}){
    return (
        <div>
            <img src={images[`../assets/${avatar}`]} alt="Avatar" width="48" />
            <p>{name}</p>
            {isLoyal ? (<p>Loyal</p>) : (<p>Traiters</p>)}
            
        </div>

    );
}