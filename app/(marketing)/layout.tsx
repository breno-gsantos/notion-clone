import { Navbar } from "./_components/navbar";

export default function MarketingLayout({children}:{children:React.ReactNode}){
    return (
        <div className="h-full dark:bg-[#1f1f1f]">
            <main className="h-full pt-40">
                <Navbar />
                {children}
            </main>
        </div>
    )
}