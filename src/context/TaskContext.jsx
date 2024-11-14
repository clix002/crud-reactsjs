import { createContext, useContext, useState } from "react";
import { defaultTasks } from "../constants";

const TaskContext = createContext()


export const useTasks = () => {

    const context = useContext(TaskContext)
    if (!context) throw new Error("useTasks debe ser usado dentro de un TaskProvider")
    return context
}


export const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState(defaultTasks || []);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);


    return (
        <TaskContext.Provider
            value={{
                tasks, setTasks,
                isOpen, setIsOpen,
                selectedTask, setSelectedTask
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}