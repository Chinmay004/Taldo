'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

interface LiveWebinar {
    id?: string;
    title: string;
    date: string;
    image: string;
    link?: string;
    published: boolean;
}

interface LiveWebinarFormProps {
    initialData?: LiveWebinar;
    mode: 'create' | 'edit';
}

export default function LiveWebinarForm({ initialData, mode }: LiveWebinarFormProps) {
    const router = useRouter();
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState<LiveWebinar>({
        title: initialData?.title || '',
        date: initialData?.date ? new Date(initialData.date).toISOString().slice(0, 16) : '', // format for datetime-local
        image: initialData?.image || '',
        link: initialData?.link || '',
        published: initialData?.published ?? true,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('');
        setSaving(true);

        try {
            const url = mode === 'create' ? '/api/live-webinars' : `/api/live-webinars/${initialData?.id}`;
            const method = mode === 'create' ? 'POST' : 'PUT';

            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    date: new Date(formData.date).toISOString(), // Convert back to ISO for API
                }),
            });

            if (response.ok) {
                router.push('/admin/live-webinars');
                router.refresh();
            } else {
                const data = await response.json();
                setError(data.error || `Failed to ${mode} webinar`);
            }
        } catch (err) {
            setError(`Failed to ${mode} webinar`);
        } finally {
            setSaving(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            {error && (
                <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                </div>
            )}

            <div className="space-y-6">
                {/* Title */}
                <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        required
                    />
                </div>

                {/* Date */}
                <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Date & Time</label>
                    <input
                        type="datetime-local"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        required
                    />
                </div>

                {/* Image URL */}
                <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Image URL</label>
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        required
                    />
                </div>

                {/* Link - Optional */}
                <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Join Link (Optional)</label>
                    <input
                        type="text"
                        name="link"
                        value={formData.link}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="#"
                    />
                </div>

                {/* Published */}
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="published"
                        name="published"
                        checked={formData.published}
                        onChange={handleChange}
                        className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="published" className="font-medium text-gray-900">Published</label>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                    <button
                        type="submit"
                        disabled={saving}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors disabled:opacity-50"
                    >
                        {saving ? 'Saving...' : mode === 'create' ? 'Create Event' : 'Save Changes'}
                    </button>
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="text-gray-600 hover:text-gray-900 font-semibold px-6 py-3"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    );
}
