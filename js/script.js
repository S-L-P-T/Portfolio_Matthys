//Déclaration des selecteurs
var vie = document.querySelector('#vie');
var eau = document.querySelector('#eau');
var o2 = document.querySelector('#o2');
var timecontainer = document.querySelector('.time');
var statscontainer = document.querySelectorAll('.stats');
var deplacer = document.querySelector('.Fleche');
var mineraiscontainer = document.querySelectorAll('.minerais');
var tasks = document.querySelectorAll('.btntask');
var contenuconstr = document.querySelectorAll('.tab1 .row2color .row');
var contenuinventaire = document.querySelectorAll('.tab2 .row2color .row');

console.log(contenuinventaire,contenuconstr);

//Déclaration des minerais
var ice = "../img/minerais/ice.png";
var cobalt = "../img/minerais/cobalt.png";
var iron = "../img/minerais/iron.png";
var magnesium = "../img/minerais/magnesium.png";
var silicon = "../img/minerais/silicon.png";
var titanium = "../img/minerais/titanium.png";
var food = "../img/minerais/space_food.png";
var seed = "../img/minerais/seed_lirma.png";

//Déclaration des tableaux
var denombconstr = [0,0,0,0,0,0];
var denombinventaire = [0,0,0,0,0,0,0];
var time = 0;
var stats = [100,100,100];
var minerai = ['ice', 'cobalt', 'iron', 'magnesium', 'silicon', 'titanium'];
var minerais = [ice, cobalt, iron, magnesium, silicon, titanium];
var materiaux = [];
var materiauxcollectible = [];

//Fonctions temps
setInterval(function() {
    stats[2]--;
    time++
    statscontainer[2].style.width = `${stats[2]}%`;
    timecontainer.innerHTML = time;
},1000)

setInterval(function() {
    stats[1]--;
    statscontainer[1].style.width = `${stats[1]}%`;
},5000)

setInterval(function() {
    stats[0]--;
    statscontainer[0].style.width = `${stats[0]}%`;
},10000)

