import { redirect } from 'next/navigation'
 
async function fetchTeam(id: string) {
  try {
    const res = await fetch('https://localhost:5000/api');
    return res.json();
  } catch {
    return undefined;
  }
}
 
export default async function Profile({ params }: { params: { id: string } }) {
  const team = await fetchTeam(params.id)
  if (!team) {
    redirect('/login');
  }
}