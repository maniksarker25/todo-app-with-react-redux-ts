import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addTodo } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hook";
import { DialogClose } from "@radix-ui/react-dialog";
import { FormEvent, useState } from "react";
const AddToModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");
  // console.log(priority);
  const dispatch = useAppDispatch();

  // handle on submit
  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    const randomString = Math.random().toString(36).substring(2, 7);
    const taskDetails = { id: randomString, title, description, priority };
    dispatch(addTodo(taskDetails));
  };

  // handle priority change
  const handlePriorityChange = (selectedPriority: string) => {
    setPriority(selectedPriority);
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
            <div className="flex gap-2 items-center">
              <Label htmlFor="description" className="text-right">
                Priority
              </Label>
              <Select onValueChange={handlePriorityChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Priority</SelectLabel>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
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
