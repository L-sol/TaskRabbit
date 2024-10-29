let userId = "";

document.getElementById('registerForm').onsubmit = async(e) => 
{
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEnteries(formData);
    await fetch('http://localhost:5000/register',{
        method: 'POST',
        headers:{
            'Content- Type':'application/json'
        },
        body: JSON.stringify(data),
    });
    alert('User registered successfully!');
};

document.getElementById('loginForm').onsubmit = async(e) =>
{
    e.preventDefault();
    const formData =new formData(e.target);
    const data = fromEnteries(formData);
    const response = await fetch('http://localhost.5000/login',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data),
    });
    if(response.ok){
        const result = await response.json();
        userId = result.id;
        document.getElementById('userId').value = userId;
        document.getElementById('createdBy').value = userId;
        alert('Login successfully');
    }else {
        alert('Invalid credentials');
    }
};

document.getElementById('uploadForm').onsubmit = async (e) =>
{
    e.preventDefault();
    const formData = new formData(e.target);
    await fetch('http://localhost:5000/upload',{
        method: 'POST',
        body: formData,
    });
    alert('Profile image uploaded!');
};

document.getElementById('taskForm').onsubmit = async (e) =>
{
    e.preventDefault();
    const formData = new formData(e.target);
    const data = Object.fromEntries(formData);
    await fetch('http://localhost:5000/tasks',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    alert('Task created successfully!');
    fetchTasks();
};    

async function fetchTasks() {
    const response = await fetch('http://localhost:5000/tasks');
    const tasks = await response.json();
    const taskList = document.getElementById('taskList');
    taskList. innerHTML= "";
    tasks.forEach(task=>{
        const li = document.createElement('li');
        li.textContent = $; {task.title}-$; {task.description};
        taskList.appendChild(li);
    });
}
