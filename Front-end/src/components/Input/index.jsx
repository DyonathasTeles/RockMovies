import { Container } from "./style";

export function Input({icon: Icon, ...rest}) {
  return(
    <Container>
      {Icon && <Icon sizer={20}/>}
      <input {...rest}/>
    </Container>
  )
}