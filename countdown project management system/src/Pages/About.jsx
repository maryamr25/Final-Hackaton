
// // import React, { useState, useEffect } from 'react';
// // import { db } from '../firebase';
// // import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// // import { v4 as uuidv4 } from 'uuid'; // Import a unique ID generator

// // const About = () => {
// //   const [tasks, setTasks] = useState({
// //     todo: [],
// //     inProgress: [],
// //     completed: [],
// //   });
// //   const [newTask, setNewTask] = useState('');

// //   useEffect(() => {
// //     const fetchTasks = async () => {
// //       const doc = await db.collection('tasks').doc('taskData').get();
// //       if (doc.exists) {
// //         setTasks(doc.data());
// //       }
// //     };
// //     fetchTasks();
// //   }, []);

// //   const addTask = () => {
// //     if (newTask.trim() === '') return;

// //     const taskWithId = { id: uuidv4(), content: newTask };

// //     const updatedTasks = {
// //       ...tasks,
// //       todo: [...tasks.todo, taskWithId],
// //     };

// //     setTasks(updatedTasks);
// //     saveTasks(updatedTasks);
// //     setNewTask('');
// //   };

// //   const saveTasks = (updatedTasks) => {
// //     db.collection('tasks').doc('taskData').set(updatedTasks);
// //   };

// //   const onDragEnd = (result) => {
// //     const { destination, source } = result;

// //     if (!destination) return;

// //     if (destination.droppableId === source.droppableId && destination.index === source.index) {
// //       return;
// //     }

// //     const start = tasks[source.droppableId];
// //     const finish = tasks[destination.droppableId];

// //     // Moving within the same list
// //     if (start === finish) {
// //       const newTaskList = Array.from(start);
// //       const [movedTask] = newTaskList.splice(source.index, 1);
// //       newTaskList.splice(destination.index, 0, movedTask);

// //       const newState = {
// //         ...tasks,
// //         [source.droppableId]: newTaskList,
// //       };

// //       setTasks(newState);
// //       saveTasks(newState);
// //       return;
// //     }

// //     // Moving between lists
// //     const startTaskList = Array.from(start);
// //     const finishTaskList = Array.from(finish);
// //     const [movedTask] = startTaskList.splice(source.index, 1);
// //     finishTaskList.splice(destination.index, 0, movedTask);

// //     const newState = {
// //       ...tasks,
// //       [source.droppableId]: startTaskList,
// //       [destination.droppableId]: finishTaskList,
// //     };

// //     setTasks(newState);
// //     saveTasks(newState);
// //   };

// //   return (
// //     <div className="task-board">
// //       <h1>Task Management Board</h1>
      
// //       <input
// //         type="text"
// //         value={newTask}
// //         onChange={(e) => setNewTask(e.target.value)}
// //         placeholder="Enter a new task"
// //       />
// //       <button onClick={addTask}>Add Task</button>

// //       <DragDropContext onDragEnd={onDragEnd}>
// //         <div className="task-sections">
// //           {['todo', 'inProgress', 'completed'].map((section) => (
// //             <Droppable key={section} droppableId={section}>
// //               {(provided) => (
// //                 <div
// //                   className="task-section"
// //                   ref={provided.innerRef}
// //                   {...provided.droppableProps}
// //                 >
// //                   <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
// //                   <ul>
// //                     {tasks[section].map((task, index) => (
// //                       <Draggable key={task.id} draggableId={task.id} index={index}>
// //                         {(provided) => (
// //                           <li
// //                             ref={provided.innerRef}
// //                             {...provided.draggableProps}
// //                             {...provided.dragHandleProps}
// //                           >
// //                             {task.content}
// //                           </li>
// //                         )}
// //                       </Draggable>
// //                     ))}
// //                     {provided.placeholder}
// //                   </ul>
// //                 </div>
// //               )}
// //             </Droppable>
// //           ))}
// //         </div>
// //       </DragDropContext>
// //     </div>
// //   );
// // };

// // export default About;





// import React, { useState, useEffect } from 'react';
// import { db } from '../firebase';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import { v4 as uuidv4 } from 'uuid';
// // import { collection, getDocs, addDoc, doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
// const About = () => {
//   const [tasks, setTasks] = useState({
//     todo: [],
//     inProgress: [],
//     completed: [],
//   });
//   const [newTask, setNewTask] = useState('');

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const doc = await db.collection('tasks').doc('taskData').get();
//         if (doc.exists) {
//           setTasks(doc.data());
//         }
//       } catch (error) {
//         console.error("Error fetching tasks: ", error);
//       }
//     };
//     fetchTasks();
//   }, []);

//   const addTask = async () => {
//     if (newTask.trim() === '') return;

//     const taskWithId = { id: uuidv4(), content: newTask };

