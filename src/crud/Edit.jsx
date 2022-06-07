import { useEffect, useState } from 'react';

function Edit({ modalData, setModalData, setEditData }) {
  const [task, setTask] = useState('');
  const [notDone, setNotDone] = useState(1);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (null === modalData) {
      return;
    }
    setTask(modalData.task);
    setNotDone(modalData.notDone);
    setTags(modalData.tags);
  }, [modalData]);

  const handleEdit = () => {
    const data = { task, notDone, id: modalData.id, tags };

    setEditData(data);
    setModalData(null);
  };

  if (null === modalData) {
    return null;
  }

  function handleTagsEdit(e) {
    if (e.key !== 'Enter') return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = '';
  }

  function removeTag(index) {
    setTags(tags.filter((_, i) => i !== index));
  }

  return (
    <div className="editas ">
      <div className="edito-content">
        <div className="edito-header">
          <h2>Edit task</h2>
          <button
            className="close"
            type="button"
            onClick={() => setModalData(null)}
          >
            <span>&times;</span>
          </button>
        </div>
        <input
          type="text"
          className="input"
          onChange={(e) => setTask(e.target.value)}
          value={task}
          placeholder="enter a new task"
        />
        <div className="tags-container">
          {tags.map((tag, i) => (
            <div className="tag" key={i}>
              <span>{tag}</span>
              <span className="close" onClick={() => removeTag(i)}>
                &times;
              </span>
            </div>
          ))}{' '}
        </div>
        <h5>Create a new Tag</h5>
        <input
          onKeyDown={handleTagsEdit}
          type="text"
          className="input smaller"
          placeholder="add tag  &rarr;  press enter"
        />{' '}
        <div>
          Already done?
          <input
            className="check"
            type="checkbox"
            onChange={() => {
              setNotDone((s) => (s ? 0 : 1));
            }}
            checked={!notDone}
          ></input>
        </div>
        <div>
          <button type="button" onClick={handleEdit}>
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
