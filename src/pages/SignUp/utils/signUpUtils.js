export const getInputDataFromSubmitEvent = (e) => {
  const data = new Map();
  Object.values(Object.values({ ...e.target })).forEach((el) => {
    if (!el.value || el.value === "") return;
    data.set(el.id, el.value);
  });

  return Object.fromEntries(data.entries());
};
