// Factory function
function addressFactory(street, location, zipCode) {
    return {
        street,
        location,
        zipCode,
    };
}

let address = addressFactory('Beehive Pl', 'Maryland', 21030);
console.log(address);
console.log(address.constructor);

//Constructor function
function AddressFactory(street, location, zipCode) {
    this.street = street;
    this.location = location;
    this.zipCode = zipCode;
}

address = new AddressFactory('Beehive Pl', 'Maryland', 21030);
console.log(address);
console.log(address.constructor);