export default function ProgressBar({
                                        progress = 0, width = 250, height = 30,
                                        withText = false, fullWidth = false, withBackground = true,
                                    }) {
    const progressWidth = fullWidth ? `${progress}%` : `${(progress / 100) * width}px`;
    const evenRounded = height/2;
    return (
        <svg
            width={fullWidth ? '100%' : width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            className="horizontal-progress"
            style={{"--progress": progress}}
        >
            {/* Background bar */}
            {withBackground && <rect
                className="bg"
                x="0"
                y="0"
                width={fullWidth ? "100%" : width}
                height={height}
                rx={evenRounded}
                ry={evenRounded}
                fill="#ddd"
            />}
            {/* Foreground (progress) bar */}
            <rect
                className="fg"
                x="0"
                y="0"
                width={progressWidth}
                height={height}
                rx={evenRounded}
                ry={evenRounded}
                fill="#068CCD"
            />
            {withText && (
                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize="16"
                    fill="#000"
                >
                    {`${progress}%`}
                </text>
            )}
        </svg>
    );
}