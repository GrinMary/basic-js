/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    return this.crypt(message, key, 1);
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    return this.crypt(encryptedMessage, key, -1);
  }

  crypt(message, key, dir) {
    const A = 'A'.charCodeAt(0);
    const msg = message.toUpperCase();
    const k = key.toUpperCase();

    let result = '';
    let keyPos = 0;

    for (let i = 0; i < msg.length; i += 1) {
      const code = msg.charCodeAt(i);

      if (code >= A && code < A + 26) {
        const shift = k.charCodeAt(keyPos % k.length) - A;
        const offset = dir > 0
          ? (code - A + shift) % 26
          : (code - A - shift + 26) % 26;
        result += String.fromCharCode(A + offset);
        keyPos += 1;
      } else {
        result += msg[i];
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
