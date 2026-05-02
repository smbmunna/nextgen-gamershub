

export default function GameCardSkeleton() {

    return (
        <div className="card bg-base-100 shadow-md animate-pulse w-[350px]">
            <div className="h-48 bg-base-300 rounded-t-xl" />
            <div className="card-body gap-3">
                <div className="h-4 bg-base-300 rounded w-3/4" />
                <div className="h-4 bg-base-300 rounded w-1/2" />
            </div>
        </div>
    )
}