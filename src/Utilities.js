export function shuffle(array){
  let currentIndex = array.length;
  while (currentIndex !== 0){
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

export function search(name, array, target){
  for (let i = 0; i < array.length; i++){
    if (array[i]["name"].includes(name)){
      const card = JSON.parse(JSON.stringify(array[i]))
      target.push(card)
      array.splice(i, 1)
      return
    }
  }
}

//searchCard: ( {G, ctx}, name, deck ) => {
//  let array = G[deck]
//  for (let i = 0; i < array.length; i++){
//    if (array[i]["name"].includes(name)){
//      let card = array[i]
//
//      G.players[ctx["currentPlayer"]][deck].push(card)
//      array.splice(i, 1)
//      break
//    }
//  }
//},
