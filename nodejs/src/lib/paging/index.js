// class paging
// param :
//        - count
//        - pagenum
//        - end
// return (object)
class Paging {
  constructor (data) {
    if (data === undefined) {
      return new TypeError()
    }
    const { count, pagenum, end } = data
    this.count = count
    this.pagenum = pagenum
    this.end = end
    this.firstpageIstrue = false
    this.lastpageIstrue = false
    this.detail = []
  }

  get countPage () {
    return Math.ceil(this.count / this.end)
  }

  get prevPage () {
    let prev = this.pagenum - 1
    if (prev < 1) prev = 0
    return prev
  }

  get nextPage () {
    let next = this.pagenum + 1
    if (next > this.countPage) next = 0
    return next
  }

  get pagination () {
    let from = 1
    let to = this.countPage
    const toPage = this.pagenum - 2

    if (toPage > 0) from = toPage

    if (this.countPage >= 5) {
      if (this.countPage > 0) {
        to = 5 + toPage
        if (to > this.countPage) to = this.countPage
      } else {
        to = 5
      }
    }

    if (this.countPage <= 1) {
      this.detail = []
    } else {
      for (let i = from; i <= to; i++) {
        this.detail.push(i)
      }
      if (from !== 1) this.firstpageIstrue = true
      if (to !== this.countPage) this.lastpageIstrue = true
    }

    return {
      count_item: this.count,
      countpage: this.countPage,
      first_page: this.firstpageIstrue,
      last_page: this.lastpageIstrue,
      prev: this.prevPage,
      current: this.pagenum,
      next: this.nextPage,
      detail: JSON.stringify(this.detail)
    }
  }
}

export default Paging
