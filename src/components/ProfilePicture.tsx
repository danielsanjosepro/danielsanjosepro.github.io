"use client";
import Image from 'next/image';

export const ProfilePicture = () => {
    return (
        <div className="flex max-md:justify-center p-8">
            <Image src="/img/me.jpg" alt="Daniel San José Pro" width={200} height={200} className="rounded-full" />
        </div>
    )
}
