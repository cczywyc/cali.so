import Image, { type StaticImageData } from "next/image"
import React from 'react'

import { BookIcon } from "~/assets";
import csAPPCover from '~/assets/book/cover-csapp.png'
import distributed from '~/assets/book/cover-distributed.png'
import goSync from '~/assets/book/cover-go-sync.png'
import unixNetwork1 from '~/assets/book/cover-unix-network_1.png'
import unixNetwork2 from '~/assets/book/cover-unix-network_2.png'
import zuoertingfeng from '~/assets/book/cover-zuoertingfeng.png'

type Book = {
    title: string
    author: string
    cover: StaticImageData
}

const book: Book[] = [
    {
        title: '深入理解计算机系统',
        author: 'Randal E.Bryant/David O\'Hallaron',
        cover: csAPPCover
    },
    {
        title: 'UNIX 网络编程 卷1: 套接字联网 API',
        author: 'W.Richard Stevens/bill Fenner/Andrew M.Rudoff',
        cover: unixNetwork1
    },
    {
        title: 'UNIX 网络编程 卷2: 进程间通信',
        author: 'W.Richard Stevens',
        cover: unixNetwork2
    },
    {
        title: '深入理解分布式系统',
        author: '唐伟志',
        cover: distributed
    },
    {
        title: '深入理解 Go 并发编程',
        author: '晁岳攀（@鸟窝）',
        cover: goSync
    },
    {
        title: '左耳听风',
        author: '陈皓（@左耳朵耗子）',
        cover: zuoertingfeng
    }
]

export function Book() {
    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 max-w-xl mx-auto">
            <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <BookIcon className="h-5 w-5 flex-none"/>
                <span className="ml-2">2024 年书单</span>
            </h2>
            <ol className="mt-6 space-y-4 flex flex-wrap">
                {book.map((book, bookIndex) => (
                    <li key={bookIndex} className="flex-auto flex-shrink-0">
                        <div className="relative mt-1 h-72 w-56 flex flex-col items-center justify-center rounded-xl shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <Image src={book.cover}
                                   alt={book.title}
                                   className="h-44 w-32"
                                   unoptimized
                            />
                            <div className="mt-2 text-center">
                                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100"><span className="text-xs">{book.title}</span></p>
                                <p className="text-xs text-zinc-600 dark:text-zinc-400"><span className="text-xs">{book.author}</span></p>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    )
}