import { Button, Card, Typography } from "@material-tailwind/react";
import { Edit, Trash } from "lucide-react";
import { statusConfigByStatus, statusConfigs } from "../constants";
import { cn } from "../lib/util";
import { useTasks } from "../context/TaskContext";

const TABLE_HEAD = ["Nombre", "Descripcion", "Estado", "Acciones"];

export function Table() {

    const { tasks, setTasks, isOpen, setIsOpen, setSelectedTask } = useTasks()


    const handleClickStatus = ({ id, status }) => {
        setTasks((prevTask) => {
            return prevTask.map((prev) => {
                if (prev.id !== id) return prev

                const statusConfigIndex = statusConfigs.findIndex((index) => index.status === status)

                //  if (statusConfigIndex === statusConfigs.length - 1) return prev // optional


                const nextStatusConfig = statusConfigs[statusConfigIndex + 1]


                if (!nextStatusConfig) return prev

                return {
                    ...prev,
                    status: nextStatusConfig.status
                }


            })
        })
    };

    const hanldeEdit = (task) => {
        setSelectedTask(task)
        setIsOpen(!isOpen)
    }

    const handleDelete = (id) => {
        setTasks((prevTask) => prevTask.filter((task) => task.id !== id))
    }


    return (
        <Card className="h-full w-full ">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th
                                key={head}
                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                            >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tasks?.map((task) => {
                        const { id, name, description, status } = task
                        const statusConfig = statusConfigByStatus[status]
                        return (
                            <tr key={id}>
                                <td className={"p-4"}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {name}
                                    </Typography>
                                </td>
                                <td className={"p-4"}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {description}
                                    </Typography>
                                </td>
                                <td className={"p-4"}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        <Button className={cn(" w-[100px] text-center text-black", statusConfig.color)}
                                            onClick={() => handleClickStatus({ id, status })}

                                        >
                                            {statusConfig?.label}
                                        </Button>
                                    </Typography>
                                </td>
                                <td className={"p-4"}>
                                    <Typography
                                        as="a"
                                        href="#"
                                        variant="small"
                                        color="blue-gray"
                                        className="font-medium"
                                    >
                                        <div className="flex gap-x-2 ">
                                            <Button size="sm" variant="text" onClick={() => hanldeEdit(task)}>
                                                <Edit />
                                            </Button>
                                            <Button size="sm" variant="text" color="red" onClick={() => handleDelete(id)}>
                                                <Trash />
                                            </Button>
                                        </div>
                                    </Typography>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
}