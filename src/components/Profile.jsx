
export default function Profile() {

        return (
                <header>
                        <div className="profile">
                                <img src="/profile.jpg" width={"180px"} height={"180px"}/>
                        </div>
                        <section className="profile-details">
                                <h1>Audemars Odato</h1>
                                <p>Web Developer</p>
                                <p>Tandang Sora, Quezon City</p>
                                <p><a href="mailto:audemarsodato@gmail.com">audemarsodato@gmail.com</a></p>
                                <p>+63 9214693534</p>
                        </section>
                </header>
        )
}