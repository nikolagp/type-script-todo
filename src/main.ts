import './style.css';
import { Todo } from './classes/Todo.js';
import { ListTemplate } from './classes/ListTemplate';

const form = document.querySelector('form') as HTMLFormElement;
const task = document.querySelector('#task') as HTMLInputElement;
const importance = document.querySelector('#importance') as HTMLSelectElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  const newTask = new Todo(task.value, importance.value);

  list.render(newTask);

  task.value = '';
});
