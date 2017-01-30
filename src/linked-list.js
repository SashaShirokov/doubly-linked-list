const Node = require('./node');

class LinkedList {
    constructor() {
      this._head = null;
      this._tail = null;
      this.length = 0;
    }

    append(data) {
      if(this._tail === null) {
        this._tail = new Node(data);
        this._head = this._tail;
        this.length ++;
      } else {
        var temp = new Node(data);
        temp.prev = this._tail;
        this._tail.next = temp;
        this._tail = temp;
        this.length ++;
      }
    }

    head() {
      if(this._head === null) {
        return null;
      }
      return this._head.data;
    }

    tail() {
      if(this._tail === null) {
        return null;
      }
      return this._tail.data;
    }

    at(index) {
      if(index >= this.length) {
        console.log("out of range");
      }
      var current = this._head;
      for(var i = 0; i < index; i ++) {
        current = current.next;
      }
      return current.data;
    }

    insertAt(index, data) {
      var node = new Node(data);
      if(index === 0) {
        node.next = this._head;
        this._head = node;
      } else {
        var current = this._head;
        for(var i = 1; i < index; i ++) {
        current = current.next;
      }
        var prev = current;
        var temp = prev;
        node.next = temp;
        prev.next = node;
      }
      this.length ++;
    }

    isEmpty() {
      if(this._head === null) {
        return true;
      } else {
        return false;
      }
    }

    clear() {
      this._head = null;
      this._tail = null;
      this.length = 0;
    }

    deleteAt(index) {
      if(index === 0) {
        this._head = this._head.next;
      } else {
        var current = this._head;
        for(var i = 1; i < index; i ++) {
        current = current.next;
      }
        var prev = current;
        prev.next = prev.next.next;
      }
      this.length --;
    }

    reverse() {
      var current = this._head;
      while(current != null) {
        var next = current.next;
        current.next = current.prev;
        current = next;
      }
      var temp = this._head;
      this._head = this._tail;
      this._tail = temp;
    }

    indexOf(data) {
      var current = this._head;
      var index = 0;
      while(current !== null) {
        if(current.data === data) {
          return index;;
        }
        current = current.next;
        index ++;
      }
      return -1;
    }
}

module.exports = LinkedList;
