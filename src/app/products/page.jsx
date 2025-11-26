import Link from 'next/link'
import React from 'react'

export default async function ProductPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()

    
    return (
        <div className="flex flex-col space-y-2">
            <p>Product page here</p>

           {
            data.map(user => <Link key={user.id} href={`/products/${user.id}`}>{user.name}</Link>)
           }
        </div>



    )
}
