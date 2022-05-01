const FeatureCard = (props) => {
    return (
        <div className={"features__card features__card--"+props.number}>
            <i className={"fas "+props.icon}></i>
            <h3>{props.title}</h3>
            <p className="paragraph">{props.paragraph}</p>
        </div>
    );
}

export default FeatureCard;