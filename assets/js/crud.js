// data name
const KEY = 'entries';

export function createEntry(title, content, date){
  console.log('create entry');
  // let data = readEntries();
  // data = data.concat([{"id":999, title, content, date}]);
  // localStorage.setItem(KEY, JSON.stringify(data));
}

export function readEntries(){
  console.log('read entries')
  // load saved data from local storage
  // const strData = localStorage.getItem(KEY);
  // return JSON.parse(strData);
}

export function updateEntry(id, newTitle, newContent, newDate){
  console.log('update entry', id);
}

export function deleteEntry(id){
  console.log('delete entry', id);
}
