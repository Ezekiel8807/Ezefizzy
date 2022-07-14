import Subhead from "../../comps/subhead/Subhead"
import Article from "../../comps/article/Article"
import Handles from "../../comps/handles/Handles"
import "./articles.css"

const Articles = () => {
    return(
        <div className="articles">
           <Subhead subheading={'Articles'} />

           <div className='row'>
                <div className='col-md-4 col-sm-4'>
                    <Article artHead={"Introduction to Git and Github"} artImg={'asset/img/wywhAyuob.webp'} artDisc={'This article is an introductory guide to git and github'} artWeb={'https://ezefizzy.hashnode.dev/introduction-to-git-and-github'} />
                </div>

                <div className='col-lg-4 col-md-6 col-sm-6'>
                    <Article artHead={"Creating a cool profile card"} artImg={'asset/img/offupyz2omoxqog7zxj8.webp'} artDisc={'This article will be teaching you on how to create a nice looking profile card using html and css'} artWeb={'https://dev.to/ezekiel8807/creating-a-cool-profile-card-52c6'} />
                </div>

                <div className='col-lg-4 col-md-6 col-sm-6'>
                    <Article artHead={"How to push your project to github"} artImg={'asset/img/wywhAyuob.webp'} artDisc={'This article is a guide on how to push your project to github'} artWeb={'https://ezefizzy.hashnode.dev/how-to-push-your-project-to-github'} />
                </div> 
            </div>

            <Handles />
        </div>
    )
}

export default Articles;