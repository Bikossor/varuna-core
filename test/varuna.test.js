const Varuna = require("../dist/Varuna").Varuna;
const v = new Varuna("../");

v.addCheck(`Check if file "package.json" is present`, (e) => {
    var res = {};

    for (var element in e) {
        res[element] = e[element].includes("package.json");
    }

    return res;
});

v.addCheck(`Check if directory ".expo" is present`, (e) => {
    var res = {};

    for (var element in e) {
        res[element] = e[element].includes(".expo");
    }

    return res;
});

v.run();
console.log(v.getResult());