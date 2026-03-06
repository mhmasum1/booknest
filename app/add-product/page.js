export default function AddProductPage() {
    return (
        <div className="mx-auto max-w-2xl px-4 py-10">
            <div className="rounded-xl border bg-white p-6 shadow">
                <h1 className="text-3xl font-bold">Add Product</h1>
                <form className="mt-6 space-y-4">
                    <input type="text" placeholder="Title" className="w-full rounded border px-4 py-2" />
                    <input type="text" placeholder="Short Description" className="w-full rounded border px-4 py-2" />
                    <textarea placeholder="Full Description" className="w-full rounded border px-4 py-2" rows="5"></textarea>
                    <input type="number" placeholder="Price" className="w-full rounded border px-4 py-2" />
                    <input type="text" placeholder="Category / Date / Priority" className="w-full rounded border px-4 py-2" />
                    <input type="text" placeholder="Image URL (optional)" className="w-full rounded border px-4 py-2" />
                    <button className="rounded bg-blue-600 px-4 py-2 text-white">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}