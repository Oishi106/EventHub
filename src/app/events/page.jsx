import Link from 'next/link'
import React from 'react'

export default async function EventPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()


    return (
        <div className="flex flex-col space-y-2">
            <p>Product page here</p>

            {
                data.map(user => <Link key={user.id} href={`/events/${user.id}`}>{user.name}</Link>)
            }
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Card Title
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>



    )
}