//Condition de fin de partie
let intervalID;
intervalID = setInterval(function() {
    if (stats[0]==0||stats[1]==0||stats[2]==0){
        document.querySelector(".end").style.display = "flex";
        document.querySelector(".score").innerHTML = time*=1+denombconstr[3]+denombconstr[4]+denombconstr[5];
        clearInterval(intervalID);
    }

    if (time==10000){
        document.querySelector('.goodend').style.display = 'flex';
        document.querySelector(".score2").innerHTML = time*=1+denombconstr[3]+denombconstr[4]+denombconstr[5];
        clearInterval(intervalID);
    }



    if (denombconstr[2] != 0) {
        document.querySelector("#manger").style.display = "block";
    } else {
        document.querySelector("#manger").style.display = "none";
    }

    if (denombconstr[0] != 0) {
        document.querySelector("#boire").style.display = "block";
    } else {
        document.querySelector("#boire").style.display = "none";
    }

    if (denombconstr[1] != 0) {
        document.querySelector("#respirer").style.display = "block";
    } else {
        document.querySelector("#respirer").style.display = "none";
    }

    let capsule = ['capsule'];
    if (comparerTableauxCapsule(capsule,materiauxcollectible) == false) {

    } else {
        document.querySelector('#capsule').style.display = "flex"
    }


    let eau1 = document.getElementById('0');
    if (denombinventaire[0]>=1) {
        eau1.style.color = "black";
        eau1.style.background = "white";
        eau1.style.border = "1px black solid";
        eau1.style.boxShadow = "inset 0px 0px 5px 1px black";
        eau1.querySelector('.star').style.filter = 'invert(0)';
    } else {
        eau1.style.color = "white";
        eau1.style.background = "rgba(0, 0, 0, 0.60)";
        eau1.style.border = "1px white solid";
        eau1.style.boxShadow = "inset 0px 0px 5px 1px white";
        eau1.querySelector('.star').style.filter = 'invert(1)';
    }

    console.log(denombinventaire)
    let o21 = document.getElementById('1');
    if (denombinventaire[1]>=2) {
        o21.style.color = "black";
        o21.style.background = "white";
        o21.style.border = "1px black solid";
        o21.style.boxShadow = "inset 0px 0px 5px 1px black";
        o21.querySelector('.star').style.filter = 'invert(0)';
    } else {
        o21.style.color = "white";
        o21.style.background = "rgba(0, 0, 0, 0.60)";
        o21.style.border = "1px white solid";
        o21.style.boxShadow = "inset 0px 0px 5px 1px white";
        o21.querySelector('.star').style.filter = 'invert(1)';
    }


    let habitacle1 = document.getElementById('2');
    if (denombinventaire[2]>=2&&denombinventaire[5]>=1) {
        habitacle1.style.color = "black";
        habitacle1.style.background = "white";
        habitacle1.style.border = "1px black solid";
        habitacle1.style.boxShadow = "inset 0px 0px 5px 1px black";
        habitacle1.querySelector('.star').style.filter = 'invert(0)';
    } else {
        habitacle1.style.color = "white";
        habitacle1.style.background = "rgba(0, 0, 0, 0.60)";
        habitacle1.style.border = "1px white solid";
        habitacle1.style.boxShadow = "inset 0px 0px 5px 1px white";
        habitacle1.querySelector('.star').style.filter = 'invert(1)';
    }


    let lampe1 = document.getElementById('3');
    if (denombinventaire[4]>=1&&denombinventaire[3]>=2) {
        lampe1.style.color = "black";
        lampe1.style.background = "white";
        lampe1.style.border = "1px black solid";
        lampe1.style.boxShadow = "inset 0px 0px 5px 1px black";
        lampe1.querySelector('.star').style.filter = 'invert(0)';
    } else {
        lampe1.style.color = "white";
        lampe1.style.background = "rgba(0, 0, 0, 0.60)";
        lampe1.style.border = "1px white solid";
        lampe1.style.boxShadow = "inset 0px 0px 5px 1px whitelampe1";
        lampe1.querySelector('.star').style.filter = 'invert(1)';
    }


    let foreuse1 = document.getElementById('4');
    if (denombinventaire[2]>=1&&denombinventaire[5]>=1) {
        foreuse1.style.color = "black";
        foreuse1.style.background = "white";
        foreuse1.style.border = "1px black solid";
        foreuse1.style.boxShadow = "inset 0px 0px 5px 1px black";
        foreuse1.querySelector('.star').style.filter = 'invert(0)';
    } else {
        foreuse1.style.color = "white";
        foreuse1.style.background = "rgba(0, 0, 0, 0.60)";
        foreuse1.style.border = "1px white solid";
        foreuse1.style.boxShadow = "inset 0px 0px 5px 1px white";
        foreuse1.querySelector('.star').style.filter = 'invert(1)';
    }


    let radiateur1 = document.getElementById('5');
    if (denombinventaire[2]>=1&&denombinventaire[4]>=1) {
        radiateur1.style.color = "black";
        radiateur1.style.background = "white";
        radiateur1.style.border = "1px black solid";
        radiateur1.style.boxShadow = "inset 0px 0px 5px 1px black";
        radiateur1.querySelector('.star').style.filter = 'invert(0)';
    } else {
        radiateur1.style.color = "white";
        radiateur1.style.background = "rgba(0, 0, 0, 0.60)";
        radiateur1.style.border = "1px white solid";
        radiateur1.style.boxShadow = "inset 0px 0px 5px 1px white";
        radiateur1.querySelector('.star').style.filter = 'invert(1)';
    }


    let plantation1 = document.getElementById('6');
    if (denombinventaire[2]>=1&&denombinventaire[0]>=1&&denombinventaire[6]>=1) {
        plantation1.style.color = "black";
        plantation1.style.background = "white";
        plantation1.style.border = "1px black solid";
        plantation1.style.boxShadow = "inset 0px 0px 5px 1px black";
        plantation1.querySelector('.star').style.filter = 'invert(0)';
    } else {
        plantation1.style.color = "white";
        plantation1.style.background = "rgba(0, 0, 0, 0.60)";
        plantation1.style.border = "1px white solid";
        plantation1.style.boxShadow = "inset 0px 0px 5px 1px white";
        plantation1.querySelector('.star').style.filter = 'invert(1)';
    }


    if (comparerTableaux(['lampe'],materiauxcollectible) == false) {

    } else {
        document.querySelector('#light').style.display = "flex"
    }


    if((denombinventaire[0]+denombinventaire[1]+denombinventaire[2]+denombinventaire[3]+denombinventaire[4]+denombinventaire[5]+denombinventaire[6])===20){
        document.querySelector('.etatInventaire').style.display = "flex";
    } else {
        document.querySelector('.etatInventaire').style.display = "none";
    }


    if (comparerTableaux(['food'],materiaux) == false) {

    } else {
        denombconstr[2]++
        contenuconstr[2].innerHTML = denombconstr[2];
    }


    if (comparerTableaux(['ice'],materiaux) == false) {

    } else {
        denombinventaire[0]++
        contenuinventaire[0].innerHTML = denombinventaire[0];
    }


    if (comparerTableaux(['cobalt'],materiaux) == false) {

    } else {
        denombinventaire[1]++
        contenuinventaire[1].innerHTML = denombinventaire[1];
    }


    if (comparerTableaux(['iron'],materiaux) == false) {

    } else {
        denombinventaire[2]++
        contenuinventaire[2].innerHTML = denombinventaire[2];
    }


    if (comparerTableaux(['magnesium'],materiaux) == false) {

    } else {
        denombinventaire[3]++
        contenuinventaire[3].innerHTML = denombinventaire[3];
    }


    if (comparerTableaux(['silicon'],materiaux) == false) {

    } else {
        denombinventaire[4]++
        contenuinventaire[4].innerHTML = denombinventaire[4];
    }


    if (comparerTableaux(['titanium'],materiaux) == false) {

    } else {
        denombinventaire[5]++
        contenuinventaire[5].innerHTML = denombinventaire[5];
    }


    if (comparerTableaux(['seed'],materiaux) == false) {

    } else {
        denombinventaire[6]++
        contenuinventaire[6].innerHTML = denombinventaire[6];
    }
},100)

