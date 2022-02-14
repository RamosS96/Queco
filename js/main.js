const ingredientsList = [];
const fruits = [];
const vegetables = [];
const mchicken = [];
const mcow = [];
const mfish = [];
const mpork = [];
const legume = [];
const misc = [];

class Ingredients {

    constructor(id, group, desc) {
        this.id = id;
        this.group = group;
        this.desc = desc;
    };
    addList() {
        if (this.group == "fruits") {
            fruits.push({ id: this.id, group: this.group, desc: this.desc });
        } else if (this.group == "vegetables") {
            vegetables.push({ id: this.id, group: this.group, desc: this.desc });
        } else if (this.group == "mchicken") {
            mchicken.push({ id: this.id, group: this.group, desc: this.desc });
        } else if (this.group == "mcow") {
            mcow.push({ id: this.id, group: this.group, desc: this.desc });
        } else if (this.group == "mfish") {
            mfish.push({ id: this.id, group: this.group, desc: this.desc });
        } else if (this.group == "mpork") {
            mpork.push({ id: this.id, group: this.group, desc: this.desc });
        } else if (this.group == "legume") {
            legume.push({ id: this.id, group: this.group, desc: this.desc });
        } else if (this.group == "misc") {
            misc.push({ id: this.id, group: this.group, desc: this.desc });
        }
    }
}
//Listado Frutas

const f01 = new Ingredients("f01", "fruits", "Banana"); f01.addList(f01.desc);
const f02 = new Ingredients("f02", "fruits", "Durazno"); f02.addList();
const f03 = new Ingredients("f03", "fruits", "Higo"); f03.addList();
const f04 = new Ingredients("f04", "fruits", "Kiwi"); f04.addList();
const f05 = new Ingredients("f05", "fruits", "Mandarina"); f05.addList();
const f06 = new Ingredients("f06", "fruits", "Mango"); f06.addList();
const f07 = new Ingredients("f07", "fruits", "Manzana"); f07.addList();
const f08 = new Ingredients("f08", "fruits", "Melon"); f08.addList();
const f09 = new Ingredients("f09", "fruits", "Naranja"); f09.addList();
const f10 = new Ingredients("f10", "fruits", "Palta"); f10.addList();
const f11 = new Ingredients("f11", "fruits", "Pelon"); f11.addList();
const f12 = new Ingredients("f12", "fruits", "Pera"); f12.addList();
const f13 = new Ingredients("f13", "fruits", "Sandia"); f13.addList();
const f14 = new Ingredients("f14", "fruits", "Tomate"); f14.addList();


// Listado Verduras

const v01 = new Ingredients("v01", "vegetables", "Lechuga"); v01.addList();
const v02 = new Ingredients("v02", "vegetables", "Acelga"); v02.addList();
const v03 = new Ingredients("v03", "vegetables", "Batata"); v03.addList();
const v04 = new Ingredients("v04", "vegetables", "Berenjena"); v04.addList();
const v05 = new Ingredients("v05", "vegetables", "Brocoli"); v05.addList();
const v06 = new Ingredients("v06", "vegetables", "Cebolla"); v06.addList();
const v07 = new Ingredients("v07", "vegetables", "Coliflor"); v07.addList();
const v08 = new Ingredients("v08", "vegetables", "Espinaca"); v08.addList();
const v09 = new Ingredients("v09", "vegetables", "Hinojo"); v09.addList();
const v10 = new Ingredients("v10", "vegetables", "Kale"); v10.addList();
const v11 = new Ingredients("v11", "vegetables", "Papa"); v11.addList();
const v12 = new Ingredients("v12", "vegetables", "Pepino"); v12.addList();
const v13 = new Ingredients("v13", "vegetables", "Verdeo"); v13.addList();
const v14 = new Ingredients("v14", "vegetables", "Zanahoria"); v14.addList();
const v15 = new Ingredients("v15", "vegetables", "Zapallito"); v15.addList();
const v16 = new Ingredients("v16", "vegetables", "Zapallo anco"); v16.addList();
const v17 = new Ingredients("v17", "vegetables", "Zapallo criollo"); v17.addList();


//Listado Carnes
//Pollo
const mc01 = new Ingredients("mc01", "mchicken", "Alita"); mc01.addList();
const mc02 = new Ingredients("mc02", "mchicken", "Entero"); mc02.addList();
const mc03 = new Ingredients("mc03", "mchicken", "Muslo"); mc03.addList();
const mc04 = new Ingredients("mc04", "mchicken", "Pata"); mc04.addList();
const mc05 = new Ingredients("mc05", "mchicken", "Pechuga"); mc05.addList();

//Vacuna
const mm01 = new Ingredients("mm01", "mcow", "Asado"); mm01.addList();
const mm02 = new Ingredients("mm02", "mcow", "Chinchulin"); mm02.addList();
const mm03 = new Ingredients("mm03", "mcow", "Cuadrada"); mm03.addList();
const mm04 = new Ingredients("mm04", "mcow", "Vacio"); mm04.addList();
const mm05 = new Ingredients("mm05", "mcow", "Higado"); mm05.addList();
const mm06 = new Ingredients("mm06", "mcow", "Lomo"); mm06.addList();
const mm07 = new Ingredients("mm07", "mcow", "Molleja"); mm07.addList();
const mm08 = new Ingredients("mm08", "mcow", "Nalga"); mm08.addList();
const mm09 = new Ingredients("mm09", "mcow", "Riñon"); mm09.addList();
const mm10 = new Ingredients("mm10", "mcow", "Solomillo"); mm10.addList();

