import { useSubscription } from "@apollo/client";
import { SubscriptionCart } from "../../graphql/subscriptions/SubscriptionCart";

const useSubscriptionCart = () => {
  const { data: cartData, loading: cartLoading, error: cartError } = useSubscription(SubscriptionCart);
  return { cartData, cartLoading, cartError };
};

export default useSubscriptionCart;
