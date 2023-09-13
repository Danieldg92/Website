import * as THREE from 'three';
import { GLTFLoader } from '/node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '/node_modules/three/examples/jsm/controls/OrbitControls.js'
const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
const orbit=new OrbitControls(camera, renderer.domElement);
var scene = new THREE.Scene();
orbit.update();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

const loader = new GLTFLoader();
const dirLight = new THREE.DirectionalLight( 0xefefff, 1.5 );
    dirLight.position.set( 10, 10, 10 );
    dirLight.intensity =15;
    scene.add( dirLight );

const dirLight2 = new THREE.DirectionalLight( 0xefefff, 1.5 );
    dirLight2.position.set( -10, -10, -10 );
    dirLight2.intensity =15;
    scene.add( dirLight2 );

let model;
let model1="/Public/Gun.glb";
let model2="/Public/Ship.glb";
let model3="/Public/Spider.glb";
let Active = model1;

loadGLTF(Active);

function loadGLTF(Active){
    loader.load(Active, 
        function(gltf){
            orbit.reset();
            scene.remove(model);
            renderer.setClearColor(0x000000);
            camera.position.z = 5;
            model = gltf.scene;
            scene.add(model);
                if (Active == model2){
                    console.log("Model2");
                    camera.position.z= 15;
                    model.rotation.y-=3;
                }
            model.rotation.y-=7;

}, undefined, function ( error ) {
    
    console.error( error );

});

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();}

function loadSpider(Active){
    loader.load(Active, 
        function(gltf){
            orbit.reset();
            scene.remove(model);
            renderer.setClearColor(0xC90000);
            camera.position.z = 15;
            model = gltf.scene;
            scene.add(model);
            model.rotation.y-=2;
            


}, undefined, function ( error ) {
    
    console.error( error );

});

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();}


//NEXT BUTTON 

document.getElementById("Triangles").onclick = function () { 
    if (Active == model1){
    Active=model2;
    loadGLTF(Active);
}

else if (Active == model2){
    Active=model3;
    loadSpider(Active);
}
else if (Active == model3){
    Active=model1;
    loadGLTF(Active);
}
}

//INSTRUCTION ANIMATION

const fadeLeft=document.getElementById("leftButton");

function Instrucion(){

        fadeLeft.id= "fadeIn";

        setTimeout(()=>{
            fadeLeft.id="fadeOut";    
        },1000);

};
Instrucion();
setInterval(Instrucion,2000);

addEventListener("click", ()=>{
    console.log("Mouse clicked");
});