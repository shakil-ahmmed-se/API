const normalPerson = {
    firstName : 'shakil',
    lastName : 'Ahmmed',
    salary : 15000,
    getFullName : function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill : function(amount, tips, tax){
        console.log(this);

        this.salary  = this.salary -amount - tips- tax;
        return this.salary;
    }
}

const heroPerson ={
    firstName : 'sinthia',
    lastName : 'akter',
    salary : 25000
}

const frinedlyPerson = {
    firstName : 'tamal',
    lastName : 'islam',
    salary :18000
}

normalPerson.chargeBill();
const heroBill = normalPerson.chargeBill.bind(heroPerson);
heroBill(2000);
console.log(heroPerson.salary);

const frinedlyChargeBill = normalPerson.chargeBill.bind(frinedlyPerson);
frinedlyChargeBill(1000);

normalPerson.chargeBill.call(heroPerson, 900);
console.log(heroPerson.salary);

normalPerson.chargeBill.call(frinedlyPerson, 5000, 500, 50);
console.log(frinedlyPerson.salary);


normalPerson.chargeBill.apply(heroPerson, [3000, 500, 50]);
console.log(heroPerson.salary);