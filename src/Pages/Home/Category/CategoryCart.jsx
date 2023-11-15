

const CategoryCart = ({img, name, title}) => {
  return (
    <div>
    <img src={img} alt="" className="mb-2 w-30 rounded-3xl"/>
        <h3>{name}</h3>
        <p>{title}</p>
    </div>
  )
}

export default CategoryCart