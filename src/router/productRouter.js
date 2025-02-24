import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
const Loading = <div>Loading....</div>;
const ProdectList = lazy(() => import("../pages/products/ListPage"));
const ProdectAdd = lazy(() => import("../pages/products/AddPage"));
const ProdectRead = lazy(() => import("../pages/products/ReadPage"));
const ProdectModify = lazy(() => import("../pages/products/ModifyPage"));

const productRouter = () => {
  return [
    {
      path: "list",
      element: (
        <Suspense fallback={Loading}>
          <ProdectList />
        </Suspense>
      ),
    },
    {
      path: "",
      element: <Navigate replace to="/products/list" />,
    },
    {
      path: "add",
      element: (
        <Suspense fallback={Loading}>
          <ProdectAdd />
        </Suspense>
      ),
    },
    {
      path: "read/:pno",
      element: (
        <Suspense fallback={Loading}>
          <ProdectRead />
        </Suspense>
      ),
    },
    {
      path: "modify/:pno",
      element: (
        <Suspense fallback={Loading}>
          <ProdectModify />
        </Suspense>
      ),
    },
  ];
};
export default productRouter;
