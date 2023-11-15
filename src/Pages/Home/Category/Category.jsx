import SectionTitle from "../../../components/sectionTitle/SectionTitle"
import CategoryCart from "./CategoryCart"
import city from '../../../assets/tour/city.png'
import boad from '../../../assets/tour/boad.jpeg'
import adventure from '../../../assets/tour/adventure.jpeg'
import food from '../../../assets/tour/food.png'

const Category = () => {
  return (
    <div>
        <SectionTitle heading={"Pick A Tour Type"} subHeading={"Browse By Category"}></SectionTitle>
        <div className="flex gap-5 text-center justify-evenly">
            <CategoryCart img={city} name={"City Tours"} title={"10 Tours+"} ></CategoryCart>
            <CategoryCart img={boad} name={"Boat Tours"} title={"10 Tours+"} ></CategoryCart>
            <CategoryCart img={food} name={"Beach"} title={"10 Tours+"} ></CategoryCart>
            <CategoryCart img={adventure} name={"Adventure"} title={"10 Tours+"} ></CategoryCart>
            <CategoryCart img={food} name={"Food"} title={"10 Tours+"} ></CategoryCart>
        </div>
    </div>
  )
}

export default Category