declare interface TaskProps {
  completionDate: Date | null;
  context: string[];
  creationDate: Date | null;
  description: string;
  done: boolean;
  dueDate: Date | null;
  key: number;
  original: string;
  priority: string;
  project: string[];
  time: string;
}

declare interface Blablabla {
  completionDate: Date | null;
}

export { TaskProps, Blablabla };
