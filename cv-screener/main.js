const data = [
    {
     name : 'Raj Kumar',
     age : 32,
     city : "nepalganj",
     language: 'c++',
     image : "https://randomuser.me/api/portraits/med/men/40.jpg"
    },
    {
     name : 'mithun Singh',
     age : 36,
     city : "kohalpur",
     language: 'Python',
     image : "https://randomuser.me/api/portraits/med/men/42.jpg"
    },
    {
     name : 'shraddha shrestha',
     age : 23,
     city : "surkhet",
     language: 'java',
     image : "https://randomuser.me/api/portraits/med/women/40.jpg"
    },
    {
     name : 'anjali kumari',
     age : 42,
     city : "dhangadi",
     language: 'ruby',
     image : "https://randomuser.me/api/portraits/med/women/46.jpg"
    },
    {
     name : 'binayak gautam',
     age : 32,
     city : "butwal",
     language: 'javascript ,nodejs',
     image : "https://randomuser.me/api/portraits/med/men/40.jpg"
    },
    {
     name : 'Sarita rana',
     age : 32,
     city : "kathmandu",
     language: 'c++ ,c#',
     image : "https://randomuser.me/api/portraits/med/women/50.jpg"
    }
]

console.log(data[0].name);
let image = document.querySelector("#image");
let profile = document.querySelector("#profiles");
const btn = document.querySelector("#btn");

function cvScreenIterate(profiles){
    let nextIndex = 0;
    return {
        next: function () { //ternary operator
            // return nextIndex < profiles.length ?    
            // {value : profiles[nextIndex++], done: false}:
            // {done : true}
            if(nextIndex < profiles.length){
                return {
                    value : profiles[nextIndex++],
                    done : false
                }
            }else{
                return {
                    done:true
                }
            }
        }
    }
}
let candidate = cvScreenIterate(data);
// console.log(candidate.next().value);
btn.addEventListener("click", nextCv);

function nextCv(){
    let currentCandidate = candidate.next().value;
    if(currentCandidate !== undefined){

        image.innerHTML = `<img src="${currentCandidate.image} "> `;
        profile.innerHTML = `<ul>
        <li> <span>name : </span> ${currentCandidate.name}</li>
        <li><span>age :</span>${currentCandidate.age}</li>
        <li><span>city :</span>${currentCandidate.city}</li>
        <li><span>language : </span>${currentCandidate.language}</li>
        
        </ul>`;
    }else{
        console.log("end of application");
        window.location.reload();
    }
}
window.addEventListener("load", ()=> {
    nextCv();
});