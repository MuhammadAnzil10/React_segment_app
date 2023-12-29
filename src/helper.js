

export const isEqual = (obj1, obj2) => {
  let [key1] = Object.keys(obj2);

  if (key1 === obj1.value) {
    return true;
  } else {
    return false;
  }
};

