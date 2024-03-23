const calorie_app= require("express")();
function calculate_calorie(weight,height){
    return 100;
}
calorie_app.listen(4000,()=>console.log(`it's alive on`));
calorie_app.get("/getcalorie",function(reques,recieve){
    recieve.send("hy");
})