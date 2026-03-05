import path from 'path'
import { buildConfig } from 'payload/config'
import { Authors } from './collections/Authors'
import { Posts } from './collections/Posts'
import { Media } from './collections/Media'

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '| Productividad con IA CMS',
    },
  },
  collections: [Authors, Posts, Media],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})