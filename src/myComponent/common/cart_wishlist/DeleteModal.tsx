import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog";
type TDeleteModelProps = {
  title: string;
  onClick: () => void;
  icon:React.ReactElement;
  btnText:string;
};
function DeleteModal({ onClick, title,icon,  btnText }: TDeleteModelProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="flex items-center">
        {icon}
      </AlertDialogTrigger>
      <AlertDialogContent className="">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-Outfit">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base mt-5">
            This action cannot be undone. This will permanently delete your
            item.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel asChild>
            <Button  variant="outline" className="cursor-pointer text-md font-medium h-auto px-6 py-2 ">
              Cancel
            </Button>
          </AlertDialogCancel>
          <Button
            type="submit"
            className="cursor-pointer font-medium text-md h-auto px-6 py-2"
            onClick={onClick}
          >
            {  btnText}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteModal;
