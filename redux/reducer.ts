import sampleTasks from "../sampleTasks";

const initialState = {
  username: "User Name",
  lastWeek: [3],
  lastWeekImpact: 200,
  currImpact: 0,
  newUser: true,
  tasks: sampleTasks,
};

export default function appReducer(state = initialState, action: any) {
  switch (action.type) {
    case "SELECT_TASK":
      const taskArray = [...state.tasks];
      taskArray[action.payload.taskId].selected = true;

      return {
        ...state,
        tasks: taskArray,
      };
    case "DESELECT_TASK":
      const copyOfTaskArray = [...state.tasks];
      copyOfTaskArray[action.payload.taskId].selected = false;

      return {
        ...state,
        tasks: copyOfTaskArray,
      };
    case "ITERATE_TASK":
      const newTaskArray = [...state.tasks];
      const task = newTaskArray[action.payload.taskId];
      if (task.completed == false) {
        task.currCount += 1;
        task.currImpact = task.impact * (task.currCount / task.totalCount);
        if (task.totalCount == task.currCount) {
          task.completed = true;
        }
      }
      return { ...state, tasks: newTaskArray };
    case "GET_IMPACT":
      const allTasks = [...state.tasks];
      let count = 0;
      for (const task of allTasks) {
        count += task.currImpact;
      }
      return { ...state, currImpact: count };
    case "SET_USER":
      return { ...state, newUser: action.payload.value };
    default:
      return state;
  }
}

function add(accum: number, a: number) {
  return accum + a;
}
