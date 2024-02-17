import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function T_tooltip({children,title}){
  return(
    <Tooltip delayDuration={0} disableHoverableContent={true}>
      <TooltipTrigger>
        {children}
      </TooltipTrigger>
      <TooltipContent>
        {title}
      </TooltipContent>
    </Tooltip>
  )
}

export default T_tooltip;