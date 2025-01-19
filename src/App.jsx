import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

import './App.css'

function App() {

  const mapRef = useRef()
  const mapContainerRef = useRef()

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibmF0YWNvdyIsImEiOiJjbTYzOWx1aW0wb3dhMmlwdTIxemU3bzJ2In0.pDea-LCml8GFOEqD1hMx6A'
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
    });
    

    return () => {
      mapRef.current.remove()
    }
  }, [])

  return (
    <>
      <div id='map-container' ref={mapContainerRef}/>
    </>
  )
}

export default App