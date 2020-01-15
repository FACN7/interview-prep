const { deleteLastOccurrence } = require('./index')
const { LinkedList } = require('./linkedlist')

describe('deleteLastOccurrence', () => {
  it('should remove the last occurrence, for a single occurrence', () => {
    const linkedList = new LinkedList([1, 2, 3])
    const valueToRemove = 1 
    const updatedLinkedList = deleteLastOccurrence(linkedList, valueToRemove)

    expect(updatedLinkedList).toEqual(new LinkedList([2, 3]))
  })

  it('should remove the last occurrence, for multiple occurrences', () => {
    const linkedList = new LinkedList([1, 2, 3, 2, 4])
    const valueToRemove = 2 
    const updatedLinkedList = deleteLastOccurrence(linkedList, valueToRemove)

    expect(updatedLinkedList).toEqual(new LinkedList([1, 2, 3, 4]))
  })

  it('should return the original LL unchanged if value does not exist inside the LL', () => {
    const linkedList = new LinkedList([1, 2, 3])
    const valueToRemove = 5
    const updatedLinkedList = deleteLastOccurrence(linkedList, valueToRemove)

    expect(updatedLinkedList).toEqual(new LinkedList([1, 2, 3]))
  })

  it('should return the original LL unchanged if it is empty', () => {
    const linkedList = new LinkedList([])
    const valueToRemove = 5
    const updatedLinkedList = deleteLastOccurrence(linkedList, valueToRemove)

    expect(updatedLinkedList).toEqual(new LinkedList([]))
  })
})