// scripts.js

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'Triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
console.log(dinosaurUpperCased);

var correctDinosaur = text.replace ('Velociraptor', [dinosaurUpperCased]);
console.log(correctDinosaur);

var halfText = correctDinosaur.substr(0, (correctDinosaur.length/2));
console.log(halfText);