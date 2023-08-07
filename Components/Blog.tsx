import Image from 'next/image'
import {MdOutlineBookmarkAdd, MdRemoveCircleOutline, MdOutlineMoreHoriz} from "react-icons/md";
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
                                    className="rounded-full"
                                    src={authorImg}
                                    alt="author image"
                                />
                            </div>
                            <div className="ml-2 flex items-center gap-2">
                                <h6 className="text-sm text-slate-950">{authorName}</h6>
                                <span className="text-sm text-gray-500 tracking-tight">{date}</span>
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-slate-950">
                            {title}
                        </h4>
                        <p className="text-base leading-6 text-slate-900">
                            {content}
                        </p>
                        <div className="py-8 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {
                                    tags?.map((tag, index) => (
                                        <span key={tag} className="py-1 px-3 rounded-full bg-gray-300 text-gray-500 text-sm">{tag}</span>
                                    ))
                                }
                                <span className="text-gray-500 text-sm tracking-tight">4 min read</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MdOutlineBookmarkAdd className="text-gray-500 text-xl cursor-pointer"/>
                                <MdRemoveCircleOutline className="text-gray-500 text-xl cursor-pointer"/>
                                <MdOutlineMoreHoriz className="text-gray-500 text-xl cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                <div className="flex-shrink-0">
                    <Image
                        width={112}
                        height={112}
                        src={contentImg}
                        alt="blog image"
                    />
                </div>
            </div>
        </div>
    )
}