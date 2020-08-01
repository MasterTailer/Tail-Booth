// JS
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// CSS
import './style.css';

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let point_light = new THREE.PointLight(0x404040, 5.0); // soft white light
point_light.translateX(10);
scene.add(point_light);

let point_light_2 = new THREE.PointLight(0x404040, 5.0); // soft white light
point_light_2.translateX(-10);
scene.add(point_light_2);

let loader = new GLTFLoader();
let tail;
loader.load('./foxtail.glb',
    function(obj) {
        tail = obj.scene;
        
        tail.rotateX(0.5);
        scene.add(tail);
    },
    undefined,
    function(err) {
        console.error(err);
    } 
);

camera.position.z = 3;

function animate() {
    requestAnimationFrame(animate);
    if (tail) tail.rotateY(0.01);
	renderer.render(scene, camera);
}

animate();
