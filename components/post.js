import Image from "next/image";

export default function Posts({ posts }) {

    return (

        <div className="bg-background py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">From the blog</h2>
                    <p className="mt-2 text-lg leading-8 text-foreground/60">
                        Learn how to grow your business with our expert advice.
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between group overflow-hidden">
                            <div className="group relative px-4">
                                <a href={post.href}>
                                    <Image
                                        alt=""
                                        className="w-full mb-4 transition rounded-md border-2"
                                        src={post.cover}
                                        width={200}
                                        height={100}
                                    />
                                </a>
                                <span className="flex items-center gap-x-4 text-xs py-4">
                                    <time dateTime={post.datetime} className="text-foreground/60">
                                        {post.date}
                                    </time>
                                    <a
                                        href={post.category.href}
                                        className="relative z-10 rounded-full bg-primary/60 px-3 py-1.5 font-medium text-primary-foreground hover:bg-primary"
                                    >
                                        {post.category.title}
                                    </a>
                                </span>
                                <a href={post.href}>
                                    <span className="absolute inset-0" />
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-foreground/60 group-hover:text-gray-600">
                                        {post.title}
                                    </h3>
                                </a>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-foreground/60">{post.description}</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4 p-4">
                                <Image alt="" src={post.author.imageUrl} width={40} height={40} className="h-10 w-10 rounded-full bg-background" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-foreground/60">
                                        <a href={post.author.href}>
                                            <span className="absolute inset-0" />
                                            {post.author.name}
                                        </a>
                                    </p>
                                    <p className="text-foreground/40">{post.author.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}