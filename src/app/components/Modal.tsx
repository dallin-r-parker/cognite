import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import { Fragment, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  handleAddFriend: (name: string) => void;
  handleInput: (name: string) => void;
}

export default function Modal({
  isOpen,
  setIsOpen,
  handleAddFriend,
}: ModalProps) {
  const [contact, setNewContact] = useState("");
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsOpen(false)}
        >
          <div className="fixed backdrop-blur-xs inset-0 flex items-center justify-center p-4">
            <DialogPanel className="w-full max-w-md bg-white rounded-lg p-6 shadow-lg">
              <DialogTitle className="text-lg font-semibold">
                New Message
              </DialogTitle>
              <input
                type="text"
                placeholder="Enter a friend's name"
                className="w-full p-2 border rounded mb-4"
                value={contact}
                onChange={(e) => setNewContact(e.target.value)}
              />
              <div className="mt-4">
                <button
                  onClick={() => {
                    setNewContact("");
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 bg-slate-700 text-white rounded-lg"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setNewContact("");
                    handleAddFriend(contact);
                  }}
                  className="px-4 py-2 ml-2 bg-blue-700 text-white rounded-lg"
                >
                  Add Friend
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
