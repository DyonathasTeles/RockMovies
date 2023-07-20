import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export function Stars({dataValue}) {
  switch (dataValue) {
      case  1:
          
      return (
          <div>
          <AiFillStar/>
          <AiOutlineStar/>
          <AiOutlineStar/>
          <AiOutlineStar/>
          <AiOutlineStar/>
          </div>
      )

      case  2:
        return (
          <div>
          <AiFillStar/>
          <AiFillStar/>
          <AiOutlineStar/>
          <AiOutlineStar/>
          <AiOutlineStar/>
          </div>
        )
      
      case  3:

          return(
          <div>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiOutlineStar/>
          <AiOutlineStar/>
          </div>
        )

      case  4:

      return (
      <div>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiOutlineStar/>
      </div>
    )

      case 5:

    return (
      <div>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      </div>
)

      default:
          break;
  }     

}