import Profile from './Profile.jsx'
import './App.css'
import Grid from './Grid.jsx'
import primarchData from '../primarchData.json'
import LegioList from './LegioList.jsx'
import legions from '../legions.json'

const images = import.meta.glob('../assets/*.webp', { eager: true, import: 'default' })

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
    <LegioList legions={legions} />
    </>
  )
}

export default App
