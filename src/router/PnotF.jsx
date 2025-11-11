function PageNotFound(){
    return(
        <>
        <div className="text-center text-4xl font-bold text-red-600">404 Page Not Found</div>
        <div className="mt-6 space-y-4">
            <p className="text-lg text-gray-700">Sorry — the page you’re looking for doesn’t exist or has been moved.</p>
            <div className="flex items-center justify-center gap-3">
                <a href="/" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700">Go to Home</a>
                <button onClick={() => window.history.back()} className="px-4 py-2 border rounded-md hover:bg-gray-100">Go Back</button>
            </div>
            <small className="block text-sm text-gray-500">If you think this is a mistake, check the URL or contact support.</small>
        </div>
        </>
    )
}

export default PageNotFound;