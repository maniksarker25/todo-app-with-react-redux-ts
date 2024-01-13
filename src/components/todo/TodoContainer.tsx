// import { useAppSelector } from "@/redux/hook";
import AddToModal from "./AddToModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // from local state
  // const { todos } = useAppSelector((state) => state.todos);
  // from database
  const { data: todos, isLoading } = useGetTodosQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <AddToModal />
        <TodoFilter />
      </div>
      <div className="w-full h-full bg-primary-gradient rounded-xl p-[5px] ">
        <div className="bg-white p-5 w-ful h-full rounded-lg  space-y-3">
          {todos?.length > 0 ? (
            todos?.map((item, index) => (
              <TodoCard key={index} {...item}></TodoCard>
            ))
          ) : (
            <div className="bg-white p-3 rounded-lg">
              <p className="text-center text-xl font-semibold">
                There is no task pending
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
