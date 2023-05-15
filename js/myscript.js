//creo array di oggeti del team

//creao un array vuoto
const team = [];

//creo oggetti

const dipendente1 = {};
const dipendente2 = {};
const dipendente3 = {};
const dipendente4 = {};
const dipendente5 = {};
const dipendente6 = {};


//popolo oggetti

dipendente1.nome = 'Wayne';
dipendente1.cognome = 'Barnett';
dipendente1.ruolo = 'Founder & CEO';
dipendente1.foto = 'wayne-barnett-founder-ceo.jpg';
console.log(dipendente1);
 		
dipendente2.nome = 'Angela';
dipendente2.cognome = 'Caroll';
dipendente2.ruolo = 'Chief Editor';
dipendente2.foto = 'angela-caroll-chief-editor.jpg';
console.log(dipendente2);
 		
dipendente3.nome = 'Walter';
dipendente3.cognome = 'Gordon';
dipendente3.ruolo = 'Office Manager';
dipendente3.foto = 'walter-gordon-office-manager.jpg';
console.log(dipendente3);
 		
dipendente4.nome = 'Angela';
dipendente4.cognome = 'Lopez';
dipendente4.ruolo = 'Social Media Manager';
dipendente4.foto = 'angela-lopez-social-media-manager.jpg';
console.log(dipendente4);
 		
dipendente5.nome = 'Scott';
dipendente5.cognome = 'Estrada';
dipendente5.ruolo = 'Developer';
dipendente5.foto = 'scott-estrada-developer.jpg';
console.log(dipendente5);
 		
dipendente6.nome = 'Barbara';
dipendente6.cognome = 'Ramos';
dipendente6.ruolo = 'Graphic Designer';
dipendente6.foto = 'barbara-ramos-graphic-designer.jpg';
console.log(dipendente6);


//inserisco oggetti negll'array


team.push(dipendente1);
team.push(dipendente2);
team.push(dipendente3);
team.push(dipendente4);
team.push(dipendente5);
team.push(dipendente6);
console.log(team);

//stampo in console

for (let i = 0; i < team.length; i++) {
    
    const dipendenteStampa = team[i];
    console.log(`dipendente ${i + 1}`);

    for (const key in dipendenteStampa) {
        console.log(key, ':', dipendenteStampa[key]);
        console.log(typeof(dipendenteStampa[key]));
    }
    
}


//stampo a schermo

const container = document.getElementById('container');

for (let i = 0; i < team.length; i++) {
    
    const dipendenteStampa = team[i];
    const intestazione = `dipendente ${i + 1}`;
    const scheda = document.createElement('div');
    scheda.className = 'dipendente';
    const title = document.createElement('p');
    title.className = 'title';
    title.innerHTML = intestazione;
    scheda.append(title);
    container.append(scheda);

    for (const key in dipendenteStampa) {
        if (key == 'foto') {
            console.log('questa è una foto', dipendenteStampa[key]);
            const fotoNome = dipendenteStampa[key]
            const linkFoto = `img/${fotoNome}`;
            const foto = document.createElement('img');
            foto.src = linkFoto;
            foto.className = 'foto';
            scheda.append(foto);
        } else {
        const info = document.createElement('p');
        info.className = 'info';
        info.innerHTML = `${key}: ${dipendenteStampa[key]}`;
        scheda.append(info);         
        }   
    }
}


//oppure

for (let i = 0; i < team.length; i++) {
    
    const dipendenteStampa = team[i];

    const nome = dipendenteStampa.nome;
    const cognome = dipendenteStampa.cognome;
    const ruolo = dipendenteStampa.ruolo;
    const foto = dipendenteStampa.foto;

    const cardElement = `<div class="dipendente">
                            <img src=img/${foto} alt="">
                            <div class= "info">${nome}</div>
                            <div class= "info">${cognome}</div>
                            <div class= "info">${ruolo}</div>
                            </div>`;
    container.innerHTML += cardElement;
}