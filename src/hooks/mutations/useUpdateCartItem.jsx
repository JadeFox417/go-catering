import { useMutation } from "@apollo/client";
import { UpdateCartItem } from "../../graphql/mutations/UpdateCartItem";

const useUpdateCartItem = () => {
  const [updateCart, { loading: updateLoading }] = useMutation(UpdateCartItem);

  return { updateCart, updateLoading };
};

export default useUpdateCartItem;