//Pescado & Mariscos
const mf01 = new Ingredients("mf01", "mfish", "Atun"); mf01.addList();
const mf02 = new Ingredients("mf02", "mfish", "Calamar"); mf02.addList();
const mf03 = new Ingredients("mf03", "mfish", "Camarones"); mf03.addList();
const mf04 = new Ingredients("mf04", "mfish", "Cornalitos"); mf04.addList();
const mf05 = new Ingredients("mf05", "mfish", "Kanikama"); mf05.addList();
const mf06 = new Ingredients("mf06", "mfish", "Langostinos"); mf06.addList();
const mf07 = new Ingredients("mf07", "mfish", "Mejillones"); mf07.addList();
const mf08 = new Ingredients("mf08", "mfish", "Merluza"); mf08.addList();
const mf09 = new Ingredients("mf09", "mfish", "Salmon"); mf09.addList();

//Cerdo
const mp01 = new Ingredients("mp01", "mpork", "Bondiola"); mp01.addList();
const mp02 = new Ingredients("mp02", "mpork", "Carre"); mp02.addList();
const mp03 = new Ingredients("mp03", "mpork", "Chuleta"); mp03.addList();
const mp04 = new Ingredients("mp04", "mpork", "Lomo"); mp04.addList();
const mp05 = new Ingredients("mp05", "mpork", "Nalga"); mp05.addList();
const mp06 = new Ingredients("mp06", "mpork", "Pechito"); mp06.addList();
const mp07 = new Ingredients("mp07", "mpork", "Ribs"); mp07.addList();


//Listado Legumbres
const l01 = new Ingredients("l01", "legume", "Arvejas"); l01.addList();
const l02 = new Ingredients("l02", "legume", "Garbanzo"); l02.addList();
const l03 = new Ingredients("l03", "legume", "Lentejas"); l03.addList();
const l04 = new Ingredients("l04", "legume", "Maiz en crema"); l04.addList();
const l05 = new Ingredients("l05", "legume", "Maiz en grano"); l05.addList();
const l06 = new Ingredients("l06", "legume", "Porotos"); l05.addList();


//Otros

const o01 = new Ingredients("o01", "misc", "Aceite de girasol"); o01.addList();
const o02 = new Ingredients("o02", "misc", "Aceite de oliva"); o02.addList();
const o03 = new Ingredients("o03", "misc", "Aceitunas"); o03.addList();
const o04 = new Ingredients("o04", "misc", "Aceto Balsámico"); o04.addList();
const o05 = new Ingredients("o05", "misc", "Arroz"); o05.addList();
const o06 = new Ingredients("o06", "misc", "Bandeja Hongos"); o05.addList();
const o07 = new Ingredients("o07", "misc", "Harina"); o06.addList(); o07.addList();
const o08 = new Ingredients("o08", "misc", "Hongo de pino"); o08.addList();
const o09 = new Ingredients("o09", "misc", "Huevo"); o09.addList();
const o10 = new Ingredients("o10", "misc", "Leche"); o10.addList();
const o11 = new Ingredients("o11", "misc", "Maizena"); o11.addList();
const o12 = new Ingredients("o12", "misc", "Panko"); o12.addList();
const o13 = new Ingredients("o13", "misc", "Pate"); o13.addList();
const o14 = new Ingredients("o14", "misc", "Portobellos"); o14.addList();
const o15 = new Ingredients("o15", "misc", "Ricotta"); o15.addList();
const o16 = new Ingredients("o16", "misc", "Salsa de Soja"); o16.addList();
const o17 = new Ingredients("o17", "misc", "Vinagre"); o17.addList();


// let dato = () => {s = prompt("Que ingrediente desea agregar?:")}
// dato();
// let resultado = () => {t = misc.find(grupo => grupo.desc == s)};
// resultado();
// agregarALista = () => {ingredientsList.push(t)}

//  while ((s !='')&& (t!=undefined)){
//     dato();
//     agregarALista();
//     resultado();
//  }

//  console.log(ingredientsList);

const fruitsList = document.getElementById('ing-form-fruits');
const vegetablesList = document.getElementById('ing-form-vegetables');
const mealcowList = document.getElementById('ing-form-mealcow');
const mealchickenList = document.getElementById('ing-form-mealchicken');
const mealfishList = document.getElementById('ing-form-mealfish');
const mealporkList = document.getElementById('ing-form-mealpork');
const legumeList = document.getElementById('ing-form-legume');
const miscList = document.getElementById('ing-form-misc');
const selectedIngredients = document.getElementById('selected-ingredients');

function generateLists(array, group) {
    group.innerHTML = '';
    array.forEach(id => {
        const div = document.createElement('button');
        div.value = id.id;
        div.id = id.id;
        div.innerText = id.desc;
        div.classList = 'btn-sm rounded-circle';
        group.append(div);
        addToList((id.id), (id.desc));
    })
};
generateLists(fruits, fruitsList);
generateLists(vegetables, vegetablesList);
generateLists(mcow, mealcowList);
generateLists(mchicken, mealchickenList);
generateLists(mfish, mealfishList);
generateLists(mpork, mealporkList);
generateLists(legume, legumeList);
generateLists(misc, miscList);

function addToList(id, desc) {
    const divid = document.getElementById(id);
    divid.onclick = () => {
        ingredientsList.push({ id: id, desc: desc });
        console.log(ingredientsList);
    }

}

const modalOpenBtn = document.getElementById('btn-open-modal');
const newModal = document.getElementById('selected-ingredients');

function generateModal() {
    newModal.innerHTML = '';
    ingredientsList.forEach(id => {
        const list = document.createElement('span');
        list.id = id.id;
        list.innerText = id.desc;
        newModal.appendChild(list);
    })
}

modalOpenBtn.onclick = () => {
    newModal.className = 'visible modal-ingredient d-flex flex-column';
    generateModal();
}
