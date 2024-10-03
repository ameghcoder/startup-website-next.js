"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import ModeToggle from './modeToggle';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <nav className="bg-background/50 sticky top-0 backdrop-blur-lg border-b z-50">
            <div className="container mx-auto flex justify-between items-center py-2 px-8 md:px-4">
                <div className="text-2xl font-bold">
                    <Link href="/">Cocker</Link>
                </div>
                <div className="hidden md:flex flex-col md:flex-row md:items-center">
                    <Link href="/" className="hover:underline block mt-4 md:mt-0 md:ml-6 text-sm transition-colors hover:text-foreground/80 text-foreground/60">Home</Link>
                    <Link href="/about" className="hover:underline block mt-4 md:mt-0 md:ml-6 text-sm transition-colors hover:text-foreground/80 text-foreground/60">About</Link>
                    <Link href="/blog" className="hover:underline block mt-4 md:mt-0 md:ml-6 text-sm transition-colors hover:text-foreground/80 text-foreground/60">Blog</Link>
                    <Link href="/contact" className="hover:underline block mt-4 md:mt-0 md:ml-6 text-sm transition-colors hover:text-foreground/80 text-foreground/60">Contact</Link>
                    <div className="px-2 flex gap-2">
                        <Button className="ml-1" variant="outline">Login</Button>
                        <Button className="ml-1" variant="secondary">Secondary</Button>
                        <ModeToggle />
                    </div>
                </div>
                <div className="md:hidden flex items-center justify-center">
                    <span className="mx-2">
                        <ModeToggle />
                    </span>
                    <Sheet>
                        <SheetTrigger>
                            <HamburgerMenuIcon className="w-8 h-8 text-foreground/60" />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader className="mt-8">
                                <SheetTitle>Cocker</SheetTitle>
                                <SheetDescription className="flex flex-col gap-4">
                                    <Link href="/" className="text-left hover:underline text-sm transition-colors hover:text-foreground/80 text-foreground/60">Home</Link>
                                    <Link href="/about" className="text-left hover:underline text-sm transition-colors hover:text-foreground/80 text-foreground/60">About</Link>
                                    <Link href="/blog" className="text-left hover:underline text-sm transition-colors hover:text-foreground/80 text-foreground/60">Blog</Link>
                                    <Link href="/contact" className="text-left hover:underline text-sm transition-colors hover:text-foreground/80 text-foreground/60">Contact</Link>
                                    <Button className="text-xs" variant="outline">Login</Button>
                                    <Button className="text-xs" variant="secondary">Secondary</Button>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
