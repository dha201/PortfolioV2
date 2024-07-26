import portfolio from '../../data/portfolio'
import PortfolioItems from './PortfolioItems'

const Portfolio = () => {
  return (
    <div className="flex flex-col items-start justify-center mt-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-purple-200">Selected Projects</h2>
          {portfolio.map(project => (
              <PortfolioItems
                  key={project.title}
                  imgUrl={project.imgUrl}
                  title={project.title}
                  stack={project.stack}
                  link={project.link}
                  description={project.description}
              />
          ))}
        </div>
    </div>
  )
}

export default Portfolio
