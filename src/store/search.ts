import { makeAutoObservable } from "mobx"

class Search {

  value = ''
  
  constructor(){
    makeAutoObservable(this)
  }

  setValue(e: string){
    this.value = e
    console.log(this.value)
  }
}

export default new Search()