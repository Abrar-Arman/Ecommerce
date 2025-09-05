import clsx from "clsx";
import { Check, CircleX } from "lucide-react";
import { useEffect } from "react";

type TAlertProps = {
  msg: string;
  type?: "success" | "error";
  showMsg:React.Dispatch<React.SetStateAction<boolean>>
};

function Alert({ msg, type = "success",showMsg }: TAlertProps) {
  const isSuccess = type === "success";
  useEffect(()=>{
   setTimeout(()=>showMsg(false),3000)
  },[showMsg])
  return (
    <div
      className={clsx(
        "fixed bottom-6 right-6 flex items-center gap-2 px-8 py-3 rounded-lg shadow-md text-white",
        isSuccess ? "bg-green-600" : "bg-red-600"
      )}
    >
      {isSuccess ? <Check className="w-5 h-5" /> : <CircleX className="w-5 h-5" />}
      <p className="text-md font-medium">{msg}</p>
    </div>
  );
}

export default Alert;