for (let i = 0; i <= mineraiscontainer.length-1; i++) {
    let mineraisAleatoire = minerais[Math.floor(Math.random() * minerais.length)];
    let img = document.createElement("img");
    img.src = mineraisAleatoire;
    img.className = i;
    img.width = "65";
    mineraiscontainer[i].appendChild(img);
}

deplacer.addEventListener("click", () => {
    stats[0] = stats[0]-1;
    stats[1] = stats[1]-5;
    stats[2] = stats[2]-10;
    if (stats[0] <= 0) {
        stats[0] = 0;
        statscontainer[0].style.width = `${stats[0]}%`;
    } else {
        statscontainer[0].style.width = `${stats[0]}%`;
    }
    if (stats[1] <= 0) {
        stats[1] = 0;
        statscontainer[1].style.width = `${stats[1]}%`;
    } else {
        statscontainer[1].style.width = `${stats[1]}%`;
    }
    if (stats[2] <= 0) {
        stats[2] = 0;
        statscontainer[2].style.width = `${stats[2]}%`;
    } else {
        statscontainer[2].style.width = `${stats[2]}%`;
    }
    for (let i = 0; i <= mineraiscontainer.length-1; i++) {
        let mineraisAleatoire = minerais[Math.floor(Math.random() * minerais.length)];
        let img = mineraiscontainer[i].querySelector("img");
        img.src = mineraisAleatoire;
        img.width = "65";
    }
});

function comparerTableauxCapsule(tableau1, tableau2) {
    // Copie des tableaux pour éviter de les modifier directement
    let copieTableau1 = [...tableau1];
    let copieTableau2 = [...tableau2];

    // Vérification du nombre d'occurrences de chaque élément dans le tableau à comparer
    for (let i = 0; i < copieTableau1.length; i++) {
        let element = copieTableau1[i];
        let index = copieTableau2.indexOf(element);
        
        if (index === -1) {
            return false; // L'élément n'est pas présent dans le deuxième tableau, les tableaux ne sont pas identiques
        }
        
        // Suppression de l'élément trouvé dans le deuxième tableau pour ne pas le réutiliser
        copieTableau2.splice(index, 1);
    }
    
    return true; // Vérification qu'il n'y a pas d'éléments restants dans le deuxième tableau
}

document.querySelector('#manger').addEventListener("click", () => {
    if(denombconstr[2]!=0){
        denombconstr[2]--
        contenuconstr[2].innerHTML = denombconstr[2];
        stats[0] = 100;
        statscontainer[0].style.width = `${stats[0]}%`;
    } else {

    }
});

