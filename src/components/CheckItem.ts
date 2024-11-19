const CheckItem = (e: any, todo: any, todos: any) => {
  const btns = e.target.parentElement;
  btns.parentElement.classList.toggle("checked");

  todo.checked = !todo.checked;
  localStorage.setItem("todos", JSON.stringify(todos));
};

export default CheckItem;
