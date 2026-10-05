"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { roleTheme } from "@/lib/roleThemes";

function PipelineStreamField({ count = 220 }) {
  const pointsRef = useRef();
  const linesRef = useRef();

  // Generate dimensional coordinates along an analytical pipeline flow
  const { positions, colors, speeds } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const spd = new Float32Array(count);

    const accentColor = new THREE.Color(roleTheme.palette.accent);
    const systemColor = new THREE.Color(roleTheme.palette.system);
    const baseColor = new THREE.Color("#44525D");

    for (let i = 0; i < count; i++) {
      // Horizontal flow through stages from -6 to +6
      pos[i * 3] = (Math.random() - 0.5) * 14;
      // Spread across dimensional planes
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;

      spd[i] = 0.4 + Math.random() * 0.8;

      const choice = Math.random();
      const c = choice < 0.2 ? accentColor : choice < 0.55 ? systemColor : baseColor;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return { positions: pos, colors: col, speeds: spd };
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      // Move record along X pipeline flow
      pos[i * 3] += delta * speeds[i] * 1.8;
      // Loop back smoothly
      if (pos[i * 3] > 7) {
        pos[i * 3] = -7;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Gentle camera parallax response
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      state.pointer.x * 0.8,
      0.05
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      state.pointer.y * 0.6,
      0.05
    );
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group>
      {/* Transactional Record Particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={count}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.065}
          vertexColors
          transparent
          opacity={0.85}
          sizeAttenuation
        />
      </points>

      {/* Freely Floating 3D Dimensional Cubes (No Interconnected Node Lines) */}
      <FreeFloatingCubes />
    </group>
  );
}

function FreeFloatingCubes() {
  const cubes = useMemo(
    () => [
      // Top-Right region
      {
        id: "tr-1",
        initialPos: [3.6, 2.1, 0.3],
        size: 0.24,
        color: roleTheme.palette.system,
        speed: 0.45,
        rotSpeed: [0.3, 0.45, 0.2],
        floatRange: [0.35, 0.3, 0.2],
        phase: 0.2
      },
      {
        id: "tr-2",
        initialPos: [5.2, 1.1, -1.2],
        size: 0.14,
        color: "#6E8294",
        speed: 0.6,
        rotSpeed: [0.4, 0.3, 0.5],
        floatRange: [0.3, 0.35, 0.2],
        phase: 1.7
      },
      {
        id: "tr-3",
        initialPos: [2.1, 2.5, -0.6],
        size: 0.11,
        color: roleTheme.palette.accent,
        speed: 0.52,
        rotSpeed: [0.5, 0.35, 0.3],
        floatRange: [0.25, 0.25, 0.15],
        phase: 3.1
      },

      // Top-Left region
      {
        id: "tl-1",
        initialPos: [-3.8, 2.2, -0.4],
        size: 0.22,
        color: roleTheme.palette.accent,
        speed: 0.42,
        rotSpeed: [0.35, 0.4, 0.25],
        floatRange: [0.35, 0.3, 0.2],
        phase: 2.3
      },
      {
        id: "tl-2",
        initialPos: [-5.4, 1.3, 0.5],
        size: 0.13,
        color: "#788691",
        speed: 0.58,
        rotSpeed: [0.45, 0.25, 0.4],
        floatRange: [0.3, 0.35, 0.2],
        phase: 4.1
      },
      {
        id: "tl-3",
        initialPos: [-1.9, 2.4, 0.3],
        size: 0.1,
        color: roleTheme.palette.system,
        speed: 0.65,
        rotSpeed: [0.5, 0.4, 0.35],
        floatRange: [0.2, 0.25, 0.15],
        phase: 0.8
      },

      // Center Depth (delicate framing background behind text)
      {
        id: "c-1",
        initialPos: [-0.4, 0.3, -1.8],
        size: 0.25,
        color: roleTheme.palette.accent,
        speed: 0.38,
        rotSpeed: [0.25, 0.35, 0.18],
        floatRange: [0.3, 0.25, 0.3],
        phase: 5.2
      },
      {
        id: "c-2",
        initialPos: [1.0, -0.5, -1.0],
        size: 0.16,
        color: roleTheme.palette.system,
        speed: 0.48,
        rotSpeed: [0.35, 0.4, 0.3],
        floatRange: [0.25, 0.3, 0.2],
        phase: 1.4
      },

      // Bottom-Right region
      {
        id: "br-1",
        initialPos: [3.9, -1.8, -0.2],
        size: 0.21,
        color: roleTheme.palette.accent,
        speed: 0.46,
        rotSpeed: [0.38, 0.32, 0.42],
        floatRange: [0.35, 0.35, 0.25],
        phase: 2.9
      },
      {
        id: "br-2",
        initialPos: [2.5, -2.5, 0.4],
        size: 0.14,
        color: "#6E8294",
        speed: 0.62,
        rotSpeed: [0.42, 0.45, 0.25],
        floatRange: [0.25, 0.3, 0.2],
        phase: 3.8
      },
      {
        id: "br-3",
        initialPos: [5.5, -1.6, -1.2],
        size: 0.12,
        color: roleTheme.palette.system,
        speed: 0.68,
        rotSpeed: [0.5, 0.3, 0.35],
        floatRange: [0.3, 0.25, 0.2],
        phase: 4.7
      },

      // Bottom-Left region
      {
        id: "bl-1",
        initialPos: [-3.5, -1.9, 0.4],
        size: 0.23,
        color: roleTheme.palette.system,
        speed: 0.44,
        rotSpeed: [0.28, 0.38, 0.35],
        floatRange: [0.35, 0.3, 0.25],
        phase: 1.1
      },
      {
        id: "bl-2",
        initialPos: [-2.1, -2.4, -0.7],
        size: 0.15,
        color: roleTheme.palette.accent,
        speed: 0.55,
        rotSpeed: [0.4, 0.35, 0.3],
        floatRange: [0.25, 0.3, 0.2],
        phase: 2.6
      },
      {
        id: "bl-3",
        initialPos: [-4.9, -2.0, -0.3],
        size: 0.11,
        color: "#6E8294",
        speed: 0.64,
        rotSpeed: [0.35, 0.5, 0.4],
        floatRange: [0.3, 0.25, 0.2],
        phase: 4.5
      },

      // Outer Viewport Flanks
      {
        id: "edge-1",
        initialPos: [-6.4, 0.2, -1.0],
        size: 0.15,
        color: roleTheme.palette.accent,
        speed: 0.5,
        rotSpeed: [0.3, 0.4, 0.3],
        floatRange: [0.3, 0.3, 0.2],
        phase: 0.5
      },
      {
        id: "edge-2",
        initialPos: [6.4, -0.3, -0.8],
        size: 0.16,
        color: roleTheme.palette.system,
        speed: 0.52,
        rotSpeed: [0.35, 0.3, 0.4],
        floatRange: [0.3, 0.3, 0.2],
        phase: 3.4
      }
    ],
    []
  );

  return (
    <group>
      {cubes.map((cube) => (
        <SingleFloatingCube key={cube.id} cube={cube} />
      ))}
    </group>
  );
}

