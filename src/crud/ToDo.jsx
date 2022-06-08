function ToDo({ tsk, setDeleteData, setModalData }) {
  const handleDelete = () => {
    setDeleteData(tsk);
  };

  const handleEdit = () => {
    setModalData(tsk);
  };

  return (
    <li>
      <div className="content">
        <span className="number">{tsk.id}. </span>
        <div className="task">
          <p>{tsk.task}</p>
          <div className="tags-container">
            {tsk.tags.map((tag, i) => (
              <div className="tag" key={i}>
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="buttons">
        <span>
          {tsk.notDone ? (
            'NEED TO DO'
          ) : (
            <svg className="done">
              <use href="#done" />
            </svg>
          )}
        </span>
        <button onClick={handleEdit}>
          <svg>
            <use href="#edit" />
          </svg>
        </button>
        <button onClick={handleDelete}>
          <svg className="delete">
            <use href="#delete" />
          </svg>
        </button>
      </div>
    </li>
  );
}

export default ToDo;
