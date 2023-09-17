import { makeAutoObservable } from "mobx"
import data from './../data.json'
class Switch {

  chose = ['Таблица', 'Карточки']
  button = this.chose[0]
  data = data
  URL ='past API here'
  current = 0
  
  constructor(){
    makeAutoObservable(this)
  }

  setButton(e: string){
    if(e) this.button = e
    console.log(this.button)
  }

  // TODO: для прода замнить data в 9 строке на пустой массив
  fetchData(){
    fetch(this.URL )
      .then(response => response.json())
      .then(json => {
        this.data = [...json]
      })
  }

  mark(id: number){
    this.current = id
  }

  checkRead(event: any){
    event.preventDefault()
    if(event.code === 'Space') this.data.forEach(i => {
      if(i.id === this.current){
        i.isRead = true
      } else {
      }
    })
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Switch()