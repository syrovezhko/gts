import { makeAutoObservable } from "mobx"

class Switch {

  chose = ['Таблица', 'Карточки']
  button = this.chose[0]
  
  constructor(){
    makeAutoObservable(this)
  }

  setButton(e: string){
    this.button = e
    console.log(this.button)
  }
}

export default new Switch( )