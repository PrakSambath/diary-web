// data name
const KEY = 'entries';

export function createEntry(title, content, date, color){
  const data = readEntries();
  // generate random id
  // random number from 0 to 1
  let id = Math.random() * 10000;
  // remove the floating point path
  id = id.toString().slice(0, 5);
  // save data in the browser storage
  data.push({id, title, content, date, color});
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function readEntries(){
  // load data from browser storage
  const strData = localStorage.getItem(KEY);
  // convert string to json
  const objData = JSON.parse(strData);
  return objData != null? objData: [];
}

export function updateEntry(id, newTitle, newContent, newDate, newColor){
  let data = readEntries();
  data.forEach(element => {
    if(element.id == id){
      element.title = newTitle;
      element.content = newContent;
      element.date = newDate;
      element.themeColor = newColor;
    }
  });
  // save data in the browser storage
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function deleteEntry(id){
  let data = readEntries();
  data = data.filter((elem) => elem.id != id);
  localStorage.setItem(KEY, JSON.stringify(data));
}

