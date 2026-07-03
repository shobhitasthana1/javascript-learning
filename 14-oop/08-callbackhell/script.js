function abcd(fn){
fn(function(fn3){
    console.log("fn2")
    fn3(function(fn5){
        console.log("fn4")
        fn5();
    })
});
}

abcd(function(fn2){
console.log("fn")
fn2(function(fn4){
    console.log("fn3")
    fn4(function(){
        console.log("fn5")
    });
});
});