import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { HotGirlModel } from './models/hot' // adjust path if needed

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* 3D Background */}
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
          width: '100vw',
          height: '100vh',
        }}
        camera={{ position: [0, 1, 5], fov: 45 }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} />
        <HotGirlModel isAnimating />
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>

      {/* Optional UI */}
      
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-pink-500 text-4xl font-bold mb-4">Stupid</h1>
        <h2 className="text-white text-2xl mb-4">{count}</h2>
        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-2 bg-pink-600 hover:bg-pink-700 transition text-white rounded shadow"
        >
          Increment
        </button>
      </div>
     
    </>
  )
}

export default App
