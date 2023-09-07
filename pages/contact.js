let btnNew = document.getElementById("contact-btn");

btnNew.addEventListener('click', function (){
    let nameStored = document.getElementById("input-name").value;
    window.localStorage.setItem("Name", nameStored);
})
