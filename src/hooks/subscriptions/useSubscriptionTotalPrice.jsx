import { useSubscription } from "@apollo/client";
import { SubscriptionTotalPrice } from "../../graphql/subscriptions/SubscriptionTotalPrice";

const useSubscriptionTotalPrice = () => {
  const {
    data: totalPriceData,
    loading: totalPriceLoading,
    error: totalPriceError,
  } = useSubscription(SubscriptionTotalPrice);
  return { totalPriceData, totalPriceLoading, totalPriceError };
};

export default useSubscriptionTotalPrice;
