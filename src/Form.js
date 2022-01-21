import React, { useState } from 'react';

function Form(props) {
const [name, setName] = useState('');
const [pass, setPass] = useState('');


const add = (event) => {
	event.preventDefault();
	const val = {
	name,
	pass,
	};
	props.func(val);

};


return (
	<div>
	<label>Name</label>
	<input type="text" value={name} onChange={(e)=>setName(e.target.value)} /><br/><br/>
	<label>Password</label>
	<input type="text" value={pass} onChange={(e)=>setPass(e.target.value)} /><br/><br/>
	<button onClick={add}>Add Row</button>
	</div>
);
}

export default Form;
