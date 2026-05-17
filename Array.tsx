class DynamicArray {
    private arr: number[];
    private count: number;

    constructor(capacity: number = 5) {
        this.arr = new Array(capacity);
        this.count = 0;
    }

    // Print items
    print(): void {
        for (let i = 0; i < this.count; i++) {
            console.log(this.arr[i]);
        }
    }

    // Find index
    findIndex(item: number): number {
        for (let i = 0; i < this.count; i++) {
            if (this.arr[i] === item) {
                return i;
            }
        }
        return -1;
    }

    // Insert item
    insert(item: number): void {
        if (this.count === this.arr.length) {
            const newArr = new Array(this.arr.length * 2);

            for (let i = 0; i < this.count; i++) {
                newArr[i] = this.arr[i];
            }

            this.arr = newArr;
        }

        this.arr[this.count] = item;
        this.count++;
    }

    // Remove at index
    removeAt(index: number): void {
        if (index < 0 || index >= this.count) {
            console.log("Invalid index");
            return;
        }

        for (let i = index; i < this.count - 1; i++) {
            this.arr[i] = this.arr[i + 1];
        }

        this.count--;
    }
}