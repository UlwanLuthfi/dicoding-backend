// Membuat Object
const character = {
  name: "Suzume Iwato",
  anime: "Suzume no Tojimari",
  age: 16,
  "hair color": "Black",
};

// Memanggil Object
console.log(
  `Berkisah tentang seorang gadis desa bernama ${character.name} yang terikat dengan sebuah peristiwa besar misterius dan semua itu berawal dari sebuah "pintu".`
);

// Memanggil Object
character["hair color"] = "Hitam";

// Memanggil Object
console.log(
  `Rambut ${character.name} berwarna ${character["hair color"]} yang dikuncir kuda. aduh cakep banget anjing cewe yang rambutnya dikuncir kuda`
);

// Menghapus Object
delete character.age;

console.log(character);
