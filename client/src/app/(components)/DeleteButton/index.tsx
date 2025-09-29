"use client"

type DeleteButtonProps = {
    id: string | number;
    onDelete: (id: string | number) => void;
    label?: string;
}

const DeleteButton = ({ id, onDelete, label = "Delete" }: DeleteButtonProps) => {
  return (
    <button
      onClick={() => onDelete(id)}
      className="px-4 bg-red-500 text-white rounded hover:bg-red-700"
    >
      {label}
    </button>
  );
};

export default DeleteButton