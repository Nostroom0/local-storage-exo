mainFunction();

function mainFunction (){
    getElements();
    addListeners();
    
    var getName,
        getUrl,
        button,
        gear,
        nameInjected,
        profilePage,
        inputPage,
        circle,
        objList  = [];
    // console.log(objList);
    load();
    render();
    function getElements(){
        getName = document.querySelector(".name");
        getUrl = document.querySelector(".url");
        button = document.querySelector("button");
        gear = document.querySelector(".gear");
        circle = document.querySelector(".circle");
        nameInjected = document.querySelector(".nameInjected");
        profilePage = document.querySelector(".profile");
        inputPage = document.querySelector(".inputs");
    }
    function addListeners(){
        button.addEventListener('click', goProfile);
        gear.addEventListener('click', returnHome);
    }
    function goProfile(){
        // Chercher les valeurs d'input 
        getNameValue = getName.value;
        // console.log(getNameValue);
        getName.value = "";

        getUrlValue = getUrl.value;
        // console.log(getUrlValue);
        getUrl.value = "";

        // nameInjected.innerText = getNameValue;
        // // circle.innerHtml += `<img src="${getUrlValue}" alt="">`
        // circle.style.backgroundImage = `url('${getUrlValue}')`;
        profilePage.classList.add("profile-back");
        inputPage.classList.add("inputs-hidden");

        rendering(getNameValue, getUrlValue);
        objList.push({
            name: getNameValue,
            profile: getUrlValue,
        })
        save();
    }
    function returnHome(){
        inputPage.classList.remove("inputs-hidden");
        profilePage.classList.remove("profile-back");
    }
    function save(){
        var stringified = JSON.stringify(objList);
        localStorage.setItem("objList", stringified);
    }
    function load(){
        var getData = localStorage.getItem("objList", objList);
        objList = JSON.parse(getData);
        console.log(typeof objList);
        if (objList == null){
            objList = [];
        }
    }
    function render(){
        objList.forEach(function(object){
            var nameEntry = object.name;
            var profileEntry = object.profile;
            rendering(nameEntry, profileEntry);
            console.log(nameEntry);
        })
    }
    function rendering(obj1, obj2){
        nameInjected.innerText = obj1;
        circle.style.backgroundImage = `url('${obj2}')`;
    }
    if (nameInjected.innerText != "" && circle.style.backgroundImage != ""){
        profilePage.classList.add("profile-back");
        inputPage.classList.add("inputs-hidden");
    }
}