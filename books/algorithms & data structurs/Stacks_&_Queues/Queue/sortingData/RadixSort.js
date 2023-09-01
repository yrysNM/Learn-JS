const Queue = require("../Queue");

const distribute = (nums, queues, n, digit) => {
    for (let i = 0; i < n; i++) {
        if (digit == 1) {
            queues[nums[i] % 10].enqueue(nums[i]);
        } else {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}

const collect = (queues, nums) => {
    let i = 0;
    for (let digit = 0; digit < 10; digit++) {
        while (!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }
}


function dispArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] + " ");
    }
}

let queues = [];
for (let i = 0; i < 10; i++) {
    queues[i] = new Queue();
}

let nums = [];
for (let i = 0; i < 10; i++) {
    nums[i] = Math.floor((Math.random() * 101) | 0);
}

console.log("Before radix dort: ");
dispArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log("\n\nAfter radix sort: ");
dispArray(nums);