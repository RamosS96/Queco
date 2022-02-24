let ingredientsList = [];

const fruits = [];
const vegetables = [];
const mchicken = [];
const mcow = [];
const mfish = [];
const mpork = [];
const legume = [];
const misc = [];
fetch('./js/ingredients.json')
    .then(response => response.json())
    .then(data => {
        fruits.push(...data.ingredients.fruits);
        vegetables.push(...data.ingredients.vegetables);
        mchicken.push(...data.ingredients.mchicken);
        mcow.push(...data.ingredients.mcow);
        mfish.push(...data.ingredients.mfish);
        mpork.push(...data.ingredients.mpork);
        legume.push(...data.ingredients.legume);
        misc.push(...data.ingredients.misc);
        generateLists(fruits, fruitsList);
        generateLists(vegetables, vegetablesList);
        generateLists(mcow, mealcowList);
        generateLists(mchicken, mealchickenList);
        generateLists(mfish, mealfishList);
        generateLists(mpork, mealporkList);
        generateLists(legume, legumeList);
        generateLists(misc, miscList);
    })

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
        checkList(id.id, id.desc);
    })
};


//---------------------------------------------Modal y selecciones----------------------------------
const modalOpenBtn = document.getElementById('btn-open-modal');
const modalCloseBtn = document.getElementById('btn-close-modal');
const newModal = document.getElementById('selected-ingredients');
const newModalContainer = document.getElementById('modal-container');

function checkList(id, desc) {
    do {
        const divid = document.getElementById(id);
        
        divid.onclick=() => {
            ingredientsList.push({ id: id, desc: desc });
            console.log(ingredientsList);
            
        }
    } while (ingredientsList.find(el => el.id == id) == undefined);
}
// function addToList(id, desc) {

//     divid.onclick = () => {
//         ingredientsList.push({ id: id, desc: desc });
//         console.log(ingredientsList);
//     }

// }


function generateModal() {
    ingredientsList.forEach((id) => {
        const list = document.createElement('button');
        list.id = id.id;
        list.setAttribute("onclick", `reduceItem("${id.id}")`)
        list.innerText = id.desc;
        list.className = 'rounded d-block'
        newModal.className = 'd-flex justify-content-center flex-wrap flex-column';
        newModal.appendChild(list);
    });
    console.log(ingredientsList);

}

function reduceItem(id) {
    let ingretientToReduce = ingredientsList.find(el => el.id == id);
    console.log(ingretientToReduce)
    let index = ingredientsList.indexOf(ingretientToReduce)
    ingredientsList.splice(index,1);
    newModal.innerHTML = '';
    generateModal();
}
modalOpenBtn.onclick = () => {
    newModalContainer.className = 'visible container modal-ingredient d-flex flex-column';
    modalOpenBtn.className = 'invisible';
    generateModal();
}

modalCloseBtn.onclick = () => {
    modalOpenBtn.className = 'visible btn-selected-ing';
    newModalContainer.className = 'invisible';
    newModal.innerHTML = '';
}

//----------------------------------- Busqueda de recetas y storage seleccion -----------------------


//Prueba fetch
// const cheesecake = "cheesecake";
// fetch(`./pages/recipes/cakes/${cheesecake}.txt`)
// .then(response => response.text())
// .then(text => console.log(text))