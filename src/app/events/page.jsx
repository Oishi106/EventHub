import Link from 'next/link'
import React from 'react'

export default async function EventPage() {
    // Fetch all event details from the local MongoDB API
    const res = await fetch("https://my-first-project-with-next-backend.vercel.app/details", { cache: 'no-store' })
    const data = await res.json()

    
    const items = Array.isArray(data) ? data : (data?.items || [])

    return (
        <div className="px-6 py-8 max-w-7xl mx-auto">
            <header className="mb-6">
                <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">All Events</h1>
                <p className="text-sm text-slate-600">Browse upcoming events — click a card to view details.</p>
            </header>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {items.length === 0 && (
                    <div className="col-span-full text-center text-slate-600">No events found.</div>
                )}

                {items.map((event) => {
                    const id = event._id 
                    const title = event.title || event.name || 'Untitled Event'
                    const description = event.description || event.desc || ''
                    const image = event.image || event.imageUrl || 'https://via.placeholder.com/600x360?text=Event+Image'
                    const date = event.date || event.eventDate || ''
                    const location = event.location || event.venue || ''
                    const price = event.price || event.ticketPrice

                    return (
                        <article key={id} className="bg-white rounded-lg shadow-sm overflow-hidden border">
                            <figure className="h-44 bg-gray-100 overflow-hidden">
                                <img src={image} alt={title} className="w-full h-full object-cover" />
                            </figure>
                            <div className="p-4">
                                <h3 className="font-semibold text-lg leading-snug text-slate-900">{title}</h3>
                                <p className="text-xs text-slate-500 mt-1">{date} {date && location ? '·' : ''} {location}</p>
                                <p className="text-sm text-slate-700 mt-3 line-clamp-3">{description}</p>

                                <div className="mt-4 flex items-center justify-between">
                                    <Link href={`/events/${id}`} className="btn btn-sm btn-primary">View Details</Link>
                                
                                    <div className="text-sm font-medium text-emerald-600">{price ? `$${price}` : ''}</div>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}
