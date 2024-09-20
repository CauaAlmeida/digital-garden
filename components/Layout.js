import Head from 'next/head'
// import BasicTree from 'lib/MyFolderTree'
export const siteTitle = 'riyi - arquivo digital'
import {Box} from '@mui/material'
export default function Layout({children}) {

    return (
        <div>
            <main className= "theme-light">
                {children}
            </main>
        </div>
    )
}

