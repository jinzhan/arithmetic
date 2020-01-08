/**
* @param {number} max 运算结果的最大值
*/
module.exports = function plus(max) {
  const firstNum = (Math.random() * max ) | 0 + 1;
  const secondNum = (Math.random() * (max - firstNum))  | 0 + 1;
  return `${firstNum} + ${secondNum} = `;
};
