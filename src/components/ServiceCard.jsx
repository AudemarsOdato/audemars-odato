
export default function ServiceCard(props) {

        return (
                <div className="service-card">
                        <div className="text-container">
                                <h3>{props.service}</h3>
                                <p>{props.description}</p>
                        </div>
                        <div className="icon-container">
                                <div className="icon-wrapper">
                                        <span class="material-symbols-outlined">{props.icon}</span>
                                </div>
                        </div>
                </div>
        )
}