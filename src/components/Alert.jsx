import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useTasks } from "../context/TaskContext";

const Alert = () => {
    const { setTasks } = useTasks()

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const handleDelete = () => {
        setTasks((prevTask) => prevTask.filter((T) => !T.checked))
        setOpen(!open)
    }

    return (
        <div>
            <Button className="flex items-center" variant="outlined" onClick={handleOpen}>
                <Trash2 className="mr-2 text-red-500" />
                Delete checked
            </Button>

            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>
                    Estas seguro de borrar?
                </DialogHeader>
                <DialogBody>
                    Se eliminara toda las tareas seleccionas ✅
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"

                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleDelete}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
}

export default Alert;