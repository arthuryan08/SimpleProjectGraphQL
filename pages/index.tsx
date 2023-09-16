import GqlClient from '../graphql/apollo-client'
import { gql } from "@apollo/client";
import { Link } from '@/types/link';

type Props = {
  links: Link[]
}

export default function Home( { links }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">

      <div className='flex flex-col items-center space-y-4'>
        <h1 className="text-6xl font-bold">
          Lista de Links
        </h1> 
        <h3 className="text-2xl font-bold">
          Total de links: { links.length }
        </h3>
      </div>
      
      
      <div className="mb-32 grid text-center gap-3 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      {links.map(link => (
          <a
          href={`https://${link.url}`}
          className="group rounded-lg border border-gray-400 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {link.title}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {link.url}
          </p>
        </a>
        ))}
      </div>
    </main>
  )
}

export const getServerSideProps = async () => {
  const { data } = await GqlClient.query({
    query: gql`
      query {
        links {
          title
          url
        }
      }
    `
  });
  
  return {
    props: {
      links: data.links
    }
  }
}