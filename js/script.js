const person1 = {
    Fullname: "Mark Miller",
    mass : 78,
    height : 1.69,
    calcBMI : function(){
        return this.mass / (this.height ** 2)
    },
}

const person2 = {
    Fullname : "John Smith",
    mass : 192,
    height : 1.95,
    calcBMI : function(){
        return this.mass/(this.height ** 2)
    }
}

if(person1.calcBMI() > person2.calcBMI()){
    console.log(`${person1.Fullname}'s BMI (${person1.calcBMI()}) is higher than ${person2.Fullname}'s (${person2.calcBMI()})!`);
}
else{   
    console.log(`${person2.Fullname}'s BMI (${person2.calcBMI()}) is higher than ${person1.Fullname}'s (${person1.calcBMI()})!`);
}