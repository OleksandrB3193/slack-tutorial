"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function TestPage() {
  const tasks = useQuery(api.tasks.get, {});
  return (
    <div>
      <ul>
        {tasks?.map((task) => (
          <li key={task._id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}
