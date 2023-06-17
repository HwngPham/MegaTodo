import { Progress } from "@geist-ui/core";
import { useMemo } from "react";
import { useStore } from "../../../hooks/store";

export const ProgressBar = () => {
  const { todos } = useStore();

  const progress = useMemo(() => {
    const isDoneCount = todos.filter((e) => e.isDone).length;
    return Math.ceil((isDoneCount / todos.length) * 100);
  }, [todos]);

  return <Progress value={progress}></Progress>;
};
