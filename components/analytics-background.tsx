"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Text } from "@react-three/drei"
import * as THREE from "three"

function AnalyticsScene() {
  const { camera } = useThree()
  const graphsRef = useRef<THREE.Group>(null)

  useEffect(() => {
    camera.position.set(0, 0, 10)
  }, [camera])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    // Rotate graphs
    if (graphsRef.current) {
      graphsRef.current.rotation.y = Math.sin(t * 0.2) * 0.2
    }
  })

  // Generate random bar heights
  const barHeights = Array.from({ length: 20 }, () => Math.random() * 3 + 0.5)

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      <group ref={graphsRef}>
        {/* 3D Bar Chart */}
        <group position={[0, -2, 0]}>
          {barHeights.map((height, i) => (
            <mesh key={i} position={[(i - 10) * 0.8, height / 2, 0]}>
              <boxGeometry args={[0.6, height, 0.6]} />
              <meshStandardMaterial color={new THREE.Color().setHSL(i / 20, 0.8, 0.5)} />
            </mesh>
          ))}

          {/* X-axis */}
          <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <boxGeometry args={[18, 0.1, 0.1]} />
            <meshStandardMaterial color="white" />
          </mesh>

          {/* Y-axis */}
          <mesh position={[-8.5, 2, 0]} rotation={[0, 0, 0]}>
            <boxGeometry args={[0.1, 4, 0.1]} />
            <meshStandardMaterial color="white" />
          </mesh>

          <Text position={[0, 4, 0]} fontSize={1} color="white" anchorX="center" anchorY="middle">
            Travel Analytics
          </Text>
        </group>

        {/* Floating numbers and symbols */}
        {Array.from({ length: 30 }, (_, i) => (
          <Text
            key={i}
            position={[Math.sin(i) * 10 - 5, Math.cos(i) * 5 + 3, Math.sin(i * 2) * 5 - 5]}
            fontSize={0.5}
            color={new THREE.Color().setHSL(i / 30, 0.8, 0.5)}
            anchorX="center"
            anchorY="middle"
          >
            {Math.floor(Math.random() * 100)}
          </Text>
        ))}
      </group>
    </>
  )
}

export default function AnalyticsBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <Canvas dpr={[1, 2]}>
        <color attach="background" args={["#050520"]} />
        <fog attach="fog" args={["#050520", 10, 30]} />
        <AnalyticsScene />
      </Canvas>
    </div>
  )
}

