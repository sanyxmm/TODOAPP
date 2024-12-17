import react,{useState,useEffect} from 'react'
import './App.css';
import Axios from 'axios'

function App() {
  const [task, setTask] = useState('');
  const [taskData,settaskData] = useState([]);
  useEffect(()=>{
    Axios.get(`http://localhost:4000/fetchTask`)
    .then((response) => {
      const formData = response.data.tasks;
      settaskData(formData)
    })
    .catch((err) => {
      console.log(err);
    });

  },[]);
  
  const addTask = async (task) => {
    if (!task) {
      alert('Please fill in the task box');
      return;
    }
    try {
      const response = await Axios.post('http://localhost:4000/addTask', {
        taskk: task 
      });
  
      console.log('Task added ', response.data);
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  return (
    <div >
     <form className='box'>
      <h1>To Do App</h1>
    <div className='header'>
    <textarea placeholder="Write new Task" type="text"   value={task}
        onChange={(e) => setTask(e.target.value)}></textarea>
      <button onClick={()=>addTask(task)}>Add new task</button>
    </div>
<div className='list'>
 {taskData.map((row, index) => (
                    <div
                     key={index} 
                     className="listt">{index+1}.  
                     {row.taskk}
                    </div>
                  ))}  
</div>
     </form>
    </div>
  );
}

export default App;
