import { Button, Navbar, Typography } from "@material-tailwind/react";
import { useTasks } from "../context/TaskContext";
import { Plus } from "lucide-react";
import Alert from "./Alert";

export const Header = () => {
    const { setIsOpen } = useTasks()

    const onClick = () => {
        setIsOpen(true)
    }




    return (
        <div className="w-full">
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 flex justify-between items-center">
                <Typography as={"a"} href="/" className="mr-4 cursor-pointer py-1.5 font-bold text-black text-3xl">
                    Todo List ✅
                </Typography>
                <div className="flex gap-x-5 ">
                    <Alert />
                    <Button onClick={onClick} className="flex items-center">
                        <Plus className="mr-2" />
                        Add Todo
                    </Button>
                </div>
            </Navbar>
        </div>
    );
}
