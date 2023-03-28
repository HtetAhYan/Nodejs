import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [job, setJob] = useState({ title: '', location: '', salary: '' });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5556/job', job)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={job.title} onChange={e => setJob({ ...job, title: e.target.value })} />
      </div>
      <div>
        <label>Location:</label>
        <input type="text" value={job.location} onChange={e => setJob({ ...job, location: e.target.value })} />
      </div>
      <div>
        <label>Salary:</label>
        <input type="text" value={job.salary} onChange={e => setJob({ ...job, salary: e.target.value })} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
