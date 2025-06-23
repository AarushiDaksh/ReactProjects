import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const modelPath = '/hot_girl.glb'

export function HotGirlModel({ isAnimating = true, ...props }) {
  const ref = useRef()
  const { scene, animations } = useGLTF(modelPath)
  const { actions } = useAnimations(animations, ref)

  useEffect(() => {
    const defaultAction = actions[Object.keys(actions)[0]]
    if (isAnimating) {
      defaultAction?.reset().play()
    } else {
      defaultAction?.fadeOut(0.5).stop()
    }
  }, [actions, isAnimating])

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01
    }
  })

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
      scale={[2, 2, 1.7]} 
      position={[0, -0.5, 0]} 
    >
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload(modelPath)
