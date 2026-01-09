import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface BlogPost {
    slug: string
    title: string
    excerpt: string
    coverImage: string
    category: string
    date: string
    readTime: string
    author: {
        name: string
        avatar: string
    }
}

interface BlogCardProps {
    post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
    return (
        <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
            <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-blue-700 hover:bg-white backdrop-blur-sm shadow-sm">
                        {post.category}
                    </Badge>
                </div>
            </div>

            <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime} min de leitura</span>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden bg-slate-100">
                            <Image
                                src={post.author.avatar}
                                alt={post.author.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="text-sm font-medium text-slate-700">{post.author.name}</span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
                        Ler mais <ArrowRight className="w-4 h-4" />
                    </span>
                </div>
            </div>
        </Link>
    )
}
