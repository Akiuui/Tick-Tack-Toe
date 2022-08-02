var prvi=document.getElementById("prvi");
var drugi=document.getElementById("drugi");
var treci=document.getElementById("treci");
var cetvrti=document.getElementById("cetvrti");
var peti=document.getElementById("peti");
var sesti=document.getElementById("sesti");
var sedmi=document.getElementById("sedmi");
var osmi=document.getElementById("osmi");
var deveti=document.getElementById("deveti");

var sve=document.querySelectorAll(".box");

let q=1;
let i=5;
var one;
var two;
var three;
var four;
var five;
var six;
var seven;
var eight;
var nine;
var ishod;
var runda;

    document.querySelector(".brisi").addEventListener("click", () =>{
        document.querySelector(".blokada").classList.add("open");
        document.querySelector(".prompt").classList.add("open");
        

    });

    function no(){
        document.querySelector(".blokada").classList.remove("open");
        document.querySelector(".prompt").classList.remove("open");
    }



    prvi.addEventListener("click", () =>{
        if(q%2==0){
            one=0;
            document.getElementById("k1").style.opacity=1;
            prvi.style.pointerEvents = "none";
            k1.style.pointerEvents = "none";
        }
        else{
            one=1;
            document.getElementById("l1").style.opacity=1;
            prvi.style.pointerEvents = "none";
            l1.style.pointerEvents = "none";
        }
    });
    drugi.addEventListener("click", () =>{
        if(q%2==0){
            two=0;
            document.getElementById("k2").style.opacity=1;
            drugi.style.pointerEvents = "none";
            l2.style.pointerEvents = "none";
        }
        else{
            two=1;
            document.getElementById("l2").style.opacity=1;
            drugi.style.pointerEvents = "none";
            k2.style.pointerEvents = "none";
        }
    });
    treci.addEventListener("click", () =>{
        if(q%2==0){
            three=0;
            document.getElementById("k3").style.opacity=1;
            treci.style.pointerEvents = "none";
            l3.style.pointerEvents = "none";
        }
        else{
            three=1;
            document.getElementById("l3").style.opacity=1;
            treci.style.pointerEvents = "none";
            k3.style.pointerEvents = "none";
        }
    });
    cetvrti.addEventListener("click", () =>{
        if(q%2==0){
            four=0;
            document.getElementById("k4").style.opacity=1;
            cetvrti.style.pointerEvents = "none";
            l4.style.pointerEvents = "none";
        }
        else{
            four=1;
            document.getElementById("l4").style.opacity=1;
            cetvrti.style.pointerEvents = "none";
            k4.style.pointerEvents = "none";
        }
    });
    peti.addEventListener("click", () =>{
        if(q%2==0){
            five=0;
            document.getElementById("k5").style.opacity=1;
            peti.style.pointerEvents = "none";
            l5.style.pointerEvents = "none";
        }
        else{
            five=1;
            document.getElementById("l5").style.opacity=1;
            peti.style.pointerEvents = "none";
            k5.style.pointerEvents = "none";
        }
    });
    sesti.addEventListener("click", () =>{
        if(q%2==0){
            six=0;
            document.getElementById("k6").style.opacity=1;
            sesti.style.pointerEvents = "none";
            l6.style.pointerEvents = "none";
        }
        else{
            six=1;
            document.getElementById("l6").style.opacity=1;
            sesti.style.pointerEvents = "none";
            k6.style.pointerEvents = "none";
        }
    });
    sedmi.addEventListener("click", () =>{
        if(q%2==0){
            seven=0;
            document.getElementById("k7").style.opacity=1;
            sedmi.style.pointerEvents = "none";
            l7.style.pointerEvents = "none";
        }
        else{
            seven=1;
            document.getElementById("l7").style.opacity=1;
            sedmi.style.pointerEvents = "none";
            k7.style.pointerEvents = "none";
        }
    });
    osmi.addEventListener("click", () =>{
        if(q%2==0){
            eight=0;
            document.getElementById("k8").style.opacity=1;
            osmi.style.pointerEvents = "none";
            l8.style.pointerEvents = "none";
        }
        else{
            eight=1;
            document.getElementById("l8").style.opacity=1;
            osmi.style.pointerEvents = "none";
            k8.style.pointerEvents = "none";
        }
    });
    deveti.addEventListener("click", () =>{
        if(q%2==0){
            nine=0;
            document.getElementById("k9").style.opacity=1;
            deveti.style.pointerEvents = "none";
            l9.style.pointerEvents = "none";
        }
        else{
            nine=1;
            document.getElementById("l9").style.opacity=1;
            deveti.style.pointerEvents = "none";
            k9.style.pointerEvents = "none";
        }
    });
    function oduzmi(){
        document.querySelectorAll(".box").forEach(e => {
            e.style.pointerEvents="none";
        });
    }

    sve.forEach(elem => elem.addEventListener("click",
    () => {
        q++;

        if(one==0 && two==0 && three==0)
        ishod=0;
        if(one==1 && two==1 && three==1)
            ishod=1;

        if(one==0 && four==0 && seven==0)
            ishod=0;
        if(one==1 && four==1 && seven==1)
            ishod=1; 
        
        if(seven==0 && eight==0 && nine==0)
            ishod=0;
        if(seven==1 && eight==1 && nine==1)
            ishod=1;

        if(three==0 && six==0 && nine==0)
            ishod=0;
        if(three==1 && six==1 && nine==1)
            ishod=1;

        if(two==0 && five==0 && eight==0)
            ishod=0;
        if(two==1 && five==1 && eight==1)
            ishod=1;
        
        if(four==0 && five==0 && six==0)
            ishod=0;
        if(four==1 && five==1 && six==1)
            ishod=1;
        
        if(one==0 && five==0 && nine==0)
            ishod=0;
        if(one==1 && five==1 && nine==1)
            ishod=1;
        
        if(three==0 && five==0 && seven==0)
            ishod=0;
        if(three==1 && five==1 && seven==1)
            ishod=1;

        if(one!=undefined && two!=undefined && three!=undefined && four!=undefined && five!=undefined && six!=undefined && seven!=undefined && eight!=undefined && nine!=undefined)
            ishod=3;
        if(ishod==1)
            {
            document.querySelector(".ikspobeda").classList.add("open");
            document.querySelector(".opet").classList.add("open");
            document.querySelector(".izpocetka").classList.add("open");
            oduzmi();
            mrdaj();
            }
        if(ishod==0)
            {
            document.querySelector(".ikspobeda").textContent = 'Pobedio je OKS';
            document.querySelector(".ikspobeda").classList.add("open");
            document.querySelector(".opet").classList.add("open");
            document.querySelector(".izpocetka").classList.add("open");
            oduzmi();
            mrdaj();
            }
        if(ishod==3)
            {
            document.querySelector(".ikspobeda").textContent = 'Izjednaceno';
            document.querySelector(".ikspobeda").classList.add("open");
            document.querySelector(".opet").classList.add("open");
            document.querySelector(".izpocetka").classList.add("open");
            oduzmi();
            mrdaj();
            }
    }));

