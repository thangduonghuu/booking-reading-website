export function SearchBar() {
    return (
        <div className="flex items-center justify-center w-full">
            <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 w-full bg-[#C4C4C4] text-white placeholder:text-white rounded-lg focus:outline-none focus:ring-blue-500 outline-none"
            />
        </div>
    );
}