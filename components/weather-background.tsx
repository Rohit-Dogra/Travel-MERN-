"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Cloud, Sky, useTexture } from "@react-three/drei"
import type * as THREE from "three"

function WeatherScene() {
  const { camera } = useThree()
  const cloudsRef = useRef<THREE.Group>(null)
  const sunRef = useRef<THREE.Mesh>(null)

  // Sun texture
  const sunTexture = useTexture("/placeholder.svg?height=200&width=200&text=Sun")

  useEffect(() => {
    camera.position.set(0, 5, 20)
  }, [camera])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.1

    // Move clouds slowly
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = t * 0.2
    }

    // Rotate sun
    if (sunRef.current) {
      sunRef.current.rotation.y = t
    }
  })

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />

      {/* Sun */}
      <mesh ref={sunRef} position={[8, 10, -10]}>
        <sphereGeometry args={[5, 32, 32]} />
        <meshStandardMaterial map={sunTexture} emissive="#ffff80" emissiveIntensity={1} />
      </mesh>

      {/* Clouds */}
      <group ref={cloudsRef}>
        <Cloud position={[-10, 10, -15]} speed={0.2} opacity={0.7} />
        <Cloud position={[10, 15, -10]} speed={0.2} opacity={0.7} />
        <Cloud position={[0, 10, -5]} speed={0.2} opacity={0.7} />
        <Cloud position={[-15, 8, -10]} speed={0.2} opacity={0.7} />
        <Cloud position={[15, 5, -15]} speed={0.2} opacity={0.7} />
      </group>

      {/* Sky */}
      <Sky distance={450000} sunPosition={[8, 10, -10]} inclination={0.5} azimuth={0.25} />
    </>
  )
}

export default function WeatherBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <Canvas dpr={[1, 2]}>
        <WeatherScene />
      </Canvas>
    </div>
  )
}

