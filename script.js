


document.querySelector(".sirkel-3").style.animationPlayState="paused";
document.querySelector(".fill-jar-2").style.animationPlayState="paused";
document.querySelector(".splash").style.animationPlayState="paused";

// -------------SIDEBAR---------------------

//Hide sidebar on click outside------------
document.onclick = function(e){
    if (!sidebarSlide.contains(e.target)&&!sidebarKnapp.contains(e.target))
    {
        homePage();
    }
}
//--------------------sidebar closed state
function homePage(){
    sidebarCounter=false;
    sidebarSlide.style.width="0px";
}
// -----------------------------------------

//sidebar innhold -------------------------
const sidebarKnapp1=document.querySelector("#hamburger-button");
sidebarKnapp1.addEventListener("click", sidebarFunk);

const sidebarKnapp=document.querySelector("#hamburger-button1");
sidebarKnapp.addEventListener("click", sidebarFunk);

const homeButton=document.querySelector("#button-home");
homeButton.addEventListener("click",homePage);

const ansvarButton=document.querySelector("#button-ansvar");
ansvarButton.addEventListener("click",homePage);

const kalkButton=document.querySelector("#button-kalk");
kalkButton.addEventListener("click",homePage);
    
const teoriButton=document.querySelector("#button-teori");
teoriButton.addEventListener("click",homePage);

const videoButton=document.querySelector("#button-video");
videoButton.addEventListener("click",homePage);

const sidebarSlide=document.querySelector(".sidebar");
let sidebarCounter=false;
function sidebarFunk(){

    console.log(sidebarCounter)
    if (sidebarCounter===false){
    sidebarSlide.style.width="250px";
    sidebarCounter=true
    }
    else if (sidebarCounter===true){
        sidebarSlide.style.width="0px";
        sidebarCounter=false;
        }
    
        if (mediaQuery.matches&&sidebarCounter===true) {
        sidebarSlide.style.width="100%";
    }
            else if (mediaQuery.matches&&sidebarCounter===false) {
            sidebarSlide.style.width="0px";
        }
}
//---------------------------------------------------

//mobile responsive sidebar --------------------------
const mediaQuery = window.matchMedia('(max-width: 650px)')
window.onresize = reportWindowSize;

function reportWindowSize(){
    if (mediaQuery.matches&&sidebarCounter===true) {
        sidebarSlide.style.width="100%";
    }
            else if (mediaQuery.matches&&sidebarCounter===false) {
            sidebarSlide.style.width="0px";
        }
}

//-----------------------------------------------------
//-----------------------Darkmode---------------
let darkmodeCounter=false;
        //hover effekt
        document.getElementById("hamburger-button1").addEventListener("mouseover",colorChange);
        function colorChange(){
            if(darkmodeCounter===true){
                sidebarKnapp.style.backgroundColor="black"
                sidebarKnapp.style.Color="white"
                //console.log("darkmode")
        }else{
            sidebarKnapp.style.backgroundColor="white"
            sidebarKnapp.style.Color="black"
            //console.log("lightmode")
            }
        }
        document.getElementById("hamburger-button1").addEventListener("mouseout",colorChangeBack);
        function colorChangeBack(){
            if(darkmodeCounter===false){
                sidebarKnapp.style.backgroundColor="transparent"
                sidebarKnapp.style.Color="black"
                //console.log("lightmode")
            }else{
                    sidebarKnapp.style.backgroundColor="transparent"
                    sidebarKnapp.style.Color="white"
                    //console.log("darkmode")
                }
        }
