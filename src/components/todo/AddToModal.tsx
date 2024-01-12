import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addTodo } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hook";
import { DialogClose } from "@radix-ui/react-dialog";
import { FormEvent, useState } from "react";
const AddToModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();

  // handle on submit
  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addTodo({ title, description }));
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add task</DialogTitle>
          <DialogDescription>
            Add your task that you want to finish
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleOnSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setTitle(e.target.value)}
                id="task"
                name="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                name="description"
                className="col-span-3"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Submit</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddToModal;
