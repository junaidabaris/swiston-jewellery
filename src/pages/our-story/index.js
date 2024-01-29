import OurTeam from "../../components/OurTeam/OurTeam"
import { BingingStory } from "../../components/our-story/BingingStory"
import { BreansStory } from "../../components/our-story/BreansStory"
import { MiddleStory } from "../../components/our-story/MiddleStory"
import { MisionPromis } from "../../components/our-story/MisionPromis"
import { StoryBanner } from "../../components/our-story/StoryBanner"
import { WhoStory } from "../../components/our-story/WhoStory"
import "./OurStory.css"
function OurStory() {
    return <main className="story_main">
        <div className="">
            <div>
                <div className="top-story">
                    <h1 class="css-ubz8gc">The Swiston Jewellery Story</h1>
                    <StoryBanner />
                    <WhoStory />
                    <BreansStory />
                    <MisionPromis />
                    <MiddleStory />
                    <BingingStory />
                    <OurTeam/>
                </div>
            </div>
        </div>
    </main>
}
export default OurStory