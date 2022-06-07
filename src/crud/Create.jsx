import { useState } from 'react';

function Create({ setCreateData }) {
  const [task, setTask] = useState('');
  const [tags, setTags] = useState([]);
  const [notDone, setNotDone] = useState(1);

  const handleCreate = () => {
    const data = {
      task,
      tags,
      notDone,
    };
    setCreateData(data);
    setTask('');
    setNotDone(1);
    setTags([]);
  };

  return (
    <div className="flex">
      <div className="rodykle">
        <div className="kv"></div>
        <div className="tr"></div>
      </div>
      <div className="todo-input">
        <input
          type="text"
          onChange={(e) => setTask(e.target.value)}
          value={task}
          placeholder="create new..."
        />
      </div>
      <button onClick={handleCreate}>add</button>
    </div>
  );
}

export default Create;
