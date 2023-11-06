import Image from "next/image"
import food0 from "/public/food0.png"
import food1 from "/public/food1.png"
import food2 from "/public/food2.png"

export default function List(){
  let products = ['Tomatoes', 'Pasta', 'Coconut']
  let images = [food0, food1, food2]

  return (
    <div>
      <h2 className="title">상품목록</h2>
        {
          products.map((product, index) => {
            return (
              <div className="food" key={index}>
                <h4>{product} $40</h4>
                <Image src={images[index]} alt={`food${index}`} />
              </div>
            )
          })
        }
    </div>
  )
}