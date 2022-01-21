import React, { useState } from 'react';
import Form from './Form';
import jsonData from './data.json';

function TableData() {
const [studentData, setStudentData] = useState(jsonData);

const tableRows = studentData.map((info) => {
	return (
        
            	<tr>
		<td>{info.id}</td>
		<td>{info.name}</td>
		<td>{info.pass}</td>
	</tr>
    

	);
});

const addRows = (data) => {
	const totalStudents = studentData.length;
	data.id = totalStudents + 1;
	const updatedStudentData = [...studentData];
	updatedStudentData.push(data);
	setStudentData(updatedStudentData);
};

return (
	<div>
	<table className="table table-stripped">
		<thead>
		<tr>
			<th>ID</th>
			<th>Name</th>
			<th>Password</th>
		</tr>
		</thead>
		<tbody>{tableRows}</tbody>
	</table>
	<Form func={addRows} />
	</div>
);
}

export default TableData;
