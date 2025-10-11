import { Typography } from "@mui/material";
import Image from "next/image";

export default function CardBook({ title, author, coverImage }: { title: string; author: string; coverImage: string }) {
    return (
        <div className="card-book max-w-[200px]">
            <div className="cover-image-container relative w-full h-[300px] max-w-[200px] ">
                <Image src={coverImage} alt={`${title} cover`} className="cover-image rounded-[8px]" objectFit="cover" fill />
            </div>
            <div className="pt-2 w-[300px]">
                <Typography fontSize={16} className=" font-bold">{title}</Typography>
                <Typography className="author text-[12px]">{author}</Typography>
            </div>
        </div>
    );
}