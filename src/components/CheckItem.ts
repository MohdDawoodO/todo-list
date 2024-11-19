const CheckItem = (e: any, todo: any, todos: any) => {
  const item = e.target.parentElement;
  item.classList.toggle("checked");

  todo.checked = !todo.checked;
  localStorage.setItem("todos", JSON.stringify(todos));
};

export default CheckItem;
