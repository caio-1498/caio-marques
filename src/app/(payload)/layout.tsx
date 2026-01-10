
import configPromise from '@payload-config'
import { RootLayout } from '@payloadcms/next/layouts'
import React from 'react'
import '@payloadcms/next/css'

const importMap: any = {}
const serverFunction: any = async () => Promise.resolve(null)

const Layout = ({ children }: { children: React.ReactNode }) => (
    <RootLayout config={configPromise} importMap={importMap} serverFunction={serverFunction}>
        {children}
    </RootLayout>
)

export default Layout
