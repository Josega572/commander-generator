console.log("Commander Picker v1");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


let josephDecks = [{id:1, commander: 'Lathril'}, {id:2, commander: 'Chishiro'}, {id: 3, commander: 'Kyler (J)'}, {id: 4, commander: 'Rocco'}, {id: 5, commander: 'Animar'}, {id: 6, commander: 'Rogues'}, {id: 7, commander: 'Abbadon'}]

let nickDecks = [{id:1, commander: 'Kyler (N)'}, {id:2, commander: 'Elenda'}, {id: 3, commander: 'Brago'}, {id: 4, commander: 'Equipment'}, {id: 5, commander: 'Rakdos'}, {id: 6, commander: 'Poison'}, {id: 7, commander: 'Athreos'}, {id: 8, commander: 'Neyali'}, {id: 9, 'Rakdos Burn'}]

let kelbyDecks = [{id: 1, commander: 'Milicent'}, {id: 2, commander: 'Gyome'}, {id: 3, commander: 'Necrons'}, {id: 4, commander: 'Kardur'}, {id: 5, commander: 'Isperia'}]

let kentDecks = [{id: 1, commander: 'Infect'}, {id: 2, commander: 'Artifacts'}, {id: 3, commander: 'Urza'}]

var allDecks = josephDecks.concat(nickDecks, kelbyDecks, kentDecks);

var getMeRandomDecks = function(sourceArray, neededElements) {
    var result = [];
    for (var i = 0; i < neededElements; i++) {
        var random = Math.floor(Math.random()*sourceArray.length)
        result.push(sourceArray[random]);
        sourceArray.splice(random, 1);
    }
    return result;
}

console.log('Joseph will play:', josephDecks[getRandomInt(josephDecks.length)].commander);
console.log('Nick will play:', nickDecks[getRandomInt(nickDecks.length)].commander);
console.log('Kelby will play:', kelbyDecks[getRandomInt(kelbyDecks.length)].commander);
console.log('Kent will play:', kentDecks[getRandomInt(kentDecks.length)].commander);
console.log('');
console.log('current total decks:', allDecks.length);
console.log('4 random decks from our whole horde:', getMeRandomDecks(allDecks, 4));