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
            fruits.push(this);
        } else if (this.group == "vegetables") {
            vegetables.push(this);
        } else if (this.group == "mchicken") {
            mchicken.push(this);
        } else if (this.group == "mcow") {
            mcow.push(this);
        } else if (this.group == "mfish") {
            mfish.push(this);
        } else if (this.group == "mpork") {
            mpork.push(this);
        } else if (this.group == "legume") {
            legume.push(this);
        } else if (this.group == "misc") {
            misc.push(this);
        }
    }
}
//Listado Frutas

const f01 = new Ingredients(01, "fruits", "Banana");f01.addList();
const f02 = new Ingredients(02, "fruits", "Durazno");f02.addList();
const f03 = new Ingredients(03, "fruits", "Higo");f03.addList();
const f04 = new Ingredients(04, "fruits", "Kiwi");f04.addList();
const f05 = new Ingredients(05, "fruits", "Mandarina");f05.addList();
const f06 = new Ingredients(06, "fruits", "Mango");f06.addList();
const f07 = new Ingredients(07, "fruits", "Manzana");f07.addList();
const f08 = new Ingredients(08, "fruits", "Melon");f08.addList();
const f09 = new Ingredients(09, "fruits", "Naranja");f09.addList();
const f10 = new Ingredients(10, "fruits", "Palta");f10.addList();
const f11 = new Ingredients(11, "fruits", "Pelon");f11.addList();
const f12 = new Ingredients(12, "fruits", "Pera");f12.addList();
const f13 = new Ingredients(13, "fruits", "Sandia");f13.addList();
const f14 = new Ingredients(14, "fruits", "Tomate");f14.addList();
console.log(fruits);

// Listado Verduras

const v01 = new Ingredients(01, "vegetables", "Lechuga");v01.addList();
const v02 = new Ingredients(02, "vegetables", "Acelga");v02.addList();
const v03 = new Ingredients(03, "vegetables", "Batata");v03.addList();
const v04 = new Ingredients(04, "vegetables", "Berenjena");v04.addList();
const v05 = new Ingredients(05, "vegetables", "Brocoli");v05.addList();
const v06 = new Ingredients(06, "vegetables", "Cebolla");v06.addList();
const v07 = new Ingredients(07, "vegetables", "Coliflor");v07.addList();
const v08 = new Ingredients(08, "vegetables", "Espinaca");v08.addList();
const v09 = new Ingredients(09, "vegetables", "Hinojo");v09.addList();
const v10 = new Ingredients(10, "vegetables", "Kale");v10.addList();
const v11 = new Ingredients(11, "vegetables", "Papa");v11.addList();
const v12 = new Ingredients(12, "vegetables", "Pepino");v12.addList();
const v13 = new Ingredients(13, "vegetables", "Verdeo");v13.addList();
const v14 = new Ingredients(14, "vegetables", "Zanahoria");v14.addList();
const v15 = new Ingredients(15, "vegetables", "Zapallito");v15.addList();
const v16 = new Ingredients(16, "vegetables", "Zapallo anco");v16.addList();
const v17 = new Ingredients(17, "vegetables", "Zapallo criollo");v17.addList();
console.log(vegetables);

