import GameCardSkeleton from "./GameCardSkeleton";

export default function GameGridSkeleton() {
    const sixSkeletons = [1, 2, 3, 4, 5, 6];

    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                sixSkeletons.map((skeleton, idx) => (
                    <GameCardSkeleton key={idx}/>
                ))
            }
        </div>
    )
}