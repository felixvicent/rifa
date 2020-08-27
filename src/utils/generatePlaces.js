export default users => {
  let array = new Array();

  for(let x = 1; x <= 100; x++){
    array.push({ place: x, done: false, name: '' })
  }

  users.map(user => {
    array[user.place - 1] = user;
  })

  return array;
};