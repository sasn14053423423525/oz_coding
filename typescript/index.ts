//제너릭 클래스 ( 큐 방식으로 동작하는 클래스)
//큐 : 선형 자료구조, FIFO ( first - in - first - out)

class GenericQueue<T>{
    private items:T[]=[];

    //enqueue메서드 ( 큐를 데이터에 추가)
    enqueue(item:T):void{
        this.items.push(item);
    }
    //dequeue메서드 ( 큐의 맨처음 데이터를 꺼낸다)
    dequeue():T|undefined{
        return this.items.shift();
    }
    //peek 메서드 ( 큐의 맨처음 데이터를 확인)
    peek():T | undefined {
        return this.items[0];
    }
    //size메서드 ( 현재 큐의 사이즈를 변환)
    size():number {
        return this.items.length;
    }
}
const stringQ = new GenericQueue<string[]>();
stringQ.enqueue(["hello"]);
console.log(stringQ.peek());
stringQ.dequeue();
stringQ.enqueue(["typescript"]);
console.log(stringQ.size());
console.log(stringQ.peek());


