//제너릭 클래스 ( 큐 방식으로 동작하는 클래스)
//큐 : 선형 자료구조, FIFO ( first - in - first - out)
var GenericQueue = /** @class */ (function () {
    function GenericQueue() {
        this.items = [];
    }
    //enqueue메서드 ( 큐를 데이터에 추가)
    GenericQueue.prototype.enqueue = function (item) {
        this.items.push(item);
    };
    //dequeue메서드 ( 큐의 맨처음 데이터를 꺼낸다)
    GenericQueue.prototype.dequeue = function () {
        return this.items.shift();
    };
    //peek 메서드 ( 큐의 맨처음 데이터를 확인)
    GenericQueue.prototype.peek = function () {
        return this.items[0];
    };
    //size메서드 ( 현재 큐의 사이즈를 변환)
    GenericQueue.prototype.size = function () {
        return this.items.length;
    };
    return GenericQueue;
}());
var stringQ = new GenericQueue();
stringQ.enqueue("hello");
console.log(stringQ.peek());
stringQ.dequeue();
stringQ.enqueue("typescript");
console.log(stringQ.size());
console.log(stringQ.peek());
var numberQ = new GenericQueue();
numberQ.enqueue([10]);
numberQ.enqueue([20]);
console.log(numberQ);
console.log(numberQ);
console.log(numberQ.size());
console.log(numberQ.peek());
