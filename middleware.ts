import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'
 
export function middleware(req: NextRequest, event: NextFetchEvent) {
  
    const res = fetch('http://localhost:5000/api/user/login', {
      method: 'POST',
      body: JSON.stringify(
        { 
          email: "brightstar09030826@gmail.com",
          password: "111111"
        }
      ),
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
  return NextResponse.next();
}