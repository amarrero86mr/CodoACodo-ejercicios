function createPerson (name, lastname) {
    let _name = name;
    let _lastname = lastname;
    return {
        name: function() { return _name; },
        lastname: function() { return _lastname; },
        nameAndLastname: function() { return `${_name} ${_lastname}`; }
    };
};

const agusto = new createPerson ('agusto', 'herrero');

console.log(agusto._lastname); // devuelve: undefined
console.log(agusto.nameAndLastname()); // devuelve: agusto herrero