function mrdaj(){
    document.querySelector(".brisi").classList.add("move");
}
function mrdaj1(){
    document.querySelector(".brisi").classList.remove("move");
}

    runda=2;
    function restart(){
        document.querySelector(".ikspobeda").classList.remove("open");
        document.querySelector(".opet").classList.remove("open");
        document.querySelector(".izpocetka").classList.remove("open");
        one=undefined;
        two=undefined;
        three=undefined;
        four=undefined;
        six=undefined;
        seven=undefined;
        eight=undefined;
        nine=undefined;
        ishod=undefined;
        const lista1=document.querySelectorAll(".iks");
        lista1.forEach(e => {
            e.style.opacity=0;
            e.style.pointerEvents="auto";
        })
        const lista11=document.querySelectorAll(".box");
        lista11.forEach(e => {
            e.style.pointerEvents="auto";
        })

        const lista2=document.querySelectorAll(".krug");
        lista2.forEach(el => {
            el.style.opacity=0;
            el.style.pointerEvents="auto";
        })
        document.querySelector(".runda").textContent = "Round: "+runda;
        runda++;
        mrdaj1();
    }



    function gasi(){
        document.querySelector(".ikspobeda").classList.remove("open");
        document.querySelector(".opet").classList.remove("open");
        document.querySelector(".izpocetka").classList.remove("open");
        one=undefined;
        two=undefined;
        three=undefined;
        four=undefined;
        six=undefined;
        seven=undefined;
        eight=undefined;
        nine=undefined;
        ishod=undefined;
        const lista1=document.querySelectorAll(".iks");
        lista1.forEach(e => {
            e.style.opacity=0;
            e.style.pointerEvents="auto";
        })
        const lista11=document.querySelectorAll(".box");
        lista11.forEach(e => {
            e.style.pointerEvents="auto";
        })

        const lista2=document.querySelectorAll(".krug");
        lista2.forEach(el => {
            el.style.opacity=0;
            el.style.pointerEvents="auto";
        })
        document.querySelector(".runda").textContent = "Round: 1";
        runda=2;
        mrdaj1();
    }
