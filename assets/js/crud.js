'use strict';

// CRUD
// C : Create
// R : Read
// U : Update
// D : Delete

export default class CRUD {

  constructor(key){
    this.key = key;
  }

  createEntry(title, content, date, color){
    const data = this.readEntries();
    // generate random number from 0 to 10000
    const id = Math.round(Math.random() * 10000);
    data.unshift({id, title, content, date, color});
    // save data in the browser storage
    saveData(this.key, data);
  }
  
  readEntries(){
    // load data from the browser storage
    const data = loadData(this.key);
    return data != null? data :[];
  }
  
  updateEntry(id, newTitle, newContent, newDate, newColor){
    let data = this.readEntries();
    // update item property
    data.forEach(element => {
      if(element.id == id){
        element.title = newTitle;
        element.content = newContent;
        element.date = newDate;
        element.color = newColor;
      }
    });
    // save data in the browser storage
    saveData(this.key, data);
  }
  
  deleteEntry(id){
    let data = this.readEntries();
    // filter out item match with id
    data = data.filter((elem) => elem.id != id);
    // save data in the browser storage
    saveData(this.key, data)
  }
}

export function saveData(key = '', data = {}){
  // convert json to string
  const strData = JSON.stringify(data);
  localStorage.setItem(key, strData);
}

export function loadData(key){
  // convert string to json
  const strData = localStorage.getItem(key);
  const jsonData = JSON.parse(strData);
  return jsonData;
}