//Darkmode omgjøringer
function darkmodeActive(){
    let cards=document.querySelectorAll(".card");
    if(darkmodeCounter===false){
    document.body.style.background="linear-gradient(to top left, rgb(0, 0, 74), rgb(35, 35, 35)) no-repeat";
    document.body.style.color="white";
    document.querySelector(".seksjon-kalk").style.backgroundColor="black"
    document.querySelector(".sidebar").style.background="linear-gradient(to top left, rgb(0, 0, 74), rgb(35, 35, 35)) no-repeat";
    document.querySelector("#hamburger-button").style.color="white";
    document.querySelector("#button-home").style.color="white";
    document.querySelector("#button-ansvar").style.color="white";
    document.querySelector("#button-kalk").style.color="white";
    document.querySelector("#button-teori").style.color="white";
    document.querySelector("#button-video").style.color="white";
    document.querySelector("#hamburger-button1").style.color="white";
    document.querySelector(".kalkulator").style.color="white";
    document.querySelector(".innhold-teori").style.color="white";
    document.querySelector(".innhold-teori").style.backgroundColor="black";

    if (laminarCounter===true){
    document.querySelector(".laminar-flow").style.backgroundImage="url(laminar-flow-dark.png)";
    }else if(turbulentCounter===true){
    document.querySelector(".laminar-flow").style.backgroundImage="url(turbulent-flow-dark.png)";
    }
    for (let i=0;i<3;i++){
        cards[i].style.background="black";
        cards[i].style.boxShadow="-5px -5px 3px #ffffff,5px 5px 3px #bebebe";
    }
    darkmodeCounter=true
    console.log("true")
}else{
    document.body.style.background="linear-gradient(to top left, rgb(0, 0, 114), rgb(90, 89, 89)) no-repeat";
    document.body.style.color="black";
    document.querySelector(".seksjon-kalk").style.backgroundColor="white"
    document.querySelector(".sidebar").style.background="linear-gradient(to top left, rgb(0, 0, 114), rgb(90, 89, 89)) no-repeat";
    document.querySelector("#hamburger-button").style.color="black";
    document.querySelector("#button-home").style.color="black";
    document.querySelector("#button-ansvar").style.color="black";
    document.querySelector("#button-kalk").style.color="black";
    document.querySelector("#button-teori").style.color="black";
    document.querySelector("#button-video").style.color="black";
    document.querySelector("#hamburger-button1").style.color="black";
    document.querySelector(".kalkulator").style.color="black";
    document.querySelector(".innhold-teori").style.color="black";
    document.querySelector(".innhold-teori").style.backgroundColor="white";


        if (laminarCounter===true){
    document.querySelector(".laminar-flow").style.backgroundImage="url(laminar-flow.PNG)";
    }else if(turbulentCounter===true){
    document.querySelector(".laminar-flow").style.backgroundImage="url(turbulent-flow.PNG)";
    }
    for (let i=0;i<3;i++){
        cards[i].style.background="white";
        cards[i].style.boxShadow="-5px -5px 3px #000000,5px 5px 3px #000000";

    }
    darkmodeCounter=false;
    console.log("false")

}
}


//-----------------------reynholds tall kalk-------------------------------
const equal=document.querySelector("#equal");
equal.addEventListener("click",utregner );
const laminar = document.querySelector(".bildeKalk");
let laminarCounter=false;
let turbulentCounter=false;
let RE;
const mediaQuery2 = window.matchMedia('(max-width: 650px)')
const mediaQuery3 = window.matchMedia('(min-width: 651px)')
window.onresize = reportWindowSize2;
window.onresize = reportWindowSize3;

