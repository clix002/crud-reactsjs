import { keyBy } from "es-toolkit";

export const Status = {
  pending: "PENDING",
  Doing: "DOING",
  Done: "DONE",
};

export const statusConfigs = [
  {
    status: Status.pending,
    label: "Pending",
    color: "bg-orange-500",
  },
  {
    status: Status.Doing,
    label: "Doing",
    color: "bg-yellow-500",
  },
  {
    status: Status.Done,
    label: "Done",
    color: "bg-green-500",
  },
];

export const statusConfigByStatus = keyBy(
  statusConfigs,
  ({ status }) => status
);

export const defaultTasks = [
  {
    id: 1,
    name: "TAREA 1",
    description: "Esto es una breve descripcion para tarea 1",
    status: Status.pending,
  },
  {
    id: 2,
    name: "TAREA 2",
    description: "Esto es una breve descripcion para tarea 2",
    status: Status.Doing,
  },
  {
    id: 3,
    name: "TAREA 3",
    description: "Esto es una breve descripcion para tarea 3",
    status: Status.Done,
  },
];
