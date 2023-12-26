var LinkedList = require('../basic-data-structure/LinkdedList').LinkedList
let a  = new LinkedList()
a.append(1).append(2).append(4)
let b = new LinkedList()
b.append(1).append(3).append(4)
// a.toString()
// b.toString()

function mergeLinkedList(head1 , head2) {
  if (!head1) {
    return head2
  }
  if (!head2) {
    return head1
  }
  if (head2.value > head1.value) {
    head1.next = mergeLinkedList(head1.next, head2)
    return head1
  } else {
    head2.next = mergeLinkedList(head1, head2.next)
    return head2
  }
}

mergeLinkedList(a.head, b.head)
a.toString()
b.toString()