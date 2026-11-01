const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition,
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  let unit = String(str);

  if (addition !== undefined) {
    unit += Array(additionRepeatTimes).fill(String(addition)).join(additionSeparator);
  }

  return Array(repeatTimes).fill(unit).join(separator);
}

module.exports = {
  repeater
};
