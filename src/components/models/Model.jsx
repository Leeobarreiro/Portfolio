
"use client"
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/models/6584fe18c95c69c09cae3f64.glb");
  return (
    <group {...props} dispose={null}
    position={[0, -1.5, 0]}
    >
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials.Wolf3D_Skin}
            skeleton={nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials.Wolf3D_Teeth}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials.Wolf3D_Hair}
            skeleton={nodes.Wolf3D_Hair.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Glasses"
            geometry={nodes.Wolf3D_Glasses.geometry}
            material={materials.Wolf3D_Glasses}
            skeleton={nodes.Wolf3D_Glasses.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Body"
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials.Wolf3D_Body}
            skeleton={nodes.Wolf3D_Body.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials.Wolf3D_Outfit_Bottom}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials.Wolf3D_Outfit_Footwear}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials.Wolf3D_Outfit_Top}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/6584fe18c95c69c09cae3f64.glb");
