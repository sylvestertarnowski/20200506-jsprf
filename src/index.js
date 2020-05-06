import '@babel/polyfill'

import { $ } from './dom-api/selector'
import { exerciseService } from './exercises/exercise-service'

const examplesSelectDOM = $('#examples');
const $root = $('#root');

function simpleOptionElement(innerText, value = '', disabled = false) {
	const element = document.createElement('option');
	element.innerText = innerText;
	element.value = value;
	element.disabled = disabled;
	element.setAttribute('title', value);
	if(disabled) {
		element.style.fontWeight = 'bold';
	}
	return element;
}

const exercises = exerciseService.getAll();
examplesSelectDOM.appendChild(simpleOptionElement('-- Choose task / example --'));
for( let x=0; x < exercises.length; x++){
	const ex = exercises[x];
	examplesSelectDOM.appendChild(simpleOptionElement(ex.title, ex.value, ex.disabled))
}

examplesSelectDOM.addEventListener('change', ( ev ) => {
	const {value} = ev.target;
	console.clear();
	location.hash = value;
	loadExercise(value);
})

function loadExercise(name) {
	if(!name || name === '-') {
		return;
	}
	const exercise = exerciseService.getOne(name);
	if(!exercise) {
		return console.error('I do not have exercise with id:', name)
	}
	if(!exercise.run && exercise.path) {
		location.href = exercise.path
	} else {
		$root.innerHTML = `<h6>${exercise.title}</h6>Example shown in the console. (Ctrl + Shift + i / F12)<div>Check also file with code: <b>${name}</b></div>`;
		console.log('Exercise: ', exercise.title, 'START!');
		console.log('-----------------------------------');
		exercise.run
			.then(() => {})
			.catch(console.error)
	}
}

if(location.hash) {
	const value = location.hash.substring(1);
	examplesSelectDOM.value = value;
	loadExercise(value);
}
