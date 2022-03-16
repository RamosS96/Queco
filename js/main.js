let ingredientsList = [];
let recipesList = [];
let newIngredientList = [];

const cakes = [];
const meals = [];
const salads = [];
const dips = [];

const fruits = [];
const vegetables = [];
const mchicken = [];
const mcow = [];
const mfish = [];
const mpork = [];
const legume = [];
const misc = [];

const fruitsList = document.getElementById('ing-form-fruits');
const vegetablesList = document.getElementById('ing-form-vegetables');
const mealcowList = document.getElementById('ing-form-mealcow');
const mealchickenList = document.getElementById('ing-form-mealchicken');
const mealfishList = document.getElementById('ing-form-mealfish');
const mealporkList = document.getElementById('ing-form-mealpork');
const legumeList = document.getElementById('ing-form-legume');
const miscList = document.getElementById('ing-form-misc');


const ingredients = [];


fetch('./js/ingredients.json')
    .then(resultado => resultado.json())
    .then(ingredients => {
        fruits.push(...ingredients.ingredients.fruits);
        vegetables.push(...ingredients.ingredients.vegetables);
        mchicken.push(...ingredients.ingredients.mchicken);
        mcow.push(...ingredients.ingredients.mcow);
        mfish.push(...ingredients.ingredients.mfish);
        mpork.push(...ingredients.ingredients.mpork);
        legume.push(...ingredients.ingredients.legume);
        misc.push(...ingredients.ingredients.misc);
        function addToList(id) {

            ingredientsList.push(id);
            refreshIngredients();
            console.log(ingredientsList);
        };
        function generateLists(array, group) {
            group.innerHTML = '';
            array.forEach(id => {
                const div = document.createElement('button');
                div.value = id.id;
                div.id = id.id;
                div.innerText = id.desc;
                div.classList = '';
                group.append(div);
                let ids = { id: id.id, desc: id.desc };
                let btns = document.getElementById(ids.id);
                btns.onclick = () => { addToList(ids);
                    refreshIngredients(); }
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
        function refreshIngredients() {
            ingredientsList = [...new Set(ingredientsList)]
        }
        
        
        
        
        //---------------------------------------------Modal y selecciones----------------------------------
        const modalOpenBtn = document.getElementById('btn-open-modal');
        
        
        function reduceItem(id) {
            let ingredientToReduce = ingredientsList.find(el => el.id == id.id);
            let index = newIngredientList.indexOf(ingredientToReduce)
            newIngredientList.splice(index, 1);
        
            Swal.update({
        
                html: 'hola'
            });
        
        }
        
        
        console.log(newIngredientList);
        ingredientsList.forEach(id => {                               
            newIngredientList.push(`<button class="refresh-swal" id="${id.desc}">${id.desc} </button>`);
        });
        const ingredientsInModal = [...new Set(newIngredientList)];
        ingredientsInModal.forEach(id =>{
            let btnReduce = document.getElementById(id.desc);
            btnReduce.onclick = () => {
                reduceItem(id.id);
            }

        })
        modalOpenBtn.onclick = () => {
            
            
            Swal.fire({
                template: '#my-template',
                html: `${ingredientsInModal.join('')}`
            });
        }

    })





//----------------------------------- Busqueda de recetas y storage seleccion -----------------------


//Prueba fetch
// const cheesecake = "cheesecake";
// fetch(`./pages/recipes/cakes/${cheesecake}.txt`)
// .then(response => response.text())
// .then(text => console.log(text))