const inputBox = document.getElementById("input_box");
const addButton = document.getElementById("add_Button");
const listBox = document.getElementById("listBox");

addButton.addEventListener("click", () => {
  const inputText = inputBox.value.trim();
  if (inputText === "") {
    return;
  } else {
    let length = localStorage.length;
    localStorage.setItem("task" + (length + 1), inputText);
    inputBox.value = "";
    location.reload();
  }
});

for (let j = 0; j < localStorage.length; j++) {
  let newDiv = document.createElement("div");
  newDiv.classList.add(
    "flex",
    "rounded-md",
    "justify-between",
    "items-center",
    "text-white",
    "text-[18px]",
    "sm:text-xl",
    "bg-slate-800",
    "p-3",
    "gap-3",
    "cursor-pointer"
  );
  listBox.appendChild(newDiv);
  let textDiv = document.createElement("div");
  textDiv.classList.add("text-[18px]", "sm:text-xl", "text-left");
  const key = localStorage.key(j);
  textDiv.innerText = localStorage.getItem(key);
  newDiv.appendChild(textDiv);
  let deleteButton = document.createElement("button");
  deleteButton.classList.add(
    "text-[18px]",
    "sm:text-xl",
    "bg-red-600",
    "hover:bg-red-700",
    "px-3",
    "py-2",
    "rounded-md",
    "focus:outline-none"
  );
  deleteButton.innerText = "delete";
  newDiv.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    // Access the previous sibling element
    const previousSibling = deleteButton.previousElementSibling;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (previousSibling.innerText == localStorage.getItem(key)) {
        localStorage.removeItem(key);
        let parentElement = previousSibling.parentElement;
        parentElement.remove();
      }
    }
  });
}
