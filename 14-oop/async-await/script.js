async function abcd(){
let raw = await fetch(`https://randomuser.me/api/`)
let data = await raw.json();
console.log(data.results[0].name.first);
}

abcd();