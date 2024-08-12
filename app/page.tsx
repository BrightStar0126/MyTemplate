'use client'
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter()
 
  return (
    <>
      <button type="button" onClick={() => router.push('/dashboard')}>
        Dashboard
      </button>
      <button type="button" onClick={() => router.push('/team')}>
        Team
      </button>
    </>
  )
}