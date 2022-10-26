import React from "react";
import Layout from "./components/layout/Layout";

const getLayout = () => {
    return(
        <Layout/>
    )
}

function App() {
    return(
        <>
            {getLayout()}
        </>
    )
}

export default App;