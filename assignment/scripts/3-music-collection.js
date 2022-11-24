console.log('***** Music Collection *****')

let collection = [];

function addToCollection (title, artist, yearPublished) {
    let album = {
        title,
        artist,
        yearPublished,
    }
    collection.push(album);
    return album;
}

console.log(addToCollection ("Sainthood", "Tegan and Sara", 2009));

console.log(addToCollection ("Waterloo", "ABBA", 1974));
console.log(addToCollection ("Brothers", "The Black Keys", 2010));
console.log(addToCollection ("No Burden", "Lucy Dacus", 2016));
console.log(addToCollection ("Treats", "Sleigh Bells", 2010));
console.log(addToCollection ("Arrival", "ABBA", 1976));
console.log(addToCollection ("Heartthrob", "Tegan and Sara", 2013));

console.log(collection);

function showCollection (array){
    console.log(array.length-1);
    for (i in array){
        object = array[i]
        console.log(object.title + " by " + object.artist + ", published in " + object.yearPublished);
    }
}
showCollection(collection);