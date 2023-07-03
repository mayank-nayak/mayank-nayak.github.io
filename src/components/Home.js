import { useState } from 'react';
import Simple from './Simple.js';
import Complex from './Complex.js';

export default function Home() {
	const [complex, setComplex] = useState(false);




	return (
		complex === true ? <Complex /> : <Simple />

		

	);

}