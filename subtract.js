/**
* @param {number} max 运算结果的最大值
*/
module.exports = function subtract(max) {
  const firstNum = (Math.random() * max ) | 0 + 1;
  const secondNum = (Math.random() * firstNum)  | 0 + 1;
  return `${firstNum} - ${secondNum} = `;
};
