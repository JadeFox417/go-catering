import { useQuery } from "@apollo/client";
import { GetReview } from "../../graphql/queries/GetReview";

const useGetReview = () => {
  const { data: reviewData, loading: reviewLoading, error: reviewError } = useQuery(GetReview);
  return { reviewData, reviewLoading, reviewError };
};

export default useGetReview;
