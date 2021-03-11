function openContent(contentName, element, color){
    let i , tabContent, tabLinks;
    tabContent = document.querySelectorAll(".tab-content");
    for(i = 0; i < tabContent.length; i++){
        tabContent[i].style.display = "none";
    }
    tabLinks = document.querySelectorAll("button");
    for(i = 0 ; i < tabLinks.length; i++){
        tabLinks[i].style.backgroundColor = '';

    }
    document.getElementById(contentName).style.display = "block";
}
document.querySelector('#defaultOpen').click();



function loadSong(){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            document.querySelector(".content").innerHTML = this.responseText;
        }
    }
    xhr.open("GET","no_women_no_cry.txt", true);
    xhr.send();
}