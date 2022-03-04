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
        div.classList = 'btn-sm rounded-circle';
        group.append(div);
        checkList(id.id, id.desc);
    })
};


//---------------------------------------------Modal y selecciones----------------------------------
const modalOpenBtn = document.getElementById('btn-open-modal');
const newModalContainer = document.getElementById('modal-container');

function checkList(id, desc) {
const divid = document.getElementById(id);
        
        divid.onclick=() => {
            ingredientsList.push({ id: id, desc: desc });
            console.log(ingredientsList);
            
        }}
    


function reduceItem(id) {
    let ingredientToReduce = ingredientsList.find(el => el.id == id);
    console.log(ingredientToReduce)
    let index = ingredientsList.indexOf(ingredientToReduce)
    ingredientsList.splice(index,1);
    
    
}

modalOpenBtn.onclick = () => {
        const newIngredientList = [];
        ingredientsList.forEach(id => {
            let item;
            item = id.desc;
            newIngredientList.push(`<button onclick=reduceItem(${id.id})>${item}</button>`);
        });

    Swal.fire({
        template: '#my-template',
        html: `'${newIngredientList}'`
      });
}






//----------------------------------- Busqueda de recetas y storage seleccion -----------------------


//Prueba fetch
// const cheesecake = "cheesecake";
// fetch(`./pages/recipes/cakes/${cheesecake}.txt`)
// .then(response => response.text())
// .then(text => console.log(text))