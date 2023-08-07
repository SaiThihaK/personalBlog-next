import React, {JSX} from "react";

type TooltipProps = {
    value: string;
    children: JSX.Element;
}
export default function Tooltip({value, children}: TooltipProps) {
    const [shouldShow, setShouldShow] = React.useState(false);
    const showTooltip = () => setShouldShow(true);
    const hideTooltip = () => setShouldShow(false);
    return (
        <div className="relative" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
            {children}
            {
                shouldShow && (
                    <div className="absolute min-w-max text-xs left-1/2 -translate-x-1/2 -top-12 bg-slate-950 rounded-sm flex py-2 px-1.5">
                        <span className="text-center text-slate-50">
                            {value}
                        </span>
                        <div className="w-4 h-4 bg-slate-950 left-1/2 -z-10 rotate-45 -translate-x-1/2 absolute -bottom-1"></div>
                    </div>
                )
            }
        </div>
    )
}