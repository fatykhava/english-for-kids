export default class Randomazer {
  init(numb) {
    this.audioArr = [];

    for (let i = 0; i < numb; i += 1) {
      const audioIndex = (Math.floor(Math.random(0, 1) * 8));

      if (this.audioArr.indexOf(audioIndex) >= 0) {
        i -= 1;
      } else {
        this.audioArr.push(audioIndex);
      }
    }

    return this.audioArr;
  }
}
