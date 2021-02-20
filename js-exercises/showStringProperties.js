function showProperties(object) {
    for(let prop in object) {
        if(typeof object[prop] === 'string')
            console.log(prop, object[prop]);
    }
}

const person = {
    name: 'Nate',
    age: 26,
    city: 'New York',
    zip: 21030
}
showProperties(person);