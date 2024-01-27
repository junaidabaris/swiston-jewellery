import VediosPlays from "./VediosPlays"

export const Vediogallery = () => {
    return <div className="vediogallery">
        <div class="container">
            <div class="row">
                <VediosPlays url='https://www.youtube.com/watch?v=dGPGAwir9vo' />
                <VediosPlays url='https://www.youtube.com/watch?v=3eVKNPnS6nQ' />
                <VediosPlays url='https://www.youtube.com/watch?v=Jcz_bsW9ti0' />
                <VediosPlays url='https://www.youtube.com/watch?v=3eVKNPnS6nQ' />
                <VediosPlays url='https://www.youtube.com/watch?v=Jcz_bsW9ti0' />
                <VediosPlays url='https://www.youtube.com/watch?v=dGPGAwir9vo' />

            </div>
        </div>
    </div>
}