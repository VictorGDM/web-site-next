export default function UserDashboard() {
    return (
        <main className="grid grid-cols-2 gap-4 min-h-96">
            <div className="col-span-1 justify-self-center self-center">
                <p className="text-5xl font-semibold">
                    Bem Vindo!
                </p>
            </div>
            <div className="col-span-1 justify-self-center self-center">
                <div className="grid grid-cols-2 gap-4 pb-2">
                    <div className="h-36 w-36 bg-white rounded-md hover:bg-zinc-500"></div>
                    <div className="h-36 w-36 bg-white rounded-md hover:bg-zinc-500"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="h-36 w-36 bg-white rounded-md hover:bg-zinc-500"></div>
                    <div className="h-36 w-36 bg-white rounded-md hover:bg-zinc-500"></div>
                </div>
            </div>
        </main>
    );
}