
import { Tag } from "../Tag";
import { Container } from "./style";
import { Stars } from "../Stars";
import { Description } from "../Description";



export function Note({data, ...rest}) {
    

    return (
        <Container {...rest}>

            <h1>{data.title}</h1>

            <div className="Stars">  
            <Stars dataValue={data.rating} />
            </div>

            <Description className="p" des={data.description} />

            {
                data.tags && 
                <footer>
                    {
                        data.tags.map((tag) => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }

        </Container>
    )
}