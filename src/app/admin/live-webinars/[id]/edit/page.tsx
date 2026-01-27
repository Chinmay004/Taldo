'use client';

import { useEffect, useState } from 'react';
import LiveWebinarForm from '@/components/admin/LiveWebinarForm';

export default function EditLiveWebinarPage({ params }: { params: { id: string } }) {
    const [webinar, setWebinar] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/live-webinars/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setWebinar(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [params.id]);

    if (loading) return <div className="p-8">Loading...</div>;
    if (!webinar) return <div className="p-8">Webinar not found</div>;

    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Edit Event</h1>
                <p className="text-gray-600">Update event details.</p>
            </div>

            <LiveWebinarForm mode="edit" initialData={webinar} />
        </div>
    );
}
