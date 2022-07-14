import Handles from '../../comps/handles/Handles';
import Project from '../../comps/project/Project';
import Subhead from '../../comps/subhead/Subhead';
import './explore.css'

const Explore = () => {

    return (
        <div className='explore'>
            <Subhead subheading={"Recent Works"} />

            <div className='row'>
                <div className='col-lg-4 col-md-6 col-sm-6'>
                    <Project proTitle={"Portfolio"} proImg={'asset/img/profile.PNG'} proDisc={'Portfolio website that tell more about an individual.'}  proGit={'https://github.com/Ezekiel8807/Ezefizzy'} proWeb={'https://ezefizzy.herokuapp.com/'} />
                </div>

                <div className='col-lg-4 col-md-6 col-sm-6'>
                    <Project proTitle={"Todo app"} proImg={'asset/img/todo.PNG'} proDisc={'Todo website helps to keep track or record of individual activity.'}  proGit={'https://github.com/Ezekiel8807/todo'} proWeb={'https://2does.netlify.app/'}   />
                </div>

                <div className='col-lg-4 col-md-6 col-sm-6'>
                    <Project proTitle={"Translator"} proImg={'asset/img/translator.PNG'} proDisc={'Translator website helps to translate words from one language to another.'} proGit={'https://github.com/Ezekiel8807/translate'} proWeb={'https://translang.netlify.app/'} />
                </div>

                <div className='col-md-6'>
                    {/* <Project proTitle={} proImg={} proDisc={} proGit={} proWeb={} /> */}
                </div>

                <div className='col-md-6'>
                    {/* <Project proTitle={} proImg={} proDisc={} proGit={} proWeb={} /> */}
                </div>
            </div>

            <Handles />
        </div>
    )
}

export default Explore;