//     const updatedTasks = {
//       ...tasks,
//       todo: [...tasks.todo, taskWithId],
//     };

//     setTasks(updatedTasks);
//     await saveTasks(updatedTasks);  // Ensure async saving
//     setNewTask('');
//   };

//   const saveTasks = async (updatedTasks) => {
//     try {
//       await db.collection('tasks').doc('taskData').set(updatedTasks);
//     } catch (error) {
//       console.error("Error saving tasks: ", error);
//     }
//   };

//   const onDragEnd = (result) => {
//     const { destination, source } = result;

//     if (!destination) return;

//     if (
//       destination.droppableId === source.droppableId &&
//       destination.index === source.index
//     ) {
//       return;
//     }

//     const start = tasks[source.droppableId];
//     const finish = tasks[destination.droppableId];

//     if (start === finish) {
//       const newTaskList = Array.from(start);
//       const [movedTask] = newTaskList.splice(source.index, 1);
//       newTaskList.splice(destination.index, 0, movedTask);

//       const newState = {
//         ...tasks,
//         [source.droppableId]: newTaskList,
//       };

//       setTasks(newState);
//       saveTasks(newState);
//     } else {
//       const startTaskList = Array.from(start);
//       const finishTaskList = Array.from(finish);
//       const [movedTask] = startTaskList.splice(source.index, 1);
//       finishTaskList.splice(destination.index, 0, movedTask);

//       const newState = {
//         ...tasks,
//         [source.droppableId]: startTaskList,
//         [destination.droppableId]: finishTaskList,
//       };

//       setTasks(newState);
//       saveTasks(newState);
//     }
//   };

//   return (
//     <div className="task-board">
//       <h1>Task Management Board</h1>

//       <input
//         type="text"
//         value={newTask}
//         onChange={(e) => setNewTask(e.target.value)}
//         placeholder="Enter a new task"
//       />
//       <button onClick={addTask}>Add Task</button>

//       <DragDropContext onDragEnd={onDragEnd}>
//         <div className="task-sections">
//           {['todo', 'inProgress', 'completed'].map((section) => (
//             <Droppable key={section} droppableId={section}>
//               {(provided) => (
//                 <div
//                   className="task-section"
//                   ref={provided.innerRef}
//                   {...provided.droppableProps}
//                 >
//                   <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
//                   <ul>
//                     {tasks[section].map((task, index) => (
//                       <Draggable key={task.id} draggableId={task.id} index={index}>
//                         {(provided) => (
//                           <li
//                             ref={provided.innerRef}
//                             {...provided.draggableProps}
//                             {...provided.dragHandleProps}
//                           >
//                             {task.content}
//                           </li>
//                         )}
//                       </Draggable>
//                     ))}
//                     {provided.placeholder}
//                   </ul>
//                 </div>
//               )}
//             </Droppable>
//           ))}
//         </div>
//       </DragDropContext>
//     </div>
//   );
// };

// export default About;



