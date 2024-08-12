'use client'
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const count = [1, 2, 3, 4];
  console.log(count);

  return (
    <>
      {count.map(item => {
        return (
          <button type="button" key={item} onClick={() => router.push(`/team/${item}`)}>
            Team{item}
          </button>
        )
      }
      )}
    </>
  )
}