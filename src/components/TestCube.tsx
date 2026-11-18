import * as THREE from "three";
import { useRef, useState } from "react";
import { useFrame, ThreeElements } from "@react-three/fiber";

function TestCube(props: ThreeElements["mesh"]) {
    const meshRef = useRef<THREE.Mesh>(null!);
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);
    const materialVariants = {
        default: { color: "green", roughness: 0.0, metalness: 0.0 },
        hovered: { color: "red", roughness: 1.0, metalness: 1.0 },
    } satisfies Record<string, THREE.MeshStandardMaterialParameters>;

    useFrame((state, delta) => (meshRef.current.rotation.x += delta))

    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHovered(true)}
            onPointerOut={(event) => setHovered(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial 
                {...materialVariants[hovered ? "hovered" : "default"]}
            />
        </mesh>
    );
}

export default TestCube;
