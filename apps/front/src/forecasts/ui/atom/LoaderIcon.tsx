import { Loader } from "lucide-react"
import { css } from "styled-system/css"
import { Icon } from "~/components/ui/icon"

export const LoaderIcon = () => {
  return (
    <Icon size='xl' color='blue' className={css({ animation: 'spin', animationDuration: '1.5s' })}>
      <Loader />
    </Icon>
  )
}