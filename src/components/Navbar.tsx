
import Link from "next/link";
import MaxWidthWrapper from "./MaxWIdthWrapper";
import { Button, buttonVariants } from "./ui/button";
import { SignInButton, SignUpButton, UserButton, currentUser } from "@clerk/nextjs"
import { cn } from "@/lib/utils";



const Navbar=async ()=>{
    const user=await currentUser();
    return(
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href='/' className="flex z-40 font-semibold">
                        <span>poki.</span>
                    </Link>
                    <div className="hidden items-center space-x-4 sm:flex">
                        <>
                            <Link href='/pricing' className={buttonVariants({variant:"ghost",size:"sm"})}>Pricing</Link>
                            {!user && (
                                <>
                                    <SignInButton>
                                        <div className={cn(buttonVariants({size:"sm"}),"bg-black text-white cursor-pointer")}>Login</div>
                                    </SignInButton>
                                    <SignUpButton>
                                        <div className={cn(buttonVariants({size:"sm"}),"bg-black text-white cursor-pointer")}>Get Started</div>
                                    </SignUpButton>
                                </>
                            )}
                            {!!user && (   
                                <>
                                    <span className="text-sm font-semibold text-red-500 capitalize">{`Hi ${user.firstName}`}</span>
                                    <UserButton afterSignOutUrl="/"/>
                                    <Link href='/dashboard' className={cn(buttonVariants({size:"sm"}),"bg-black text-white")}>Go To Dashboard</Link>
                                </>
                            )}
                        </>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar;