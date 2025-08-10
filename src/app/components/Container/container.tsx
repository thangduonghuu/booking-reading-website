export default function Container({ className, children }: { className?: string; children: React.ReactNode }) {
    return (
        <div className={`container mx-auto px-4 z-[1] py-8 max-w-[1320px] ${className}`}>
            {children}
        </div>
    );
}