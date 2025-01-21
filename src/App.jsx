import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

import './App.css'

function App() {

  const mapRef = useRef()
  const mapContainerRef = useRef()

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibmF0YWNvdyIsImEiOiJjbTYzMmlxZGEwamllMmlxNDlyMmlna3ZvIn0.jVdF1vsiIy1fOyxnPQnM-A'
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