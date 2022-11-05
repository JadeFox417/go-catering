import { useMutation } from "@apollo/client";
import { UpdateMenuTrue, UpdateMenuFalse } from "../../graphql/mutations/UpdateMenu";

const useUpdateMenu = () => {
  const [updateMenuTrue] = useMutation(UpdateMenuTrue);
  const [updateMenuFalse] = useMutation(UpdateMenuFalse);

  return { updateMenuTrue, updateMenuFalse };
};

export default useUpdateMenu;