function utregner(){
    let inputV=document.getElementById("input1").value;
    let inputD=document.getElementById("input2").value;
    let inputP=document.getElementById("input3").value;
    let inputU=document.getElementById("input4").value;
    inputV=inputV.replace(/,/g, '.');
    inputD=inputD.replace(/,/g, '.');
    inputP=inputP.replace(/,/g, '.');
    inputU=inputU.replace(/,/g, '.');
    
console.log(inputD);
    RE=(inputV*inputD*inputP)/inputU;
    console.log(RE)
    RE=RE.toFixed(3);
    document.querySelector("#svarRE").innerHTML=RE;

    if(RE>=4000){
        if (darkmodeCounter===false){
        laminar.style.background="url(turbulent-flow.PNG) no-repeat center ";
        document.querySelector(".sirkel-3").style.animationPlayState="running";
        document.querySelector(".fill-jar-2").style.animationPlayState="running";
        document.querySelector(".splash").style.animationPlayState="running";
        document.querySelector(".kran-3").style.transform="translateX(-16px)";
        //mobile responsive bilder
        if (mediaQuery3.matches) {
        laminar.style.backgroundSize="contain";
    }else if(mediaQuery2.matches){
        laminar.style.backgroundSize="250px 100px";
    }    
    }
        else{
                    laminar.style.background="url(turbulent-flow-dark.png) no-repeat center ";
                    document.querySelector(".sirkel-3").style.animationPlayState="running";
                    document.querySelector(".fill-jar-2").style.animationPlayState="running";
                    document.querySelector(".splash").style.animationPlayState="running";
                    document.querySelector(".kran-3").style.transform="translateX(-16px)";

        if (mediaQuery3.matches) {
         laminar.style.backgroundSize="contain";
        }else if(mediaQuery2.matches){
            laminar.style.backgroundSize="250px 100px";
        }
        }

        turbulentCounter=true;
        laminarCounter=false;
    }
    else{
        if (darkmodeCounter===false){
       laminar.style.background="url(laminar-flow.PNG) no-repeat center";
    document.querySelector(".sirkel-3").style.animationPlayState="running";
    document.querySelector(".fill-jar-2").style.animationPlayState="running";
    document.querySelector(".splash").style.animationPlayState="running";
    document.querySelector(".kran-3").style.transform="translateX(-16px)";
    //mobile responsive bilder --------------------------
    if (mediaQuery3.matches) {
        laminar.style.backgroundSize="contain";
    }else if(mediaQuery2.matches){
        laminar.style.backgroundSize="250px 100px";
    }
    //----
        }else{
            laminar.style.background="url(laminar-flow-dark.png) no-repeat center ";
            document.querySelector(".sirkel-3").style.animationPlayState="running";
            document.querySelector(".fill-jar-2").style.animationPlayState="running";
            document.querySelector(".splash").style.animationPlayState="running";
            document.querySelector(".kran-3").style.transform="translateX(-16px)";

        if (mediaQuery3.matches) {
            laminar.style.backgroundSize="contain";
        }else if(mediaQuery2.matches){
        laminar.style.backgroundSize="250px 100px";
        }
        }
        laminarCounter=true;
        turbulentCounter=false;
    }
    //filljar forandring til turbulent

    if (RE>4000){
        console.log(document.querySelector(".sirkel-3"))
        document.querySelector(".sirkel-3").style.animationDuration="1s"
        document.querySelector(".fill-jar-2").style.animationDuration="10s"
        document.querySelector(".splash").style.animationDuration="10s"
    }else{
        document.querySelector(".sirkel-3").style.animationDuration="2.5s"
        document.querySelector(".fill-jar-2").style.animationDuration="25s"
        document.querySelector(".splash").style.animationDuration="25s"
    }

    console.log(RE)
    inputV=0;
    inputD=0;
    inputP=0;
    inputU=0;
    RE=0;
    onOffCounter=true;



}
function reportWindowSize2(){
        if (mediaQuery2.matches) {
        laminar.style.backgroundSize="250px 100px";
    }else{
            laminar.style.backgroundSize="450px 200px";        
    }
}
function reportWindowSize3(){
        if (mediaQuery2.matches) {
        laminar.style.backgroundSize="250px 100px";
    }else{
            laminar.style.backgroundSize="contain";        
    }
}
//------------------------------------------------------------------------
//kran turn on/off
let onOffCounter=false;
function turnOff(){
    if (onOffCounter===false){
            document.querySelector(".sirkel-3").style.animationPlayState="running";
            document.querySelector(".fill-jar-2").style.animationPlayState="running";
            document.querySelector(".splash").style.animationPlayState="running";
            document.querySelector(".kran-3").style.transform="translateX(-15px)";     
            document.querySelector(".kran-3").style.borderTopRightRadius="0px";   
            document.querySelector(".kran-3").style.borderBottomRightRadius="0px";  
            document.querySelector(".kran-3").style.borderTopLeftRadius="20px";   
            document.querySelector(".kran-3").style.borderBottomLeftRadius="20px"; 
            onOffCounter=true;
    }else{
        document.querySelector(".sirkel-3").style.animationPlayState="paused";
        document.querySelector(".fill-jar-2").style.animationPlayState="paused";
        document.querySelector(".splash").style.animationPlayState="paused";
        document.querySelector(".kran-3").style.transform="translateX(-3.5px)";
        document.querySelector(".kran-3").style.borderTopLeftRadius="20px";   
        document.querySelector(".kran-3").style.borderBottomLeftRadius="20px";   
            document.querySelector(".kran-3").style.borderTopRightRadius="20px";   
            document.querySelector(".kran-3").style.borderBottomRightRadius="20px";  
            document.querySelector(".kran-3").style.borderTopLeftRadius="0px";   
            document.querySelector(".kran-3").style.borderBottomLeftRadius="0px"; 
            onOffCounter=false;
    }
}

