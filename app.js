const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Nike",
        price: 199,
        colors: [
            {
                code: "ceff5d",
                img: "./images/nike1.png",
            },
            {
                code: "red",
                img: "./images/nike222.png",
            },
        ],
    },

    {
        id: 2,
        title: "Puma",
        price: 300,
        colors: [
            {
                code: "white",
                img: "./images/puma11.png",
            },
            {
                code: "black",
                img: "./images/puma22.png",
            },
        ],
    },

    {
        id: 3,
        title: "ADIDAS",
        price: 350,
        colors: [
            {
                code: "red",
                img: "./images/addidas1.png",
            },
            {
                code: "black",
                img: "./images/addidas22.png",
            },
        ],
    },

    {
        id: 4,
        title: "Lancer",
        price: 150,
        colors: [
            {

                code: "blue",
                img: "./images/Lancer1.png",
            },
            {
                code: "brown",
                img: "./images/Lancer2.png",
            },
        ],
    },

    {
        id: 5,
        title: "Woodland",
        price: 250,
        colors: [
            {
                code: "peru",
                img: "./images/woodland1.png",
            },
            {
                code: "olivedrab",
                img: "./images/woodland222.png",
            },
        ],
    },
];
let choosenProduct = products[0];


const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productprice")
const currentProductImg = document.querySelector(".productimg")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")





menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // change the slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;


        // change the coosen product
        choosenProduct = products[index]

        // change text of currenproduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;


        // fill color
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });

    });
});


currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});



currentProductSizes.forEach((size,index)=>{
size.addEventListener("click",()=>{

currentProductSizes.forEach((size)=>{
    size.style.backgroundColor= "white"
size.style.color="black"

});  


size.style.backgroundColor= "black"
size.style.color="white"
});
});


    // Bye button in web page 

const productButton=document.querySelector(".productButton");
const signIn=document.querySelector(".SignIn");
const closeSignPg=document.querySelector(".closeSignPg");


 productButton.addEventListener("click",()=>{
signIn.style.display="flex";
});

closeSignPg.addEventListener("click",() =>{
signIn.style.display="none";
});


// Continue button in sign in form

const continueButton=document.querySelector(".continueButton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");


 continueButton.addEventListener("click",()=>{
payment.style.display="flex";
     signIn.style.display="none";
   

});

close.addEventListener("click",() =>{
payment.style.display="none";
});


// Registration form button in sign in form
const ButtonReg=document.querySelector(".ButtonReg");
const Registration=document.querySelector(".Registration");


ButtonReg.addEventListener("click",()=>{
    Registration.style.display="flex";
         
 });


 const RegFormSignin=document.querySelector(".RegFormSignin");
 const Registration2=document.querySelector(".Registration");
 const signInn=document.querySelector(".SignIn");
 

 RegFormSignin.addEventListener("click",()=>{
    Registration2.style.display="none";
    signInn.style.display="flex";
    
         
 });



 const payButton=document.querySelector(".payButton");
 const paymente=document.querySelector(".payment");

 payButton.addEventListener("click",()=>{
    paymente.style.display="none";
    alert("Your Ordered is succesfully Registered");

});


  const Registration1=document.querySelector(".Registration");
  const RegDoneButton=document.querySelector(".RegDoneButton");


  RegDoneButton.addEventListener("click",()=>{
    Registration1.style.display="none";
    alert("Registration Successfully");

  });


