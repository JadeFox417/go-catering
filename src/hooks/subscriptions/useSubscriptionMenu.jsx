import { useSubscription } from "@apollo/client";
import { SubscriptionMenu } from "../../graphql/subscriptions/SubscriptionMenu";

const useSubscriptionMenu = () => {
  const { data: menuData, loading: menuLoading, error: menuError } = useSubscription(SubscriptionMenu);
  return { menuData, menuLoading, menuError };
};

export default useSubscriptionMenu;
