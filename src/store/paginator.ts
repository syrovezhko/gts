import { makeAutoObservable } from "mobx"

class Paginator {
  first = 0
  rows = 12 

  constructor(){
    makeAutoObservable(this)
  }

  setFirst(e: number) {
    this.first = e
  }

  setRows(e: number){
    this.rows = e
  }
}

export default new Paginator()