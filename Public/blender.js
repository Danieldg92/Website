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

loadGLTF(Active); //Loads first model 

function loadGLTF(Active){ //Scene properties
    loader.load(Active, 
        function(gltf){
            orbit.reset();
            scene.remove(model); //Removes previous model
            console.log(Active);
            camera.position.z = 5;
            model = gltf.scene;
            scene.add(model); //Adds new model
            renderer.setClearColor(0x000000);
            model.rotation.set(0,Math.PI/2,0);
            
                if (Active == model2){ //Change some scene properties, model has skewed view without this
                    console.log("model2");
                    camera.position.z= 15;
                    model.rotation.y-=3;
                }
                
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


//NEXT BUTTONS, loads new scene on click - based on current scene

document.getElementById("arrowsRight").onclick = function () { 
    if (Active == model1){
    Active=model2;
    crossHair.id="noOpacity";
    crossHair1.id="noOpacity";
    crossHair2.id="noOpacity";
    crossHair3.id="noOpacity";
    crossHair4.id="noOpacity";
    N.id="noOpacity";
    O.id="noOpacity";
    V.id="noOpacity";
    A.id="noOpacity";

    SubD();
    loadGLTF(Active);
}

else if (Active == model2){
    Active=model3;
    subdivision.id="noOpacity";
    loadSpider(Active);
    
}
else if (Active == model3){
    Active=model1; 
    Nova();
    loadGLTF(Active);
 
}
}

document.getElementById("arrowsLeft").onclick = function () { 
    if (Active == model1){
    Active=model3;
    crossHair.id="noOpacity";
    crossHair2.id="noOpacity";
    crossHair1.id="noOpacity";
    crossHair2.id="noOpacity";
    crossHair3.id="noOpacity";
    crossHair4.id="noOpacity";
    N.id="noOpacity";
    O.id="noOpacity";
    V.id="noOpacity";
    A.id="noOpacity";
    loadSpider(Active);
}

else if (Active == model2){
    Active=model1;
    subdivision.id="noOpacity";
    loadGLTF(Active);
    Nova();
    
}
else if (Active == model3){
    Active=model2;
    subdivision.id="subdShipFadeIn";  
    SubD();
    loadGLTF(Active);
}
}


///MOUSE INSTRUCTION ANIMATION\\\

const Left=document.getElementById("leftButton"); //Fetches id from HTML doc for SVG file created in FIGMA
const Right=document.getElementById("rightButton");
const Scroll=document.getElementById("scroll");
const Rotate=document.getElementById("Rotate");
const Zoom=document.getElementById("Zoom");
const Move=document.getElementById("Move");
const BG=document.getElementById("mouseBG");
const Ellips=document.getElementById("ellips");

function Instruction(){
        Left.id="fadeIn"; //Applies CSS animation to SVG part, could probably be more condensed...
        Rotate.id="fadeIn"

        setTimeout(()=>{
            Left.id="fadeOut";  
            Rotate.id="fadeOut";  
        },1000);

        setTimeout(()=>{
            Left.id="fadeIn";   
            Rotate.id="fadeIn"; 
        },2000);

        setTimeout(()=>{
            Left.id="fadeOut";  
            Rotate.id="fadeOut";  
        },3000);

        setTimeout(()=>{
            Left.id="leftButton"; 
            Rotate.id="noOpacity";   
        },4000);

        setTimeout(()=>{
            Right.id="fadeIn";
            Move.id="fadeIn";    
        },4100);

        setTimeout(()=>{
            Right.id="fadeOut";  
            Move.id="fadeOut";    
        },5100);

        setTimeout(()=>{
            Right.id="fadeIn";    
            Move.id="fadeIn";  
        },6100);

        setTimeout(()=>{
            Right.id="fadeOut"; 
            Move.id="fadeOut";   
        },7100);

        setTimeout(()=>{
            Right.id="rightButton";  
            Move.id="noOpacity";   
        },8100);

        setTimeout(()=>{
            Scroll.id="fadeIn";
            Zoom.id="fadeIn";    
        },8200);

        setTimeout(()=>{
            Scroll.id="fadeOut";  
            Zoom.id="fadeOut";    
        },9200);

        setTimeout(()=>{
            Scroll.id="fadeIn";
            Zoom.id="fadeIn";    
        },10200);

        setTimeout(()=>{
            Scroll.id="fadeOut";  
            Zoom.id="fadeOut";     
        },11200);

        setTimeout(()=>{
            Scroll.id="rightButton";  
            Zoom.id="rightButton";   
        },12200);

        setTimeout(()=>{
            Right.id="noOpacity"
            Left.id="noOpacity"
            Rotate.id="noOpacity";
            Move.id="noOpacity";
            Scroll.id="noOpacity";  
            Zoom.id="noOpacity";   
            BG.id="noOpacity";
            Ellips.id="noOpacity";
        },12300);
    }
Instruction();


//                  NOVA TEXT                   \\


const N=document.getElementById("N");
const O=document.getElementById("O");
const V=document.getElementById("V");
const A=document.getElementById("A");
const _=document.getElementById("_");
const crossHair=document.getElementById("crossHair");
const crossHair1=document.getElementById("crossHair1");
const crossHair2=document.getElementById("crossHair2");
const crossHair3=document.getElementById("crossHair3");
const crossHair4=document.getElementById("crossHair4");  
const InfoI=document.getElementById("i");
const circle1=document.getElementById("circle1");
const circle2=document.getElementById("circle2");
InfoI.id="noOpacity";
circle1.id="noOpacity";
circle2.id="noOpacity";

function Nova(){
    
    setTimeout(()=>{
        _.id="_2";
        N.id="fullOpac";
    },150);

    setTimeout(()=>{
        _.id="_3";
        O.id="fullOpac";
    },300);

    setTimeout(()=>{
        _.id="_4";
        V.id="fullOpac";
    },450);

    setTimeout(()=>{
        _.id="_5";
        A.id="fullOpac";
    },600);

    setTimeout(()=>{
        crossHair.id="fullOpacCrosshair";
        crossHair1.id="fullOpacCrosshair";
        crossHair2.id="fullOpacCrosshair";
        crossHair3.id="fullOpacCrosshair";
        crossHair4.id="fullOpacCrosshair";
    },750);

    setTimeout(()=>{
        _.id="noOpacity";

    },900);
    
    //                  INFO BUBBLE                         \\

    function Info(){

    
    
    setTimeout(()=>{
        InfoI.id="fullOpacCrosshair";
        circle1.id="fullOpacCrosshair";
        circle2.id="fullOpacCrosshair";
    },2000);
    }
    Info();
}
Nova();


//                  Subdivision text                    \\

const subdivision=document.getElementById("subdShip");
function SubD(){
    subdivision.id="subdShipFadeIn";    
}