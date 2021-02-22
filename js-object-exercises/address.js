const address = {
    street: 'Beehive Pl',
    location: 'Maryland',
    zipCode: 21030,
};

function showAddress(address) {
    let completeAddress = '';
    for(let key in address) {
        completeAddress += `${address[key]} `;
    }
    console.log(completeAddress);
}

showAddress(address);