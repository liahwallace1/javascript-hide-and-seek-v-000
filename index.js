function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('ul.ranked-list')
  for (let i = 0, l = ranks.length; i < l; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
}

function deepestChild() {
  let currentNode = document.getElementById('grand-node')
  let nextNode = currentNode.children[0]

  while (nextNode) {
    currentNode = nextNode
    nextNode = currentNode.children[0]
  }
  return currentNode
}
