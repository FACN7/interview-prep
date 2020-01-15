function deleteLastOccurrence(linkedList, key) {
  //write your code here, don't forget to handle all edge cases...
  let lastOccurenceIndex = null;
  linkedList.forEach((node, index) => {
    if (node.data === key) {
      lastOccurenceIndex = index
    }
  })

  if (lastOccurenceIndex !== null) {
    linkedList.removeAt(lastOccurenceIndex)
  }

  return linkedList
}

module.exports = { deleteLastOccurrence }