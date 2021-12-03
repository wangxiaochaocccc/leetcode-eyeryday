// 2073
// 这道题要清楚的理解题意，tickets[k] == 0才算结束



/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let res = 0
    while(tickets[k] > 0){
        for(let i = 0; i<tickets.length; i++){
            if(tickets[i]>0){
                tickets[i]--
                res++
            }
            if(tickets[k] == 0){
                break
            }
        }
    }
    return res
};  