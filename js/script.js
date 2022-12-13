let contenuto = document.getElementById('contenuto');
let persona, div, member;


function creaElemento(){
    div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `<p>${member.nome}<br>${member.ruolo}</p> <img src="./img/${member.img}">`;
    return div;
};


let members = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela caroll",
        ruolo: "Chied Editor",
        img: "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        img: "walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        img: "scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg",
    }
 ]

     
for(let i = 0; i < members.length; i++){
    member = members[i];
    console.log(member);
    creaElemento(member);
    contenuto.appendChild(div);

}
    


