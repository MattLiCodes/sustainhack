import sampleTasks from "../sampleTasks";

const initialState = {
  username: "User Name",
  currImpact: 0,
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
    case "ITERATE_TASK":
      const newTaskArray = [...state.tasks];
      const task = newTaskArray[action.payload.taskId];
      const taskCount = task.currCount;
      if (taskCount.length > 1) {
        taskCount[action.payload.day] = 1;
      } else {
        taskCount[0] = 1;
      }

      task.currImpact =
        task.impact * (task.currCount.reduce(add, 0) / task.totalCount);

      if (task.totalCount == task.currCount.reduce(add, 0)) {
        task.completed = true;
      }
      return { ...state, tasks: newTaskArray };
    case "GET_IMPACT":
      const allTasks = [...state.tasks];
      let count = 0;
      for (const task of allTasks) {
        count += task.currImpact;
      }
      return { ...state, currImpact: count };
    default:
      return state;
  }
}

function add(accum: number, a: number) {
  return accum + a;
}
