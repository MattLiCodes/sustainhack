import { TaskItem } from "../models";

export function startTask(id: number) {
  return {
    type: "SELECT_TASK",
    payload: {
      taskId: id,
    },
  };
}

export function deselectTask(id: number) {
  return {
    type: "DESELECT_TASK",
    payload: {
      taskId: id,
    },
  };
}

export function addTaskCount(id: number, day: number) {
  return {
    type: "ITERATE_TASK",
    payload: {
      taskId: id,
      day: day,
    },
  };
}

export function getImpact() {
  return {
    type: "GET_IMPACT",
  };
}
