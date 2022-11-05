import { useMutation } from "@apollo/client";
import { CheckoutCart, UpdateAllMenu } from "../../graphql/mutations/CheckoutCart";

const useCheckoutCart = () => {
  const [checkoutCart, { loading: checkoutLoading }] = useMutation(CheckoutCart);
  const [updateAllMenu, { loading: updateAllMenuLoading }] = useMutation(UpdateAllMenu);
  return { checkoutCart, updateAllMenu, checkoutLoading, updateAllMenuLoading };
};

export default useCheckoutCart;
