import ServiceCard from "../components/ServiceCard";
import serviceData from "../../ServicesData"

export default function Services() {

        return (
                <section className="services-section">
                        <h2 className="services-header">Services</h2>
                        <p className="services-description">Simple, fast websites for small businesses.</p>
                        <div className="services">
                                {serviceData.map(service => {
                                        return <ServiceCard key={service.title} icon={service.icon} service={service.title} description={service.description}/>
                                })}
                        </div>
                </section>
        )
}