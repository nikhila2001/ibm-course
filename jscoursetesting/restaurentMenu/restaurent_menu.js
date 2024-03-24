const breakfastMenu = ["pancakes","eggs benedict","oatmeal","frittata"];
const mainCourseMenu = ["steak","pasta","burger","Salmon"];
const dessertMenu = ["Cake","Ice-cream","Pudding","Fruit Salad"];

const breakfastMenuItemsHTML = breakfastMenu.map((item,index) => `<p>Item ${index + 1}: ${item}</p>`).join("");
document.getElementById("breakFastMenuItems").innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = "";
mainCourseMenu.forEach((item,index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
})
document.getElementById('mainCourseItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;