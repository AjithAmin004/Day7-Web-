let obj = { }
console.log(obj);

let objajith = {
    "Name":"Ajith",
     "Age":22,
     phonenumber : 7259400268,
     LName : "Amin"
};
console.log(objajith);


let capAmerica = {
    name:"Captain America",
    age:87,
    friends:["Bucky","Tony","Natasha","Falcon"],
    address:{
        city:"Kundapura",
        State:"Karnataka"
    },
    sayHi:function(){
        console.log("Captain America Say Hi to Ajith");
    }
}
console.log(capAmerica);

//Accessing in objects

console.log(capAmerica.name);
console.log(capAmerica.age);
console.log(capAmerica.friends);
console.log(capAmerica.friends[0]);
console.log(capAmerica.address);
console.log(capAmerica.address.city);
console.log(capAmerica.sayHi());
capAmerica.sayHi();


//adding the new key or deleting the key
capAmerica.movie = "Avenger";
console.log(capAmerica.movie);

delete capAmerica.movie;
console.log(capAmerica.movie);