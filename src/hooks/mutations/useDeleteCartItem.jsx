import { useMutation } from "@apollo/client";
import { DeleteCartItem } from "../../graphql/mutations/DeleteCartItem";

const useDeleteCartItem = () => {
  const [deleteCartItem, { loading: deleteLoading }] = useMutation(DeleteCartItem);

  return { deleteCartItem, deleteLoading };
};

export default useDeleteCartItem;
