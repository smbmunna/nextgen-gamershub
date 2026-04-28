
interface Props {
    genre: {
        id: number;
        name: string;
    }
}

export default function GenreList({ genre }: Props) {
    return (
        <li key={genre.id}><a>{genre.name}</a></li>
    )
}