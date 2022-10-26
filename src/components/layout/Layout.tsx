import React from 'react'
import Header from '../common/header/Header'


const Layout = ({children}: any) => {
    return (<>
            <Header title="Welcome to Oscarmild Blog" />
            <div className='min-h-screen p-2'>
                {children}
            </div>
        </>
    )
}

export default Layout;