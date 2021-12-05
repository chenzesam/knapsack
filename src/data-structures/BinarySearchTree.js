class Node {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null
  }

  insert (value) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
    } else {
      this._insert(this.root, newNode)
    }
  }
  _insert (node, newNode) {
    if (node.value > newNode.value) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this._insert(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this._insert(node.right, newNode)
      }
    }
  }

  inOrderTraverse (callback, node = this.root) {
    if (node) {
      this.inOrderTraverse(callback, node.left)
      callback(node)
      this.inOrderTraverse(callback, node.right)
    }
  }

  preOrderTraverse (callback, node = this.root) {
    if (node) {
      callback(node)
      this.preOrderTraverse(callback, node.left)
      this.preOrderTraverse(callback, node.right)
    }
  }

  postOrderTraverse (callback, node = this.root) {
    if (node) {
      this.postOrderTraverse(callback, node.left)
      this.postOrderTraverse(callback, node.right)
      callback(node)
    }
  }

  min (node = this.root) {
    if (node && node.left) {
      return this.min(node.left)
    }
    if (node && !node.left) {
      return node.value
    }
    return null
  }

  max (node = this.root) {
    if (node && node.right) {
      return this.max(node.right)
    }
    if (node && !node.right) {
      return node.value
    }
    return null
  }

  search (value, node = this.root) {
    if (!node) {
      return false
    }
    if (node.value > value) {
      return this.search(node.left, value)
    } else if (node.value < value) {
      return this.search(node.right, value)
    } else {
      return true
    }
  }

  // i don't know why not
  insertES6 (value, node) {
    if (!node) {
      node = this.root
    }
    if (!node) {
      const newNode = new Node(value)
      node = newNode
      console.log(node, this.root, newNode)
    } else {
      if (value < node.value) {
        this.insertES6(value, node.left)
      } else {
        this.insertES6(value, node.right)
      }
    }
  }

  remove (value) {
    this.root = this._remove(value, this.root)
  }
  _remove (value, node) {
    if (!node) {
      return null
    }
    if (node.value < value) {
      node.right = this._remove(value, node.right)
      return node
    } else if (node.value > value) {
      node.left = this._remove(value, node.left)
      return node
    } else {
      if (!node.right && !node.left) {
        node = null
        return node
      }
      if (!node.left) {
        node = node.right
        return node
      }
      if (!node.right) {
        node = node.left
        return node
      }
      const aux = this.findMinNode(node.right)
      node.value = aux.value
      node.right = this._remove(aux.value, node.right)
      return node
    }
  }
  findMinNode (node) {
    while (node && node.left !== null) {
      node = node.left
    }
    return node
  }
}

export default BinarySearchTree
