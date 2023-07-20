
export function Description({des, ...rest}) {
  
 function limitTex() {
    const limit = 273

    if (des.length > limit ) {
      return des.slice(0, limit) + "..." 
    } else {
      return des
    }
  }

  return (
    <div {...rest}>
    <p>{limitTex(des)}</p>
    </div>
  )
}