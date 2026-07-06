import Profile from './Profile.jsx'
import './App.css'
import Grid from './Grid.jsx'
import primarchData from '../primarchData.json'
const images = import.meta.glob('../assets/*.webp', { eager: true, import: 'default' })
console.log(images)

function App() {

  return (
    <>
    <Profile name={primarchData.primarchname}
             tag={primarchData.tag}
             location={primarchData.location}
             image={images[`../assets/${primarchData.avatar}`]}
             info={primarchData.stats}
    />
    <Grid />
    </>
  )
}

export default App
