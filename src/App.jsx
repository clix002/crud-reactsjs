import { Header } from "./components/Header";
import { Table } from "./components/Table";
import { Form } from "./components/Form";
import { TaskProvider } from "./context/TaskContext";



export default function App() {


  return (
    <TaskProvider>
      <div className="max-w-7xl mx-auto flex flex-col gap-y-5">
        <Header />
        <Table />
        <Form />
      </div>
    </TaskProvider>
  );
}
