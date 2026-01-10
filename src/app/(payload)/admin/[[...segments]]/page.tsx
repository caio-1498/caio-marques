
import configPromise from '@payload-config'
import { RootPage } from '@payloadcms/next/views'
import { generatePageMetadata } from '@payloadcms/next/utilities'

export const generateMetadata = ({ params, searchParams }: any) =>
    generatePageMetadata({ config: configPromise, params, searchParams })

const Page = ({ params, searchParams }: any) =>
    <RootPage config={configPromise} params={params} searchParams={searchParams} />

export default Page
