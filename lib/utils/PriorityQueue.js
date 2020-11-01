class PriorityQueue {
  constructor() {
    this.queue = []
  }

  enqueue(value, priority) {
    this.queue.push({
      value,
      priority
    })

    this.queue = this.queue.sort((a, b) => a.priority - b.priority)
  }

  dequeue() {
    return this.queue.shift().value
  }

  isEmpty() {
    return this.queue.length === 0
  }
}

module.exports = PriorityQueue