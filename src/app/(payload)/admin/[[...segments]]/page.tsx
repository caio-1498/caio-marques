
import configPromise from '@payload-config'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'

const importMap: any = {}

export const generateMetadata = ({ params, searchParams }: any) =>
    generatePageMetadata({ config: configPromise, params, searchParams })

const Page = ({ params, searchParams }: any) =>
    <RootPage config={configPromise} params={params} searchParams={searchParams} importMap={importMap} />

export default Page
