"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
// import { AspectRatio } from "@/components/ui/aspect-ratio"

interface ProductGalleryProps {
    images: string[]
    title: string
}

export function ProductGallery({ images, title }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(0)

    // Use placeholder if no images
    const displayImages = images.length > 0 ? images : ["/placeholder.jpg"]

    return (
        <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-xl border bg-white shadow-sm ring-1 ring-slate-900/5 aspect-square sm:aspect-[4/3] lg:aspect-square">
                <Image
                    src={displayImages[selectedImage]}
                    alt={title}
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4 sm:grid-cols-5">
                {displayImages.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={cn(
                            "relative aspect-square overflow-hidden rounded-lg border bg-white ring-1 ring-slate-900/5 transition-all hover:ring-2 hover:ring-primary",
                            selectedImage === index ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"
                        )}
                    >
                        <Image
                            src={image}
                            alt={`${title} - Thumbnail ${index + 1}`}
                            fill
                            className="object-cover object-center"
                            sizes="100px"
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}
