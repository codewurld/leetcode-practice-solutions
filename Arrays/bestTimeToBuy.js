// solution 121 - best time to buy and sell stock

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    let maxProfit = 0;
    let currentMaxPrice = prices[0];

    let dayToBuyStock = Math.min(...prices);

    if (dayToBuyStock > currentMaxPrice) {
        return maxProfit;
    }

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] === dayToBuyStock) {
            currentMaxPrice = Math.max(prices[i], ...prices.slice(i + 1));
            maxProfit = currentMaxPrice - prices[i];
        }

    }
    return maxProfit;
};