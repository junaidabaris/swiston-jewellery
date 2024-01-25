import ReactPlayer from "react-player"

function VediosPlays({ url }) {
    return <div class="col-4">
        <ReactPlayer url={url} width={'90%'} style={{margin:"10px"}} />
    </div>
}
export default VediosPlays