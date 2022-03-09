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

function generateLists(array, group) {
    group.innerHTML = '';
    array.forEach(id => {
        const div = document.createElement('button');
        div.value = id.id;
        div.id = id.id;
        div.innerText = id.desc;
        div.classList = '';
        group.append(div);
    })
};

function addToList(id, group){
    let ingredientToAdd = group.find(el => el.id == id.id);
    ingredientsList.push(ingredientToAdd);
}

//---------------------------------------------Modal y selecciones----------------------------------
const modalOpenBtn = document.getElementById('btn-open-modal');
const formIng = document.getElementById('ing');

const asd = fruits.map(id => id.id);
console.log(fruits);
console.log(asd);

function reduceItem(id) {
    let ingredientToReduce = newIngredientList.find(el => el.id == id.id);
    let index = newIngredientList.indexOf(ingredientToReduce)
    newIngredientList.splice(index, 1);

    Swal.update({

        html: 'hola'
    });

}
const newIngredientList = [];
modalOpenBtn.onclick = () => {
    ingredientsList.forEach(id => {
        let item;
        item = id.desc;
        newIngredientList.push(`<button class="refresh-swal" onclick=reduceItem(${id.id})>${item}</button>`);
    });
    const ingredientsInModal = [...new Set(newIngredientList)];       

    Swal.fire({
        template: '#my-template',
        html: `${ingredientsInModal.join('')}`
    });
}






//----------------------------------- Busqueda de recetas y storage seleccion -----------------------


//Prueba fetch
// const cheesecake = "cheesecake";
// fetch(`./pages/recipes/cakes/${cheesecake}.txt`)
// .then(response => response.text())
// .then(text => console.log(text))