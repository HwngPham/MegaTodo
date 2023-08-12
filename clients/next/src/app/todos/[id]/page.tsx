interface TodoItemPageProps {
  params: {
    id: string;
  };
}

export default function TodoItem({ params }: TodoItemPageProps) {
  return <div>todo id {params.id}</div>;
}
