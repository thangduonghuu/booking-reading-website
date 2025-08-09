export function Button({ children, onClick, className }: { children: React.ReactNode; onClick?: () => void; className?: string }) {
    return (
        <button
            onClick={onClick}
            className={`px-8 py-4 rounded-[8px] bg-[#d0d0d0] text-black rounded hover:bg-[#c0c0c0] cursor-pointer transition-colors ${className}`}
        >
            {children}
        </button>
    );
}