import Subhead from "../../comps/subhead/Subhead";
import Article from "../../comps/article/Article";
import "./articles.css"

const Articles = () => {
    return(
        <div className="articles">
           <Subhead subheading={'Articles'} />

           <div className='row'>
                <div className='col-lg-4 col-md-6 col-sm-6'>
                    <Article artHead={"Portfolio"} artImg={'asset/img/profile.PNG'} artDisc={'Portfolio website that tell more about an individual.'} artWeb={'https://ezefizzy.herokuapp.com/'} />
                </div>

                {/* <div className='col-lg-4 col-md-6 col-sm-6'>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-6'>
                </div> */}
            </div>
        </div>
    )
}

export default Articles;