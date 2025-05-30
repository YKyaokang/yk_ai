/**
 * 
 * @param {String} nums1   
 * @param {String} nums2 
 * @return {String} 
 */
function addLargeNumbers(nums1,nums2){

    let result = ''//存储结果
    let carry = 0//存储进位
    let i = nums1.length - 1; // 
    let j = nums2.length - 1;

    while(i>=0 || j>=0 || carry > 0){
      // 边界
      const digit1 = i>=0 ? parseInt(nums1[i]) : 0;
      const digit2 = j>=0 ? parseInt(nums2[j]) : 0;
      const sum = digit1 + digit2 + carry;
      result = (sum % 10) + result; // 存储结果
      carry = Math.floor(sum / 10); // 存储进位
      i--;
      j--;
    }
    return result;

}