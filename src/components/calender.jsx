
const Calender = ({calenderArray}) => {
  return (
    <div className="grid grid-cols-7 grid-rows-6 w-full h-full text-center">
        {calenderArray.map((calenderItem,index)=>(
            <div key={index} className="text-center">{calenderItem}</div>
        ))}
    </div>
  )
}

export default Calender