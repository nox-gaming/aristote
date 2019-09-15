const posterUrl = "https://d3hmvhl7ru3t12.cloudfront.net/img/pages/home/header-video-poster-4d6f8aee9fd809779b1c36242f81c4c3d5afe3ef77a3d6bc3cd6248aab1980f89e80b41c14c56e5d5e4d06098f874b74d88a1932adf6e6f84da56dbcd8c10e72.jpg";
const webmUrl = "https://d3hmvhl7ru3t12.cloudfront.net/video/pages/home/header-20316a38f7cfb65480e84592386095445e3ed800accf65f4d638a11b89ce9ce7d95c0062f9ab760b36963383893bed79f199013acc3b549c8bf320eb696be33c.webm";
const mp4Url = "https://d3hmvhl7ru3t12.cloudfront.net/video/pages/home/header-82b9abce067992beedde6d103b6241d616a7ee97cc0d4f3126277098c2e4b09004325f25c6a245656096bd333c880b0032e2cbdbed9d2514220e20718482e95b.mp4";

const styles = {
    margin: "0px"
}

const VideoBackground = props => (
    <figure style={styles}>
        <video className="video-container__video" autoPlay loop muted poster={posterUrl} data-js="header-video">
            <source src={webmUrl} type="video/webm" />
            <source src={mp4Url} type="video/mp4" />
        </video>
    </figure>
)

export default VideoBackground;