document.querySelector('#respirer').addEventListener("click", () => {
    if(denombconstr[1]!=0){
        denombconstr[1]--
        contenuconstr[1].innerHTML = denombconstr[1];
        stats[2] = 100;
        statscontainer[2].style.width = `${stats[2]}%`;
    } else {

    }
});

document.querySelector('#boire').addEventListener("click", () => {
    if(denombconstr[0]!=0){
        denombconstr[0]--
        contenuconstr[0].innerHTML = denombconstr[0];
        stats[1] = 100;
        statscontainer[1].style.width = `${stats[1]}%`;
    } else {

    }
});

document.querySelector('#capsule').addEventListener("click", () => {
    let capsule = ['capsule'];
    if (comparerTableauxCapsule(capsule,materiauxcollectible) == false) {

    } else {
        stats[2] = 100;
        statscontainer[2].style.width = `${stats[2]}%`;
    }
});

//Fonction pour rechercher les minerais
function rechercheElement(src, minerai) {
    for (let i = 0; i < minerai.length; i++) {
        if (src.includes(minerai[i])) {
            return minerai[i];
      }
    }
    return null;
}

mineraiscontainer.forEach( input => input.addEventListener('click', e => {
        let src = e.target.src;
        if (src == undefined) {

        } else {
            if((denombinventaire[0]+denombinventaire[1]+denombinventaire[2]+denombinventaire[3]+denombinventaire[4]+denombinventaire[5]+denombinventaire[6])===20){
                
            } else {
            materiaux.push(rechercheElement(src,minerai));
            let cn = e.target.className;
            let img = mineraiscontainer[cn].querySelector("img");
            img.src = '';
            }
        }
    })
);

function comparerTableaux(tableau1, tableau2) {
    for (let i = 0; i < tableau1.length; i++) {
        let element = tableau1[i];
        let index = tableau2.indexOf(element);
        if (index === -1) {
            return false; // l'élément n'est pas présent dans le deuxième tableau, donc les tableaux ne sont pas identiques
        }
        tableau2.splice(index, 1); // enlever l'élément trouvé du deuxième tableau
    }
    return true; // tous les éléments ont été trouvés dans le deuxième tableau, donc les tableaux sont identiques
}




tasks.forEach( input => input.addEventListener('click', e => {
    let id = (e.target.id);
    if (id == 0) {
        if (denombinventaire[0]>=1) {
            denombconstr[0]++
            contenuconstr[0].innerHTML = denombconstr[0];
            denombinventaire[0]--
            contenuinventaire[0].innerHTML = denombinventaire[0];
            console.log(materiauxcollectible);
        } else {

        }
    }
    if (id == 1) {
        if (denombinventaire[1]>=2) {
            denombconstr[1]++
            contenuconstr[1].innerHTML = denombconstr[1];
            denombinventaire[1]-=2
            contenuinventaire[1].innerHTML = denombinventaire[1];
            console.log(materiauxcollectible);
        } else {

        }
    }
    if (id == 2) {
        if (denombinventaire[2]>=2&&denombinventaire[5]>=1) {
            materiauxcollectible.push('capsule');
            denombinventaire[2]-=2
            denombinventaire[5]-=1
            contenuinventaire[2].innerHTML = denombinventaire[2];
            contenuinventaire[5].innerHTML = denombinventaire[5];
            console.log(materiauxcollectible);
            tasks[id].style.display = "none";
        } else {

        }
    }
    if (id == 3) {
        if (denombinventaire[4]>=1&&denombinventaire[3]>=2) {
            materiauxcollectible.push('lampe');
            denombinventaire[4]-=1
            denombinventaire[3]-=2
            contenuinventaire[3].innerHTML = denombinventaire[3];
            contenuinventaire[4].innerHTML = denombinventaire[4];
            minerais.push(food,seed)
            minerai.push('food','seed')
            console.log(materiauxcollectible);
            tasks[id].style.display = "none";
        } else {

        }
    }
    if (id == 4) {
        if (denombinventaire[2]>=1&&denombinventaire[5]>=1) {
            denombconstr[3]++
            contenuconstr[3].innerHTML = denombconstr[3];
            denombinventaire[2]-=1
            denombinventaire[5]-=1
            contenuinventaire[2].innerHTML = denombinventaire[2];
            contenuinventaire[5].innerHTML = denombinventaire[5];
            console.log(materiauxcollectible);
        } else {

        }
    }
    if (id == 5) {
        if (denombinventaire[2]>=1&&denombinventaire[4]>=1) {
            denombconstr[4]++
            contenuconstr[4].innerHTML = denombconstr[4];
            denombinventaire[2]-=1
            denombinventaire[4]-=1
            contenuinventaire[2].innerHTML = denombinventaire[2];
            contenuinventaire[4].innerHTML = denombinventaire[4];
            console.log(materiauxcollectible);
        } else {

        }
    }
    if (id == 6) {
        if (denombinventaire[2]>=1&&denombinventaire[0]>=1&&denombinventaire[6]>=1) {
            denombconstr[5]++
            contenuconstr[5].innerHTML = denombconstr[5];
            denombinventaire[2]-=1
            denombinventaire[0]-=1
            denombinventaire[6]-=1
            contenuinventaire[2].innerHTML = denombinventaire[2];
            contenuinventaire[0].innerHTML = denombinventaire[0];
            contenuinventaire[6].innerHTML = denombinventaire[6];
            console.log(materiauxcollectible);
        } else {

        }
    }
}));

