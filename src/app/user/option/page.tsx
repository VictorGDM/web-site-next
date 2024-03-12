import Link from "next/link";

export default function UserOption() {
    return (
        <div className="flex justify-between py-2 px-8">
            <p>Opções</p>
            <Link href="/user" replace className="rounded-md bg-white text-black py-1 px-6 hover:bg-zinc-400 hover:ease-in-out hover:text-white duration-300">Voltar</Link>
        </div>
    )
}