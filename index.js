const bouncer = ((arr) => {
  const newArr = arr.filter((item) => !!item == true);
  return newArr;
});


bouncer([7, "ate", "", false, 9]);
