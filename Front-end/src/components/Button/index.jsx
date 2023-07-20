import { Container } from "./style";


export function Button({title,icon: Icon, isBlack, ...rest}) {
  return (
    <Container type="button"  {...rest} isBlack={isBlack}>
       {Icon && <Icon size={20}/>}
       {title}
    </Container>
  )
}