export default class ShowTranslate {
  initTranslate(e) {
    this.event = e;
    const itemLi = this.event.target.closest('li');
    const wrTitles = this.event.target.closest('.list__wr-title');
    const titleEng = wrTitles.firstChild;
    const titleRu = titleEng.nextSibling;
    const btnTrans = this.event.target.closest('.btn-translate');

    itemLi.classList.add('rotate');
    titleEng.classList.add('hidden');
    btnTrans.classList.add('hidden');
    titleRu.classList.remove('hidden');

    itemLi.addEventListener('mouseleave', () => {
      itemLi.classList.remove('rotate');
      titleEng.classList.remove('hidden');
      btnTrans.classList.remove('hidden');
      titleRu.classList.add('hidden');
    });
  }
}
