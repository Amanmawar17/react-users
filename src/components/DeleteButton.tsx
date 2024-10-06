interface DeleteModalProps {
    userId: number;
    onClose: () => void;
    onConfirm: () => void;
  }
  
  export default function DeleteModal({ userId, onClose, onConfirm }: DeleteModalProps) {
    return (
      <div className="modal">
        <div className="grid place-content-center mt-10 mx-3 gap-y-2">
          <h2 className="text-xl">Are you sure you want to delete this user?</h2>
          <p>User ID{userId}</p>
          <p>This action cannot be undone.</p>
          <button onClick={() => onConfirm()} className="px-3 py-1 bg-orange-600 text-white">Confirm Delete</button>
          <button onClick={onClose} className="px-3 py-1 bg-gray-600 text-white">Cancel</button>
        </div>
      </div>
    );
  }
  