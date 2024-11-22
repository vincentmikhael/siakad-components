import React from "react";

export default function ProgressBarRadianHalf({
                                                  progress = 0, withText = false,
                                                  width = 250, height = undefined,
                                              } = {progress: 0}) {
    const adjustedProgress = Math.min(Math.max(progress, 0), 100); // Clamp progress between 0 and 100
    const circumference = 314.159; // Circumference of the half-circle (pi * radius for 100% progress)

    const dashOffset = (1 - adjustedProgress / 100) * circumference;
    if (!height)
        height = width / 2 + 25
    if (!width)
        width = (height - 25) * 2
    return (
        <svg
            width={width}
            height={height} // Half of the full circle height
            viewBox="0 0 250 125"
            className="gauge-progress"
            style={{"--progress": adjustedProgress}}
        >
            <path className="bg"/>
            <path className="fg" style={{
                strokeDasharray: `${circumference}`,
                strokeDashoffset: dashOffset,
            }}/>
            {withText && <text className="text">{`${adjustedProgress}%`}</text>}
        </svg>
    );
}