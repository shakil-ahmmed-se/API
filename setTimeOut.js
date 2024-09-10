function doSomeThing(){
    console.log(33333);
}
console.log(22222);
setTimeout(doSomeThing,2000)
console.log(44444);
setTimeout(() => {
        console.log('lazy await');  
}, 5000);
console.log(55555);