import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import { Center, Spinner } from "@chakra-ui/react";

const AppRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        const { pageTitle, path, Component } = route;
        return (
          <Route
            key={index}
            path={path}
            element={
              <>
                <Helmet>
                  <title>{`${
                    pageTitle && `${pageTitle} - `
                  }Carbon Credits`}</title>
                </Helmet>
                <Layout>
                  <Suspense
                    fallback={
                      <Center h={window.innerHeight} w={"full"} flex={1}>
                        <Spinner
                          thickness="4px"
                          speed="0.60s"
                          emptyColor="gray.200"
                          color="red.700"
                          size="xl"
                        />
                      </Center>
                    }>
                    <Component />
                  </Suspense>
                </Layout>
              </>
            }
          />
        );
      })}
    </Routes>
  );
};

const publicRoutes = [
    {
        path: "/",
        pageTitle: "",
        Component: lazy(() => import("../Pages/Home")),
    },

];


export default AppRoutes;