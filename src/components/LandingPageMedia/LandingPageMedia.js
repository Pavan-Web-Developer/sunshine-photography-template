"use client";
import { useGetLandingPageMedia } from "@/utils/hooks/apiHooks";
import CustomHeader from "../CustomHeader";

const LandingPageMedia = () => {
  const { data, isLoading } = useGetLandingPageMedia("image");
  console.log(data);
  return <CustomHeader title={"Our work"} />;
};

export default LandingPageMedia;
// TODO : Image listing and create a global "reusable" function that accepts image and video both if possible arrows/navigation

// check this then -> src\utils\hooks\apiHooks\index.js

// const SampleComponent = () => {
//   /* Example usage of queries and mutations:*/

//   // Query Example (like useGetLandingPageMedia)
//   const {
//     data, // The query result data
//     isLoading, // Boolean indicating if query is loading
//     isError, // Boolean indicating if query has error
//     error, // Error object if query failed
//     refetch, // Function to manually refetch
//     isFetching, // Boolean indicating if query is fetching
//   } = useGetLandingPageMedia("image");

//   // Mutation Example (like useContact)
//   const {
//     mutate, // Function to trigger the mutation
//     mutateAsync, // Async version of mutate that returns a promise
//     isLoading, // Boolean indicating if mutation is loading
//     isError, // Boolean indicating if mutation has error
//     error, // Error object if mutation failed
//     reset, // Function to reset mutation state
//   } = useContact();

//   // Example using mutate
//   mutate(data, {
//     onSuccess: (result) => {
//       console.log("Success:", result);
//     },
//     onError: (error) => {
//       console.log("Error:", error);
//     },
//   });

//   // Example using mutateAsync
//   const handleSubmit = async () => {
//     try {
//       const result = await mutateAsync(data);
//       console.log("Success:", result);
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   };

//   return <></>;
// };
