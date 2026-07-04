fetch("https://randomuser.me/api/")
.then(function(noReadableData){
 return noReadableData.json();
})

.then(function(asliData){
    console.log(asliData.results[0].name);
});