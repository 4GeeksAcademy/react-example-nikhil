import React, { useState } from "react";

//create your first component
const Home = () => {

	const [task, setTask] = useState('')
	const [todos, setTodos] = useState([])

	// Function to check enter is pressed or not... if yes add task to list after validation
	const handleKeyPress = (event) => {
		if(event.key === 'Enter') {
			if(task === '') {
				alert('Task can not be empty!')
			} else {
				addTask(task)
			}
		}
	}

	const addTask = (newTask) => {
		setTodos([...todos, newTask])
		setTask('')
	}

	const deleteTask = (task) => {
		// JS Filter Method
		const tempTodos = todos.filter(todo => todo !== task)
		setTodos(tempTodos)
	}

	return (
		<div className='container'>
			<input 
				value={task}
				onChange={event => setTask(event.target.value)}
				onKeyDown={handleKeyPress}
				placeholder='Enter new task...'
			/>
			<ul>
				{todos.map( todo => {
						return (
							<li key={todo}>
								{todo} <i 
									className="far fa-trash-alt"
									onClick={() => deleteTask(todo)}
									style={{ cursor: 'pointer' }}
								></i>
							</li>
						)
				})}
			</ul>
			{todos.length === 0 ? (
				<h5>No Task Exist. Add new task...</h5>
			): (
				<h5>{todos.length} tasks left</h5>
			)}
		</div>
	)
};

export default Home;
