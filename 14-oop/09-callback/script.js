function ShobhitSeDetailsLao(Address, cb){
  setTimeout(() => {
    cb("Delhi Uttam Nagar");
  }, 3000);
}
 ShobhitSeDetailsLao("India", function (Address) {
    console.log("Address is: " + Address);
 });