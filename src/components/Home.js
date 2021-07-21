import * as React from 'react';
import './componentUI/home.css';
import * as THREE from 'three';
import {Canvas, extend, useFrame, useThree} from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {useState, useRef} from "react";
import {useMemo} from "react";
import {useDispatch} from "react-redux";
import {scrollView} from "../store/actions/scrollAction";


const Home = () => {
    const dispatch = useDispatch();

    const onPageScrollHandler = () => {
        dispatch(scrollView('about'));
    }


    // THREE Scene
    extend({ OrbitControls });

    const SpaceShip = () => {
        const [model, setModel] = useState();

        const url = '/3d/scene.gltf';

        useMemo(() => {
            new GLTFLoader().load(url, setModel);
        },[url]);
        return model? <primitive object={model.scene}/> : null;
    }

    const Controls = () => {
        const orbitRef = useRef();
        const { camera, gl } = useThree();

        useFrame(() => {
            // console.log(camera.position);
            orbitRef.current.update();
        })

        return (
            <orbitControls
                autoRotate
                maxPolarAngle={Math.PI/2}
                minPolarAngle={Math.PI/3}
                args = {[camera, gl.domElement]}
                ref={orbitRef} />
        )
    }

    // const Plane = () => (
    //     <mesh rotation={[-Math.PI/2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
    //         <planeBufferGeometry attach="geometry" args={[100, 100]} />
    //         <meshPhysicalMaterial attach="material" color="white" />
    //     </mesh>
    // );
    //
    // const Box = (props) => {
    //     const [hovered, setHover] = useState(false);
    //     const [active, setActive] = useState(false);
    //     const states = useSpring({
    //         scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    //         color: hovered ? "hotpink" : "grey"
    //     })
    //
    //
    //
    //     return (
    //         <a.mesh
    //             {...props}
    //             onClick={(e) => setActive(!active)}
    //             onPointerOver={(e) => setHover(true)}
    //             onPointerOut={(e) => setHover(false)}
    //             scale={states.scale}
    //             castShadow
    //         >
    //             <ambientLight color={0x404040} intensity={0.5}/>
    //             <spotLight position={[0, 5, 10]} penumbra="1" castShadow/>
    //             <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
    //             <a.meshPhysicalMaterial attach="material" color={states.color} />
    //         </a.mesh>
    //     )
    // }

    return (
        <div className="com home">
            <h1 className="homeTitle">Hello Space!</h1>
            <h3 className="subTitle" onClick={onPageScrollHandler}>Tap Here To Continue</h3>
            <div onClick={onPageScrollHandler}><img className="downArrow" src={require("../img/downArrow.png")} alt="downBtn" width="50px" height="20px"/></div>
            <Canvas camera={{position: [1.89, 4.35, -19.02]}}
                    onCreated={({gl}) => {
                        gl.shadowMap.enabled = true
                        gl.shadowMap.type = THREE.PCFSoftShadowMap
                    }}>
                <ambientLight color={0x404040} intensity={0.5}/>
                <spotLight position={[10, 20, 5]} penumbra="2" castShadow/>
                <fog attach="fog" args={["white", 5, 25]} />
                <Controls />
                {/*<Box />*/}
                {/*<Plane />*/}
                <SpaceShip />
            </Canvas>
        </div>
    );
};

export default Home
