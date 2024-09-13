import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const UserCard = ({ user, index }) => {
  return (
    <div key={index} className="bg-white w-full md:w-[45%] xl:w-[30%] shadow-lg p-6 mb-4 rounded-lg">
      <img
        className="w-16 h-16 rounded-full"
        src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
      />
      <h3 className="text-2xl mt-5 font-sans text-black font-bold">
        {user.first_name} {user.last_name}
      </h3>
      <div className="flex gap-2 items-center">
        <FaLocationDot className="text-black" />
        <p className="text-gray-600 text-sm">{user.city}</p>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-0 mt-10 justify-between items-center">
        <div>
          <div className="flex gap-2 items-center">
            <FaPhoneAlt size={14} color="black" />
            <p className="text-black font-bold">{user.contact_number}</p>
          </div>
          <p className="text-gray-400 text-[12px]">Available on phone</p>
        </div>
        <Dialog className="bg-white">
          <DialogTrigger className="bg-black cursor-pointer rounded-lg p-4 py-2">
            <h1 className="text-white">Fetch Details</h1>
          </DialogTrigger>
          <DialogContent className="bg-white text-black">
            <div className="text-black relative">
              <h1 className="text-2xl font-sans mb-2 font-bold">
                Fetch Details
              </h1>
              <p className="text-gray-400 text-[13px] mb-4">
                Here are the details of following employee.
              </p>
              <h1 className="text-sm font-sans">
                Name: {user.first_name} {user.last_name}
              </h1>
              <h1 className="text-sm font-sans">Location: {user.city}</h1>
              <h1 className="text-sm font-sans">
                Contact Number: {user.contact_number}
              </h1>

              <h2 className="mt-3 mb-3">Profile Image:</h2>
              <img
                className="w-40 h-40"
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
                alt=""
              />
              <DialogClose>
                <div className="absolute bottom-0 right-0 px-6 shadow-lg py-2 rounded-lg border border-gray-500">
                  <h1 className="font-sans font-semibold">Close</h1>
                </div>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default UserCard;
