// eslint-disable-next-line import/no-anonymous-default-export
export default (object, ...fields) => {
  let Obj = {};
  // eslint-disable-next-line array-callback-return
  fields.map((field) => {
    for (const key in object) {
      // eslint-disable-next-line no-unused-expressions
      key === field ? (Obj[key] = object[key]) : null;
    }
  });
  return Obj;
};
