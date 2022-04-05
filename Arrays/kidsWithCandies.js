// problem 1431

// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

// O(N) O(1)
var kidsWithCandies = function (candies, extraCandies) {

    let max = Math.max(...candies)

    for (let i = 0; i < candies.length; i++) {

        candies[i] + extraCandies >= max ? candies[i] = true : candies[i] = false;

    }
    return candies;
};



// O(N) O(N)
var kidsWithCandies = function (candies, extraCandies) {

    let result = [];

    let maxCandies = Math.max(...candies)

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= maxCandies) {
            result[i] = true;
        } else {
            result[i] = false;
        }

    }
    return result;
}