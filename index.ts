import { add } from "@/math";

function greet(name: string) {
	console.log(`Hello, ${name}!`);
}

greet(`add(2, 3, 4) = ${add(2, 3, 4)}`);
