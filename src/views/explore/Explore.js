import Project from '../../comps/project/Project';
import Subhead from '../../comps/subhead/Subhead';
import './explore.css'

const Explore = () => {

    const pf = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <div className='explore'>
            <Subhead subheading={"Recent Works"} />

            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <Project proTitle={"Portfolio"} proImg={ pf + 'img/profile.PNG'} proDisc={''}  />
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <Project proTitle={"Todo app"} proImg={ pf + 'img/todo.png'} proDisc={''}  />
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