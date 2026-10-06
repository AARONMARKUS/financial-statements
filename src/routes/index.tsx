import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
    <div className="min-h-screen bg-zinc-950 text-center py-10">
  <h1 className="text-5xl font-bold tracking-tight text-white">
    Welcome to Kissena Baked Goods
  </h1>

  <h2 className="mt-3 text-2xl font-medium text-zinc-400">
    Financial Statements
  </h2>

  <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-emerald-500"></div>
  <p className='mx-20 text-lg text-green-200'>We are a new company. Year 2025 is our first full year of operations. On this site, we will disclose the financial statements for our investors.</p>
 
</div> 

 </>)
}
