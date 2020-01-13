# Linked List

(This definition and exercise has been taken from [Coding Interview Bootcamp - Algorithms and Data Structures](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure) by Stephen Grider).

## What is a Linked List?

A Linked List is a common data structure in programming. It is a ordered collection of data, where the collection contains a number of different nodes. Each node contains some amount of data, along with a reference to the next node. A collection of these nodes is called a Linked List, because they are quite literally linked in a chain. The list of nodes that form this chain have an order that is always maintained, they should never randomly change unless you explicitly tell them to.

![](Linked-List.jpeg)

A very simple Linked List code example:

```js
// node1 will be first in the chain 
// it's known as the 'Head' 
const node1 = {
  data: 123  
}

const node2 = {
  data: 456
}

// node3 will be last in the chain 
// it's known as the 'Tail' 
const node3 = {
  data: 789
}

// As well as data, each node should have a reference to the next node in the chain
node1.next = node2
node2.next = node3
node3.next = null // node3 is the Tail, so it doesn't have a next 
```

## Exercise 1

Create a proper Linked List implementation using JavaScript. 

The template files 
