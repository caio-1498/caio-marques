
import configPromise from '@payload-config'
import { RootLayout } from '@payloadcms/next/layouts'
import React from 'react'
import '@payloadcms/next/css'

const Layout = ({ children }: { children: React.ReactNode }) => (
    <RootLayout config={configPromise}>
        {children}
    </RootLayout>
)

export default Layout
