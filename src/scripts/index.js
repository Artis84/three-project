console.log("yo");
import * as THREE from "three";

const canvas = document.getElementById("c");
const renderer = new THREE.WebGLRenderer({ canvas });

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5);
camera.position.z = 2;

const scene = new THREE.Scene();

const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 });

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

renderer.render(scene, camera);