function SingleFloatingCube({ cube }) {
  const groupRef = useRef();

  // Unique rotation angles accumulated per frame
  const rotationAngles = useRef({
    x: Math.random() * Math.PI * 2,
    y: Math.random() * Math.PI * 2,
    z: Math.random() * Math.PI * 2
  });

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    const { initialPos, speed, rotSpeed, floatRange, phase } = cube;

    // Organic harmonic floating motion (weightless 3D drift without connecting lines)
    const floatX =
      Math.sin(time * speed + phase) * floatRange[0] +
      Math.cos(time * speed * 0.4 + phase) * 0.15;
    const floatY =
      Math.cos(time * speed * 1.1 + phase) * floatRange[1] +
      Math.sin(time * speed * 0.6) * 0.12;
    const floatZ = Math.sin(time * speed * 0.7 + phase * 1.3) * floatRange[2];

    // Subtle pointer parallax based on depth
    const depthFactor = 1 + (initialPos[2] || 0) * 0.25;
    const parallaxX = state.pointer.x * 0.45 * depthFactor;
    const parallaxY = state.pointer.y * 0.35 * depthFactor;

    groupRef.current.position.x = initialPos[0] + floatX + parallaxX;
    groupRef.current.position.y = initialPos[1] + floatY + parallaxY;
    groupRef.current.position.z = initialPos[2] + floatZ;

    // Continuous, independent 3D tumbling rotation
    rotationAngles.current.x += delta * rotSpeed[0];
    rotationAngles.current.y += delta * rotSpeed[1];
    rotationAngles.current.z += delta * rotSpeed[2];

    groupRef.current.rotation.x = rotationAngles.current.x;
    groupRef.current.rotation.y = rotationAngles.current.y;
    groupRef.current.rotation.z = rotationAngles.current.z;
  });

  return (
    <group ref={groupRef}>
      {/* Precision Wireframe Cube */}
      <mesh>
        <boxGeometry args={[cube.size, cube.size, cube.size]} />
        <meshBasicMaterial
          color={cube.color}
          wireframe
          transparent
          opacity={0.82}
        />
      </mesh>
      {/* Translucent volumetric inner face for 3D body */}
      <mesh>
        <boxGeometry
          args={[cube.size * 0.985, cube.size * 0.985, cube.size * 0.985]}
        />
        <meshBasicMaterial
          color={cube.color}
          transparent
          opacity={0.05}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

export default function DataPipelineScene() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none"
      }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <PipelineStreamField />
      </Canvas>
    </div>
  );
}
