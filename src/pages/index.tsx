import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useState, useEffect, useRef } from "react";
import styles from "../styles/index.module.css";

function App() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasRef.current as HTMLCanvasElement;

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector("#bg") as HTMLCanvasElement,
        });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.setZ(30);

        renderer.render(scene, camera);

        const geometry = new THREE.TorusGeometry(10, 4, 16, 100);

        const material = new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load("mainPage/Resume_Torus.jpg"),
        });

        const torus = new THREE.Mesh(geometry, material);

        scene.add(torus);
        const pointLight = new THREE.PointLight(0xffffff);
        pointLight.position.set(5, 5, 5);

        const ambientLight = new THREE.AmbientLight(0xffffff);
        scene.add(pointLight, ambientLight);

        const controls = new OrbitControls(camera, renderer.domElement);

        function addStar() {
            const geometry = new THREE.SphereGeometry(0.25);
            const material = new THREE.MeshStandardMaterial({
                color: 0xffffff,
            });
            const star = new THREE.Mesh(geometry, material);

            const [x, y, z] = Array(3)
                .fill(0)
                .map(() => THREE.MathUtils.randFloatSpread(100));

            star.position.set(x, y, z);
            scene.add(star);
        }

        Array(250).fill(0).forEach(addStar);

        const spaceTexture = new THREE.TextureLoader().load(
            "mainPage/space.jpg"
        );
        scene.background = spaceTexture;

        const avatarTexture = new THREE.TextureLoader().load(
            "mainPage/profile.jpeg"
        );

        const avatar = new THREE.Mesh(
            new THREE.BoxGeometry(7, 7, 7),
            new THREE.MeshBasicMaterial({ map: avatarTexture })
        );

        scene.add(avatar);

        const planetTexture = new THREE.TextureLoader().load(
            "mainPage/planet.jpg"
        );

        const planet = new THREE.Mesh(
            new THREE.SphereGeometry(5, 32, 32),
            new THREE.MeshStandardMaterial({ map: planetTexture })
        );

        scene.add(planet);

        planet.position.z = 30;
        planet.position.setX(-10);

        function moveCamera() {
            const t = document.body.getBoundingClientRect().top;
            planet.rotation.x += 0.05;
            planet.rotation.y += 0.075;
            planet.rotation.z += 0.05;

            avatar.rotation.y += 0.01;
            avatar.rotation.z += 0.01;

            camera.position.z = t * -0.01;
            camera.position.x = t * -0.0002;
            camera.rotation.y = t * -0.0002;
        }

        document.body.onscroll = moveCamera;

        function animate() {
            requestAnimationFrame(animate);
            torus.rotation.x += 0.01;
            torus.rotation.y += 0.001;
            torus.rotation.y += 0.01;

            controls.update();

            renderer.render(scene, camera);
        }

        animate();

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        function onCanvasClick(event: MouseEvent) {
            const intersects = getIntersects(event);
            if (intersects.length > 0) {
                const firstIntersect = intersects[0];
                if (firstIntersect.object === avatar) {
                    window.location.href = "/resume";
                }
                if (firstIntersect.object === planet) {
                    window.location.href = "/doctoreckersproject";
                }
            }
        }
        canvas.addEventListener("click", onCanvasClick);

        function onMouseMove(event: MouseEvent) {
            const intersects = getIntersects(event);
            if (intersects.length > 0) {
                canvas.style.cursor = "pointer";
            } else {
                canvas.style.cursor = "auto";
            }
        }

        canvas.addEventListener("mousemove", onMouseMove);

        function getIntersects(event: MouseEvent) {
            mouse.x = (event.clientX / canvas.clientWidth) * 2 - 1;
            mouse.y = -(event.clientY / canvas.clientHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            const objectsToIntersect = [planet, avatar];
            return raycaster.intersectObjects(objectsToIntersect);
        }
    }, []);
    return (
        <canvas
            ref={canvasRef}
            id="bg"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: -1,
            }}
        ></canvas>
    );
}

export default App;
