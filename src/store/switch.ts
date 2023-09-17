import { makeAutoObservable } from "mobx"
import dataArr from './../data.json'
class Switch {

  chose = ['Таблица', 'Карточки']
  button = this.chose[0]
  data:any = []
  URL ='past API here'
  current = -1
  index = 0
  
  constructor(){
    makeAutoObservable(this)
  }

  setButton(e: string){
    if(e) this.button = e
  }

  mark(id: number){
    this.current = id
  }

  checkRead(event: any){
    event.preventDefault()
    if(event.code === 'Space') this.data.forEach((i: { id: number; isRead: boolean }) => {
      if(i.id === this.current){
        i.isRead = true
      } else {
      }
    })
  }

  setDate() {
    const start = new Date(2023, 0, 1);
    const end = new Date();
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  
    const options = {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                      spacer: 'none'
                    };
    return date.toLocaleString('ru-RU').replace(',', '')
  }

  featData(){
    this.data.push(dataArr[this.index % 6])
    this.data[this.index].date = this.setDate()
    this.data[this.index].id = this.index
    this.index++
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Switch()