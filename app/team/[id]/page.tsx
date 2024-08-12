'use client'
import { redirect, useRouter } from 'next/navigation'
 
export default function Profile({ params }: { params: { id: string } }) {
  const router = useRouter();
  return (
    <>
          <button type="button" key={params.id} onClick={() => router.back()}>
            Team{params.id}
          </button>
    </>
  )
}