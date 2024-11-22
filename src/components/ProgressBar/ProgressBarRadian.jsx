import React from "react";

export default function ProgressBarRadian({
                                              progress = 0, width = 250, height = 250, withText = false
                                          } = {progress: 0}) {
    return <svg width={width} height={height} viewBox="0 0 250 250" className="circular-progress"
                style={{"--progress": progress}}>
        <circle className="bg"></circle>
        <circle className="fg"></circle>
        {withText && <text className="text">{`${progress}%`}</text>}
    </svg>
}