'use client'
import { useRouter } from "next/navigation";
import { Suspense } from 'react'

export default function Page() {
  const router = useRouter();
  let while_count = 20;
  const count = [];
  while (while_count--) {
    count.push(while_count);
  }

  return (
    <>
      {count.map(item => {
        return (
          <>
              <button type="button" key={item} onClick={() => router.push(`/team/${item}`)}>
                Team{item}
              </button>
            <br />
          </>
        )
      })}
      <button type="button" onClick={() => router.push(`/`)}>
        Home
      </button>
    </>
  )
}