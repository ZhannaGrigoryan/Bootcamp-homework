let d = '[{"price":"230 դր.","name":"Բուլկի չամիչով «SAS Sweet» 1 հատ","src":"https://www.sas.am/upload/Sh/imageCache/120/904/904050913424969.jpg.webp"},{"price":"230 դր.","name":"Բուլկի չամիչով «SAS Sweet» 1 հատ","src":"https://www.sas.am/upload/Sh/imageCache/120/904/904050913424969.jpg.webp"},{"price":"280 դր.","name":"Բուլկի կակաչի սերմերով «SAS Sweet»  1 հատ","src":"https://www.sas.am/upload/Sh/imageCache/219/377/3773392979279462.jpg.webp"},{"price":"160 դր.","name":"Բուլկի կակաչի սերմերով «SAS Sweet» 1 հատ","src":"https://www.sas.am/upload/Sh/imageCache/296/372/3725151641178970.jpg.webp"},{"price":"320 դր.","name":"Գալետ «SAS Product» ","src":"https://www.sas.am/upload/Sh/imageCache/296/372/3725151641178970.jpg.webp"},{"price":"370 դր.","name":"Գալետ «SAS Product»","src":"https://www.sas.am/upload/Sh/imageCache/353/356/356156953955348.png"},{"price":"680 դր.","name":"Բուլկի կրեմով «SAS Sweet» 1 հատ","src":"https://www.sas.am/upload/Sh/imageCache/213/469/4699922530753223.jpg.webp"},{"price":"570 դր.","name":"Բուլկի կրեմով «SAS Sweet» 1 հատ","src":"https://www.sas.am/upload/Sh/imageCache/345/536/5364863501981357.jpg.webp"},{"price":"570 դր.","name":"Խաչապուրի պանրով «Sas Sweet» փոքր","src":"https://www.sas.am/upload/Sh/imageCache/235/624/624260666230390.png"},{"price":"570 դր.","name":"Խաչապուրի պանրով «Sas Sweet» փոքր","src":"https://www.sas.am/upload/Sh/imageCache/303/593/5933993784175770.png"},{"price":"450 դր.","name":"Խաչապուրի պանրով «Sas Sweet»","src":"https://www.sas.am/upload/Sh/imageCache/388/259/2591801242075491.jpg.webp"},{"price":"570 դր.","name":"Խաչապուրի պանրով «Sas Sweet»","src":"https://www.sas.am/upload/Sh/imageCache/136/833/8334374253074056.png"},{"price":"230 դր.","name":"Թխվածք դոնաթ «Yum-Yum»","src":"https://www.sas.am/upload/Sh/imageCache/232/020/0203901611239535.jpg.webp"},{"price":"230 դր.","name":"Թխվածք դոնաթ «Yum-Yum»","src":"https://www.sas.am/upload/Sh/imageCache/245/810/810294427933425.png"},{"price":"280 դր.","name":"Կարկանդակ պանրով  «Տիրոպիտա»","src":"https://www.sas.am/upload/Sh/imageCache/190/706/7068282354313095.png"},{"price":"160 դր.","name":"Կարկանդակ պանրով «Տիրոպիտա»","src":"https://www.sas.am/upload/Sh/imageCache/246/161/16136124938958.png"},{"price":"320 դր.","name":"Կարկանդակ պանրով և սպանախով  «Սպանակոպիտա»","src":"https://www.sas.am/upload/Sh/imageCache/312/876/8763573532989973.png"},{"price":"370 դր.","name":"Կարկանդակ պանրով և սպանախով «Սպանակոպիտա»","src":"https://www.sas.am/upload/Sh/imageCache/242/436/4360891572984775.jpg.webp"},{"price":"680 դր.","name":"Կարկանդակ ցլիկի մսով «Կրեատոպիտա»","src":"https://www.sas.am/upload/Sh/imageCache/291/128/1289862372775646.png"},{"price":"570 դր.","name":"Կարկանդակ ցլիկի մսով «Կրեատոպիտա»","src":"https://www.sas.am/upload/Sh/imageCache/345/658/6587833924672840.png"},{"price":"570 դր.","name":"Խաչապուրի քիմիոնով","src":"https://www.sas.am/upload/Sh/imageCache/225/961/9619861244538617.jpg.webp"},{"price":"570 դր.","name":"Խաչապուրի քիմիոնով","src":"https://www.sas.am/upload/Sh/imageCache/305/972/9722121684188501.jpg.webp"},{"price":"450 դր.","name":"Կարկանդակ «Կոտոպիտա»","src":"https://www.sas.am/upload/Sh/imageCache/402/414/4147413152464329.png"},{"price":"570 դր.","name":"Կարկանդակ «Կոտոպիտա»","src":"https://www.sas.am/upload/Sh/imageCache/360/173/1730421222533016.jpg.webp"},{"price":"320 դր.","name":"Գալետ «SAS Product» ","src":"https://www.sas.am/upload/Sh/imageCache/355/219/2190993335957844.jpg.webp"}]'
let data = JSON.parse(d)
let liked = document.querySelector('.liked')
let cart = document.querySelector('.cart')