console.log(document.querySelector('.infobulleCraftTexte'));

tasks.forEach(input => input.addEventListener('mouseover', e => {
    let id = e.target.id;
    let infobulleTexte = document.querySelector('.infoCraft');
    if (id == 0) {
        let tasksmateriaux = '<img width="25px" src="'+ice+'">'+' : Glace';
        infobulleTexte.style.display = "flex";
        infobulleTexte.innerHTML = tasksmateriaux;
    }
    if (id == 1) {
        let tasksmateriaux = '<img width="25px" src="'+cobalt+'">'+' : Cobalt x2';
        infobulleTexte.style.display = "flex";
        infobulleTexte.innerHTML = tasksmateriaux;
    }
    if (id == 2) {
        let tasksmateriaux = '<img width="25px" src="'+iron+'">'+' : Fer x2, '+'<img width="25px" src="'+titanium+'">'+' : Titanium';
        infobulleTexte.style.display = "flex";
        infobulleTexte.innerHTML = tasksmateriaux;
    }
    if (id == 3) {
        let tasksmateriaux = '<img width="25px" src="'+silicon+'">'+' : Silicon, '+'<img width="25px" src="'+magnesium+'">'+' : Magnesium x2';
        infobulleTexte.style.display = "flex";
        infobulleTexte.innerHTML = tasksmateriaux;
    }
    if (id == 4) {
        let tasksmateriaux = '<img width="25px" src="'+iron+'">'+' : Fer, '+'<img width="25px" src="'+titanium+'">'+' : Titanium';
        infobulleTexte.style.display = "flex";
        infobulleTexte.innerHTML = tasksmateriaux;
    }
    if (id == 5) {
        let tasksmateriaux = '<img width="25px" src="'+iron+'">'+' : Fer, '+'<img width="25px" src="'+silicon+'">'+' : Silicon';
        infobulleTexte.style.display = "flex";
        infobulleTexte.innerHTML = tasksmateriaux;
    }
    if (id == 6) {
        let tasksmateriaux = '<img width="25px" src="'+iron+'">'+' : Fer, '+'<img width="25px" src="'+ice+'">'+' : Glace,'+'<img width="25px" src="'+seed+'">'+' : Graine';
        infobulleTexte.style.display = "flex";
        infobulleTexte.innerHTML = tasksmateriaux;
    }
}));

tasks.forEach(input => input.addEventListener('mouseout', () => {
    let infobulleTexte = document.querySelector('.infoCraft');
    infobulleTexte.style.display = "none";
}));

document.querySelector('.tab2').addEventListener("mouseover", () => {
    document.querySelector('.infoInventaire').style.display = "flex";
});

document.querySelector('.tab2').addEventListener("mouseout", () => {
    document.querySelector('.infoInventaire').style.display = "none";
});

var player = document.querySelector('audio');
var audio = document.querySelector('#audio');
var show = false;

audio.onclick = function() {
    if (show == true){
        player.pause();
        show = false;
        let img = document.querySelector("#audio img");
        img.src = '../img/interface/mute.png';
    } else {
        player.play();
        show = true;
        let img = document.querySelector("#audio img");
        img.src = '../img/interface/speaker-filled-audio-tool.png';
    }
}