import React from "react";

import {Resume} from "~/app/(main)/Resume";
import {Container} from '~/components/ui/Container'

const description = '关于我和本站的一些情况'
const AboutMe_1 = '我叫王有成，一个喜欢折腾的人，网名叫 cczywyc，这个名字其实没有什么特殊的含义，大概就是初中的时候 QQ 网名随便输了一个叫 cczy 吧。中间也曾想过换一个正式的网名，一直没有想到我喜欢的，这个名字便一直沿用至今了。'
const AboutMe_2 = '本人 base 在杭州，从毕业到现在待过两家公司，目前在杭州一家规模不算太大的公司做后端开发，主要技术栈是 Java 和 Golang，会写一点 React，技术很菜，正在努力修炼内功。长期阅读《深入理解计算机操作系统》、《unix 网络编程》、《TCP/IP 详解》等经典书籍，如果你对于技术人员的基本功也有自己的见解，欢迎你与我交流。'
const AboutMe_3 = '本人长期专注分布式系统的实现与设计以及云原生和云计算领域相关技术，酷爱编码，喜欢折腾各种有趣的东西，渴望和一群志同道合的人交流进步。本人各种技术都会一点但都不精，准备深耕一个方向，未来想从事分布式系统研发或者云原生领域中间件研发相关的工作。'
const AboutMe_4 = '很喜欢电影《教父》里面的人生观：人的一生，第一步要努力实现自我价值，第二步要全力照顾好家人，第三步要尽可能帮助善良的人，第四步为族群发声，第五步为国家争荣誉。事实上，前两步成功，人生已算得上圆满，做到第三步堪称伟大，而随意颠倒次序的那些人，一般不值得信任。'
const AboutWebsite_1 = '本站完全是源于本人热爱建立的技术性博客站点，主要分享我在学习技术路上的总结和成果，当然，本站也会发表一些本人生活经历和成长过程的随记。所以基本上本站的内容方向会比较杂，但是主要还是以技术为主，也算是记录自己一路成长的过程。'
const AboutWebsite_2 = '我决定坚持写博客的另外一个原因是，我希望可以和其他人交流，我始终认为，做技术一个人埋头苦干是行不通的，必须要走出去和其他人交流、和高手大牛们交流。所以如果你喜欢本站的文章，或者对于本站输出的知识和观点有不同的看法和见解，也欢迎你与我联系交流。'
const AboutWebsite_3 = '另外，如无特别声明，你可以转载本站的文章，记得标明出处和作者就好，谢谢。'
export const metadata = {
    title: '关于',
    description,
    openGraph: {
        title: '关于',
        description,
    },
    twitter: {
        title: '关于',
        description,
        card: 'summary_large_image',
    }
}

export default function AboutPage() {
    return (
        <Container className="mt-16 sm:mt-24">
            <header className="max-w-5xl mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    关于我
                </h1>
            </header>
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 mx-auto mb-8">
                <p className="my-1 text-base text-zinc-200 dark:text-zinc-400">
                    {AboutMe_1}
                </p>
                <p className="my-5 text-base text-zinc-200 dark:text-zinc-400">
                    {AboutMe_2}
                </p>
                <p className="my-5 text-base text-zinc-200 dark:text-zinc-400">
                    {AboutMe_3}
                </p>
                <p className="my-5 text-base text-zinc-200 dark:text-zinc-400">
                    {AboutMe_4}
                </p>
            </div>

            <header className="max-w-5xl mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    关于本站
                </h1>
            </header>
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 mx-auto mb-8">
                <p className="my-1 text-base text-zinc-200 dark:text-zinc-400">
                    {AboutWebsite_1}
                </p>
                <p className="my-5 text-base text-zinc-200 dark:text-zinc-400">
                    {AboutWebsite_2}
                </p>
                <p className="my-5 text-base text-zinc-200 dark:text-zinc-400">
                    {AboutWebsite_3}
                </p>
            </div>

            <header className="max-w-5xl mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    一些经历
                </h1>
            </header>
            <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                <Resume/>
            </div>
        </Container>
    )
}
