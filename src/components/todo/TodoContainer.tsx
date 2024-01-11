import { Button } from "../ui/button";
import AddToModal from "./AddToModal";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <Button className="bg-primary-gradient px-6 py-2 rounded-lg ">
          Add todo
        </Button>
        <AddToModal />
        <Button className="bg-primary-gradient px-6 py-2 rounded-lg ">
          Filter
        </Button>
      </div>
      <div className="w-full h-full bg-primary-gradient rounded-xl p-[5px] ">
        <div className="bg-white p-5 w-ful h-full rounded-lg  space-y-3">
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
        {/* <div className="bg-white p-3 rounded-lg">
          <p className="text-center text-xl font-semibold">
            There is no task pending
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
