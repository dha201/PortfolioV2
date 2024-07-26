import PropTypes from 'prop-types'

TimelineItems.propTypes = {
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired
}

function TimelineItems({ year, title, duration, company, details }) {
    const paragraphs = details.split('\n\n\n\n').filter(para => para.trim() !== '');

    return (
      <ol className="flex flex-col md:flex-row relative border-l border-stone-700 dark:border-stone-400 ml-1">
            <li className="mb-10 ml-10 ">
                <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-black bg-stone-300 mr-3" />
                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py-1 font-semibold text-white bg-purple-900 rounded-md mb-2">
                        {year}
                    </span>
                </p>

                <div>
                    <h3 className="text-lg font-semibold text-stone-100">
                        {title} <span className="text-stone-100">@ {company}</span>
                    </h3>
                    <div className="my-1 text-sm font-normal leading-none text-stone-400">
                        {duration}
                    </div>
                </div>

                <div className="my-2 text-base font-normal text-stone-400">
                    {paragraphs.map((para, index) => (
                        <p key={index} className="mb-8 whitespace-pre-line">{para.trim()}</p>
                    ))}
                </div>

            </li>
        </ol>
    )
}

export default TimelineItems
