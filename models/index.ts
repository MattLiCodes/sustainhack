export type TaskItem = {
  id: number;
  title: string;
  icon: string;
  type: string;
  duration: string;
  impact: number;
  why: string;
  currCount: number;
  currImpact: number;
  totalCount: number;
  selected: boolean;
  completed: boolean;
};

export type User = {
  id: number;
  name: string;
  tasks: TaskItem[];
  impact: number;
};
