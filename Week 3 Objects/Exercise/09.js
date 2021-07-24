function createSortedList(input) {

    let arr = [];

    return {
        add(num) {
            arr.push(num);
            this.size++;
            arr.sort((a, b) => a - b);

        },
        remove(index) {
            if (index < 0 || index >= arr.length) {
                throw new RangeError('Index out of bounds');
            }
            this.size--;
            arr.splice(index, 1);
        },

        get(index) {
            if (index < 0 || index >= arr.length) {
                throw new RangeError('Index out of bounds');
            }
            return arr[index];
        },
        size: 0
    }
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));