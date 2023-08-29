import * as THREE from 'three';
import { GLTFLoader } from '/node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '/node_modules/three/examples/jsm/controls/OrbitControls.js'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
const orbit=new OrbitControls(camera, renderer.domElement);
orbit.update();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

const loader = new GLTFLoader();


var model;
loader.load("/Public/Gun.glb", 
function(gltf){

    gltf.animations; 
    model = gltf.scene; 
    scene.add(model);
    gltf.cameras;
    gltf.asset;
    renderer.setClearColor(0xf4f4f4);
    camera.position.z = 5;
    model.rotation.y-=7;
    

    const dirLight = new THREE.DirectionalLight( 0xefefff, 1.5 );
    dirLight.position.set( 10, 10, 10 );
    dirLight.intensity =15;
    scene.add( dirLight );
    function animate(){
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();

}, undefined, function ( error ) {
    
    console.error( error );

});