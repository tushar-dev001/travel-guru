

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="text-center my-20">
        <p className="text-lg text-blue-400">{subHeading}</p>
        <h2 className="text-2xl font-bold ">{heading}</h2>
    </div>
  )
}

export default SectionTitle