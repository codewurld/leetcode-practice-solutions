/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    let maxProfit = 0;
    let currentMinBuyPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        const currentSellPrice = prices[i];
        const currentProfit = currentSellPrice - currentMinBuyPrice;
        maxProfit = Math.max(maxProfit, currentProfit);
        currentMinBuyPrice = Math.min(currentMinBuyPrice, prices[i])
    }
    return maxProfit;
};