let likedItems = []
let shoppingCart = []
let container = document.querySelector('.container')
let likedBasket = document.querySelector('.likedbasket')
let shoppingBasket = document.querySelector('.shoppingbasket')
let itemId = 0


data.forEach(element => {

let div1 = document.createElement('div')
div1.className = 'div'
div1.id = ++itemId
div1.addEventListener("mouseenter",(e)=>{
    e.target.style.border = "2px solid aqua"
})
div1.addEventListener("mouseleave",(e)=>{
    e.target.style.border = "1px solid black"
})

let likeButton = document.createElement('button')
 let likeIcon = document.createElement('i')
 likeButton.id = 'liking'
likeIcon.innerHTML = '<i class="fa-solid fa-heart"><i>'
likeButton.addEventListener('click',(event)=>{
   
 likeIcon.classList.toggle('choose')
if(likeIcon.classList.contains('choose')){
    createLikedItems(likeButton.parentElement)
}else{
    removeLikedItems(likeButton.parentElement)
}
    
})

likeButton.append(likeIcon)
let buyButton = document.createElement('button')
buyButton.classList.add('buy')
buyButton.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>'
buyButton.addEventListener('click',(e)=>{   
 shoppingCart.push(buyButton.parentElement)
  createShoppingCart(shoppingCart)   
})

let img1 = document.createElement('img')
img1.className = 'image'
img1.src = element.src
let name1 = document.createElement('p')
name1.className = 'name'
name1.innerText = element.name
let price1 = document.createElement('p')
price1.className = 'price'
price1.innerText = element.price
div1.append(img1,name1,price1,likeButton,buyButton)
container.append(div1)

});

liked.addEventListener('click',(event)=>{
    likedBasket.classList.toggle('show')   
   
})

 cart.addEventListener('click',(event)=>{
    shoppingBasket.classList.toggle('show')
    
 })   
        
 function createLikedItems(item){
  console.log(item,'gghjkmjb')
  let name = document.createElement('p')
  name.innerHTML = item.querySelector('.name').innerHTML
  let image = document.createElement('img')
  image.src = item.querySelector('.image').src
  let price = document.createElement('p')
  price.innerHTML = item.querySelector('.price').innerHTML
  let productDiv = document.createElement('div')
  productDiv.className = 'productdiv'
  productDiv.id = item.id
  productDiv.append(image,name,price)
  likedBasket.append(productDiv)
 }

 function removeLikedItems(item){
    console.log(item,'mom')
    likedBasket.removeChild(document.getElementById(item.id))
 }

function createShoppingCart(shoppingCart){
        let name
        let image
        let price
        let deleteButton
   for (let item of shoppingCart){
        name = document.createElement('p')
        name.innerHTML = item.querySelector('.name').innerHTML
        image = document.createElement('img')
        image.src = item.querySelector('.image').src
        price = document.createElement('p')
        deleteButton = document.createElement('button')
        deleteButton.className = 'delete'
        deleteButton.innerHTML = 'delete'
        deleteButton.addEventListener('click',(e)=>{
            deleteButton.parentElement.remove()
        //shoppingBasket.lastChild.remove(deleteButton.parentElement)
        })
        price.innerHTML = item.querySelector('.price').innerHTML
}
  if(name!== undefined){
    let productDiv = document.createElement('div')
    productDiv.className = 'productdiv'
     productDiv.append(image,name,price,deleteButton)
    shoppingBasket.append(productDiv)
    }
}

let products = document.querySelectorAll('.div')

let filterInput = document.getElementById('input')
filterInput.addEventListener('input',(e)=>{
    let filter = filterInput.value.toUpperCase()
    for(let item of products ){
        
        let content = item.querySelector('.name').innerText
        if(content.toUpperCase().includes(filter)){
            item.style.display = ''
        }else{
            item.style.display = 'none'
        }
    }
})

   
