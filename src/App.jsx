import './App.scss';
import { useEffect, useState } from 'react';
import Create from './crud/Create';
import List from './crud/List';
import Edit from './crud/Edit';
import { create, read, remove, edit } from './Functions/localStorage';

function App() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [tasks, setTasks] = useState(null);

  const [modalData, setModalData] = useState(null);

  const [createData, setCreateData] = useState(null);

  const [deleteData, setDeleteData] = useState(null);

  const [editData, setEditData] = useState(null);

  // Read
  useEffect(() => {
    setTasks(read());
  }, [lastUpdate]);

  // Create
  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(createData);
    setLastUpdate(Date.now());
  }, [createData]);

  // Delete
  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    remove(deleteData);
    setLastUpdate(Date.now());
  }, [deleteData]);

  // Edit
  useEffect(() => {
    if (null === editData) {
      return;
    }
    edit(editData);
    setLastUpdate(Date.now());
  }, [editData]);

  return (
    <>
      <div className="container">
        <h1>ToDo</h1>
        <Create setCreateData={setCreateData}></Create>

        <div>
          <List
            tasks={tasks}
            setDeleteData={setDeleteData}
            setModalData={setModalData}
          ></List>
        </div>
        <Edit
          setEditData={setEditData}
          modalData={modalData}
          setModalData={setModalData}
        ></Edit>
      </div>
    </>
  );
}
export default App;