//Listado Carnes
//Pollo
const mc01 = new Ingredients(01, "mchicken", "Alita");mc01.addList();
const mc02 = new Ingredients(02, "mchicken", "Entero");mc02.addList();
const mc03 = new Ingredients(03, "mchicken", "Muslo");mc03.addList();
const mc04 = new Ingredients(04, "mchicken", "Pata");mc04.addList();
const mc05 = new Ingredients(05, "mchicken", "Pechuga");mc05.addList();
console.log(mchicken);
//Vacuna
const mm01 = new Ingredients(01, "mcow", "Asado");mm01.addList();
const mm02 = new Ingredients(02, "mcow", "Chinchulin");mm02.addList();
const mm03 = new Ingredients(03, "mcow", "Cuadrada");mm03.addList();
const mm04 = new Ingredients(04, "mcow", "Vacio");mm04.addList();
const mm05 = new Ingredients(05, "mcow", "Higado");mm05.addList();
const mm06 = new Ingredients(06, "mcow", "Lomo");mm06.addList();
const mm07 = new Ingredients(07, "mcow", "Molleja");mm07.addList();
const mm08 = new Ingredients(08, "mcow", "Nalga");mm08.addList();
const mm09 = new Ingredients(09, "mcow", "Riñon");mm09.addList();
const mm10 = new Ingredients(10, "mcow", "Solomillo");mm10.addList();
console.log(mcow);
//Pescado & Mariscos
const mf01 = new Ingredients(01, "mfish", "Atun");mf01.addList();
const mf02 = new Ingredients(02, "mfish", "Calamar");mf02.addList();
const mf03 = new Ingredients(03, "mfish", "Camarones");mf03.addList();
const mf04 = new Ingredients(04, "mfish", "Cornalitos");mf04.addList();
const mf05 = new Ingredients(05, "mfish", "Kanikama");mf05.addList();
const mf06 = new Ingredients(06, "mfish", "Langostinos");mf06.addList();
const mf07 = new Ingredients(07, "mfish", "Mejillones");mf07.addList();
const mf08 = new Ingredients(08, "mfish", "Merluza");mf08.addList();
const mf09 = new Ingredients(09, "mfish", "Salmon");mf09.addList();
console.log(mfish);
//Cerdo
const mp01 = new Ingredients(01, "mpork", "Bondiola");mp01.addList();
const mp02 = new Ingredients(02, "mpork", "Carre");mp02.addList();
const mp03 = new Ingredients(03, "mpork", "Chuleta");mp03.addList();
const mp04 = new Ingredients(04, "mpork", "Lomo");mp04.addList();
const mp05 = new Ingredients(05, "mpork", "Nalga");mp05.addList();
const mp06 = new Ingredients(06, "mpork", "Pechito");mp06.addList();
const mp07 = new Ingredients(07, "mpork", "Ribs");mp07.addList();
console.log(mpork);

//Listado Legumbres
const l01 = new Ingredients(01, "legume", "Arvejas");l01.addList();
const l02 = new Ingredients(02, "legume", "Garbanzo");l02.addList();
const l03 = new Ingredients(03, "legume", "Lentejas");l03.addList();
const l04 = new Ingredients(04, "legume", "Maiz en crema");l04.addList();
const l05 = new Ingredients(05, "legume", "Maiz en grano");l05.addList();
const l06 = new Ingredients(06, "legume", "Porotos");l05.addList();
console.log(legume);

//Otros

const o01 = new Ingredients(01, "misc", "Aceite de girasol");o01.addList();
const o02 = new Ingredients(02, "misc", "Aceite de oliva");o02.addList();
const o03 = new Ingredients(03, "misc", "Aceitunas");o03.addList();
const o04 = new Ingredients(04, "misc", "Aceto Balsámico");o04.addList();
const o05 = new Ingredients(05, "misc", "Arroz");o05.addList();
const o06 = new Ingredients(06, "misc", "Bandeja Hongos");o05.addList();
const o07 = new Ingredients(07, "misc", "Harina");o06.addList();o07.addList();
const o08 = new Ingredients(08, "misc", "Hongo de pino");o08.addList();
const o09 = new Ingredients(09, "misc", "Huevo");o09.addList();
const o10 = new Ingredients(10, "misc", "Leche");o10.addList();
const o11 = new Ingredients(11, "misc", "Maizena");o11.addList();
const o12 = new Ingredients(12, "misc", "Panko");o12.addList();
const o13 = new Ingredients(13, "misc", "Pate");o13.addList();
const o14 = new Ingredients(14, "misc", "Portobellos");o14.addList();
const o15 = new Ingredients(15, "misc", "Ricotta");o15.addList();
const o16 = new Ingredients(16, "misc", "Salsa de Soja");o16.addList();
const o17 = new Ingredients(17, "misc", "Vinagre");o17.addList();
console.log(misc.join(","));

