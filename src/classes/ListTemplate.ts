import { Todo } from './Todo';

export class ListTemplate {
  constructor(public container: HTMLUListElement) {}

  render(item: Todo) {
    let tasks: Todo[] = [];
    let task = new Todo(item.task, item.importance);
    tasks.push(task);
    const taskList = this.container;
    const li = document.createElement('li');
    li.innerHTML = `
    <div
      id="addedTask"
      class="cursor-pointer my-2 listing bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
    <div class="task-headings">
      <h2 class="item-task text-2xl">${item.task}</h2>
      <h3 class="text-xl">Importance: ${item.importance}</h3>
    </div>
    </div>`;

    taskList.appendChild(li);

    li.addEventListener('click', function () {
      item.isCompleted = true;
      li.style.textDecoration = 'line-through';
    });

    li.addEventListener('contextmenu', function (event) {
      event.preventDefault();
      taskList.removeChild(li);
      let index = tasks.indexOf(task);
      tasks.splice(index, 1);
    });
  }
}
