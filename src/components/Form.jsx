import { Button, checkbox, Dialog, DialogBody, DialogFooter, DialogHeader, Input } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Status } from "../constants";
import { useTasks } from "../context/TaskContext";

export const Form = () => {

    const { selectedTask, isOpen, setIsOpen, setTasks } = useTasks()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        if (selectedTask) {
            setTitle(selectedTask.name)
            setDescription(selectedTask.description)
        }
    }, [selectedTask])



    const handleOnchangeTitle = ({ target: { value } }) => {
        setTitle(value)

    }

    const handleOnchangeDescription = ({ target: { value } }) => {
        setDescription(value)

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Si hay una tarea seleccionada, actualizamos la tarea existente
        if (selectedTask) {
            setTasks((prevTask) => {
                return prevTask.map((t) =>
                    t.id === selectedTask.id ? { ...t, name: title, description } : t
                );
            });
        }

        // Si no hay tarea seleccionada, agregamos una nueva tarea
        if (!selectedTask) {
            setTasks((prevTask) => [
                ...prevTask,
                {
                    id: Math.random().toString(),
                    name: title,
                    description,
                    status: Status.pending,
                    checked: false
                },
            ]);
        }



        setTitle("")
        setDescription("")
        setIsOpen(!isOpen)

    }

    const _handleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <Dialog open={isOpen} handler={_handleOpen} >
            <DialogHeader> My Title</DialogHeader>
            <form onSubmit={handleSubmit}>
                <DialogBody className="flex flex-col gap-5">
                    <Input label="Nombre" value={title} onChange={handleOnchangeTitle} />
                    <Input label="Descripcion" value={description} onChange={handleOnchangeDescription} />
                </DialogBody>
                <DialogFooter>
                    <div>
                        <Button variant="text" onClick={_handleOpen}>cancel</Button>
                        <Button type="submit">send</Button>
                    </div>
                </DialogFooter>
            </form>
        </Dialog>
    );
}