import ToDo from './ToDo';

function List({ tasks, setDeleteData, setModalData }) {
  return (
    <div className="flex list">
      {/* <h2>List of ...</h2> */}
      <ul>
        {tasks
          ? tasks.map((tsk) => (
              <ToDo
                key={tsk.id}
                tsk={tsk}
                setDeleteData={setDeleteData}
                setModalData={setModalData}
              ></ToDo>
            ))
          : null}
      </ul>
    </div>
  );
}

export default List;
