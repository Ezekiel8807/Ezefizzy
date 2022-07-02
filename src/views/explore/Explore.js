import Project from '../../comps/project/Project';
import Subhead from '../../comps/subhead/Subhead';
import './explore.css'

const Explore = () => {

    return (
        <div className='explore'>
            <Subhead subheading={"Recent Works"} />

            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <Project proTitle={"Portfolio"} proImg={'asset/img/profile.PNG'} proDisc={''}  />
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <Project proTitle={"Todo app"} proImg={'asset/img/todo.PNG'} proDisc={''}  />
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                    {/* <Project proTitle={} proImg={} proDisc={} proGit={} proWeb={} /> */}
                </div>

                <div className='col-md-6'>
                    {/* <Project proTitle={} proImg={} proDisc={} proGit={} proWeb={} /> */}
                </div>

                <div className='col-md-6'>
                    {/* <Project proTitle={} proImg={} proDisc={} proGit={} proWeb={} /> */}
                </div>
            </div>
        </div>
    )
}

export default Explore;