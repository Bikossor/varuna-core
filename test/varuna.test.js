const Varuna = require("../dist/Varuna");
const v = new Varuna("../");

v.addCheck("Test1", (e) => {
    var res = {};

    for (var element in e) {
        console.log(element);
        res[element] = e[element].includes("package.json");
    }

    return e;
});

v.run();
console.log(v.getResult());