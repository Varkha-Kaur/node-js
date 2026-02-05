//call back functions
//call back functions are the functions which can be passed as an argument within other function
function orderFood(foodItem,callback){
    console.log(`Order is placed,${foodItem}`)
    console.log("Restaurant is preparing your food...")

    setTimeout(()=>{
        console.log(`${foodItem} has been delivered`)
    },3000)
    callback();// call back function
}

function confirmDelivery(){
    console.log("Consumer got the order,thankyou")
}

//orderFood("Pizza",confirmDelivery())
orderFood("Pizza",function(){
    console.log("ready")
})

function sendEmail(recipient){
    console.log(`sending the email to ${recipient}..`)
    setTimeout(()=>{
        console.log("email sent successfully")    
    },3000)
}

function emailnotification(){
    console.log("notification your mail has received")
}

sendEmail('pizza@gmail.com',emailnotification())
