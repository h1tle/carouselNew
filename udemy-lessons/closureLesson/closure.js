function createCounter() {
	let counter = 0;
	let arr = [];
	
	const myFunction = () => {
		counter += 1;
		return counter;
	};
	
	return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3); // Виведення значень лічильника
