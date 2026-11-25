import Link from "next/link";

export default function Home() {
    return (
        <main className="mx-auto max-w-5xl px-6 py-12">
            <h1 className="text-4xl font-bold">All Treasure, No Trash</h1>
            <p className="mt-4 max-w-2xl leading-relaxed">
                One man's trash is... you know the rest. We sell both new and
                preowned tech. From gadgets and hardware, to video games and
                everything in between. Find your treasure here today!
            </p>
            <ul className="mt-8 list-disc space-y-2 pl-6">
                <li> Games </li>
                <li> Electronics </li>
                <li> Tech Gadgets </li>
            </ul>

            <Link href="/products">Browse products</Link>
        </main>
    );
}
