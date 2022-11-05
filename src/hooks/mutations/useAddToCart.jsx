import { useMutation } from "@apollo/client";
import { AddToCart } from "../../graphql/mutations/AddToCart";

const useAddToCart = () => {
  const [addToCart, { loading: addLoading }] = useMutation(AddToCart);

  return { addToCart, addLoading };
};

export default useAddToCart;