import React, { useState, useEffect, useCallback } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { auth, db } from '../firebase'; // Adjust the import according to your Firebase config
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy
} from "firebase/firestore";
import '../App.css'; // Import the CSS file
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const About = () => {
  const [tasks, setTasks] = useState({
    todo: [],
    inProgress: [],
    completed: [],
  });
  const [showForm, setShowForm] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [selectedSection, setSelectedSection] = useState("todo");
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();
  const tasksCollectionRef = collection(db, "tasks");

  // Fetch the current user on component mount
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // Fetch tasks from Firestore on component mount
  useEffect(() => {
    if (currentUser) {
      const q = query(tasksCollectionRef, orderBy("createdAt"));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const newTasks = { todo: [], inProgress: [], completed: [] };
        snapshot.forEach((doc) => {
          const task = { id: doc.id, ...doc.data() };
          if (task.userId === currentUser.uid) {
            newTasks[task.status].push(task);
          }
        });
        setTasks(newTasks);
      });
      return () => unsubscribe();
    }
  }, [currentUser]);

  // Function to add a new task
  const addTask = async (e) => {
    e.preventDefault();

    if (newTaskTitle.trim() && currentUser) {
      try {
        const newTask = {
          title: newTaskTitle,
          status: selectedSection,
          createdAt: new Date().toISOString(),
          userId: currentUser.uid, // Associate task with the current user
          history: [
            {
              action: "Created",
              date: new Date().toISOString(),
            },
          ],
        };

        // Add task to Firestore
        await addDoc(tasksCollectionRef, newTask);

        // Reset form
        setNewTaskTitle("");
        setShowForm(false);
        console.log('Task added successfully');
      } catch (error) {
        console.error('Error adding task:', error);
      }
    } else {
      console.warn('New task title is empty or user is not authenticated');
    }
  };

  // Function to handle dragging tasks
  const onDragEnd = useCallback(async (result) => {
    const { destination, source } = result;

    // If dropped outside a droppable area or the location hasn't changed, do nothing
    if (!destination || (destination.index === source.index && destination.droppableId === source.droppableId)) return;

    // Copy tasks and rearrange based on drag result
    const sourceSection = [...tasks[source.droppableId]];
    const [movedTask] = sourceSection.splice(source.index, 1);
    const destinationSection = [...tasks[destination.droppableId]];
    destinationSection.splice(destination.index, 0, movedTask);

    // Update Firestore with new status and history
    const taskDoc = doc(db, "tasks", movedTask.id);
    const newStatus = destination.droppableId;
    const updatedTask = {
      ...movedTask,
      status: newStatus,
      history: [
        ...movedTask.history,
        {
          action: `Moved to ${newStatus}`,
          date: new Date().toISOString(),
        },
      ],
    };

    try {
      await updateDoc(taskDoc, updatedTask);

      // Update the state with the reordered tasks
      setTasks((prevTasks) => ({
        ...prevTasks,
        [source.droppableId]: sourceSection,
        [destination.droppableId]: destinationSection,
      }));
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  }, [tasks]);

  // Function to delete a task
  const deleteTask = async (taskId) => {
    try {
      // Delete task from Firestore
      await deleteDoc(doc(db, "tasks", taskId));

      // Update the state
      setTasks((prevTasks) => {
        const updatedTasks = { ...prevTasks };
        Object.keys(updatedTasks).forEach((section) => {
          updatedTasks[section] = updatedTasks[section].filter(task => task.id !== taskId);
        });
        return updatedTasks;
      });
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Function to update task section
  const moveTask = async (taskId, newSection) => {
    const task = Object.values(tasks).flat().find(task => task.id === taskId);

    if (task && newSection !== task.status) {
      const taskDoc = doc(db, "tasks", taskId);
      const updatedTask = {
        ...task,
        status: newSection,
        history: [
          ...task.history,
          {
            action: `Moved to ${newSection}`,
            date: new Date().toISOString(),
          },
        ],
      };

      try {
        await updateDoc(taskDoc, updatedTask);

        // Update the state
        setTasks((prevTasks) => {
          const updatedTasks = { ...prevTasks };
          Object.keys(updatedTasks).forEach((section) => {
            updatedTasks[section] = updatedTasks[section].filter(task => task.id !== taskId);
          });
          updatedTasks[newSection].push(updatedTask);
          return updatedTasks;
        });
      } catch (error) {
        console.error('Error updating task status:', error);
      }
    }
  };

  // Sign out function
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful, redirect to login page
        navigate('/');
      })
      .catch((error) => {
        // Handle errors here
        console.error('Sign Out Error:', error.message);
      });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <button className="signout-button" onClick={handleSignOut}>Sign out</button>
      <h1 className="board-title">Task Management Board</h1>
      <div className="board-container">
        <div className="section-grid">
          {/* Section Components */}
          {["todo", "inProgress", "completed"].map((section) => (
            <Droppable droppableId={section} key={section}>
              {(provided) => (
                <div
                  className="section"
                  data-section={section}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h2 className="section-title">
                    {section === "todo" ? "To Do" : section === "inProgress" ? "In Progress" : "Completed"}
                  </h2>
                  <div>
                    {tasks[section].map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <div
                            className="task-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="task-title">{task.title}</div>
                            <div className="task-history">
                              <h4 className="history-title">History:</h4>
                              <ul className="history-list">
                                {task.history.map((entry, idx) => (
                                  <li key={idx}>
                                    {entry.action} on {new Date(entry.date).toLocaleString()}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="task-actions">
                              <button
                                className="delete-task-button"
                                onClick={() => deleteTask(task.id)}
                              >
                                Delete
                              </button>
                                                            <select
                                  className="section-selector"
                                  value={task.status}
                                  onChange={(e) => moveTask(task.id, e.target.value)}
                                >
                                  <option value="todo">To Do</option>
                                  <option value="inProgress">In Progress</option>
                                  <option value="completed">Completed</option>
                                </select>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                  <button
                    className="add-task-button"
                    onClick={() => {
                      setSelectedSection(section);
                      setShowForm(true);
                    }}
                  >
                    Add Task
                  </button>
                </div>
              )}
            </Droppable>
          ))}
        </div>

        {/* Task Form Modal */}
        {showForm && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2 className="modal-title">Add New Task</h2>
              <form onSubmit={addTask}>
                <div className="form-group">
                  <label className="form-label">Task Title</label>
                  <input
                    type="text"
                    className="form-input"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="form-actions">
                  <button
                    type="button"
                    className="cancel-button"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="submit-button"
                  >
                    Add Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </DragDropContext>
  );
};

export default About;

