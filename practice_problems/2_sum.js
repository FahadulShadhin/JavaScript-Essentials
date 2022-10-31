const nums = [2, 7, 11, 15];
const target = 22;
// const target = -222;

const twoSum = function (nums, target) {
    const hmap = new Map();
    const ans = [];

    for(let i in nums) {
        if (!hmap.has(target - nums[i])) {
            hmap.set(nums[i], i);
        }
        else {
            hmap.set((nums[i]), i);

            ans.push(parseInt(hmap.get(target - nums[i])));
            ans.push(parseInt(hmap.get(nums[i])));
        }
    }
    // console.log(hmap)
    return ans;
};

console.log(twoSum(nums, target));
