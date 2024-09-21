import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #1a237e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TaskItem = styled.li`
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CheckBox = styled.input`
  margin-right: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Select = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const SubtaskContainer = styled.div`
  margin-top: 10px;
  padding-left: 20px;
`;

function StudyPlanner() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newSubtask, setNewSubtask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([
        ...tasks, 
        {
          text: newTask,
          completed: false,
          dueDate,
          priority,
          category,
          subtasks: [],
        }
      ]);
      setNewTask('');
      setDueDate('');
      setPriority('Medium');
      setCategory('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const addSubtask = (taskIndex) => {
    const updatedTasks = tasks.map((task, i) => 
      i === taskIndex ? { ...task, subtasks: [...task.subtasks, { text: newSubtask, completed: false }] } : task
    );
    setTasks(updatedTasks);
    setNewSubtask('');
  };

  const toggleSubtask = (taskIndex, subtaskIndex) => {
    const updatedTasks = tasks.map((task, i) =>
      i === taskIndex
        ? {
            ...task,
            subtasks: task.subtasks.map((subtask, j) =>
              j === subtaskIndex ? { ...subtask, completed: !subtask.completed } : subtask
            )
          }
        : task
    );
    setTasks(updatedTasks);
  };

  const sortedTasks = tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  return (
    <Container>
      <h1>Study Planner</h1>
      <Form onSubmit={handleSubmit}>
        <Input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="Add a new task"
        />
        <Label>Due Date:</Label>
        <Input 
          type="date" 
          value={dueDate} 
          onChange={(e) => setDueDate(e.target.value)} 
        />
        <Label>Priority:</Label>
        <Select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </Select>
        <Label>Category:</Label>
        <Input 
          type="text" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          placeholder="Category (e.g., Homework, Project)"
        />
        <Button type="submit">Add Task</Button>
      </Form>

      <TaskList>
        {sortedTasks.map((task, index) => (
          <TaskItem key={index}>
            <div>
              <CheckBox 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => toggleTask(index)} 
              />
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text} (Due: {task.dueDate ? task.dueDate : "No due date"})
              </span>
              <br/>
              <small>Priority: {task.priority} | Category: {task.category}</small>
              
              <SubtaskContainer>
                <h4>Subtasks:</h4>
                {task.subtasks.map((subtask, subIndex) => (
                  <div key={subIndex}>
                    <CheckBox
                      type="checkbox"
                      checked={subtask.completed}
                      onChange={() => toggleSubtask(index, subIndex)}
                    />
                    <span style={{ textDecoration: subtask.completed ? 'line-through' : 'none' }}>
                      {subtask.text}
                    </span>
                  </div>
                ))}
                <Form onSubmit={(e) => { e.preventDefault(); addSubtask(index); }}>
                  <Input 
                    type="text" 
                    value={newSubtask} 
                    onChange={(e) => setNewSubtask(e.target.value)} 
                    placeholder="Add a new subtask"
                  />
                  <Button type="submit">Add Subtask</Button>
                </Form>
              </SubtaskContainer>
            </div>
            <Button onClick={() => removeTask(index)}>Remove</Button>
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
}

export default StudyPlanner;
