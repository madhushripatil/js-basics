let address1 = new AddressFactory('Beehive Pl', 'Maryland', 21030);
let address2 = new AddressFactory('Beehive Pl', 'Maryland', 21030);
let address3 = address1;
console.log(address1);

//Constructor function
function AddressFactory(street, location, zipCode) {
    this.street = street;
    this.location = location;
    this.zipCode = zipCode;
}

function areEqual(address1, address2) {
    for(let key in address1) {
        if(!(key in address2))
            return false;
        if(address1[key] !== address2[key])
            return false;
    }
    return true;
}

function areSame(address1, address2) {
    return address1 === address2;
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));