console.log('***** Music Collection *****')

//Required Questions

let collection = [];

function addToCollection (title, artist, yearPublished) {
    const album = {
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
    console.log('Collection length: ' + (array.length-1) + ' Albums');
    for (i in array){
        let object = array[i];
        console.log(object.title + " by " + object.artist + ", published in " + object.yearPublished);
    }
}

showCollection(collection);

function findByArtist(artist) {
    let results = [];
    for (let i=0; i<collection.length; i++){
        if (collection[i].artist === artist) {
            results.push(collection[i]);
        }
    }
    return results;
}    

console.log(findByArtist("ABBA"));
console.log(findByArtist("Tierra Whack"));

//Stretch Goals

function search (artist, year) {
    let results = [];
    for (let i=0; i<collection.length; i++){
        if (artist || year) {
            if (collection[i].artist === artist && collection[i].yearPublished === year){
                console.log("Match found!");
                results.push(collection[i]);
            } else {
                results = [];
            }
        } else {
            console.log("Empty input.");
            results = collection;
        }
    }
    return results;
}

//addToCollection ("", "Ray Charles", 1907);
addToCollection ("", "Ray Charles", 1957);

//console.log(search()); 
//console.log(search("Ray Charles")); 
//console.log(search("Ray Charles", 1957));




// collection = array
//album = object
//title = property (string)
//artist = property (string)
//yearPublished = property (numerical)
//trackList = array
//track = object 
//trackName = property (string)
//trackDuration = property (string)

let tracklist = [];

function addTracks (trackName, trackDuration) {
    tracklist.push({trackName,trackDuration});
}
 function updateCollection (tracklist) {
    let tracklist = [];
    for (let )
 }
