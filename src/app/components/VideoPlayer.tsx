"use client";

import { useEffect, useState } from "react";
import ReactPlyaer from "react-player";
interface VideoPlayerProps {
    videoUrl: string;
}

export const VideoPlayer = ({ videoUrl }: VideoPlayerProps) => {
    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);

    return (
        <div>
            {hasWindow && (
                <ReactPlyaer
                    url={videoUrl}
                    allow="autoplay"
                    muted={true}
                    playing={true}
                    loop={true}
                    width="100%"
                    height="100%"
                />
            )}
        </div>
    );
};
