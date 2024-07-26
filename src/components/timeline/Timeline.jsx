import timeline from "../../data/timeline"
import TimelineItems from "./TimelineItems"

const Timeline = () => {
  return (
    <div className="flex flex-col items-start justify-center my-20">
      <div className="w-full md:w-full ">
        <h2 className="text-2xl font-semibold text-purple-200 mb-4">Experience</h2>
        {timeline.map(item => (
          <TimelineItems
            key={item.title}
            year={item.year}
            title={item.title}
            duration={item.duration}
            company={item.company}
            details={item.details}
          />
        ))}
      </div>
    </div>
  )
}

export default Timeline
