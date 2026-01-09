"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    MapPin,
    Phone,
    Clock,
    Star,
    Navigation,
    Heart,
    Share2,
    ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface StoreCardProps {
    storeName?: string;
    storeImage?: string;
    address?: string;
    phone?: string;
    hours?: string;
    rating?: number;
    reviewCount?: number;
    distance?: string;
    isOpen?: boolean;
    isFavorite?: boolean;
    tags?: string[];
    managerName?: string;
}

export function StoreCard({
    storeName = "Loja Centro",
    storeImage = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    address = "Rua das Flores, 123 - Centro",
    phone = "(11) 3456-7890",
    hours = "Seg-Sex: 9h-18h | Sáb: 9h-14h",
    rating = 4.8,
    reviewCount = 245,
    distance = "2.5 km",
    isOpen = true,
    isFavorite = false,
    tags = ["Entrega Rápida", "Wi-Fi Grátis"],
    managerName = "João Silva",
}: StoreCardProps) {
    const [favorite, setFavorite] = React.useState(isFavorite);
    const [imageLoaded, setImageLoaded] = React.useState(false);
    const cardRef = React.useRef<HTMLDivElement>(null);

    // Hover effect state
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full max-w-sm mx-auto"
        >
            <Card className="overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col rounded-[1.5rem]">
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden bg-slate-100 flex-shrink-0">
                    <motion.img
                        src={storeImage}
                        alt={storeName}
                        className={cn(
                            "w-full h-full object-cover transition-all duration-700",
                            isHovered ? "scale-110" : "scale-100",
                            imageLoaded ? "opacity-100" : "opacity-0"
                        )}
                        onLoad={() => setImageLoaded(true)}
                    />
                    {!imageLoaded && (
                        <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                    )}

                    {/* Overlay Gradient - Darker at bottom for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

                    {/* Top Badges - Left */}
                    <div className="absolute top-4 left-4 flex gap-2">
                        <Badge
                            className={cn(
                                "h-7 px-3 text-sm font-bold border-0 rounded-lg",
                                isOpen
                                    ? "bg-[#00c950] text-white hover:bg-[#00b548]"
                                    : "bg-red-500 text-white hover:bg-red-600"
                            )}
                        >
                            {isOpen ? "Aberta" : "Fechada"}
                        </Badge>
                        {distance && (
                            <Badge className="h-7 px-3 text-sm font-bold bg-[#3b82f6] text-white hover:bg-[#2563eb] border-0 rounded-lg">
                                {distance}
                            </Badge>
                        )}
                    </div>

                    {/* Action Buttons - Right */}
                    <div className="absolute top-4 right-4 flex gap-2">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setFavorite(!favorite);
                            }}
                            className="h-10 w-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white backdrop-blur-sm shadow-lg transition-all active:scale-95"
                        >
                            <Heart
                                className={cn(
                                    "h-5 w-5 transition-colors",
                                    favorite ? "fill-red-500 text-red-500" : "text-slate-700"
                                )}
                            />
                        </button>
                        <button className="h-10 w-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white backdrop-blur-sm shadow-lg transition-all active:scale-95">
                            <Share2 className="h-5 w-5 text-slate-700" />
                        </button>
                    </div>

                    {/* Store Name Overlay - Bottom Left */}
                    <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-black text-white drop-shadow-md leading-tight">
                            {storeName}
                        </h3>
                    </div>
                </div>

                {/* Content Section */}
                <CardContent className="p-6 space-y-6 flex-grow flex flex-col bg-white">
                    {/* Rating & Reviews */}
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5 bg-blue-50 px-2.5 py-1 rounded-lg">
                            <Star className="h-4 w-4 fill-blue-600 text-blue-600" />
                            <span className="font-bold text-blue-700 text-lg">
                                {rating}
                            </span>
                        </div>
                        <span className="text-slate-500 text-sm">
                            ({reviewCount} avaliações)
                        </span>
                    </div>

                    {/* Tags */}
                    {tags && tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <div
                                    key={index}
                                    className="px-3 py-1 rounded-full border border-blue-200 text-blue-600 text-xs font-semibold bg-blue-50/50"
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Info Items */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                                <MapPin className="h-5 w-5" />
                            </div>
                            <p className="text-slate-700 font-medium leading-tight pt-2">
                                {address}
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                                <Phone className="h-5 w-5" />
                            </div>
                            <p className="text-slate-700 font-medium">{phone}</p>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                                <Clock className="h-5 w-5" />
                            </div>
                            <p className="text-slate-700 font-medium pt-2">{hours}</p>
                        </div>
                    </div>

                    <div className="h-px bg-slate-100 my-4" />

                    {/* Manager Info */}
                    {managerName && (
                        <div>
                            <p className="text-sm text-slate-500">
                                Gerente: <span className="font-bold text-slate-900">{managerName}</span>
                            </p>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2 mt-auto">
                        <Button
                            className="flex-1 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold h-11 text-base rounded-xl shadow-blue-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                        >
                            <Navigation className="h-4 w-4 mr-2 fill-white text-white" />
                            Rotas
                        </Button>
                        <Button
                            variant="outline"
                            className="flex-1 border-slate-200 text-slate-700 hover:bg-slate-50 font-bold h-11 text-base rounded-xl hover:-translate-y-0.5 transition-all"
                        >
                            Ver Detalhes
                            <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
