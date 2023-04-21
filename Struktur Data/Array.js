let myArray = ["string", 1, 2.5, true, false];
console.log(myArray[0]);
console.log(myArray[10]);

// Menambahkan data baru diakhir array
myArray.push("Baru");
console.log(myArray);

// Menghapus data diakhir array
myArray.pop();
console.log(myArray);

// Menghapus data diawal array
myArray.shift();
console.log(myArray);

// Menambahkan data baru diawal array
myArray.unshift("data baru");
console.log(myArray);

// Menghapus sesuai index
delete myArray[1];
console.log(myArray);

myArray.splice(0, 5);
console.log(myArray);


