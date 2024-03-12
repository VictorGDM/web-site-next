import Link from "next/link";

export default function UserPage({ params }: { params: { id: string } }) {
    return (
        <div className="flex justify-between py-2 px-8">
            <p>Usuário {params.id}</p>
            <Link href="/user" replace className="rounded-md bg-white text-black py-1 px-6 hover:bg-zinc-400 hover:ease-in-out hover:text-white duration-300">Voltar</Link>
        </div>
    )
}