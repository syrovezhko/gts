import { makeAutoObservable } from "mobx"
import data from './../data.json'
class Switch {

  chose = ['Таблица', 'Карточки']
  button = this.chose[0]
  data = data
  
  constructor(){
    makeAutoObservable(this)
  }

  setButton(e: string){
    if(e) this.button = e
    console.log(this.button)
  }
// eslint-disable-next-line import/no-anonymous-default-export
export default new Switch()