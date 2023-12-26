// 链表的节点
class Node {
  value = null
  next = null
  pre = null
  constructor(value, pre = null) {
    this.value = value
    this.pre = pre
  }
  addNextNode(nodeValue) {
    if (this.next) {
      throw new Error('该节点已有next节点')
    }
    this.next = new Node(nodeValue, this)
    return this.next
  }

  addNode(nodeValue) {
    const endNode = this.getEndNode()
    let newend = endNode.addNextNode(nodeValue)
    newend.pre = endNode
    return newend
  }


  getEndNode() {
    if (this.next) {
      return this.next.getEndNode()
    }
    return this
  }

  getStartNode() {
    if (this.pre) {
      return this.pre.getStartNode()
    }
    return this
  }
  printAllNodeValue() {
    let node = this.getStartNode()
    // console.log(startNode.value)
    while(node.next) {
      console.log(node.value + ',')
      node = node.next
    }
    console.log(node.value)
  }
}

class LinkedList {
  head = null
  tail = null
  prepend(value) {
    const newNode = new Node(value)
    this.head = newNode
    if (!this.tail) {
      this.tail = newNode
    }
    return this
  }
  append(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode

      return this
    }
    newNode.pre = this.tail
    this.tail.next = newNode
    this.tail = newNode
    return this
  }
  toString() {
    const nodes = []
    let cur = this.head
    while(cur) {
      nodes.push(cur.value)
      cur = cur.next
    }
    console.log(nodes.toString())
    return nodes.toString()
  }
}

exports.LinkedList = LinkedList