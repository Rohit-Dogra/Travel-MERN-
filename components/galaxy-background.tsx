"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Stars, OrbitControls } from "@react-three/drei"
import * as THREE from "three"

function GalaxyParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  const galaxyParams = {
    count: 10000,
    size: 0.01,
    radius: 5,
    branches: 3,
    spin: 1,
    randomness: 0.2,
    randomnessPower: 3,
    insideColor: "#ff6030",
    outsideColor: "#1b3984",
  }

  useEffect(() => {
    if (!particlesRef.current) return

    const geometry = particlesRef.current.geometry as THREE.BufferGeometry
    const positions = new Float32Array(galaxyParams.count * 3)
    const colors = new Float32Array(galaxyParams.count * 3)

    const colorInside = new THREE.Color(galaxyParams.insideColor)
    const colorOutside = new THREE.Color(galaxyParams.outsideColor)

    for (let i = 0; i < galaxyParams.count; i++) {
      const i3 = i * 3

      // Position
      const radius = Math.random() * galaxyParams.radius
      const spinAngle = radius * galaxyParams.spin
      const branchAngle = ((i % galaxyParams.branches) / galaxyParams.branches) * Math.PI * 2

      const randomX =
        Math.pow(Math.random(), galaxyParams.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        galaxyParams.randomness *
        radius
      const randomY =
        Math.pow(Math.random(), galaxyParams.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        galaxyParams.randomness *
        radius
      const randomZ =
        Math.pow(Math.random(), galaxyParams.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        galaxyParams.randomness *
        radius

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX
      positions[i3 + 1] = randomY
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ

      // Color
      const mixedColor = colorInside.clone()
      mixedColor.lerp(colorOutside, radius / galaxyParams.radius)

      colors[i3] = mixedColor.r
      colors[i3 + 1] = mixedColor.g
      colors[i3 + 2] = mixedColor.b
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0005
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry />
      <pointsMaterial
        size={galaxyParams.size}
        sizeAttenuation={true}
        depthWrite={false}
        vertexColors={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function Scene() {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, 2, 6)
  }, [camera])

  return (
    <>
      <GalaxyParticles />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </>
  )
}

export default function GalaxyBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <Canvas dpr={[1, 2]}>
        <Scene />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}

