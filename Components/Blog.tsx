import Image from 'next/image'
import {MdOutlineBookmarkAdd, MdRemoveCircleOutline, MdOutlineMoreHoriz} from "react-icons/md";
import Tooltip from "@/Components/Tooltip";
type BlogCardProps = {
    authorImg: string,
    authorName: string,
    contentImg: string,
    date: string,
    title: string,
    content: string,
    tags: string[],
    onClick: () => void
}
export default function BlogCard({authorImg, authorName, date, title, content, contentImg, tags, onClick}: BlogCardProps) {
    return (
        <div className="bg-white max-w-[728px] border-b-[1px] border-b-gray-200" onClick={onClick}>
            <div className="flex items-center gap-12 justify-between">
                <div className="flex-1 flex flex-col flex-shrink gap-2">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Image
                                    width={24}
                                    height={24}
                                    className="rounded-full object-cover"
                                    src={authorImg}
                                    alt="author image"
                                />
                            </div>
                            <div className="ml-2 flex items-center">
                                <h6 className="text-sm text-slate-950">{authorName}</h6>
                                <span className="mx-2 text-sm font-bold">·</span>
                                <span className="text-sm text-gray-500 tracking-tight">{date}</span>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <h4 className="text-lg md:text-xl flex-1 font-bold text-slate-950">
                                {title}
                            </h4>
                            <div className="flex-shrink-0 w-[80px] h-[56px] relative md:hidden">
                                <Image
                                    fill
                                    className="object-cover"
                                    src={contentImg}
                                    alt="blog image"
                                />
                            </div>
                        </div>
                        <p className="hidden md:block text-base leading-6 text-slate-900">
                            {content}
                        </p>
                        <div className="py-3 md:py-8 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {
                                    tags?.map((tag, index) => (
                                        <span key={tag} className="py-1 px-3 rounded-full bg-gray-300 text-gray-500 text-sm">{tag}</span>
                                    ))
                                }
                                <span className="text-gray-500 text-sm tracking-tight">4 min read</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Tooltip value="Bookmark">
                                    <MdOutlineBookmarkAdd className="text-gray-500 text-2xl cursor-pointer"/>
                                </Tooltip>
                                <Tooltip value="Show less like this">
                                    <MdRemoveCircleOutline className="text-gray-500 text-2xl cursor-pointer"/>
                                </Tooltip>
                                <Tooltip value="More">
                                    <MdOutlineMoreHoriz className="text-gray-500 text-2xl cursor-pointer"/>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                <div className="flex-shrink-0 w-[112px] h-[112px] relative hidden md:block">
                    <Image
                        fill
                        className="object-cover"
                        src={contentImg}
                        alt="blog image"
                    />
                </div>
            </div>
        </div>
    )
}