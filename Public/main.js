import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

//const geometry = new THREE.BoxGeometry( 1, 1, 1 );
//const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//const cube = new THREE.Mesh( geometry, material );
const loader = new GLTFLoader();
var model;
loader.load("/Public/GunCourseShadedTrigger-1.glb", 
function(gltf){

    gltf.animations; 
    model = gltf.scene; 
    scene.add(model);
    gltf.cameras;
    gltf.asset;
    renderer.setClearColor(0xffffff);
    camera.position.z = 5;
    

    const dirLight = new THREE.DirectionalLight( 0xefefff, 1.5 );
    dirLight.position.set( 10, 10, 10 );
    dirLight.intensity =15;
    scene.add( dirLight );

    function animate(){

        requestAnimationFrame(animate);
        
        model.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}, undefined, function ( error ) {
    
    console.error( error );

});

